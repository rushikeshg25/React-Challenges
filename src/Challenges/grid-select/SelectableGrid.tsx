import { useState } from "react";
import { cn } from "../../lib/utils";

type ST = { rows: number; cols: number };

const SelectableGrid = ({ rows, cols }: ST) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState<number[]>([]);

  const handleMouseup = () => {
    setIsMouseDown(false);
  };
  const handleMousedown = (i: number) => {
    setIsMouseDown(true);
    setSelectedBoxes([i]);
  };
  const handleMouseenter = (i: number) => {};
  return (
    <div className='flex flex-col gap-2 justify-center items-center h-screen'>
      <div className='text-xl'>Click and Drag to select section of Boxes</div>
      <div
        onMouseUp={handleMouseup}
        className={cn(" grid   gap-2", `grid-cols-${cols} `)}
      >
        {[...Array(rows * cols).keys()].map((i) => (
          <div
            key={i}
            className='border border-black w-10 place-content-center grid'
            onMouseDown={() => handleMousedown(i)}
            onMouseEnter={() => handleMouseenter(i)}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectableGrid;
