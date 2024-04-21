import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import MultiStepFormProgress from "./Challenges/multistep-form-progress/Index";
import GridSelect from "./Challenges/grid-select";
import TicTacToe from "./Challenges/tic-tac-toe";

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
    {
      path: "/grid-select",
      element: <GridSelect />,
    },
    {
      path: "/tic-tac-toe",
      element: <TicTacToe />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
