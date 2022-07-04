import React, {useState, useEffect} from 'react'

const ApiFetch = () => {

    const [posts, setPosts] = useState<{id: number; title: string}[]>([])
    
    const fetch = require('node-fetch');

    const url = 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ceb8338b5amshf6a77c1a3455bcdp148339jsn76f9371a21b8',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    };

    useEffect(() => {
        fetch(url, options)
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
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
            
        </div>
    )
}

export default ApiFetch