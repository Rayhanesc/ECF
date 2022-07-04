import List from "./List";

const Tableau = ({ tableau }) => {
  return (
    <div
      className="Tableau"
      style={{
        border: "7px solid white",
        textAlign: "center",
        padding: 20,
        position: "top",
      }}
    >
      {tableau.title}
      <List />
    </div>
  );
};

export default Tableau;
