import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { useParams, useHistory } from "react-router-dom";

import AppHeader from '../../components/AppBar';
import CustomCard from '../../components/Cards'
import { useStyles } from '../../utils/styles';


function Favorites() {
    const classes = useStyles();
    const { id } = useParams();
    const currentList = useHistory();
    const [value, setValue] = useState({search: 'wizeline'});
    const criteriaFetch = (resp) => {
        setValue({...value, search: resp});
    }

    useEffect(() => {
        console.log('id del videl', currentList);
    }, []);

    return (
        <div>
            <AppHeader value={value.search} onCriteria={criteriaFetch}/>
            <Grid className={classes.favoritesContainer}  container >
                <Grid item xs={9}>
                    <iframe
                        width="100%"
                        height="550"
                        allowFullScreen
                        frameBorder="0"
                        title="rick roll"
                        src={`https://www.youtube.com/embed/${id}?controls=1&autoplay=0`}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    />

                    <Grid container spacing={8}>
                        <Grid item xs={9}>
                            <h2>{currentList.location.state.list.snippet.title}</h2>
                        </Grid>
                        <Grid item xs={3}>
                            <h3>Add to Favorites</h3>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs>
                            <h4>{currentList.location.state.list.snippet.description}</h4>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={3}>
                {currentList.location.state.youtubelist.map((list, i) => {
                    return (
                        <div key={i}>
                            <CustomCard list={list} youtubeList = {currentList.location.state.youtubelist} />
                        </div>  
                    )
                })}
                </Grid>
            </Grid>

        </div>
    )
}
export default Favorites;