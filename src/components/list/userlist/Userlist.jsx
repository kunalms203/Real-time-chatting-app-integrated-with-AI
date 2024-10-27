import { useState } from "react";
import "./userList.css";
const Userlist = () => {
  const [add, setAdd] = useState(false);
  return (
    <div className="userlist">
      <div className="search">
        <div className="searchbar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={add ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => {
            setAdd((prev) => !prev);
          }}
        />
      </div>
      <div className="items">
        <img src="./avatar.png" alt="" />
        <div className="text">
            <span>John Doe</span>
            <p>Software Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default Userlist;
