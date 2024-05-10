import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HistoricDataComponent from "../modules/Tabs/HistoricDataComponent/HistoricDataComponent";
import AdditionalDataComponent from "../modules/Tabs/AdditionalDataComponent/AdditionalDataComponent";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home/additional",
        element: <AdditionalDataComponent />,
      },
      {
        path: "/home/history",
        element: <HistoricDataComponent />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
