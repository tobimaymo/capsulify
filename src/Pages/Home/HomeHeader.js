import React from "react";

const Header = () => {
  return (
    <div>
      <div className="headercontainer position-relative overflow-hidden text-center bg-light">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/midnights.gif"}
            alt="midnightsgif"
            className="midnights headerimagen"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
