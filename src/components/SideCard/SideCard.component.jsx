import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useHistory } from "react-router-dom";
import { useVideInfo } from '../../providers/Auth';

  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
    dump: {
        marginBottom: '0px'
    }
  }));

function SideCard(props) {
    const classes = useStyles();
    const images = props.list;
    const history = useHistory();
    const {updateInfoList} = useVideInfo();

    const handleVideoDetail = (data) => {
      const videoInfo = {
        description: data.description,
        id: data.id,
        image: data.image,
        publishTine: data.publishTime,
        title: data.title,
      }
      const currentData = {
        videoInfo, isfavorites: true
      }
      updateInfoList(currentData);
      history.push({
        pathname: `/home/${data.id}`,
        search: '',
        state: ''
      });
    }
    return (
        <>
            {images.map((image, i) => {
                return(
                    <div className={classes.root} key={i}>
                        <Grid container spacing={1} className={classes.dump}>
                            <Grid item xs={12}>
                                <ButtonBase
                                    focusRipple
                                    key={image.id}
                                    className={classes.image}
                                    focusVisibleClassName={classes.focusVisible}
                                    style={{
                                        width: '100%',
                                    }}
                                    onClick={() => {handleVideoDetail(image)}}
                                >
                                    <span
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url(${image.image})`,
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: '100% 30vh',
                                    }}
                                    />
                                    <span className={classes.imageBackdrop} />
                                    <span className={classes.imageButton}>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                    >
                                        {image.title}
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                    </span>
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </div>
                )
            })}
        </>
    )
}

export default SideCard;