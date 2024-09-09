'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppDispatch } from '../../redux/hooks';
import { useLogoutMutation } from '../../redux/features/authApiSlice';
import { logout as setLogout } from '../../redux/features/authSlice';
import { RiLogoutCircleLine } from "react-icons/ri";

import { SIDENAV_ITEMS } from '../../constants';
import { SideNavItem } from '../../types';
import { Icon } from '@iconify/react';

const SideNav = () => {
  const dispatch = useAppDispatch();

  const [logout] = useLogoutMutation();

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      });
  };

  return (
    <div className="fixed flex hidden h-screen flex-1 flex-col justify-between border-r border-zinc-200 bg-white pb-6 md:flex md:w-60">
      <div className="flex w-full flex-col space-y-6">
        <Link
          href="/"
          className="flex h-12 w-full flex-row items-center justify-center space-x-3 border-b border-zinc-200 md:justify-start md:px-6"
        >
          <span className="h-7 w-7 rounded-lg bg-zinc-300" />
          <span className="hidden text-xl font-bold text-black md:flex">Bot AI</span>
        </Link>

        <div className="flex flex-col space-y-2 md:px-6">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
      <span className="flex justify-center" onClick={handleLogout}>
        <RiLogoutCircleLine className="text-4xl mr-3" color="red" />

        <span style={{ color: 'red' }} className="cursor-pointer px-8 font-bold" onClick={handleLogout}>
          Logout
        </span>
      </span>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`hover-bg-zinc-100 flex w-full flex-row items-center justify-between rounded-lg p-2 hover:bg-zinc-100 ${pathname.includes(item.path) ? 'bg-zinc-100' : ''
              }`}
          >
            <div className="flex flex-row items-center space-x-4 text-black">
              {item.icon}
              <span className="flex text-xl text-black">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex text-black`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>
        </>
      ) : (
        <Link
          href={item.path}
          // className={`flex flex-row items-center space-x-4 rounded-lg p-2 text-black ${item.path === pathname ? 'bg-zinc-100' : ''
          //   }`}

          className={`flex items-center text-gray-800 mb-4 p-2 cursor-pointer rounded-lg ${item.path === pathname ? 'bg-gray-100' : 'hover:bg-gray-100'
            }`}
        >
          {item.icon}
          <span className="flex text-xl">{item.title}</span>
        </Link>
      )}
    </div>
  );
};
