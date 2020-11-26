import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

import { useStyles } from '../../utils/styles';

function CustomCard(props) {
  const history = useHistory()
  const classes = useStyles();
  const {snippet, id} = props.list

  const handleCard = () => {
    history.push(`/home/${id.videoId}`, {list: props.list, youtubelist: props.youtubeList});
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