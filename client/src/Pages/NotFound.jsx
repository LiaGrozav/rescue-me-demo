import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Oops...This page does not exist, click below</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
