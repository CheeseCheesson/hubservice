import { useRoutes } from "react-router-dom";
import Home from "./../Pages/Home";
import Layout from "../Layout/Layout";

function App() {
  const routes = useRoutes([
    {
      path: "/", element: <Layout />,
      children: [
        { path: "/sherb", element: <Home /> },
      ]
    },
  ]);
  return (
    <div>
      {routes}
    </div>
  );
}

export default App;
