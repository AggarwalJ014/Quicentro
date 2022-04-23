import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';





const Hheader = () => {



  const [anchorEl, setAnchorEl] = React.useState(null);
  const [Profile, setProfile] = React.useState(null);

  const handleCloseProfile = () => {
    setProfile(null)
  }

  const handleprofile = (event) => {
    setProfile(event.currentTarget);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 ,backgroundColor:'rgb(0 68 78)'}}>
      <AppBar position="fixed" sx={{ backgroundColor: "rgb(0 68 78) ", height: "70px" }}>
        <Toolbar >
          {/* <Box sx={{
            width: "44px",
            height: "60px"
          }}>
            <img src={logo} alt="" />
          </Box> */}
          <Typography sx={{ color: "white", fontFamily: 'Playfair Display', fontWeight: '400', fontSize: '28px', lineHeight: '37px', marginLeft: '8px' }}>
            Quicentro
          </Typography>

          <div style={{ marginTop: '5px'}}>
            <Stack spacing={3} direction="row"
              sx={{
                display: {
                  lg: 'flex',
                  xs: "none"
                }
              }}>
                <Button onMouseEnter={handleprofile}  sx={{
                  background: "rgb(0 68 78)",
                  color: "white",
                  textTransform: "capitalize",
                  fontFamily: 'Merriweather',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '23px',
                  marginLeft: "300px",
                  ':hover': {
                    background: "none ",
                    color: "rgb(202 248 128)"


                  }
                }
                } > News</Button>
              <Button sx={{
                background: "rgb(0 68 78)",
                color: "white",
                textTransform: "capitalize",
                fontFamily: 'Merriweather',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '23px',
                '&:hover': {
                  background: "none ",
                  color: "rgb(202 248 128)"
                }
              }
              } >Register Earn</Button>
             <Button sx={{
               background: "rgb(0 68 78)",
               color: "white",
                textTransform: "capitalize",
                fontFamily: 'Merriweather',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '23px',
                '&:hover': {
                  background: "none ",
                  color: "rgb(202 248 128)"
                }
              }
              } >Stores</Button>
              
              <Button sx={{
                background: "rgb(0 68 78)",
                color: "white",
                textTransform: "capitalize",
                fontFamily: 'Merriweather',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '23px',
                '&:hover': {
                  background: "none ",
                  color: "rgb(202 248 128)"
                }
              }
              } >Discounts</Button>
              <Button sx={{
                background: "rgb(0 68 78)",
                color: "white",
                textTransform: "capitalize",
                fontFamily: 'Merriweather',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '23px',
                '&:hover': {
                  background: "none ",
                  color: "rgb(202 248 128)"
                }
              }
              } >Gastronomy</Button>
              <Button sx={{
                background: "rgb(0 68 78)",
                color: "white",
                textTransform: "capitalize",
                fontFamily: 'Merriweather',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '23px',
                '&:hover': {
                  background: "none ",
                  color: "rgb(202 248 128)"
                }
              }
              } >Aocial Responsibility</Button>
              <Button sx={{
                background: "rgb(0 68 78)",
                color: "white",
                textTransform: "capitalize",
                fontFamily: 'Merriweather',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '23px',
                '&:hover': {
                  background: "none ",
                  color: "rgb(202 248 128)"
                }
              }
              } >Commerce Contact</Button>

             
            </Stack>
          </div>          

          <div style={{}}>
            <Button sx={{marginLeft:'30px'}} variant="contained">Login</Button>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              ar
              ia-label="menu"
              sx={{
                marginBottom: '8px',
                display: {
                  lg: "none",
                  xs: "block"
                }
              }}
              onClick={handleMenu}

            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={Profile}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center "
              }}
              open={Boolean(Profile)}
              onClose={handleCloseProfile}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
            <Menu


              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >

              
                <MenuItem onClick={handleClose}>Dashboard</MenuItem>
              
                <MenuItem onClick={handleClose}>Incubation</MenuItem>
             
                <MenuItem onClick={handleClose}>Research</MenuItem>
              
                <MenuItem onClick={handleClose}>Placement</MenuItem>
              

            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box >
  );
};

export default Hheader;
