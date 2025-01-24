import React from 'react';
import { Clock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const navigate = useNavigate();

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{post.date}</span>
          <button 
            onClick={() => navigate(`/post/${post.id}`)}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Read More →
          </button>
        </div>
      </div>
    </article>
  );
}