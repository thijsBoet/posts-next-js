import Link from "next/link";
import DeletePostButton from "./DeletePostButton";

const Post = ({id, title, content, authorName}) => {
  return (
		<section className='post'>
			<h4 className='title-post'>{title}</h4>
			<p className='author-post'>by {authorName}</p>
			<br />
			<p>{content}</p>
			<Link href={'/'}>
				<DeletePostButton
					className='delete btn'
					postId={id}	
				></DeletePostButton>
			</Link>
			<Link href='/add-post'>
				<button className='btn'>Add Post</button>
			</Link>
		</section>
  );
}

export default Post