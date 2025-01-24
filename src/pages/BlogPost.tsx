import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { posts } from '../data/posts';

export function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </button>

        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
        />

        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-8">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
            <span>{post.date}</span>
          </div>

          <div className="prose prose-indigo max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">{post.content}</p>
          </div>
        </div>
      </div>
    </article>
  );
}