import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';

import AppHeader from '../../components/AppBar';
import { useStyles } from '../../utils/styles';
import {storage} from '../../utils/storage';
import {AUTH_FAVORITES_LIST} from '../../utils/constants';
import FavoriteCard from '../../components/FavoritesCard';

function Favorites() {
    const [value, setValue] = useState({search: 'wizeline'});
    const [favoritesList, setFavoritesList] = useState([]);
    const classes = useStyles();

    const criteriaFetch = (resp) => {
        setValue({...value, search: resp});
    }

    useEffect(() => {
        setFavoritesList(storage.get(AUTH_FAVORITES_LIST) || []);
    }, [])

    return (
        <div>
            <AppHeader value={value.search} onCriteria={criteriaFetch}/>
        <div className={classes.root}>
            <Grid className={classes.cardContainer} 
                container
                spacing={3}>
                {favoritesList.map((list, i) => {
                    return (
                        <Grid item xs key={i}>
                            <FavoriteCard list={list} youtubeList = {favoritesList}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
            
        </div>
    )
}
export default Favorites;