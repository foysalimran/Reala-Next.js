import { BsFillGridFill } from "react-icons/bs";
import { HiViewList } from "react-icons/hi";

const AllPropertyNav = ({ data, setView, view }) => {
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
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" className="sort-selection--style">
              <option value="lowest">Price(lowest)</option>
              <option value="highest">Price(highest)</option>
              <option value="a-z">(a-z)</option>
              <option value="z-a">(z-a)</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AllPropertyNav;
