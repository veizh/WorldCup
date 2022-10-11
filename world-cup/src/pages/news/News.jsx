import './news.css'
import React from 'react'
import { server } from '../../utils/servers';
import { useState } from 'react';
import  Post  from "../../components/posts/_Post"


    
    




const PostFetched = () => {

    const [posts,setPosts]=useState(undefined)

    if(posts===undefined){
         fetch(server + "/post/getPosts", {
        method:"get",
        headers:{"Content-Type":"application/json"}
    })
    .then(res => res.json())
    .then(res => setPosts(res))
    }else{
       return(
            <div className="allPost">
                {posts.map(e => <Post key={e._id} {...e} />)}
            </div>
    ) 
    }
}

const News = () => {

    return (<>
                <div className="backgroundNews"></div>
                <div className="containerPost">
                    <h1>L'info sur la coupe du monde</h1>
                    <PostFetched />


                </div>
            </>
    )
}
export default News