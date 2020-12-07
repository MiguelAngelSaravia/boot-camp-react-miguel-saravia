import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { useParams, useHistory } from "react-router-dom";

import AppHeader from '../../components/AppBar';
import CustomCard from '../../components/Cards'
import { useStyles } from '../../utils/styles';
import {storage} from '../../utils/storage';
import { AUTH_STORAGE_KEY, AUTH_FAVORITES_LIST} from '../../utils/constants';
import { Button } from '@material-ui/core';


function VideoId() {
    const classes = useStyles();
    const { id } = useParams();
    const currentList = useHistory();
    const [addList, setList] = useState({});
    const [value, setValue] = useState({search: 'wizeline'});
    const [updateList, setUpdateList] = useState([]);
    const isLogin = storage.get(AUTH_STORAGE_KEY);
    let removeItem = []
    let findIndexValue = (element) => element === id;

    const criteriaFetch = (resp) => {
        setValue({...value, search: resp});
    }
    const handleAddFavorites = (profile) => {
        let add = [];
        const favoriteBody = {
            id: id,
            title: profile.title,
            image: profile.thumbnails.high.url,
            description: profile.description
        }
        add = storage.get(AUTH_FAVORITES_LIST) || []
        add.push(favoriteBody);
        storage.set(AUTH_FAVORITES_LIST, add);
        setList({...addList, id: id, title:profile.title, image: profile.thumbnails.high.url, description: profile.description});
    }

    const handleRemoveFavorites = (index) => {
        removeItem = storage.get(AUTH_FAVORITES_LIST);
        removeItem.splice(index, 1);
        storage.set(AUTH_FAVORITES_LIST, removeItem);
    }

    const updateCurrentList = () => {
        setUpdateList(storage.get(AUTH_FAVORITES_LIST));
    }

    useEffect(()=> {
        updateCurrentList()
    }, [addList, id]);

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
                    {isLogin === true ? (
                        <>
                        <Grid item xs={9}>
                            <h2>{currentList.location.state.list.snippet.title}</h2>
                        </Grid>
                        <Grid item xs={3}>
                        { updateList.map((x)=>x.id).findIndex(findIndexValue) === -1  ?
                        (
                            <>
                            <Button onClick={() => {handleAddFavorites(currentList.location.state.list.snippet)}}>Add to Favorites</Button>
                            </>
                        ) : (
                            <>
                            <Button onClick={() => {handleRemoveFavorites(updateList.map((x)=>x.id).findIndex(findIndexValue))}}>Remove From Favorites</Button>
                            </>)
                        }
                            
                        </Grid>
                        </>
                        ) : (
                    <>
                    <Grid item xs={9}>
                            <h2>{currentList.location.state.list.snippet.title}</h2>
                    </Grid>
                    </>
                    )}
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
export default VideoId;