import { Avatar, Button } from "@mui/material";
import "./Profile.css";

function Profile() {
  return (
    <main className="bodyContainer">
      <div className="entriesContainer">
        <section className="profileCover">
          <img
            src="https://cdn.pixabay.com/photo/2023/10/23/17/10/landscape-8336497_960_720.jpg"
            alt="Fondo"
          />
          <div className="profileAvatar">
            <Avatar
              alt="Queniee"
              src="https://cdn.pixabay.com/photo/2023/09/22/17/59/dog-8269584_640.jpg"
            />
          </div>
        </section>
        <section className="profileInfo">
          <div className="profileUser">
            <h2>Rosie Queen</h2>
            <p className="opacity-50">@Quennie</p>
          </div>
          <div className="entrieBtn">
            <Button>EDITAR PERFIL</Button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Profile;
