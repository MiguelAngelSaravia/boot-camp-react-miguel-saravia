import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { useParams } from "react-router-dom";
import { Button } from '@material-ui/core';

import AppHeader from '../../components/AppBar';
import CustomCard from '../../components/Cards'
import { useStyles } from '../../utils/styles';
import {storage} from '../../utils/storage';
import { AUTH_STORAGE_KEY, AUTH_FAVORITES_LIST, VIDEO_LIST_DETAIL} from '../../utils/constants';
import {useAuth} from '../../providers/Auth';

function VideoId() {
    const classes = useStyles();
    const { id } = useParams();
    const {authenticated} = useAuth();
    const [addList, setList] = useState({});
    const [value, setValue] = useState({search: 'wizeline'});
    const [updateList, setUpdateList] = useState([]);
    const currentDataInfo = storage.get(VIDEO_LIST_DETAIL) || [{}];
    let removeItem = [];
    let findIndexValue = (element) => element === id;

    const criteriaFetch = (resp) => {
        setValue({...value, search: resp});
    }
    const handleAddFavorites = (profile) => {
        let add = [];
        const favoriteBody = {
            description: profile.description,
            id: id,
            image: profile.image,
            publishTine: profile.publishTine,
            title: profile.title,
        }
        add = storage.get(AUTH_FAVORITES_LIST) || []
        add.push(favoriteBody);
        storage.set(AUTH_FAVORITES_LIST, add);
        setList({...addList, favoriteBody});
    }

    const handleRemoveFavorites = (index) => {
        removeItem = storage.get(AUTH_FAVORITES_LIST) || [];
        removeItem.splice(index, 1);
        storage.set(AUTH_FAVORITES_LIST, removeItem);
        setList({...addList});
    }

    const updateCurrentList = () => {
        setUpdateList(storage.get(AUTH_FAVORITES_LIST) || []);
    }

    useEffect(()=> {
        updateCurrentList();
    }, [addList, id, authenticated]);

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
                    {authenticated === true ? (
                        <>
                        <Grid item xs={9}>
                            <h2>{currentDataInfo.videoInfo.title}</h2>
                        </Grid>
                        <Grid item xs={3}>
                        { updateList.map((x)=>x.id).findIndex(findIndexValue) === -1  ?
                        (
                            <>
                            <Button onClick={() => {handleAddFavorites(currentDataInfo.videoInfo)}}>Add to Favorites</Button>
                            </>
                        ) : (
                            <>
                            <Button onClick={() => {handleRemoveFavorites(currentDataInfo.youtubelist.map((x)=>x.id).findIndex(findIndexValue))}}>Remove From Favorites</Button>
                            </>)
                        }
                            
                        </Grid>
                        </>
                        ) : (
                    <>
                    <Grid item xs={9}>
                            <h2>{currentDataInfo.videoInfo.title}</h2>
                    </Grid>
                    </>
                    )}
                    </Grid>

                    <Grid container>
                        <Grid item xs>
                            <h4>{currentDataInfo.videoInfo.description}</h4>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={3}>
                {currentDataInfo.youtubelist.map((list, i) => {
                    return (
                        <div key={i}>
                            <CustomCard list={list} youtubeList = {currentDataInfo.youtubelist} />
                        </div>  
                    )
                })}
                </Grid>
            </Grid>

        </div>
    )
}
export default VideoId;