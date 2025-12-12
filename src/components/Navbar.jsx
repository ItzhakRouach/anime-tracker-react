import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className=" flex text-white text-2xl shadow-2xl justify-start gap-5 mt-5 ml-5">
      <h3
        className="decoration-indigo-500
          decoration-2
          underline-offset-4
          hover:underline
          transition-all duration-300 ease-in-out "
      >
        {<Link to="/">Search</Link>}
      </h3>
      <h3
        className="decoration-indigo-500
          decoration-2
          underline-offset-4
          hover:underline
          transition-all duration-300 ease-in-out"
      >
        {<Link to="/my-list">My List</Link>}
      </h3>
    </div>
  );
};
