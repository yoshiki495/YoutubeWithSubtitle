import React, {useState, useEffect} from 'react'
import YouTube from 'react-youtube';
import {
    YoutubeCaption, 
    getSubtitles, 
    getSubtitlesContent 
    } from '@drorgl/youtube-captions-scraper';
import { ConnectedTvOutlined } from '@mui/icons-material';

function YouTubeContent() {
  return (
    <YouTube videoId="3zN8d6TxmzE" />
  );
}

const Fetch = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
      fetch('https://oudi6xgb04.execute-api.ap-northeast-1.amazonaws.com/default/GetYoutubeInfo', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setPosts(data)
      })
  },[])

  return (
      <div>
          <ul>
              {
                  posts.map(post => 
                  <li key={post.id}>{post.title}</li>
                  )
              }
          </ul>

      </div>
  )
}


export {YouTubeContent, Fetch};