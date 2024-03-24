import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./AppLayout";

const Home = lazy(() => import('../../pages/Home/HomePage'));
const CatalogPage = lazy(() => import('../../pages/Catalog/CatalogPage'));
const FavoritesPage = lazy(() => import('../../pages/Favorites/FavoritesPage'));

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ); 
};
  
 

 