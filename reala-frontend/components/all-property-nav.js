import { BsFillGridFill } from "react-icons/bs";
import { HiViewList } from "react-icons/hi";

const AllPropertyNav = ({ data, setView, view, searchProperty }) => {
  return (
    <div className="col-12">
      <div className="property-nav">
        <div className="property-nav__view">
          <button
            onClick={() => setView(false)}
            className={view ? "sort-btn" : "active sort-btn"}
          >
            <BsFillGridFill className="icon" />
          </button>

          <button
            onClick={() => setView(true)}
            className={view === false ? "sort-btn" : "active sort-btn"}
          >
            <HiViewList className="icon" />
          </button>
        </div>
        <p>
          {data === null || undefined
            ? "Product Not Available"
            : `${data.length} Product Available`}
        </p>

        <div className="sort-selection">
          <form>
            <input
              id="search-input"
              onKeyUp={searchProperty}
              placeholder="Search"
              type="text"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AllPropertyNav;
