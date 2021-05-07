import React from "react";
import {
  Box,
  Container,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
  Theme,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            E-Commerce DEMO
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Grid container>
          <Grid item></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
