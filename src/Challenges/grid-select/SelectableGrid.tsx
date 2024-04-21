import { useCallback, useState } from "react";
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
  const handleMouseenter = useCallback(
    (boxNumber: number) => {
      if (isMouseDown) {
        const startBox = selectedBoxes[0];
        const endBox = boxNumber;

        const startRow = Math.floor((startBox - 1) / cols); // Math.floor((23-1)/10) = 2
        const startCol = (startBox - 1) % cols; // (23 -1)%10 = 22 % 10 = 2
        const endRow = Math.floor((endBox - 1) / cols);
        const endCol = (endBox - 1) % cols;

        const minRow = Math.min(startRow, endRow);
        const maxRow = Math.max(startRow, endRow);
        const minCol = Math.min(startCol, endCol);
        const maxCol = Math.max(startCol, endCol);

        const selected = [];
        for (let row = minRow; row <= maxRow; row++) {
          for (let col = minCol; col <= maxCol; col++) {
            selected.push(row * cols + col + 1);
          }
        }

        setSelectedBoxes(selected);
      }
    },
    [isMouseDown]
  );

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
