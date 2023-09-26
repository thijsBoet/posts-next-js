import prisma from '@/lib/prisma';
import Post from './components/Post';
import styles from './page.module.css';

async function getPost() {
	const posts = await prisma.post.findMany({
		where: { published: true },
		include: {
			author: {
				select: { name: true },
			},
		},
	});
	return posts;
}

export default async function Home() {
	const posts = await getPost();
	return (
		<main className={styles.main}>
			<h1>Feed</h1>
			{posts.map(post => (
				<Post
					key={post.id}
					id={post.id}
					authorName={post.author.name}
					title={post.title}
					content={post.content}
				/>
			))}
		</main>
	);
}
