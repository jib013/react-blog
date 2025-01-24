import React from 'react';
import { Clock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BlogPost } from '../types/blog';

interface FeaturedPostProps {
  post: BlogPost;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  const navigate = useNavigate();

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-64 lg:h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-8">
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
            Featured Post
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-6">{post.excerpt}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          <button 
            onClick={() => navigate(`/post/${post.id}`)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Read Article →
          </button>
        </div>
      </div>
    </div>
  );
}