import React from 'react';

const blogPosts = [
  {
    id: 1,
    date: "Jan 01, 2023",
    title: "Clever ways to invest in product to organize your portfolio",
    description: "Discover smart investment strategies to streamline and organize your portfolio.",
    image: "https://pagedone.io/asset/uploads/1696244317.png",
    link: "javascript:;"
  },
  {
    id: 2,
    date: "Feb 01, 2023",
    title: "How to grow your profit through systematic investment with us",
    description: "Unlock the power of systematic investment with us and watch your profits soar.",
    image: "https://pagedone.io/asset/uploads/1696244340.png",
    link: "javascript:;"
  },
  {
    id: 3,
    date: "Mar 01, 2023",
    title: "How to analyze every holdings of your portfolio",
    description: "Our comprehensive guide will equip you with the tools and insights needed to analyze every holding in your portfolio.",
    image: "https://pagedone.io/asset/uploads/1696244356.png",
    link: "javascript:;"
  },
  {
    id: 3,
    date: "Mar 01, 2023",
    title: "How to analyze every holdings of your portfolio",
    description: "Our comprehensive guide will equip you with the tools and insights needed to analyze every holding in your portfolio.",
    image: "https://pagedone.io/asset/uploads/1696244356.png",
    link: "javascript:;"
  }
];

const Blog = () => {
  return (
    <section className="py-12 font-custom">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Our latest blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="group border border-gray-300 rounded-2xl">
              <div className="flex items-center">
                <img src={post.image} alt={post.title} className="rounded-t-2xl w-full" />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl">
                <span className="text-white font-medium mb-3 block">{post.date}</span>
                <h4 className="text-xl text-white font-medium leading-8 mb-5">{post.title}</h4>
                <p className="text-white leading-6 mb-10">{post.description}</p>
                <a href={post.link} className="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
