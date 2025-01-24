import { BlogPost } from '../types/blog';

export const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    excerpt: 'Learn how to build modern web applications with React and TypeScript',
    content: 'React and TypeScript are powerful tools that work great together...',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies in web development',
    content: 'The web development landscape is constantly evolving...',
    author: 'Michael Chen',
    date: 'March 14, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80',
    readTime: '7 min read'
  },
  {
    id: '3',
    title: 'Mastering CSS Grid Layout',
    excerpt: 'A comprehensive guide to building complex layouts with CSS Grid',
    content: 'CSS Grid has revolutionized the way we build web layouts...',
    author: 'Emma Davis',
    date: 'March 16, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80',
    readTime: '6 min read'
  }
];