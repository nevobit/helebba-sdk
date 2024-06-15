import styles from './Referral.module.css';
import ScreenHeader from '@/containers/ScreenHeader';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PrivateRoutes } from '@/constant-definitions';
import { Empty, ScreenContainer } from '@/containers';
import { useDocuments } from '@/hooks';
import { DocumentType } from '@helebba/entities';
import Image from '/images/empty/contacts.png';
import ReferralsTable from './Table/ReferralTable';
import LineScaleLoader from '@/containers/Loader';

const title = 'Remisiones';

const Referrals = () => {
  const { isLoading, documents } = useDocuments(DocumentType.REFERRALS);
  const [openCreate, setOpenCreate] = useState(false);
  const [option, setOption] = useState('all');
  const [search, setSearch] = useState('');
  console.log(openCreate, option, search, isLoading);
  console.log('DOCUMENTOS', documents);

  if (isLoading) return <LineScaleLoader />;
  if (isLoading) return <LineScaleLoader />;
  return (
    <>
      <ScreenHeader title={title} setOpen={() => setOpenCreate(true)}>
        <Link className={styles.btn_new} to={PrivateRoutes.NEW_REFERRALS}>
          Nueva Remision
        </Link>
      </ScreenHeader>
      <ScreenContainer
        option={option}
        setOption={setOption}
        setSearch={setSearch}>
        {documents?.items?.length <= 0 ? (
          <Empty
            button={''}
            title={title}
            copy="Aquí es donde puede administrar  sus remisiones  y toda su información."
            image={Image}
          />
        ) : (
          <ReferralsTable />
        )}
      </ScreenContainer>
    </>
  );
};

export default Referrals;
