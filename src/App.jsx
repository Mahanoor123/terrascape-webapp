import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DetailSection from "./pages/DetailSection";
import { fetchSingleCountry } from "./pages/DetailSection";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/country/:id",
        element: <DetailSection />,
        loader: fetchSingleCountry,
      },
      {
        path: "*",
        element: <NotFound/>
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
