import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

function ProfileMenu({ anchorEl, open, handleClose }) {
  return (
    <div className="profileMenu">
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
      </Menu>
    </div>
  );
}

ProfileMenu.propTypes = {
  anchorEl: PropTypes.object,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default ProfileMenu;
