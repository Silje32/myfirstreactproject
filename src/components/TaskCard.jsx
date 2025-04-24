export default function TaskCard({ props, removeFromlist }) {
  const taskCss = {
    border: "solid black",
    margin: "5px",
  };

  return (
    <div style={taskCss}>
      <h3>{props}</h3>
      <button onClick={removeFromlist}>remove</button>
    </div>
  );
}
