import React from 'react';
import Header from './Header';
import Footer from './Footer';

const News = () => {
  
  // article data

  const articles = [
  {
    title: 'Revised building code to improve accessibility for people with disabilities, elderly, nursing mums',
    description: 'From Nov 1, new buildings will need to follow a revised code to make the country more inclusive. Features such as barrier-free entrances to key facilities like train stations, as well as even wider lifts, will be mandatory. The building and Construction Authority said the code serves as a baseline, and it encourages the industry to go beyond it to create a more user-friendly environment. Mr Tan Jwu Yih, BCA director for building planning and universal design, and Ms Judy Wee, executive director at the Muscular Dystrophy Association Singapore, Shared more about the most significant changes and improvements',
    image: 'https://cdn.discordapp.com/attachments/1355848500180422687/1401019659322523740/Screenshot_2025-08-02_at_9.51.01_AM.png?ex=688ec0bc&is=688d6f3c&hm=7181d6cea81b92a2d38bed7346e424c906da60e6693a083897d4144f3024a4fe&',
    href: 'https://www.channelnewsasia.com/singapore/building-code-accessibility-disabilities-elderly-nursing-mums-4312341'
  },
  {
    title: 'Fun for all: How some tourist attractions have made themselves more disability friendly',
    description: 'A Channel News Asia article highlights how tourist attractions in Singapore, like Bird Paradise and the Museum of Ice Cream, are becoming more disability-friendly through features such as barrier-free walkways, wheelchair access, and trained staff. These efforts align with the Enabling Masterplan 2030, which aims to make the city more inclusive. While major attractions are largely accessible, some heritage areas still pose challenges. The move reflects Singapore’s broader push to ensure tourism is enjoyable and inclusive for all.',
    image: 'https://cdn.discordapp.com/attachments/1355848500180422687/1401021890725941328/Screenshot_2025-08-02_at_9.59.36_AM.png?ex=688ec2d0&is=688d7150&hm=19a0632a765e5814b80ce2be5650ad68a8eaeb429cd3a5650c990c82077aac06&',
    href: 'https://www.channelnewsasia.com/singapore/tourist-attractions-disability-friendly-accessible-enabling-masterplan-2030-4312342'
  },
  {
    title: 'Beauty pageants’ steps towards inclusivity aren’t enough to win over viewers',
    description: 'However, the inclusion of a minimum height requirement of 1.68m raises eyebrows. This seemingly arbitrary figure is above the average height of Singaporean women, potentially excluding a significant number of pageant hopefuls.This inconsistency highlights a broader question: Are pageants truly embracing inclusivity, or is it more of a marketing manoeuvre to win social approval and increase ratings?In a leaked video of what appeared to be an internal Miss Universe meeting in October 2023, co-owner Anne Jakapong Jakrajutatip said that allowing diverse contestants to apply is only a “communication strategy”, and that they can compete but cannot win.This certainly goes against the inclusive image of recent pageants that featured burkini wearing, plus sized and transgender contestants, and draws doubts towards the intentions of the organisers.',
    image: 'https://cdn.discordapp.com/attachments/1355848500180422687/1401024889410031696/Screenshot_2025-08-02_at_10.12.01_AM.png?ex=688ec59b&is=688d741b&hm=9c5eddd3f2da7e2dee7172d350eaa29dde80f41dab31386507f8404e896c1cdb&',
    href: 'https://www.channelnewsasia.com/singapore/beauty-pageants-inclusivity-viewers-4312343'
  },
  {
    title: 'Just a "harmless" joke? True inclusiveness starts with ensuring that minority voices aren’t sidelined in everyday interactions',
    description: 'A recent commentary highlights how seemingly harmless jokes and everyday remarks can quietly sideline minority voices, pointing to a deeper issue of exclusion that often goes unnoticed. While public discussions around inclusivity tend to focus on major policies or visible campaigns, the piece argues that true inclusion begins in daily interactions — in the way people speak, listen, and respond to one another. Minority individuals are often interrupted, ignored, or made the subject of jokes, creating a sense of being unheard or undervalued. The commentary calls for greater awareness and empathy, urging people to pay closer attention to how their words and actions affect others, and to create space for diverse perspectives in all settings.',
    image: 'https://dam.mediacorp.sg/image/upload/s--Rt3O-Lxc--/f_auto,q_auto/c_fill,g_auto,h_622,w_830/v1/mediacorp/tdy/image/2024/04/03/20240130_llt_temasek_polytechnic_generics-6.jpg?itok=uXNb0sRc',
    href: 'https://www.todayonline.com/commentary/true-inclusiveness-minority-voices-4312344'
  },
  {
    title: 'The Big Read: Special needs education has come a long way but true inclusiveness still a work in progress',
    description: 'A recent feature in TODAY explores the progress and ongoing challenges in Singapore’s special needs education system. While access and awareness have improved significantly over the years, experts and families say true inclusiveness remains a work in progress. Students with special needs still face barriers in mainstream schools — from a lack of tailored support and trained educators to limited social acceptance. The report highlights stories of parents, teachers, and students navigating a system that has made strides but continues to grapple with resource gaps and societal attitudes. The piece underscores that meaningful inclusion requires more than infrastructure — it demands long-term commitment, mindset shifts, and collaboration across the education system.',
    image: 'https://dam.mediacorp.sg/image/upload/s--NxHZf0as--/c_fill%2Cg_auto%2Ch_676%2Cw_1200/f_auto%2Cq_auto/v1/mediacorp/tdy/image/2023/04/06/20230320_Ili_Grace%20Orchard%20school-8a.jpg?itok=o66kUYql',
    href: 'https://www.todayonline.com/big-read/special-needs-education-inclusiveness-4312345'
  }
  ];

  return (
    <div className="bg-blue-200">
    <Header></Header>
    <h2 className="text-4xl text-center font-bold mb-4 mt-4">News</h2>
    <h1 className="text-center mb-8">Latest News</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-8 mr-8">
      {articles.map((article, index) => (
      <div key={index} className="bg-gradient-to-r from-blue-400 to-blue-600 shadow-xl rounded-lg overflow-hidden">
        <a href={article.href} target="_blank" rel="noopener noreferrer">
        <img src={article.image} alt={article.title} className="h-30 w-full object-cover" />
        </a>
        <div className="p-6">
        <h3 className="text-xl font-bold mb-4">
          <a href={article.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {article.title}
          </a>
        </h3>
        <p className="text-black mb-4">{article.description}</p>
        <div className="flex justify-between">
        </div>
        </div>
      </div>
      ))}
    </div>
    <Footer></Footer>
    </div>
  );
};

export default News;