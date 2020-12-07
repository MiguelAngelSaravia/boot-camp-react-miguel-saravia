import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router';

import ServiceLogin from '../../mockLogin/Login.api'
import { useStyles } from '../../utils/styles';
import {useAuth} from '../../providers/Auth';
import {storage} from '../../utils/storage';
import {AUTH_STORAGE_KEY} from '../../utils/constants';


function MenuProfile(props) {
  const classes = useStyles();
  const { login} = useAuth();
  const isLogin = storage.get(AUTH_STORAGE_KEY);
  const history = useHistory();
  const [userValue, setUserValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleUser = (e) => {
    setUserValue(e.target.value);
  }

  const handlePassword = (e) => {
    setPasswordValue(e.target.value);
  }
  const submitForm = (event) => {
    event.preventDefault();
    ServiceLogin(userValue, passwordValue).then(((resp) => {
        login(resp);
        history.push('/');
    })).catch((e) => {
        console.log('error del mockup', e);
    });
}

  const loginBody = (
    <div className={classes.paper}>
    <h1>Login</h1>
      <form onSubmit={submitForm}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
             <TextField required id="standard-required-username" label="Username" type='text' value={userValue} onChange={(e) => handleUser(e)} autoComplete='off' />  
            </Grid>
            
            <Grid item xs={6}>
              <TextField required id="standard-required-password" label="Password" type="password" value={passwordValue} onChange={(e) => handlePassword(e)}  autoComplete='off' />
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
            {isLogin !== true ? (
              <>
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
                {loginBody}
              </Modal>
              </>
            ): (
              <>
              <MenuItem 
                onClick={props.handleLogout}
                >
                Logout
              </MenuItem>
              </>
            )}
            </div>
          ]}
        </Menu>
    )
}
export default MenuProfile;
