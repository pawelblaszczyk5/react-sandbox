export const PropsButton = ({value, click}: { value: number, click: () => void }) => {
  return (
    <div className="customFlex">
      <p>Something value: {value}</p>
      <button onClick={click}>
        Do something, but I don't know why
      </button>
    </div>
  );
};
