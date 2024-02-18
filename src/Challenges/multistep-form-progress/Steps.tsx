type StepT = {
  name: string;
  Component: () => JSX.Element;
};

const Steps = (props: { steps: StepT[] }) => {
  console.log(props.steps);
  return (
    <div>
      <div className='flex flex-row gap-6 w-full justify-center h-full '>
        {props.steps.map((step) => (
          <div key={step.name}>
            <div className='rounded-lg bg-green-300'>{step.name}</div>
          </div>
        ))}
      </div>
      <button>{}</button>
    </div>
  );
};

export default Steps;
