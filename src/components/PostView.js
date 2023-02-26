import PostList from './PostList'
import './PostView.css'
import Header from './Header'
import { useEffect, useState } from "react"

export default function PostView() {

    let [postList, setPostList] = useState([])

    useEffect(() => {
        fetch('https://insta-clone-iamst316.onrender.com/posts', {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        })
            .then(res => res.json())
            .then(data => {
                setPostList(data)
            })
    }, [])

    return <div>
        <Header />
        <PostList postList={postList} />
    </div>
}

