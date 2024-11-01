import { createBrowserRouter,  } from "react-router-dom";
import Form from "../component/Form";
import Details from "../component/Details";
import App from "../App";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children : [
        {
            path : "/form",
            element : <Form />
        },
        {
            path : "/details",
            element : <Details />
        },
      ]
    },
  ]);

  export default router;
  