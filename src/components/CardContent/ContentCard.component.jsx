import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useApi from '../../utils/hooks/useApiYoutube';
import CustomCard from '../Cards';
import { useStyles } from '../../utils/styles';

function CardContent({query}) {
    const { youtubeList, loading } = useApi(query);
    const classes = useStyles()

    if(loading) return <div>Loading...</div>
    
    return (
        <div className={classes.root}>
        <Typography className={classes.titleBody} gutterBottom variant="h2" component="h2">The search filter is {query} </Typography>
            <Grid className={classes.cardContainer} 
                container
                spacing={3}>
                {youtubeList.map((list, i) => {
                    return (
                        <Grid item xs key={i}>
                            <CustomCard list={list}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
export default CardContent;
