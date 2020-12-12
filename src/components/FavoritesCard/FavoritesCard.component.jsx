import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

import { useStyles } from '../../utils/styles';
import {useVideInfo} from '../../providers/Auth';
import { storage } from '../../utils/storage';
import { VIDEO_LIST_YOUTUBE } from '../../utils/constants';


function FavoritesCard(props) {
  const history = useHistory();
  const classes = useStyles();
  const {updateInfoList} = useVideInfo();
  const {title, description, image, id} = props.list

  const handleCard = () => {
    const videoInfo = {
      description: props.list.description,
      id: props.list.id,
      image: props.list.image,
      publishTine: '',
      title: props.list.title,
    }
    const data = {
      videoInfo, youtubelist: props.youtubeList, isfavorites: true
    }
    // storage.delete(VIDEO_LIST_YOUTUBE);
    storage.set(VIDEO_LIST_YOUTUBE, props.youtubeList);
    updateInfoList(data);
    history.push({
      pathname: `/home/${id}`,
      search: '',
      state: ''
    });
  }

  return (
    <Card className={classes.cardMain} onClick={handleCard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
 export default FavoritesCard;