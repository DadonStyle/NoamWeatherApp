import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AdditionalDataComponent from "../modules/AdditionalDataComponent/AdditionalDataComponent";
import ForecastComponent from "../modules/ForecastComponent/ForecastComponent";
import CitiesHistory from "../modules/CitiesHistory/CitiesHistory";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <AdditionalDataComponent />,
      },
      {
        path: "/home/forecast",
        element: <ForecastComponent />,
      },
      {
        path: "/home/history",
        element: <CitiesHistory />,
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
