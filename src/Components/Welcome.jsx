import PropTypes from "prop-types";

const Welcome = ({ name }) => {
  return <h1>{name}</h1>;
};

Welcome.PropTypes = {
  name: PropTypes.string,
};

export default Welcome;
