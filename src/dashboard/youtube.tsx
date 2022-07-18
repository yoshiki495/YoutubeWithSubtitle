import {useState, useEffect} from 'react'
import YouTube from 'react-youtube';
import { TextField } from '@mui/material';

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
      fetch(process.env.REACT_APP_ENDPOINT_TO_GET_YOUTUBE_INFO + param, {method: 'GET'})
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

const ManualPaste = () => {
  return (
    <TextField
      id="outlined-multiline-static"
      multiline
      rows={14}
      style = {{width: 625}}
    />
  )
}

const UrlParameter = () => {
  const param = window.location.search;
  return param;
}

const Display = (props) =>{
  if(props.auto == true){
    return <Fetch/>
  }else{
    return <ManualPaste/>
  }
}


export {YouTubeContent, Fetch};