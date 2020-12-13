import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { useParams } from "react-router-dom";
import { Button } from '@material-ui/core';

import AppHeader from '../../components/AppBar';
import { useStyles } from '../../utils/styles';
import {storage} from '../../utils/storage';
import { AUTH_FAVORITES_LIST, VIDEO_LIST_YOUTUBE, VIDEO_SELECTED_BY_ID} from '../../utils/constants';
import {useAuth} from '../../providers/Auth';
import SideCard from '../../components/SideCard/SideCard.component';

function VideoId() {
    const classes = useStyles();
    const { id } = useParams();
    const {authenticated} = useAuth();
    const [addList, setList] = useState({});
    const [value, setValue] = useState({search: 'wizeline'});
    const [updateList, setUpdateList] = useState([]);
    const [youtubelist, setYoutubelist] = useState([]);
    const currentVideoDetail = storage.get(VIDEO_SELECTED_BY_ID) || {};
    const currentFavoritesList = storage.get(AUTH_FAVORITES_LIST) || [];

    let removeItem = [{}];
    let findIndexValue = (element) => element === id;

    const criteriaFetch = (resp) => {
        setValue({...value, search: resp});
    }
    const handleAddFavorites = (profile) => {
        let add = [];
        const favoriteBody = {
            isFavoriteList: true,
            description: profile.description,
            id: id,
            image: profile.image,
            publishTime: profile.publishTime,
            title: profile.title,
        }
        add = storage.get(AUTH_FAVORITES_LIST) || []
        add.push(favoriteBody);
        storage.set(AUTH_FAVORITES_LIST, add);
        setList({...addList, favoriteBody});
    }

    const handleRemoveFavorites = (index) => {
        removeItem = storage.get(AUTH_FAVORITES_LIST) || [{}];
        removeItem.splice(index, 1);
        storage.set(AUTH_FAVORITES_LIST, removeItem);
        setList({...addList});
    }

    const updateCurrentList = () => {
        setUpdateList(storage.get(AUTH_FAVORITES_LIST) || []);
        setYoutubelist(storage.get(VIDEO_LIST_YOUTUBE) || [])
    }

    useEffect(()=> {
        updateCurrentList();
    }, [addList, id, authenticated]);

    return (
        <div>
            <AppHeader value={value.search} onCriteria={criteriaFetch}/>
            <div className={classes.rootVideoId}>
                <Grid container spacing={1}>
                    <Grid item xs>
                        <iframe
                            width="100%"
                            height="550"
                            allowFullScreen
                            frameBorder="0"
                            title="rick roll"
                            src={`https://www.youtube.com/embed/${id}?controls=1&autoplay=0`}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            />
                        <Grid container style={{marginTop:'2%'}}>
                            <Grid item xs style={{paddingLeft: 10}}>
                                <Grid container >
                                    <Grid item xs={12} style={{display: 'flex', justifyContent:'center'}}>
                                        <h2>{currentVideoDetail.title}</h2>
                                    </Grid>
                                    <Grid item xs>
                                        <h4>{currentVideoDetail.description}</h4>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {authenticated ? (<>
                                <Grid item xs={3} style={{display: 'flex', justifyContent:'flex-end'}}>
                            { updateList.map((x)=>x.id).findIndex(findIndexValue) === -1  ?
                                (
                                 <>
                                    <Button onClick={() => {handleAddFavorites(currentVideoDetail)}} style={{color: 'blue', height: '6vh'}}>Add to Favorites</Button>
                                 </>
                                ) : (
                                 <>
                                    <Button onClick={() => {handleRemoveFavorites(currentFavoritesList.map((x)=>x.id).findIndex(findIndexValue))}} style={{color: 'red', height: '6vh'}} >Remove From Favorites</Button>
                                 </>
                                )}
                            </Grid>
                            </>) : (<></>)}
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <SideCard list={youtubelist} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default VideoId;