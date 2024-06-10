import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { Link } from 'react-router-dom';
import { blogPosts } from './blogData';

const Blog = () => {

  const handleClick = () => {
    smoothscroll.polyfill();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section className="py-10 lg:py-12 font-custom">
      <div className="mx-auto px-6 lg:px-12">
        <p className='text-[#207ead] lg:py-1 font-bold'>COMPANY NEWS</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-10 lg:w-1/2">Stay informed with the latest news, articles, and insights about Sync Code</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {blogPosts?.map(post => (
            <div key={post.id} className=" relative">
              <div className="relative flex items-center">
                <img src={post.image} alt={post.title} className="w-[100vh]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 lg:p-6">
                  <h4 className="text-base text-white font-medium mt-2">{post.title}</h4>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#207ead] to-[#00ffc3] p-4 lg:p-6 transition-all duration-300">
                <span className="text-white font-medium block">{post.date}</span>
                <p className="text-white text-base my-3">{post.description}</p>
                <Link to={`/articles/${post.id}`} onClick={handleClick} className="cursor-pointer text-lg text-indigo-600 font-semibold"><p>Read more..</p></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
