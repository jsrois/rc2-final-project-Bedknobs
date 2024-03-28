import Sidebar from "../../components/Sidebar/Sidebar";
import Grid from "@mui/material/Grid";
import Entries from "../../components/Entries/Entries";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import PostDetail from "../../components/PostDetail/PostDetail";

function Home() {
  return (
    <div className="bgHome">
      <Grid container item xs={12} className=" justify-between">
        <Grid item xs={0} lg={2} className="hidden lg:block w-full relative">
          <Sidebar />
        </Grid>

        <Grid item xs={12} lg={10} className="hidden lg:block w-full relative">
          <Routes>
            <Route path="/" element={<Entries />} />
            <Route path="/home" element={<Entries />} />
            <Route path="/account/:id" element={<Profile />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
