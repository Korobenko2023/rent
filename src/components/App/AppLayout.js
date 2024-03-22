import { HeaderNav } from "components/HeaderNav/HeaderNav";
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { AppLayoutContainer } from "./AppLayout.styled";

export const AppLayout = () => {
  return (
     <AppLayoutContainer>      
      <HeaderNav />     
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>        
        <Toaster position="top-right" reverseOrder={false}/>     
    </AppLayoutContainer>
  );
};
