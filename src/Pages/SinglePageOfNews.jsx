import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../Components/news/blogData';

const SinglePageOfNews = () => {
  const { articleID } = useParams();
  const article = blogPosts?.find((ad) => ad.id == articleID);

  if (!article) {
    return <div className="text-center text-red-500">Article not found</div>;
  }

  const { image, date, title, description, secondDescription } = article;

  return (
    <div className="flex flex-col items-center p-6 max-w-4xl mx-auto font-custom">
         <div className="lg:mt-6">
        <h1 className="text-2xl lg:text-5xl lg:leading-[65px] font-bold text-white mb-2">{title}</h1>
        <p className="text-sm text-[#207ead] py-6">{date}</p>
        <p className="text-lg text-white leading-relaxed">{description}</p>
        <p className="text-lg text-white leading-relaxed mt-6">{secondDescription}</p>
      </div>
     
     
    </div>
  );
}

export default SinglePageOfNews;
