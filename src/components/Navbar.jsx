// import SideBar from "../pages/SideBar";
// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import MenuItem from "@mui/material/MenuItem";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContextProvider";

// const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const { logout } = useAuth();

//   const user = localStorage.getItem("username");

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleOut = () => {
//     logout();
//     navigate("/");
//   };

//   const navigate = useNavigate();

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar id="navbar" position="fixed">
//       <Container maxWidth="xl">
//         <Toolbar
//           disableGutters
//           sx={{
//             display: "flex",
//             alignItems: "center !important",
//             justifyContent: "center",
//           }}
//         >
//           {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}

//           <Box
//             sx={{
//               display: { xs: "none", md: "flex" },
//               mr: 1,
//               justifyContent: "center",
//             }}
//             // onClick={{}}
//           >
//             <SideBar />
//           </Box>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             {/* <Typography className="mers-nav">Mercedes-Benz</Typography> */}
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//               {/* <SideBar /> */}
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "center",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "center",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               <MenuItem onClick={(handleCloseNavMenu, () => navigate("/"))}>
//                 <Typography textAlign="center">Home</Typography>
//               </MenuItem>
//               <MenuItem
//                 onClick={(handleCloseNavMenu, () => navigate("/products"))}
//               >
//                 <Typography textAlign="center">Cars</Typography>
//               </MenuItem>
//               <MenuItem
//                 onClick={(handleCloseNavMenu, () => navigate("/admin"))}
//               >
//                 <Typography textAlign="center">Admin</Typography>
//               </MenuItem>
//               <MenuItem onClick={(handleCloseNavMenu, () => navigate("/cart"))}>
//                 <Typography textAlign="center">Cart</Typography>
//               </MenuItem>

//               {user ? (
//                 <MenuItem onClick={(handleCloseNavMenu, () => handleOut())}>
//                   <Typography textAlign="center">Log out</Typography>
//                 </MenuItem>
//               ) : (
//                 <>
//                   <MenuItem
//                     onClick={(handleCloseNavMenu, () => navigate("/register"))}
//                   >
//                     <Typography textAlign="center">Register</Typography>
//                   </MenuItem>
//                   <MenuItem
//                     onClick={(handleCloseNavMenu, () => navigate("/login"))}
//                   >
//                     <Typography textAlign="center">Login</Typography>
//                   </MenuItem>
//                 </>
//               )}
//             </Menu>
//           </Box>
//           {/* <SideBar /> */}
//           <Typography
//             noWrap
//             href=""
//             className="mers-nav1"
//             sx={{
//               display: { xs: "flex", md: "none" },
//               fontFamily: "monospace",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             <Typography className="mers-nav">
//               <SideBar />
//               {/* Mercedes-Benz */}
//             </Typography>
//           </Typography>
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "none", md: "flex" },
//               alignItems: "center",
//               marginLeft: 55,
//             }}
//           >
//             <MenuItem
//               className="btn-nav"
//               onClick={(handleCloseNavMenu, () => navigate("/"))}
//             >
//               <Typography textAlign="center">Home</Typography>
//             </MenuItem>

//             <MenuItem
//               className="btn-nav"
//               onClick={(handleCloseNavMenu, () => navigate("/products"))}
//             >
//               <Typography className="cars" textAlign="center">
//                 Cars
//               </Typography>
//             </MenuItem>

//             {user === "admin@admin.com" ? (
//               <MenuItem
//                 className="btn-nav"
//                 onClick={(handleCloseNavMenu, () => navigate("/admin"))}
//               >
//                 <Typography textAlign="center">Admin</Typography>
//               </MenuItem>
//             ) : null}

//             <MenuItem
//               className="btn-nav"
//               onClick={(handleCloseNavMenu, () => navigate("/cart"))}
//             >
//               <Typography textAlign="center">Cart</Typography>
//             </MenuItem>

