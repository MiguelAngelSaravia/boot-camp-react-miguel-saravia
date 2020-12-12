import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY, AUTH_STORAGE_PROFILE, VIDEO_LIST_YOUTUBE, VIDEO_SELECTED_BY_ID} from '../../utils/constants';
import {AuthContext, VideoInfoContext} from '../Context/AuthContext';

import {storage} from '../../utils/storage';

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function useVideInfo() {
  const context = useContext(VideoInfoContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [infoList, setInfoList] = useState({});
  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback((profile) => {
    setAuthenticated(true);
    storage.set(AUTH_STORAGE_PROFILE, profile);
    storage.set(AUTH_STORAGE_KEY, true);
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.delete(AUTH_STORAGE_PROFILE);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  const updateInfoList = useCallback((data) => {
    let list = [];
    const currentData = data.videoInfo;
    setInfoList({...infoList, currentData});
    if(!data.isfavorites) {
      data.youtubelist.map((resp) => {
        const videosList = {
          description: resp.snippet.description,
          id: resp.id.videoId,
          image: resp.snippet.thumbnails.high.url,
          publishTime: resp.snippet.publishTime,
          title: resp.snippet.title,
        }
        list.push(videosList);
      });
      storage.set(VIDEO_LIST_YOUTUBE, list);
      storage.set(VIDEO_SELECTED_BY_ID, data.videoInfo);
    }
    if(data.hasOwnProperty('youtubelist') ){
      if(data.youtubelist.hasOwnProperty('description')){
        storage.set(VIDEO_LIST_YOUTUBE, data.youtubelist);
      }
    }
    storage.set(VIDEO_SELECTED_BY_ID, data.videoInfo);
  }, [infoList]);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated}}>
      <VideoInfoContext.Provider value={{updateInfoList}} >
        {children}
      </VideoInfoContext.Provider>
    </AuthContext.Provider>
  );
}

export { useAuth, useVideInfo };
export default AuthProvider;