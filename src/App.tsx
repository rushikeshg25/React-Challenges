import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import MultiStepFormProgress from "./Challenges/multistep-form-progress/Index";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div className='text-5xl '>Hello world!</div>,
    },
    {
      path: "/multistep-form-progess",
      element: <MultiStepFormProgress />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
