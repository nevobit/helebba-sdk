import { PrivateRoutes, PublicRoutes } from '@/constant-definitions';
import LineScaleLoader from '@/containers/Loader';
import { useUser } from '@/hooks';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = (
  <Navigate to={PrivateRoutes.PRIVATE} replace />
)

const GuardRoute = ({privateValidation}: Props) => {
  const { isLoading, user } = useUser();

  if(isLoading) return <LineScaleLoader />

  return user ? (
    privateValidation ? (
        PrivateValidationFragment
    ): (
        PublicValidationFragment
    )
) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
) 
}

export default GuardRoute
