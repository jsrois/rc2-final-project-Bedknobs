import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavigationItem({ title, icon, path }) {
  return (
    <Link to={path}>
      <div className="optionsNavigation">
        {icon}
        <p>{title}</p>
      </div>
    </Link>
  );
}

NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavigationItem;
