import type { NextPage } from "next";
import { Box, Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography component={"h1"} sx={{ fontSize: "28px" }}>
        Start
      </Typography>
    </Box>
  );
};

export default Home;
