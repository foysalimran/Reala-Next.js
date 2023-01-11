import React from "react";

const Sidebar = ({ data }) => {
  return (
    <div className="filter">
      <form>
        <input placeholder="Search" type="text" />
      </form>
      <div className="filter__category">
        <h3>Category</h3>
        <div className="filter__category__item">
          <p>Rent</p>
          <p>Sale</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
