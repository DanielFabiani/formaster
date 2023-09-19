import { Typography } from "@mui/material";
import Form from "../Form/Form";
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <Typography
        color="primary"
        textAlign={"center"}
        variant="h3"
        sx={{ marginTop: "24px" }}
      >
        ForMaster
      </Typography>
      <Form />
    </div>
  );
};

export default Home;
