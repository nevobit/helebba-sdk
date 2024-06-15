import { Link, useNavigate } from 'react-router-dom';
import styles from './Accounts.module.css';
import { LogOut, Plus } from 'react-feather';
import { useState } from 'react';
import { PrivateRoutes } from '@/constant-definitions';
import { googleLogout } from '@react-oauth/google';
import { useAccounts, useUser } from '@/hooks';
import { useAccountStore } from '@/state-manager';
import { Account } from '@helebba/entities';

const Accounts = () => {
  const { user } = useUser();
  const { isLoading, accounts } = useAccounts();

  const selectAccount = useAccountStore((state) => state.selectAccount);

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const hadlerAccount = async (account: Account) => {
    await selectAccount(account)
    navigate(PrivateRoutes.HOME, { replace: true });
  };

  const logoutHandler = () => {
    googleLogout();
    //  dispatch(logout() as any);
  };

  if (isLoading) return;

  return (
    <div>
      <div className={styles.header}>
        <img src="/images/logos/logo.svg" alt="" />
        <div onClick={() => setOpen(!open)} className={styles.user_option}>
          <span>{user?.name?.charAt(0)}</span>
          <div>
            <h3>
              {user?.name} {user?.lastname}
            </h3>
            <h4>{user?.email}</h4>
          </div>
          {open && (
            <ul className={styles.user_options}>
              <li>
                <button onClick={logoutHandler}>
                  <LogOut size={16} /> Cerrar sesión
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      <form className={styles.form}>
        <h2 className={styles.title}>Elige una organización para continuar</h2>

        <div className={styles.accounts}>
          {accounts?.map((account: Account) => (
            <div
              className={styles.account}
              key={account.id}
              onClick={() => hadlerAccount(account)}>
              <span>
                {account.name.charAt(0).toUpperCase()}
                {account.name.charAt(1).toUpperCase()}
              </span>
              <p>{account.name}</p>
            </div>
          ))}
        </div>
        <Link to={PrivateRoutes.ACCOUNTS_NEW}>
          <Plus size={16} strokeWidth={2.5} /> Nueva cuenta
        </Link>
      </form>
    </div>
  );
};

export default Accounts;
