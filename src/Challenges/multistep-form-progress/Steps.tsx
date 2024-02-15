type StepT = {
  name: string;
  Component: () => JSX.Element;
};

const Steps = (props: { steps: StepT[] }) => {
  console.log(props.steps);
  return (
    <div className='flex flex-row'>
      {props.steps.map((step) => (
        <div key={step.name}>
          <h2>{step.name}</h2>
          <step.Component />
        </div>
      ))}
    </div>
  );
};

export default Steps;
