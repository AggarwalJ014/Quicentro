import React from "react";
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram'; 
// import TwitterIcon from '@mui/icons-material/Twitter'; 
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import PhoneIcon from '@mui/icons-material/Phone';
// import MailIcon from '@mui/icons-material/Mail';
import { Box, Card, Grid, Link, Typography, Avatar, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";



import SearchIcon from '@mui/icons-material/Search';
import { Search } from "@mui/icons-material";

import Input from '@mui/material/Input';




const link1 = styled(Link)({
  fontSize: "20px",
  textDecoration: "none"

})




const Footer = () => {
  return (

    <Grid container sx={{ marginTop: '50px', padding: "30px", boxShadow: "none", width: '100%' }} >
      <Grid container xs={12} sm={12} sx={{ display:'flex' }}>

        <Grid item xs={12} sm={4} sx={{ display: 'flex' }}>
        {/* <Avatar alt="Remy Sharp"
          src={Standard}
          sx={{ width: 40, height: 45,marginLeft:'40px' }} /> */}
          <h2 style={{ fontSize: '30px', marginTop: '10px',marginLeft:'20px', }}><b>Quicentro</b></h2></Grid>
          <Grid item xs={12} sm={6} >
          
                <Box sx={{ display: 'flex'}}>
                <SearchIcon sx={{ fontSize: 'xxx-large', color: 'lightgrey' }} />
                <TextField sx={{width:'110%'}} id="outlined-basic" label="Sign up with your E-mail" variant="outlined"  />
                <Button sx={{height:'45px',borderRadius:'10px',marginLeft:'-110px',marginTop:'5px'}} variant="contained">Subscribe</Button></Box>
         </Grid>
      </Grid>
      <Grid container sx={{ display: 'flex', marginTop: '30px' }}>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={1} />
        <Grid item xs={6} sm={3}>
          <Typography variant="h4" paddingBottom="10px">Product</Typography>
          
     
            <Typography sx={{color:'black', "&:hover":{textDecoration: 'underline'}}}>Incubation</Typography>
            
            
            <Typography sx={{color:'black', "&:hover":{textDecoration: 'underline'}}}>Research</Typography>
            
            <Typography sx={{color:'black', "&:hover":{textDecoration: 'underline'}}}>Job Portal</Typography>
            
            <Typography sx={{color:'black', "&:hover":{textDecoration: 'underline'}}}>Create Studio</Typography>
            

          
        </Grid>


        <Grid item xs={6} sm={3} marginTop={'53px'}>

          
          

          
          <Typography sx={{color:'black', "&:hover":{textDecoration: 'underline'}}}>Contact</Typography>
          
          <Typography sx={{color:'black', "&:hover":{textDecoration: 'underline'}}}>Help and Support</Typography>
          
          <Typography sx={{color:'black', "&:hover":{textDecoration: 'underline'}}}>Privacy Policy</Typography>
          
          <Typography sx={{color:'black', "&:hover":{textDecoration: 'underline'}}}>Terms and Conditons</Typography>
          

        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography variant="h4" paddingBottom="10px">Help Menu</Typography>

          
          <Typography sx={{color:'black', "&:hover":{textDecoration: 'underline'}}}>About</Typography>
          
          <Typography sx={{color:'black', "&:hover":{textDecoration: 'underline'}}}>Features</Typography>
          
          <Typography sx={{color:'black', "&:hover":{textDecoration: 'underline'}}}>Work</Typography>
          
          <Typography sx={{color:'black', "&:hover":{textDecoration: 'underline'}}}>Career</Typography>
          
        </Grid>
      </Grid>
    </Grid>

  );
};
export default Footer;