//             {user ? (
//               <MenuItem
//                 className="btn-nav"
//                 onClick={(handleCloseNavMenu, () => handleOut())}
//               >
//                 <Typography textAlign="center">Log Out</Typography>
//               </MenuItem>
//             ) : (
//               <>
//                 <MenuItem
//                   className="btn-nav"
//                   onClick={(handleCloseNavMenu, () => navigate("/register"))}
//                 >
//                   <Typography textAlign="center">Register</Typography>
//                 </MenuItem>

//                 <MenuItem
//                   className="btn-nav"
//                   onClick={(handleCloseNavMenu, () => navigate("/login"))}
//                 >
//                   <Typography textAlign="center">Login</Typography>
//                 </MenuItem>
//               </>
//             )}

//             {/* <MenuItem
//               className="btn-nav"
//               onClick={(handleCloseNavMenu, () => navigate("/register"))}
//             >
//               <Typography className="register" textAlign="center">
//                 Register
//               </Typography>
//             </MenuItem>

//             <MenuItem
//               className="btn-nav"
//               onClick={(handleCloseNavMenu, () => navigate("/login"))}
//             >
//               <Typography className="login" textAlign="center">
//                 Login
//               </Typography>
//             </MenuItem> */}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default Navbar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import SideBar from "../pages/SideBar";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { logout } = useAuth();

  const user = localStorage.getItem("username");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOut = () => {
    logout();
    navigate("/");
  };

  const navigate = useNavigate();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar id="navbar" position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
              {/* <SideBar /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={(handleCloseNavMenu, () => navigate("/"))}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem
                onClick={(handleCloseNavMenu, () => navigate("/products"))}
              >
                <Typography textAlign="center">Cars</Typography>
              </MenuItem>
              <MenuItem
                onClick={(handleCloseNavMenu, () => navigate("/admin"))}
              >
                <Typography textAlign="center">Admin</Typography>
              </MenuItem>
              <MenuItem onClick={(handleCloseNavMenu, () => navigate("/cart"))}>
                <Typography textAlign="center">Cart</Typography>
              </MenuItem>

              {user ? (
                <MenuItem onClick={(handleCloseNavMenu, () => handleOut())}>
                  <Typography textAlign="center">Log out</Typography>
                </MenuItem>
              ) : (
                <>
                  <MenuItem
                    onClick={(handleCloseNavMenu, () => navigate("/register"))}
                  >
                    <Typography textAlign="center">Register</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={(handleCloseNavMenu, () => navigate("/login"))}
                  >
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>

          <SideBar />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <MenuItem
              className="btn-nav"
              onClick={(handleCloseNavMenu, () => navigate("/"))}
            >
              <Typography textAlign="center">Home</Typography>
            </MenuItem>

            <MenuItem
              className="btn-nav"
              onClick={(handleCloseNavMenu, () => navigate("/products"))}
            >
              <Typography className="cars" textAlign="center">
                Cars
              </Typography>
            </MenuItem>

            {user === "admin@admin.com" ? (
              <MenuItem
                className="btn-nav"
                onClick={(handleCloseNavMenu, () => navigate("/admin"))}
              >
                <Typography textAlign="center">Admin</Typography>
              </MenuItem>
            ) : null}

            <MenuItem
              className="btn-nav"
              onClick={(handleCloseNavMenu, () => navigate("/cart"))}
            >
              <Typography textAlign="center">Cart</Typography>
            </MenuItem>

            {user ? (
              <MenuItem
                className="btn-nav"
                onClick={(handleCloseNavMenu, () => handleOut())}
              >
                <Typography textAlign="center">Log Out</Typography>
              </MenuItem>
            ) : (
              <>
                <MenuItem
                  className="btn-nav"
                  onClick={(handleCloseNavMenu, () => navigate("/register"))}
                >
                  <Typography textAlign="center">Register</Typography>
                </MenuItem>

                <MenuItem
                  className="btn-nav"
                  onClick={(handleCloseNavMenu, () => navigate("/login"))}
                >
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
