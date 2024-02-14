type StepT = {
  name: string;
  Component: () => JSX.Element;
};

const Steps = ({ name, Component }: StepT[]) => {
  return <div>Steps</div>;
};

export default Steps;
