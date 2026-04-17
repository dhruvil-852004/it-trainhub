import {
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import PartnerPage from "./pages/PartnerPage";

const rootRoute = createRootRoute();

function LoginGuard() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    router.navigate({ to: "/dashboard" });
    return null;
  }
  return (
    <LoginPage onPartnerClick={() => router.navigate({ to: "/partner" })} />
  );
}

function DashboardGuard() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    router.navigate({ to: "/" });
    return null;
  }
  return <DashboardPage />;
}

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
}).update({
  component: LoginGuard,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
}).update({ component: DashboardGuard });

const partnerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/partner",
}).update({ component: PartnerPage });

const routeTree = rootRoute.addChildren([
  loginRoute,
  dashboardRoute,
  partnerRoute,
]);

const router = createRouter({
  routeTree,
  history: createMemoryHistory({ initialEntries: ["/"] }),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
