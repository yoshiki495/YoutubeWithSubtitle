import {useState, useEffect} from 'react'
import YouTube from 'react-youtube';

function YouTubeContent() {
  const param = UrlParameter().replace('?param=', '');
  return (
    <YouTube videoId={param} />
  );
}

const Fetch = () => {

  const [posts, setPosts] = useState([])
  const param = UrlParameter();

  useEffect(() => {
      fetch('https://oudi6xgb04.execute-api.ap-northeast-1.amazonaws.com/default/GetYoutubeInfo/' + param, {method: 'GET'})
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setPosts(data)
      })
  },[])

  return (
      <div style={{overflow:'scroll', height:'360px'}}>
              {
                  posts.map(post => 
                    <p key={post.text}>{post.text}</p>
                  )
              }
      </div>
  )
}

const UrlParameter = () => {
  const param = window.location.search;
  return param;
}


export {YouTubeContent, Fetch};