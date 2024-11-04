import {
  Home,
  ProductDetail,
  ProductList,
  Admin,
  PageNotFound,
  Contact,
  ContactIN,
  ContactEU,
  ContactUSA,
} from '../pages/index';
import { Routes, Route, Navigate } from 'react-router-dom';

export function AllRoutes() {
  const user = false;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/productinfo/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="in" element={<ContactIN />} />
          <Route path="eu" element={<ContactEU />} />
          <Route path="usa" element={<ContactUSA />} />
        </Route>
        <Route path="/admin" element={user ? <Navigate to="/" /> : <Admin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
