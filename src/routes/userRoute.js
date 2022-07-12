import HomePage from "./../pages/homePage/HomePage";
import LoginPage from "./../pages/loginPage/LoginPage";
import RegisterPage from "./../pages/registerPage/RegisterPage";
import DetailPage from "./../pages/detailPage/DetailPage";
import LayoutTheme from "../HOC/LayoutTheme";
import PurchasePage from "../pages/purchasePage/PurchasePage";

export const userRoutes = [
  {
    path: "/",
    component: <LayoutTheme Component={HomePage} />,
    isUseLayout: true,
    exact: true,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/purchase/:id",
    component: <LayoutTheme Component={PurchasePage} />,
    isUseLayout: true,
    exact: true,
  },
  {
    path: "/detail/:id",
    component: <LayoutTheme Component={DetailPage} />,
    isUseLayout: true,
    exact: true,
  },
];
