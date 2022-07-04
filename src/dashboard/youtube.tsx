import {useState, useEffect} from 'react'
import YouTube from 'react-youtube';
import {
  useParams
} from 'react-router-dom';

function YouTubeContent() {
  return (
    <YouTube videoId="3zN8d6TxmzE" />
  );
}

const Fetch = () => {

  const [posts, setPosts] = useState([])
  console.log(UrlParameter());

  useEffect(() => {
      fetch('https://oudi6xgb04.execute-api.ap-northeast-1.amazonaws.com/default/GetYoutubeInfo/?param=' + "3zN8d6TxmzE", {method: 'GET'})
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setPosts(data)
      })
  },[])

  return (
      <div>
              {
                  posts.map(post => 
                    <p key={post.text}>{post.text}</p>
                  )
              }
      </div>
  )
}

const UrlParameter = () => {
  const  {params} = useParams();
  return {params};
}


export {YouTubeContent, Fetch};