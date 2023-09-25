

const Post = ({id, title, content, authorName}) => {
  return (
    <section className="post">
      <h4 className="title-post">{title}</h4>
      <p className="author-post">by {authorName}</p><br/>
      <p>{content}</p>
    </section>
  )
}

export default Post