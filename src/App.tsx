import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import MultiStepFormProgress from "./Challenges/multistep-form-progress/Index";
import GridSelect from "./Challenges/grid-select";
import TicTacToe from "./Challenges/tic-tac-toe";
import Landing from "./Landing";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className='text-5xl '>
          <Landing />
        </div>
      ),
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

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
