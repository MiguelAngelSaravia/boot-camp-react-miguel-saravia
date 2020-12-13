import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { useStyles } from '../../utils/styles';
import {storage} from '../../utils/storage';
import {AUTH_STORAGE_KEY} from '../../utils/constants';
import {useAuth} from '../../providers/Auth';
import ServiceLogin from '../../mockLogin/Login.api';

function MenuProfile(props) {
  const classes = useStyles();
  const isLogin = storage.get(AUTH_STORAGE_KEY);
  const { logout, login } = useAuth();
  const [userValue, setUserValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorMessage, setErrorMessage]= useState('');


  const handleUser = (e) => {
    setUserValue(e.target.value);
  }

  const handlePassword = (e) => {
    setPasswordValue(e.target.value);
  }

  const handleLogin = (username, password) => {
    ServiceLogin(username, password).then(((resp) => {
      setTimeout(() => {
        props.handleClose();
        setErrorMessage('');
      }, 0);
      login(resp);
    })).catch((e) => {
        setErrorMessage(e.message);
    });
  }

  const handleCloseModal = () => {
    props.handleClose()
    setErrorMessage('');
  }

  const handleLogout = (event) => {
    props.closeBtn(event);
    logout();
  }

  const loginBody = (
    <div className={classes.paper}>
    {/* <h1>Login</h1> */}
    {errorMessage.length > 0 ? (<div style={{background: 'tomato'}}><h3 style={{display: 'flex', justifyContent:'center', color: 'white'}}>{errorMessage}</h3></div>) : (<><h1>Login</h1></>)}
      <form >
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
              <Button onClick={handleCloseModal}>Cancel</Button>
              <Button onClick={() => {handleLogin(userValue, passwordValue)}} color="primary">Login</Button>
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
                onClick={(event) => {props.closeBtn(event)}}
                >
                Login
              </MenuItem>
              <Modal
                open={props.openModal}
                onClose={handleCloseModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                {loginBody}
              </Modal>
              </>
            ): (
              <>
              <MenuItem 
                onClick={(event) => {handleLogout(event)}}
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
