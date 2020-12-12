import { green } from '@material-ui/core/colors';
import { fade, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flex:1,
        marginTop: 30,
        margin: 30
    },
    rootVideoId:{
      flex:1,
      marginTop: 2,
      margin: 2
    },
    cardContainer: {
        width: '85%',
        margin: 'auto'
    },
    cardMain: {
        width: '37.5vh',
        height: '45vh',
        margin: 'auto'
      },
    media: {
        height: 140,
      },
    titleBody: {
        display: 'flex',
        justifyContent:'center'
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },

    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    paper: {
      position: 'absolute',
      top:'40%',
      left:'35%',
      height: '20vh',
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: theme.spacing(2, 4, 3),
    },
    favoritesContainer: {
      marginTop: '5px',
      flex: 1,
      margin: 'auto',
    },
    customSwitch: {
      'MuiSwitch-colorPrimary': {
        color: green,
      }
    }
  }));