import YouTube from 'react-youtube';
import {
    YoutubeCaption, 
    getSubtitles, 
    getSubtitlesContent 
    } from '@drorgl/youtube-captions-scraper';

function YouTubeContent() {
  return (
    <YouTube videoId="動画ID" />
  );
}

async function GetSubtitles(){
    let youtubeCaptions = new YoutubeCaption('XXXXX' /*youtube video id*/);
    let subtitles = await youtubeCaptions.getSubtitles('en' /*optional language*/);
    return subtitles;
}

export {YouTubeContent, GetSubtitles};