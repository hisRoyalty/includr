import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';


const Types = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  //array of images
  const images = [
    {
      id: 1,
      title: 'Dyslexia',
      url: 'https://images.squarespace-cdn.com/content/v1/59d31760f14aa1735205bad1/1678478192135-8PPDD1137P0DCEZPQZ6U/Dyslexia-%25E2%2580%2593-How-Teachers-Can-Help.jpg?format=1500w',
    },
    {
      id: 2,
      title: 'Autism',
      url: 'https://raisingchildren.net.au/__data/assets/image/0028/47656/autism-spectrum-disorder-overviewnarrow.jpg'
    },
    {
      id: 3,
      title: 'Down Syndrome',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBSnJFnThyvJKBBPyYPZxs249MRpOcu6xB-w&s',
    },
    {
      id: 4,
      title: 'Dwarfism',
      url: 'https://news.uoguelph.ca/wp-content/uploads/2021/10/isabella.jpg',
    },
    {
      id: 5,
      title: 'Cerebral palsy',
      url: 'https://raisingchildren.net.au/__data/assets/image/0021/78141/cerebral-palsy-narrow.jpg',
    },
    {
      id: 6,
      title: 'Muscular dystrophy',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQylRzbU-BrHfqrk5_V0q_p8WP4Z5OJKajigA&s',
    },
    {
      id: 7,
      title: 'Hearing impairment',
      url: 'https://www.hearinglink.org/wp-content/uploads/2019/02/Causes-of-hearing-loss-scaled.jpeg',
    },
      {
      id: 8,
      title: 'Bipolar Disease',
      url: 'https://assets.theinnerhour.com/bloguploads/shutterstock_6270677511671445717807.jpg',
    },
    {
      id: 9,
      title: 'Eating Disorder',
      url: 'https://newsroom.cigna.com/image/1050x591-understanding-eating-disorders.jpg',
    },
    {
      id: 10,
      title: 'Schizophrenia',
      url: 'https://www.brainfacts.org/-/media/Brainfacts2/Diseases-and-Disorders/Mental-Health/Article-Images/schizophrenia-brain-primer.jpg',
    }
  ];

  return (
    <div className="bg-gradient-to-r from-slate-700 to-blue-500 min-h-screen">
      <Header />
      <div className="container mx-auto py-8">
        <h2 className="text-4xl font-bold text-white mb-6 underline ml-2">Common Types of Disabilities</h2>
        <h2 className="text-2xl font text-white mb-6 underline ml-2"></h2>
        <p className='font-bold text-white mb-6 ml-2'>All these diseases may make them look unattractive or dumb, However, Some of them might be smarter than you!</p>
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img src={image.url} alt={image.title} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
            <div className="max-w-3xl mx-auto">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-full rounded-lg"
              />
              <p className="text-white text-lg font-semibold text-center mt-4">
                {selectedImage.title}
              </p>
              <button
                className="text-white text-lg font-semibold bg-gray-800 px-4 py-2 rounded mt-4"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Types;