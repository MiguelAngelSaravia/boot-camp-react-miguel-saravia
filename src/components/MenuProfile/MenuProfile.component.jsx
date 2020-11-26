import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { useStyles } from '../../utils/styles';


function MenuProfile(props) {
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
    <h1>Login</h1>
      <form onSubmit={props.handleClose}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
             <TextField required id="standard-required-1" label="Username" type='text' autoComplete='off' />  
            </Grid>
            
            <Grid item xs={6}>
              <TextField required id="standard-required-2" label="Password" type="password" autoComplete='off' />
            </Grid>
          </Grid>
          <br/>
          <Grid container spacing={3}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={6}>
              <Button onClick={props.handleClose}>Cancel</Button>
              <Button type='submit' color="primary">Login</Button>
            </Grid>
          </Grid>
      </form>
    </div>
  );

    return (
        <Menu
        anchorEl={props.anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={props.menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={props.openMenu}
        onClose={props.closeBtn}
        >
        {props.menuId === 'primary-search-account-menu-mobile' ? [
          <div key={props.menuId}>
          <MenuItem 
            onClick={props.handleClick} key="0">
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>User</p>
          </MenuItem>
          </div>
          ] : [
            <div key={props.menuId}>
              <MenuItem 
                onClick={props.closeBtn}
                >
                Login
              </MenuItem>
              <Modal
                open={props.openModal}
                onClose={props.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                {body}
              </Modal>
            </div>
          ]}
        </Menu>
    )
}
export default MenuProfile;
