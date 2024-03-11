import "./Sidebar.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import AccountIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";

function Sidebar() {
  const navigation = [
    {
      title: "Inicio",
      icon: <HomeIcon />,
      path: "/home",
    },
    {
      title: "Mensajes",
      icon: <MessageIcon />,
      path: "/messages",
    },
    {
      title: "Perfil",
      icon: <AccountIcon />,
      path: "/account",
    },
  ];

  return (
    <div className="h-screen sticky top-0">
      <img
        src="../../../src/images/logo.svg"
        alt="Logo DoggieDiary"
        className="logoImg"
      />
      <section className="menuItems">
        {navigation.map((item, index) => (
          <Link key={index} to={item.path}>
            <div className="menuItem">
              {item.icon}
              <p>{item.title}</p>
            </div>
          </Link>
        ))}
      </section>
      <div className="newEntrieBtn">
        <Button>NUEVA ENTRADA</Button>
      </div>
    </div>
  );
}

export default Sidebar;
