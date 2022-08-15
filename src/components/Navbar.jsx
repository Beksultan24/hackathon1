import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const drawerWidth = 245;
// const navItems = ["Home", "Cars", "Cart", "Register", "Login", "Admin"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       Mercedes
  //     </Typography>
  //     <Divider />
  //     <List>
  //       {navItems.map((item) => (
  //         <ListItem key={item} disablePadding>
  //           <ListItemButton sx={{ textAlign: "center" }}>
  //             <ListItemText primary={item} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const navigate = useNavigate();

  return (
    <Box>
      <AppBar id="navbar" position="fixed" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              cursor: "pointer",
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <img
              className="icon"
              src="https://assets.webiconspng.com/uploads/2017/09/Mercedes-PNG-Image-50019.png"
              alt="mers"
            />
            Mercedes
          </Typography>
          {/* <Box sx={{ display: { xs: "none", sm: "block" } }}> */}
          <Link to="/">
            <Button sx={{ color: "#fff" }}>Home</Button>
          </Link>
          <Link to="/products">
            <Button sx={{ color: "#fff" }}>Cars</Button>
          </Link>
          <Link to="/admin">
            <Button sx={{ color: "#fff" }}>Admin</Button>
          </Link>
          <Link to="/cart">
            <Button sx={{ color: "#fff" }}>Cart</Button>
          </Link>
          <Link to="/register">
            <Button sx={{ color: "#fff" }}>Register</Button>
          </Link>
          <Link to="/login">
            <Button sx={{ color: "#fff" }}>Login</Button>
          </Link>
          {/* </Box> */}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        {/* <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
         
        </Drawer> */}
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
