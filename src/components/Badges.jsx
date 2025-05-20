import React, { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';

const badges = [
    {
      name: 'Full Stack Development Certificate',
      badgeUrl: 'https://images.credly.com/size/680x680/images/997d4586-e7b2-4174-9c76-5c7304953e2c/image.png',
      badgeLink: 'https://www.credly.com/badges/64170817-dedb-4573-9e65-164f82ed7846/public_url',
      skills: ['Responsive Web Design', 'Back-End Development', 'Front-End Development']
    },
  {
    name: 'Meta Back-End Developer Certificate',
    badgeUrl: 'https://images.credly.com/size/680x680/images/4d81763c-b917-4ab9-92be-103af95c0a21/image.png',
    badgeLink: 'https://www.credly.com/earner/earned/share/f16eb6be-ffaa-4ff2-8ce2-5798e08d3d68',
    skills: ['Python', 'Django', 'APIs', 'Databases', 'Version Control', 'Back-End Architecture'],
  },
  {
    name: 'Meta Front-End Developer Certificate',
    badgeUrl: 'https://images.credly.com/size/680x680/images/e91ed0b0-842b-417f-8d2f-b07535febdda/image.png',
    badgeLink: 'https://www.credly.com/badges/f16eb6be-ffaa-4ff2-8ce2-5798e08d3d68/public_url',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'Version Control'],
  },
  {
    name: 'Google Data Analytics Certificate',
    badgeUrl: 'https://images.credly.com/images/d41de2b7-cbc2-47ec-bcf1-ebecbe83872f/GCC_badge_DA_1000x1000.png',
    badgeLink: 'https://www.credly.com/badges/8060d2d8-369c-444d-b58f-8c54474abb31/public_url',
    skills: ['Data Analysis', 'Data Visualization', 'SQL', 'Excel', 'Data Cleaning', 'Problem Solving'],
  },
  {
    name: 'Google UX Design Professional Certificate',
    badgeUrl: 'https://images.credly.com/size/680x680/images/78d71457-7637-4b02-8c0d-739814070bce/GCC_badge_UX_1000x1000.png',
    badgeLink: 'https://www.credly.com/badges/754e5d1a-b8f3-49f1-b548-b8bb6111dde6/public_url',
    skills: ['Wireframing', 'Prototyping', 'User Experience Reasearch', 'User Experience Design','Conduncting Usability Studies', 'Figma']
  },
];

const Badges = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % badges.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + badges.length) % badges.length);
  };

  return (
    <section id ="badges"
    className=" p-6 min-h-screen flex justify-center " >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 rounded-xl  mb-3 hover:-translate-y-1 transition-all" >
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">My Badges</h2>

        <div className="flex flex-cols md:flex-cols items-center justify-center md:space-x-6 space-y-6  md:space-y-0 ">

          {/* Previous Button */}
          <button
            className="bg-gradient-to-r from-blue-500 to-pink-600 text-white p-4 rounded-full hover:shadow-lg transition-all transform hover:scale-110"
            onClick={prevSlide}
          >
            &lt;
          </button>

          {/* Badge Card */}
          <div className="w-full md:w-3/4  shadow-lg rounded-lg flex flex-col items-center justify-between h-[500px]">
            <img
              src={badges[currentIndex].badgeUrl}
              alt={`${badges[currentIndex].name} Badge`}
              className="w-30 h-30 sm:w-32 sm:h-32 object-contain mb-2"
            />
            <h3 className="text-xl sm:text-2xl font-semibold text-white text-center">
              {badges[currentIndex].name}
            </h3>
            <a
              href={badges[currentIndex].badgeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 mt-2 text-md sm:text-lg"
            >
              View Badge
            </a>

            <div className="mt-4 text-center w-full max-w-md">
              <h4 className="text-md font-semibold text-gray-300">Skills Gained:</h4>
              <ul className="list-none p-5 mt-2 space-y-1">
                {badges[currentIndex].skills.map((skill, index) => (
                  <li
                  key={index}
                  className="text-gray-400 text-sm sm:text-base">{skill}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Next Button */}
          <button
            className="bg-gradient-to-l from-blue-500 to-pink-600 text-white p-4 rounded-full hover:shadow-lg transition-all transform hover:scale-110"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
      </RevealOnScroll>
      </section>
    );
    };


export default Badges;
