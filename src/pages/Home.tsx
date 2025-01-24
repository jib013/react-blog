import React from 'react';
import { FeaturedPost } from '../components/FeaturedPost';
import { BlogCard } from '../components/BlogCard';
import { posts } from '../data/posts';

export function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <FeaturedPost post={posts[0]} />
      
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}