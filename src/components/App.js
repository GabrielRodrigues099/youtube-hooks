import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';
import './styles.css';

const App = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('music');

    useEffect(()=>{
        setSelectedVideo(videos[0]);
    }, [videos])

    return (
        <div className='ui container content' style={{background: '#fafafa'}}>
            <SearchBar title='Buscador de vídeos' onFormSubmit={search} />
            <div className='ui grid'>
                <div className='wrapper ui row'>
                    <div className='eleven wide column margin__column'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className='five wide column space__column'>
                        <VideoList
                         onVideoSelect={setSelectedVideo} 
                         videos={videos} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );

};

export default App;
