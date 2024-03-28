import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Divider } from "@mui/material";
import Post from "../Post/Post";
import "./PostDetail.css";

function PostDetail() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <React.Fragment>
      <main className="bodyContainer">
        <div className="entriesContainer">
          <section className="backFunction">
            <KeyboardBackspaceIcon
              className="cursor-pointer"
              onClick={handleBack}
            />
            <h2>Entrada</h2>
          </section>
          <section>
            <Post />
            <div className="mb-7">
              <Divider />
            </div>
          </section>
          <section>
            {[1, 1, 1].map((index) => (
              <div key={index}>
                <Post />
                {index !== [1, 1, 1, 1, 1].length - 1 && (
                  <div className="divider">
                    <Divider />
                  </div>
                )}
              </div>
            ))}
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}

export default PostDetail;
