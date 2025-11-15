"use client";

import Image from "next/image";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import { Typography } from "@/components/shared/typography";
import { SidebarProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useClickOutside from "@/hooks/useOutsideClick";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { navMenu } from "@/constants";

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const getPagePath = usePathname();

  useClickOutside(sidebarRef, onClose, isOpen);
  useLockBodyScroll(isOpen);
  
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300" />
      )}

      <div
        ref={sidebarRef}
        id="mobile-sidebar"
        className={`fixed top-0 right-0 w-full h-full sm:w-80 bg-black z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-3">
            <Image
              src={"/assets/svg/logo.svg"}
              width={48} height={48} 
              alt="logo"
            />
            <button
              className="p-2 text-white hover:text-gray-300 transition-colors"
              onClick={onClose}
              aria-label="Close menu"
            >
              <Icon icon="mdi:close" className="w-6 h-6" />
            </button>
          </div>
          <hr className="w-full border-t border-white/10 mb-7" />

          {/* Sidebar Navigation */}
          <nav className="flex flex-col gap-8">
            <div className="flex flex-col justify-center items-center gap-8 px-6 py-4">
              {navMenu.map((menu, index) => (
                <Link href={menu.href} key={index} className="cursor-pointer" onClick={() => {
                  onClose();
                }}>
                  <Typography
                    size="xl"
                    as="p"
                    className={`${getPagePath === menu.href ? 'text-white font-bold' : 'text-white/60'} font-normal  transition-colors duration-300`}
                  >
                    {menu.label}
                  </Typography>
                </Link>
              )
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
