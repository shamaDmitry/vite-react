const Post = ({ title, body, isLoading }) => {
  if(isLoading) {
    return (
      <h1>Loading</h1>
    )
  }
  
  return (
    <div>
      <h3>
        {title}
      </h3>

      <div>
        {body}
      </div>
    </div>
  )
}

export default Post;