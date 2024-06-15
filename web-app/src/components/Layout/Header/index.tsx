import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import items from './items';
import { useState } from 'react';
import {
  Plus,
  Search,
  Bell,
  HelpCircle,
  LogOut,
  User,
  Gift,
  CreditCard,
  Settings,
  Package,
  Users,
  Home,
} from 'react-feather';
import HeaderLink from '@/components/Shared/HeaderLink';
import { PrivateRoutes } from '@/constant-definitions';
import { googleLogout } from '@react-oauth/google';
import { useAccount, useUser } from '@/hooks';
import { Modal } from '@/containers';
import { Menus } from '@/components';
import ProductFrom from '@/screens/Private/Inventory/Products/CreateProduct/ProductFrom';
import ContactFrom from '@/screens/Private/Contacts/CreateContact/ContactFrom';
import WarehouseForm from '@/screens/Private/Inventory/Warehouses/Create/WarehouseForm';

interface SubPath {
  name: string;
  path: string;
}
interface Path extends SubPath {
  subPaths?: SubPath[];
}
const Header = () => {
  const { user } = useUser();
  const { account } = useAccount();
  const [active, setActive] = useState('');

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const logoutHandler = () => {
    googleLogout();
    localStorage.clear();
    navigate("/login")
  };

  const navigateHash = (route: string) => {
    window.location.hash = route;
  };

  return (
    <Modal>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link
            to="/"
            onClick={() => setActive(() => '')}
            className={
              active == '' ? `${styles.active} ${styles.logo}` : styles.logo
            }>
            {' '}
            <img src="/isotype.svg" alt="Logo Helebba" width={35} />{' '}
          </Link>
          {items.map((item: Path) => (
            <HeaderLink
              active={active}
              setActive={setActive}
              key={item.name}
              {...item}
            />
          ))}
        </nav>
        <div>
          <Menus>
            <div className={styles.menus}>
              <div className={styles.btn_menu}>
                <Menus.Menu>
                  <Menus.Toggle id="header">
                    <Plus color="#fff" size={24} />
                  </Menus.Toggle>

                  <Menus.List id="header">
                    <div className={styles.list}>
                      <Modal.Open opens="contact">
                        <Menus.Button>
                          <Users size={18} color="rgba(0,0,0,0.6)" /> Contacto
                        </Menus.Button>
                      </Modal.Open>

                      <Modal.Open opens="product">
                        <Menus.Button>
                          <Package size={18} color="rgba(0,0,0,0.6)" /> Producto
                        </Menus.Button>
                      </Modal.Open>
                      <Modal.Open opens="warehouse">
                        <Menus.Button>
                          <Home size={18} color="rgba(0,0,0,0.6)" /> Almacén
                        </Menus.Button>
                      </Modal.Open>
                    </div>
                  </Menus.List>
                </Menus.Menu>
              </div>

              <button onClick={() => navigateHash('search')}>
                <Search color="#fff" size={20} />
              </button>

              <div className={styles.btn_menu}>
                <Menus.Menu>
                  <Menus.Toggle id="notifications">
                    <Bell color="#fff" size={20} />
                  </Menus.Toggle>

                  <Menus.List id="notifications">
                    <div className={styles.notifications}>
                      <h3>Notificaciones</h3>
                      <p>No hay notificaciones... ¡todavia!</p>
                      <p>
                        Los mensajes y alertas sobre tu cuenta de Helebba
                        aparecerán aquí.
                      </p>
                    </div>
                  </Menus.List>
                </Menus.Menu>
              </div>

              <a href="https://wa.link/5uj5mf" target="_blank">
                <HelpCircle color="#fff" size={20} />
              </a>
            </div>

            <div className={styles.user_btn} onClick={() => setOpen(!open)}>
              <span>{user?.name?.charAt(0)}</span>
              <div>
                <h3 className={styles.user_name}>
                  {user?.name} {user?.lastname}
                </h3>
                <p className={styles.account}>{account?.name}</p>
              </div>

              {open && (
                <ul className={styles.user_options}>
                  <li>
                    <button onClick={() => navigateHash('/settings/profile')}>
                      <User size={16} /> Editar perfil
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigateHash('settings/configuration')}>
                      <Settings size={16} /> Configuracion
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigateHash('settings/subscription')}>
                      <CreditCard size={16} /> Suscripcion
                    </button>
                  </li>
                  <li>
                    <button onClick={() => navigate(PrivateRoutes.REFERRALS)}>
                      <Gift size={16} /> Invita y gana 50 CO$
                    </button>
                  </li>
                  <span className={styles.sepator}></span>
                  <li>
                    <Link to={PrivateRoutes.ACCOUNTS_NEW}>
                      <Plus size={16} /> Anadir cuenta
                    </Link>
                  </li>
                  <li>
                    <button onClick={logoutHandler}>
                      <LogOut size={16} /> Cerrar sesión
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </Menus>
        </div>
      </header>
      <Modal.Window
        width={1250}
        styleHeader={{
          padding: 20,
          paddingBottom: 0,
        }}
        style={{
          padding: 0,
        }}
        title="Crear Producto"
        name="product">
        <ProductFrom />
      </Modal.Window>

      <Modal.Window title="Crear Contacto" name="contact">
        <ContactFrom />
      </Modal.Window>

      <Modal.Window title="Crear Almacén" name="warehouse">
        <WarehouseForm />
      </Modal.Window>
    </Modal>
  );
};

export default Header;
