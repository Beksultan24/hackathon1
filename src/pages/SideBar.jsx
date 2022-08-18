import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

export default function SideBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const navigate = useNavigate();

  const list = () => (
    <Box
      className="side-bar"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 300,
      }}
    >
      <br />
      <img
        className="icon-side"
        src="https://assets.webiconspng.com/uploads/2017/09/Mercedes-PNG-Image-50019.png"
      />

      <Button className="btn-cars1" onClick={() => navigate("/amg")}>
        AMG
      </Button>
      <br />
      <Button className="btn-cars" onClick={() => navigate("/maybach")}>
        Maybach
      </Button>
      <br />
      <Button className="btn-cars">
        Mercedes-EQ <br />
      </Button>
    </Box>
  );

  return (
    <div>
      {[""].map((anchor) => (
        <React.Fragment key={anchor}>
          <div>
            <img
              className="icon"
              src="https://assets.webiconspng.com/uploads/2017/09/Mercedes-PNG-Image-50019.png"
              onClick={toggleDrawer(anchor, true)}
            />

            {anchor}
          </div>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
