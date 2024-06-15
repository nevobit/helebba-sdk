import { Suspense } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Private from './screens/Private';
import GuardRoute from './guards';
import { PrivateRoutes, PublicRoutes } from './constant-definitions';
import { Login } from './screens/Authentication';
import Accounts from './screens/Private/Accounts';
import NewAccount from './screens/Private/Accounts/NewAccount';
import Options from './screens/Private/Options';
import Configuration from './screens/Private/Options/Configuration';
import Subscription from './screens/HashScreens/Suscription';
import { EditProfile } from './screens/HashScreens';
import GlobalSearch from './screens/HashScreens/GlobalSearch';
import { Documents } from './screens/Private/Settings';

function Application() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route path={PrivateRoutes.ACCOUNTS} element={<Accounts />} />
          <Route path={PrivateRoutes.ACCOUNTS_NEW} element={<NewAccount />} />

          <Route element={<GuardRoute privateValidation={true} />}>
            <Route path="/*" element={<Private />} />
          </Route>
        </Routes>
        <Options />
      </BrowserRouter>

      <HashRouter>
      <Routes>
      <Route element={<GuardRoute privateValidation={true} />}>
          <Route path="/settings/configuration" element={<Configuration />} />
          <Route path="/settings/subscription" element={<Subscription />} />
          <Route path="/settings/profile" element={<EditProfile />} />
          <Route path="/search" element={<GlobalSearch />} />

          <Route path={PrivateRoutes.DOCUMENTS} element={<Documents />} />

          </Route>
          </Routes>

      </HashRouter>
    </Suspense>
  );
}
export default Application;
