import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx/Layout";
import Error from "./pages/Error";
import { GlobalProvider } from "./context/GlobalContext";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <GlobalProvider>
      <RouterProvider router={router}></RouterProvider>
    </GlobalProvider>
  );
}

export default App;
