import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

import { useStyles } from '../../utils/styles';
import { useVideInfo } from '../../providers/Auth';


function CustomCard(props) {
  const history = useHistory();
  const classes = useStyles();
  const {snippet, id} = props.list;
  const {updateInfoList} = useVideInfo();
  const currentData = props.list !== undefined ? props.list : {};

  const handleCard = () => {
    const videoInfo = {
      description: currentData.snippet.description,
      id: id.videoId,
      image: currentData.snippet.thumbnails.high.url,
      publishTine: currentData.snippet.publishTime,
      title: currentData.snippet.title,
    }
    const data = {
      videoInfo, youtubelist: props.youtubeList
    }
    updateInfoList(data)
    history.push({
      pathname: `/home/${id.videoId}`,
      search: '',
      state: ''
    });
  }

  return (
    <Card className={classes.cardMain} onClick={handleCard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={snippet.thumbnails.high.url}
          title={snippet.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {snippet.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {snippet.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
 export default CustomCard;