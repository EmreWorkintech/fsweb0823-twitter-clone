import NavigationMenu from "../../components/NavigationMenu";
import Profile from "../../components/Profile";

const LeftBar = () => {
  return (
    <div className="leftBar-container">
      <NavigationMenu />
      <Profile />
    </div>
  );
};

export default LeftBar;
