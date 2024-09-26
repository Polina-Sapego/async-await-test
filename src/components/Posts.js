import { useState } from "react"
import Post from "./Post"
import { useEffect } from "react"

function Posts() {
   const [posts, setPosts] =useState([])
   const [error, setError] = useState('')
   const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
   (async function fetchData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await res.json()
        setPosts(posts)
    
    } catch (error) {
        setError(error.message)
    }
    setIsLoading(false)
})()


}, [])


//    useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts => {
//         console.log(posts)
//         setPosts(posts)
//     })
//     .catch((error) => setError(error.message))
//     .finally(() => setIsLoading(false))
//    }, [])



if (error){
    return <h1>Error: {error}</h1>
}

    return (
        <>
            <h1>Post</h1>
            <hr/>
            {isLoading ? <h1>Loading...</h1>
            :
            posts.map((post) => {
                return <Post key={post.id} {...post}/>
            })  }
           
            <Post />   
             <Post />

        </>
    )
}


export default Posts