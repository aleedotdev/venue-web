"use client";
import { Button } from "@/components/shared/button";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Sidebar from "../sidebar";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 500);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   const handleInputChange = (field:string, value:string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

   const [formData, setFormData] = useState({
      where: 'Dubai, UAE',
      when: 'Anytime',
      guests: '10-20'
    });

      const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative">
      <nav
        className={`
          fixed top-0 left-0 right-0 z-20 
          px-6 py-4 transition-all duration-300
          ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}
        `}
      >
        <div className="max-w-site flex justify-between items-center">
           {/* Logo */}
          <Image src={"/assets/svg/logo.svg"} width={48} height={48} alt="logo" />
            <div className="flex justify-center"></div>
            {/* Dropdown */}
            {scrolled &&
            <div className="relative lg:flex hidden justify-center items-center z-1 px-4 py-0 w-full bg-white shadow-sm rounded-lg max-w-xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center items-center ">
                      {/* Where */}
                      <div className="flex flex-col">
                        <select
                          value={formData.where}
                          onChange={(e) => handleInputChange('where', e.target.value)}
                          className="px-0 py-1 text-xs border-0 rounded-lg text-gray-800 font-medium focus:outline-none"
                        >
                          <option>Dubai, UAE</option>
                          <option>Abu Dhabi, UAE</option>
                          <option>Sharjah, UAE</option>
                        </select>
                      </div>
          
                      {/* When */}
                      <div className="flex flex-col">
                        <select
                          value={formData.when}
                          onChange={(e) => handleInputChange('when', e.target.value)}
                          className="px-0 py-1 text-xs border-0 rounded-lg text-gray-800 font-medium focus:outline-none"
                        >
                          <option>Anytime</option>
                          <option>This Week</option>
                          <option>This Month</option>
                        </select>
                      </div>
          
                      {/* Guests */}
                      <div className="flex flex-col">
                        <select
                          value={formData.guests}
                          onChange={(e) => handleInputChange('guests', e.target.value)}
                          className="px-0 py-1 border-0 text-xs rounded-lg text-gray-800 font-medium focus:outline-none"
                        >
                          <option>10-20 Guests</option>
                          <option>20-50 Guests</option>
                          <option>50-100 Guests</option>
                          <option>100+ Guests</option>
                        </select>
                      </div>
          
                      {/* Search Button */}
                      <div className="w-full p-1">
                        <button className="w-full cursor-pointer p-1 bg-orange text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                         <Icon icon="ri:search-line" width="24" height="24" className='text-white' />
                        </button>
                      </div>
                    </div>
              </div>
             }

          {/* Desktop Buttons */}
          <div className="lg:flex items-center gap-3 hidden">
            <Button className="bg-white !text-sm p-2 hover:bg-white/90 font-bold flex gap-1 shadow-sm">
              Add your listing
              <Icon icon="ep:arrow-down" width={12} height={12} style={{ color: "#6B7280" }} />
            </Button>

            <Button className="bg-white p-2 w-16 hover:bg-white/90 shadow-sm !text-sm flex gap-1 font-bold">
              EN
              <Icon icon="ep:arrow-down" width={12} height={12} style={{ color: "#6B7280" }} />
            </Button>

            <Button className="bg-white p-2 w-12 h-12 hover:bg-white/90 shadow-sm">
              <Icon icon="icon-park-outline:people" width={20} height={20} color="#FF5037" />
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex flex-row lg:hidden">
            <Icon
              icon="material-symbols-light:menu-rounded"
              onClick={toggleSidebar}
              width={24}
              height={24}
              className={`${scrolled ? "text-black" : "text-white"}`}
            />
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>

  );
};

export default Header;
