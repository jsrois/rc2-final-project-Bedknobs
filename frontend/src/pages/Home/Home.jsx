import Sidebar from "../../components/Sidebar/Sidebar";
import Grid from "@mui/material/Grid";
import Entries from "../../components/Entries/Entries";

function Home() {
  return (
    <div className="bgHome">
      <Grid container item xs={12} className=" justify-between">
        <Grid item xs={0} lg={2} className="hidden lg:block w-full relative">
          <Sidebar />
        </Grid>
        <Grid item xs={12} lg={10} className="hidden lg:block w-full relative">
          <Entries />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
