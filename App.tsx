import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { StoreProvider } from "./context/StoreContext";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Offers from "./pages/Offers";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import DashboardHome from "./pages/dashboard/DashboardHome";
import DashboardProducts from "./pages/dashboard/DashboardProducts";
import DashboardCategories from "./pages/dashboard/DashboardCategories";
import DashboardOrders from "./pages/dashboard/DashboardOrders";
import DashboardCustomers from "./pages/dashboard/DashboardCustomers";
import DashboardOffers from "./pages/dashboard/DashboardOffers";
import DashboardCoupons from "./pages/dashboard/DashboardCoupons";
import DashboardSettings from "./pages/dashboard/DashboardSettings";

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div dir="rtl" className="font-sans">
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/products"
              element={
                <Layout>
                  <Products />
                </Layout>
              }
            />
            <Route
              path="/products/:id"
              element={
                <Layout>
                  <ProductDetails />
                </Layout>
              }
            />
            <Route
              path="/categories"
              element={
                <Layout>
                  <Categories />
                </Layout>
              }
            />
            <Route
              path="/cart"
              element={
                <Layout>
                  <Cart />
                </Layout>
              }
            />
            <Route
              path="/checkout"
              element={
                <Layout>
                  <Checkout />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <Layout>
                  <Login />
                </Layout>
              }
            />
            <Route
              path="/register"
              element={
                <Layout>
                  <Register />
                </Layout>
              }
            />
            <Route
              path="/wishlist"
              element={
                <Layout>
                  <Wishlist />
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout>
                  <Contact />
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />
            <Route
              path="/faq"
              element={
                <Layout>
                  <FAQ />
                </Layout>
              }
            />
            <Route
              path="/offers"
              element={
                <Layout>
                  <Offers />
                </Layout>
              }
            />
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/products" element={<DashboardProducts />} />
            <Route path="/dashboard/categories" element={<DashboardCategories />} />
            <Route path="/dashboard/orders" element={<DashboardOrders />} />
            <Route path="/dashboard/customers" element={<DashboardCustomers />} />
            <Route path="/dashboard/offers" element={<DashboardOffers />} />
            <Route path="/dashboard/coupons" element={<DashboardCoupons />} />
            <Route path="/dashboard/settings" element={<DashboardSettings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}
