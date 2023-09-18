import { Typography } from "@mui/material";
import Form from "../Form/Form";

const Home = () => {
  return (
    <>
      <Typography
        color="primary"
        textAlign={"center"}
        variant="h3"
        sx={{ marginTop: "24px" }}
      >
        Home
      </Typography>
      <Form />
    </>
  );
};

export default Home;
