import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import useApi from '../../utils/hooks/useApiYoutube';
import CustomCard from '../Cards';
import { useStyles } from '../../utils/styles';

function CardContent({query}) {
    const { youtubeList, loading } = useApi(query);
    const classes = useStyles()
    const currentList = youtubeList;

    if(loading) return <div className={classes.loadingContainer}>
        <CircularProgress />
    </div>
    
    
    return (
        <div className={classes.root}>
        <Typography className={classes.titleBody} gutterBottom variant="h2" component="h2"> {query.toUpperCase()} </Typography>
            <Grid className={classes.cardContainer} container spacing={3}>
                {youtubeList.map((list, i) => {
                    return (
                        <Grid item xs key={i}>
                            <CustomCard list={list} youtubeList = {currentList}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
export default CardContent;
