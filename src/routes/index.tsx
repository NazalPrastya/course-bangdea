import { Suspense, type FC, type JSX } from "react";
import { Route, Routes, type RouteObject } from "react-router-dom";
import AppRoutes from "./AppRoutes";

export interface RouteConfig extends Omit<RouteObject, "children"> {
  key: string;
  name: string;
  Component: FC;
  requireAuth?: boolean;
  isLazy?: boolean;
  props?: Record<string, unknown>;
  routes?: RouteConfig[];
}

const renderRoute = (route: RouteConfig): JSX.Element => {
  const { requireAuth, isLazy, props, routes, index, path, key } = route;
  const RouteComponent = route.Component;

  const routeElement = requireAuth ? (
    <p>You must be logged in</p>
  ) : (
    <RouteComponent {...(props || {})} />
  );

  const routeComponent = isLazy ? (
    <Suspense fallback={<p>Loading...</p>}>{routeElement}</Suspense>
  ) : (
    routeElement
  );

  // Jangan mengembalikan array dalam children Route
  return (
    <Route path={path} index={index} key={key} element={routeComponent}>
      {routes && routes.map((child) => renderRoute(child))}
    </Route>
  );
};

const Page = () => {
  return <Routes>{AppRoutes.map((route) => renderRoute(route))}</Routes>;
};

export default Page;
