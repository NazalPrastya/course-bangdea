import { Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MainLayout from "../components/layout/MainLayout";

const AppRoutes = [
  {
    key: "main",
    name: "main",
    path: "/",
    Component: () => (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    routes: [
      {
        key: "home",
        name: "home",
        index: true,
        requireAuth: false,
        Component: () => <HomePage />,
      },
      {
        key: "about",
        name: "about",
        path: "/about",
        index: true,
        requireAuth: false,
        Component: () => <AboutPage />,
      },
    ],
  },
];

export default AppRoutes;
