import { slides, tabMenu } from '@/constants';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

const VenueSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTab, setCurrentTab] = useState('Venue');
  const [formData, setFormData] = useState({
    where: 'Dubai, UAE',
    when: 'Anytime',
    guests: '10-20'
  });

  const handleInputChange = (field:string, value:string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTab = (name:string)=>{
   setCurrentTab(name)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full py-20">
        {slides.map((slide, index) => (
            <div
            key={index}
            className={`absolute  inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  bg-opacity-40" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 xl:pt-0 md:pt-30 pt-10">
        {/* Heading */}
        <div className="text-center mb-12 transition-all duration-500">
          <h1 className="xl:text-7xl md:text-5xl text-3xl font-semibold text-white">
            {slides[currentSlide].heading}
          </h1>
          <h2 className="xl:text-7xl md:text-5xl text-3xl font-semibold text-white">
            {slides[currentSlide].subheading}
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex lg:flex md:hidden  gap-4 relative z-2 -mb-4 bg-white p-2 rounded-lg shadow-lg">
            {tabMenu.map((item, index)=>(
              <div key={index}>
            <button  onClick={(()=>handleTab(item.name))} className={`flex items-center gap-2 text-sm px-4 py-2 ${currentTab === item.name ? 'bg-orange text-white' : 'text-black bg-white'}  rounded-lg font-semibold `}>
             <Icon icon={item.icon} width="20" height="20" className={`${currentTab === item.name ? 'text-white' : 'text-black'}`} />
            {item.name}
          </button>  
          </div>
            ))}    
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg relative z-1 shadow-2xl p-6 w-full md:max-w-5xl max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Where */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-2">Where</label>
              <select
                value={formData.where}
                onChange={(e) => handleInputChange('where', e.target.value)}
                className="px-0 py-1 border-0 rounded-lg text-gray-800 font-medium focus:outline-none"
              >
                <option>Dubai, UAE</option>
                <option>Abu Dhabi, UAE</option>
                <option>Sharjah, UAE</option>
              </select>
            </div>

            {/* When */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-2">When</label>
              <select
                value={formData.when}
                onChange={(e) => handleInputChange('when', e.target.value)}
                className="px-0 py-1 border-0 rounded-lg text-gray-800 font-medium focus:outline-none"
              >
                <option>Anytime</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>

            {/* Guests */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-2">Guests</label>
              <select
                value={formData.guests}
                onChange={(e) => handleInputChange('guests', e.target.value)}
                className="px-0 py-1 border-0 rounded-lg text-gray-800 font-medium focus:outline-none"
              >
                <option>10-20</option>
                <option>20-50</option>
                <option>50-100</option>
                <option>100+</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button className="w-full cursor-pointer py-3 bg-orange text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
               <Icon icon="ri:search-line" width="24" height="24" className='text-white' />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute md:bottom-5 bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 h-3 bg-yellow'
                : 'w-3 h-3 bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default VenueSlider;