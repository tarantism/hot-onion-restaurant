import React from 'react';
import banner from '../../images/bannerbackground.png';
import logo from '../../images/headerLogo.png';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { IconButton, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      backgroundColor: "white"
    },
    blank: { flexGrow:3 },
    cartButton: {
      color: "black",
      marginRight: theme.spacing(2)
    },
    logIn:{
        fontFamily:"Roboto",
        color: "black", marginRight: theme.spacing(2)
    },
    signUp:{
      backgroundColor: "#eb3b5a",
      color: "white",
      border: "1px solid #eb3b5a",
      borderRadius: "20px",
      fontFamily:"Roboto"
      
    }
  
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.root}   position="static">
                <Toolbar>
                    <img className="logo" src={logo} alt="" />
                    <p className={classes.blank}></p>
                    <IconButton className={classes.cartButton}>
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                    <Button className={classes.logIn}>Login</Button>
                    <Button className={classes.signUp}>Sign up</Button>
                </Toolbar>
            </AppBar>
            <div className="header">
                <Typography variant="h6" component="h2">
                    <h2 className="text"><span>Best food waiting for your belly</span></h2>
                </Typography>
            </div>
            
        </div>
        
    );
};

export default Header;