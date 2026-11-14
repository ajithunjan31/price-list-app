import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/ui/Layout';
import Home from "./pages/Home"
import AddProducts from "./pages/AddProduct"

function App() {

  let router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        {
          path: "/",
          Component: Home,
        },
        {
          path: "/add",
          Component: AddProducts,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
