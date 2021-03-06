import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from "react-router-dom";

import logo from '../../assets/commerce.png'
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
  return (
    <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
            <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
                <Typography variant="h6" className={classes.title} color="inherit">
                 <img src={logo} alt="APHELEIA" height="25px" className={classes.image} />
                    APHELEIA
                </Typography>
                </Link>
                <div className={classes.grow} />
                <div className={classes.button}>
                <Link to="/cart" style={{ textDecoration: 'none', color: '#000' }}>
                    <IconButton aria-label="Show Cart Items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar;