import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
type MenuItemProps = {
  title: string;
};
const ShopMenuItem: React.FC<MenuItemProps> = ({ title }) => {
  return (
    <Box boxShadow={5} textAlign="center">
      <Card>
        <CardMedia
          src="https://i.ibb.co/R70vBrQ/hat.png"
          title={title}
          component="img"
        />
        <Button
          variant="contained"
          color="primary"
          style={{ width: "100%", borderRadius: "0px" }}
        >
          SHOP NOW
        </Button>
      </Card>
    </Box>
  );
};

export default ShopMenuItem;
