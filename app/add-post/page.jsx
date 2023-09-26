'use client';
import DeletePostButton from '../components/DeletePostButton';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '@/app/page.module.css';

const AddPost = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const router = useRouter();

	const handleTitleChange = event => {
		setTitle(event.target.value);
	};

	const handleContentChange = event => {
		setContent(event.target.value);
	};

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			await fetch('/api/add-post', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, content }),
			});
			router.refresh();
		} catch (error) {
			console.error(error);
		}

		setTitle('');
		setContent('');
	};
	return (
		<main className={styles.main}>
			<h1 className='header1'>Add Post</h1>

			<form onSubmit={handleSubmit} className='add-post-form'>
				<div>
					<label htmlFor='title'>Title</label>
				</div>
				<div>
					<input
						type='text'
						id='title'
						name='title'
						value={title}
						onChange={handleTitleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor='content'>Content</label>
				</div>
				<div>
					<textarea
						id='content'
						name='content'
						value={content}
						onChange={handleContentChange}
						required
					/>
				</div>
				<div>
					<button type='submit' className='btn'>
						Submit
					</button>
				</div>
				
				<Link href={'/'}>
					<button
						className='btn'
						style={{ background: '#7e7e7e', border: 'none' }}>
						View Feed
					</button>
				</Link>
			</form>
		</main>
	);
};

export default AddPost;
