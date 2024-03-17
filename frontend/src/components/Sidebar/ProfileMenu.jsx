import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

function ProfileMenu({ anchorEl, open, onClose, onClick }) {
  return (
    <div className="profileMenu">
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={onClick}>Cerrar Sesión</MenuItem>
        
      </Menu>
    </div>
  );
}

ProfileMenu.propTypes = {
  anchorEl: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func
};

export default ProfileMenu;
