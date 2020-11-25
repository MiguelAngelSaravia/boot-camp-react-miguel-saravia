import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../../utils/styles';

function CustomCard(props) {
  const classes = useStyles();
  const {snippet} = props.list

  return (
    <Card className={classes.cardMain}>
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