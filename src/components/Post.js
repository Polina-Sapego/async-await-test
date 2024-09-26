import './Post.css'

function Post(prop) {

   return <div className='post'>
    <small>{prop.id} </small>
     <h2>{prop.title}</h2>
     <p>{prop.body}</p>
     <h3>User Id: {prop.userId}</h3>
     </div>
    
}


export default Post