import Tableau from "../components/Tableau";
import { useState } from "react";

const AppContainers = () => {
  const [value, setValue] = useState("");
  const [Tableaus, setTableau] = useState([]);

  function handleOnClick() {
    setTableau((prevState) => [...prevState, { id: 1, title: value }]);
    setValue("");
  }
  return (
    <div className="appcontainers">
      <div className="duo">
        <input
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="button" onClick={() => handleOnClick()}>
          create Tableau
        </button>
      </div>
      {Tableaus.map((tableau, index) => (
        <Tableau tableau={tableau} key={index} />
      ))}
    </div>
  );
};

export default AppContainers;
