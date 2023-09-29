import { useSelector } from "react-redux";
import "./header.css";

const Header = (props) => {
    
  const {setEdit} = props;
  const user = useSelector((state) => state.user)
  const handleEdit = () => {
    setEdit(true);
  }
  return (
    <>
      <div
        className="header"
        style={{ 
            backgroundColor: `${user.theme}`,
            backgroundImage: `linear-gradient(100deg, ${user.theme} 2%, ${user.theme}, 65%, #181818 100%)` }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleEdit}>Edit</div>
          <img
            src={user.avaUrl}
            alt=""
            className="info-ava"
          />
          <div className="info-username">{user.name}</div>
          <div className="info-age">{user.age}</div>
          <div className="info-about">{user.about}</div>
        </div>
      </div>
    </>
  );
};

export default Header;
