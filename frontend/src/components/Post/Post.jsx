import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";

function Post() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeletePost = () => {
    console.log("delete post");
    handleClose();
  };
  const handleOpenReplyModel = () => {
    console.log("open model");
  };
  const handleCreateRepost = () => {
    console.log("repost done");
  };
  const handleLikePost = () => {
    console.log("handle like work");
  };
  return (
    <div>

      <div className="postUserContainer">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          alt="username"
          src="https://cdn.pixabay.com/photo/2023/09/22/17/59/dog-8269584_640.jpg"
        />
        <div>
          <div className="postUser">
            <section className="postUsername">
              <span>Rosie Queen</span>
              <span className="opacity-50">@Queenie . 2m</span>
            </section>
            <section>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDeletePost}>Borrar</MenuItem>
                <MenuItem onClick={handleDeletePost}>Editar</MenuItem>
              </Menu>
            </section>
          </div>
          <div className="postInfoContainer">
            <section className="postInfo">
              <p>Maravillosa vista</p>
              <img
                src="https://cdn.pixabay.com/photo/2023/05/22/06/41/beach-8009994_960_720.jpg"
                alt="nice view"
              />
            </section>
            <section className="postOptions">
              <div>
                <ChatBubbleOutlineIcon onClick={handleOpenReplyModel} />
                <p>43</p>
              </div>
              <div className={`${true ? "text-teal-500" : "text-gray-600"}`}>
                <RepeatIcon onClick={handleCreateRepost} />
                <p>54</p>
              </div>
              <div className={`${true ? "text-teal-500" : "text-gray-600"}`}>
                {true ? (
                  <FavoriteIcon onClick={handleLikePost} />
                ) : (
                  <FavoriteBorderIcon onClick={handleLikePost} />
                )}
                <p>67</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
