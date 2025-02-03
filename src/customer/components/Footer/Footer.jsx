import { CenterFocusStrong } from "@mui/icons-material"
import { Button, Grid2, Link, Typography } from "@mui/material"
import React from "react"
const Footer=()=>{
    return(
        <div>
        <Grid2 className='bg-black text-white text-center mt-10'
        container
        sx={{bgcolor:"black",color:"white",py:3}}
        spacing={20}
        justifyContent={"center"}
        
        >
        <Grid2 item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6">Company</Typography>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>About</Button>
        </div>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>Blog</Button>
        </div>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>Career</Button>
        </div>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>Media</Button>
        </div>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>Partners</Button>
        </div>
        
        </Grid2>
        <Grid2 item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6">Solutions</Typography>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>About</Button>
        </div>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>Blog</Button>
        </div>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>Career</Button>
        </div>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>Media</Button>
        </div>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>Partners</Button>
        </div>
        
        </Grid2>
        <Grid2 item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6">Documentation</Typography>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>Guides</Button>
        </div>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>API Status</Button>
        </div>
        
        
        </Grid2>
        <Grid2 item xs={12} sm={6} md={3} xl={1}>
        <Typography className="pb-5" variant="h6">Legal</Typography>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>About</Button>
        </div>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>Blog</Button>
        </div>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>Career</Button>
        </div>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>Media</Button>
        </div>
        <div>
        <Button className="pb5" variant="h6" gutterBottom>Partners</Button>
        </div>
        
        </Grid2>
        <Grid2 className="pt-1" item xs={12}>
        <Typography variant="body2" component="p" align="center">
        &copy; 2025 My company. All rights reserved.
        </Typography>
        <Typography variant="body2" component={"p"} align="center">
        Made with ❤ by me !
        </Typography>
        <Typography variant="body2" component={"p"} align="center">
        Icons Made by {' '}
        <Link href="https://www.freepik.com" color="inherit" underline="always">
        freepik
        </Link>{" "}
        from{" "}
        <Link href="https://www.flaticon.com/" color="inherit" underline="always">
        www.flaticon.com
        </Link>
        </Typography>
        </Grid2>
        </Grid2>
        </div>
    )
}
export default Footer