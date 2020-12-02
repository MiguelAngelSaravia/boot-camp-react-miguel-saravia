import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


import { useStyles } from '../../utils/styles';
import RenderMenu from '../MenuProfile';
import DrawerMenu from '../DrawerMenu';


function CustomAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [openDrawer, setOpenDrower] = useState({open: false})
  const [searchValue, setSearchValue] = useState({criteria: props.value})
  const [openModal, setOpenModal] = useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [switchSatus, setSwitchSatus] = useState({status: false});

  const handleChange = (event) => {
    setSwitchSatus({ ...switchSatus, [event.target.name]: event.target.checked });
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
    handleOpen();
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrower({...openDrawer, open: open});
  };

  const handleOpen = () => {
    console.log('menu modal');
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const searchCriteria = (event) => {
    if(event.type === 'keydown' && event.keyCode === 13) {
      props.onCriteria(event.target.value);
      setSearchValue( {criteria: event.target.value});
    }
  }


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <RenderMenu menuId={menuId} anchorEl={anchorEl} closeBtn = {handleMenuClose} openMenu = {isMenuOpen} openModal={openModal} handleClose={handleClose} />
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <RenderMenu menuId={mobileMenuId} anchorEl={mobileMoreAnchorEl} closeBtn={handleMobileMenuClose} openMenu={isMobileMenuOpen} handleClick={handleProfileMenuOpen} />
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <DrawerMenu toggleDrawer={toggleDrawer} openDrawer={openDrawer.open} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              defaultValue={searchValue.criteria}
              onKeyDown={(e) => searchCriteria(e)}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <FormControlLabel
            control={
              <Switch className={classes.customSwitch}
                checked={switchSatus.status}
                onChange={(e) => handleChange(e)}
                name='status'
                color='default'
              />
            }
            label="Dark Mode"
          />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
export default CustomAppBar;