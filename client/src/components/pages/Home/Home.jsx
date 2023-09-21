import { Typography } from "@mui/material";
import Form from "../Form/Form";
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <Typography
        color="#F0FCFD"
        textAlign={"center"}
        variant="h3"
        sx={{ marginTop: "14px", mb: '14px' }}
      >
        ForMaster
      </Typography>
      <Form />
    </div>
  );
};

export default Home;
