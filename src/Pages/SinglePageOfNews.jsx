import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../Components/news/blogData';

const SinglePageOfNews = () => {
  const { articleID } = useParams();
  const article = blogPosts?.find((ad) => ad.id == articleID);

  if (!article) {
    return <div className="text-center text-red-500">Article not found</div>;
  }

  const { image, image1, image2, date, shortTitle, description, secondDescription } = article;

  return (
    <div className="flex flex-col items-center p-6 max-w-6xl mx-auto font-custom">
      <div className="lg:mt-6">
        <h1 className="text-2xl lg:text-5xl lg:leading-[55px] font-bold text-white mb-2 ">{shortTitle}</h1>
        <p className="text-sm text-[#207ead] py-6">{date}</p>
        <p className="text-lg text-white leading-relaxed text-justify tracking-tighter">{description}</p>
      </div>
<div className='grid lg:grid-cols-2 gap-4'>
      {image1 && <img src={image1} alt="" className="w-full lg:h-[80vh] object-cover lg:mt-12 rounded-[18px]" />}
      {image2 && <img src={image2} alt="" className="w-full lg:h-[80vh] object-cover lg:mt-16 rounded-[18px]" />}
      </div>
      <p className="text-lg text-white leading-relaxed mt-6  text-justify tracking-tighter">{secondDescription}</p>

    </div>
  );
}

export default SinglePageOfNews;
