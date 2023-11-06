import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import Main from "./Main";

import "./threecolumn.css";

const ThreeColumn = () => {
  return (
    <div className="threecolumn-container">
      <LeftBar />
      <Main />
      <RightBar />
    </div>
  );
};

export default ThreeColumn;
