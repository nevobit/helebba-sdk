import { PrivateRoutes } from '@/constant-definitions';
import ScreenHeader from '@/containers/ScreenHeader';
import styles from './CreateInvoice.module.css';
import { useNavigate } from 'react-router-dom';
import Input from '@/components/Shared/Input';
import Button from '@/components/Shared/Button';
import Field from '@/components/Shared/Field';
import {
  useContacts,
  useCreateDocument,
  useDocument,
  useEditDocument,
  useHandleDocument,
  useProducts,
} from '@/hooks';
import { MouseEvent, useEffect, useState } from 'react';
import { DivisaFormater } from '@/utilities/divisa-formater';
import { SelectWithSearch } from '@/components';
import { useAccountStore } from '@/state-manager';
import {
  Contact,
  Document,
  DocumentType,
  Product,
  ProductDocument,
} from '@helebba/entities';
import { Search, X } from 'react-feather';
import { Modal } from '@/containers';
import PreviewDocument from '@/containers/PreviewDocument';
import { useQueryClient } from '@tanstack/react-query';

const CreateInvoice = () => {
  const account = useAccountStore((state) => state.account);
  const { contacts } = useContacts();
  const queryClient = useQueryClient();
  const {
    elements,
    addElement,
    editElement,
    removeElement,
    subtotal,
    taxesTotal,
    total,
    initialElements,
    editComplexElement
  } = useHandleDocument();

  const { isEditing, editDocument } = useEditDocument();


  const { document, isLoading: isLoadingDocumentToEdit } = useDocument();

  const { id: editId, ...editValues } = document || { id: '' };
  const isEditSession = Boolean(editId.length > 1 ?? false);

  const [invoice, setInvoice] = useState<Partial<Document>>(
    isEditSession
      ? editValues
      : {
          account: '',
          contact: '',
          contactName: '',
          desc: '',
          date: new Date().toDateString(),
          dueDate: new Date().toDateString(),
          notes: '',
          products: [
            {
              id: '',
              concept: '',
              description: '',
              amount: 0,
              price: 0,
              tax: 0,
              costPrice: 0,
              weight: 0,
              sku: '',
              discount: 0,
              total: 0,
            },
          ],
          tax: 0,
          subtotal: 0,
          discount: 0,
          total: 0,
          language: '',
          statusDocument: 0,
          warehouseId: '',
          paymentMethod: isEditSession ? document.paymentMethod : '',
          designId: '',
          docType: DocumentType.INVOICE,
          customFields: [],
          docNumber: '',
          currency: '',
          currencyChange: 0,
          paymentsTotal: 0,
          paymentsPending: 0,
          paymentsRefunds: 0,
          salesChannelId: '',
        },
  );

  const { isCreating, createDocument } = useCreateDocument(invoice.docType);
  const isWorking = isCreating || isEditing;


  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setInvoice((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeContact = (uuid: string, contactName: string) => {
    setInvoice((prev) => ({
      ...prev,
      contact: uuid,
      contactName: contactName,
    }));
  };


  const [searchResults, setSearchResults] = useState<Product[]>([]); 

  const { products } = useProducts(); 

  useEffect(() => {
    const handleConceptChange = () => {
      elements.forEach((element) => {
        if (element.concept.includes('@')) {
          const searchTerm = element.concept.replace('@', '').trim().toLowerCase();
          const filteredProducts = products.items.filter((product: Product) =>
            product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          );
          setSearchResults(filteredProducts);
        }
      });
    };

      handleConceptChange();

  }, [elements, products]);
  
  const handleChangeConcept = (productId: string, concept: string) => {
    editElement(productId, concept, 'concept');
  };
  const navigate = useNavigate();

  const onSubmit = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    if (isEditSession) {
      editDocument({
        ...invoice,
        id: document.id,
        docType: DocumentType.INVOICE,
        account: account.id,
        products: elements,
        total,
        subtotal
      }, {
        onSuccess(data){
          queryClient.invalidateQueries({
            queryKey: ['documents', invoice.docType],
          });
          queryClient.invalidateQueries({
            queryKey: ['document', data.id, invoice.docType, account.id],
          });
          navigate("/sales/revenue")
        }
      });
    } else {
      createDocument({
        account: account.id!,
        document: {
          ...invoice,
          docType: DocumentType.INVOICE,
          account: account.id,
          products: elements,
          total,
          subtotal
        },
      }, {
        onSuccess(){
          navigate("/sales/revenue")
        }
      });
    }
  };

  useEffect(() => {
    if (document) {
      setInvoice((previnvoice) => ({
        ...previnvoice,
        payment: document.paymentMethod,
      }));
    }
  }, [isLoadingDocumentToEdit, document]);

  useEffect(() => {
    if (isEditSession) {
      const newElements = document.products.map((product: ProductDocument) => ({
        ...product,
      }));
      initialElements(newElements);
    }
  }, [isEditSession]);

  return (
    <Modal>
      <ScreenHeader
        setOpen={() => navigate(PrivateRoutes.NEW_INVOICE, { replace: true })}
        title={isEditSession ? 'Editar Factura' : 'Nueva Factura'}>
        {/* <Button variant="third">Opciones</Button> */}
        <PreviewDocument specs={elements} />
  
        <Button onClick={onSubmit} loading={isWorking} variant="primary">
          Guardar
        </Button>
      </ScreenHeader>

      <div className={styles.client_info}>
        <Field label="Cliente">
          <SelectWithSearch
            value={invoice.contact}
            options={contacts?.items}
            onChange={(id: string) => {
              const selectedContact = contacts?.items.find(
                (contact: Contact) => contact.id === id,
              );
              if (selectedContact) {
                handleChangeContact(id, selectedContact.name);
              }
            }}
          />
        </Field>
        <Field label="Número de factura">
          <Input
            name="docNumber"
            value={invoice.docNumber}
            onChange={handleChange}
          />
        </Field>
        <Field label="Fecha">
          <Input
            name="date"
            value={invoice.date}
            type="date"
            onChange={handleChange}
          />
        </Field>
        <Field label="Vencimiento">
          <Input
            name="dueDate"
            value={invoice.dueDate}
            type="date"
            onChange={handleChange}
          />
        </Field>
        {invoice.contact != '' ? (
          <Field label="Nombre cliente">
            <Input
              name="contactName"
              value={invoice.contactName}
              onChange={handleChange}
              disabled
            />
          </Field>
        ) : (
          <Field label="Nombre cliente">
            <Input
              name="contactName"
              value={invoice.contactName}
              onChange={handleChange}
            />
          </Field>
        )}
      </div>

      <div className={styles.items_table}>
        <div className={styles.head}>
          <div></div>
          <h4>Concepto</h4>
          <h4>Descripcion</h4>
          <h4 className={styles.head_amount}>Cantidad</h4>
          <h4>Precio</h4>
          <h4>Impuesto(%)</h4>
          <h4>Total</h4>
          <div></div>
        </div>
        {elements.map((element) => (
          <div className={styles.body} key={element.id}>
            <div className={styles.body_option}>
              <Search size={16} color="var(--main-color)" />
            </div>
            <div className={styles.list} >
              {' '}
              <Input
                value={element.concept}
                onChange={({ target }) =>
                handleChangeConcept(element.id, target.value)
              }
                placeholder="Escribe el concepto o usa @ para buscar"
              />
               {element.concept.includes('@') && (
       < div className={styles.products_list} >
                {searchResults?.map((product) => (
                  <div onClick={() => editComplexElement(element.id, product.name, product.price, product.id)} className={styles.items_list} >{product.name}</div>
                ))}
              </div>
      )}
              
            </div>
            <div>
              {' '}
              <Input
                value={element.description}
                onChange={({ target }) =>
                  editElement(element.id, target.value, 'description')
                }
                placeholder="Desc"
              />{' '}
            </div>
            <div className={styles.body_amount}>
              {' '}
              <Input
                value={element.amount}
                onChange={({ target }) =>
                  editElement(element.id, target.value, 'amount')
                }
              />{' '}
            </div>
            <div>
              {' '}
              <Input
                value={element.price}
                onChange={({ target }) =>
                  editElement(element.id, target.value, 'price')
                }
              />{' '}
            </div>
            <div>
              {' '}
              <Input
                onChange={({ target }) =>
                  editElement(element.id, target.value, 'tax')
                }
              />{' '}
            </div>
            <div                 className={styles.total} >
              {' '}
              <Input
                readOnly
                value={DivisaFormater({
                  value:
                    Number(element.price * element.amount) +
                    Number(
                      element.price * element.amount * Number((element.tax / 100)),
                    ),
                })}
              />{' '}
            </div>
            <div
              className={styles.body_option}
              onClick={() => removeElement(element.id)}>
              <X size={16} color="var(--main-color)" />
            </div>
          </div>
        ))}

        <div className={styles.table_footer}>
          <Button onClick={addElement} variant="third">
            Añadir línea
          </Button>
        </div>
      </div>

      <div className={styles.last_card}>
        <div className={styles.invoice_payment}>
          <Field label="Informacion de pago">
            <select
              name="paymentMethod"
              value={invoice.paymentMethod}
              id=""
              onChange={handleChange}>
              <option value="">No seleccionada</option>
              <option value="bank">Transferencia Bancaria</option>
              <option value="cash">Efectivo</option>
            </select>
          </Field>
        </div>
      </div>

      <div className={styles.footer}>
        <div>
          <h3>{DivisaFormater({ value: subtotal })}</h3>
          <p>Subtotal</p>
        </div>

        <div className={styles.tax_sell}>
          <h3>{DivisaFormater({ value: taxesTotal })}</h3>
          <p>Impuesto de venta</p>
        </div>
        <div>
          <h3>{DivisaFormater({ value: total })}</h3>
          <p>Total</p>
        </div>
      </div>

      <div></div>

    
    </Modal>
  );
};

export default CreateInvoice;
