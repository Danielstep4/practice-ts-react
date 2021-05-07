import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import Navbar from "../Components/Layout/Navbar";
import ShopMenuItem from "../Components/home/ShopMenuItem";

const HomePage: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="sm">
        <Grid container>
          <Grid item>
            <ShopMenuItem title="HATS" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
