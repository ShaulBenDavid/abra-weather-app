import { Navigate } from "react-router-dom";
import PageLayout from "../Pages/PageLayout";
import { useAppSelector } from "../Redux/hooks";
import { selectUser } from "../Redux/User/User";

const ProtectedRoutes = () => {
  const currentUser = useAppSelector(selectUser);
  
  return (
      <>
     { currentUser ? <PageLayout /> : <Navigate to="/login" />}
    </>
  );
};

export default ProtectedRoutes;
