import "./Home.css";
import Sidebar from "../../components/Sidebar/Siderbar";
import Grid from "@mui/material/Grid";
import Entries from "../../components/Entries/Entries";

function Home() {
  return (
    <>
      <Grid container item xs={12} className="px-5 justify-between">
        <Grid item xs={0} lg={2} className="hidden lg:block w-full relative">
          <Sidebar />
        </Grid>
        <Grid item xs={12} lg={10} className="hidden lg:block w-full relative">
          <Entries />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
