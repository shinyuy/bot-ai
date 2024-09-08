'use client';

import { usePathname } from 'next/navigation';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { useLogoutMutation } from '../../redux/features/authApiSlice';
import { logout as setLogout } from '../../redux/features/authSlice';
import { NavLink } from '../../components/common';

export default function Navbar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const [logout] = useLogoutMutation();

  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      });
  };

  const isSelected = (path: string) => (pathname === path ? true : false);

  const authLinks = (isMobile: boolean) => (
    <>
      <NavLink isSelected={isSelected('/dashboard')} isMobile={isMobile} href="/dashboard">
        Dashboard
      </NavLink>
      <NavLink isMobile={isMobile} onClick={handleLogout}>
        Logout
      </NavLink>
    </>
  );

  const guestLinks = (isMobile: boolean) => (
    <>
      <NavLink isSelected={isSelected('/auth/login')} isMobile={isMobile} href="/features">
        Features
      </NavLink>
      <NavLink isSelected={isSelected('/auth/login')} isMobile={isMobile} href="/pricing">
        Pricing
      </NavLink>
      <NavLink isSelected={isSelected('/auth/login')} isMobile={isMobile} href="/auth/login">
        <button className="rounded-full border border-sky-500 bg-black px-8 py-2 text-sky-500 hover:bg-gray-900 transition duration-200">
          Login
        </button>
      </NavLink>
      <NavLink isSelected={isSelected('/auth/register')} isMobile={isMobile} href="/auth/register">
        <button className="rounded-full bg-black bg-sky-500 px-8 py-2 text-white text-white hover:bg-sky-600 transition duration-200">Register</button>
      </NavLink>
    </>
  );

  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto px-24 bg-black">
            <div className="relative bg-black flex h-16 items-center justify-between">
              <div className="absolute bg-black inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex bg-black items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 bg-black items-center justify-center sm:items-center sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink href="/" isBanner>
                    Bot AI
                  </NavLink>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center space-x-4">
                    {isAuthenticated ? authLinks(false) : guestLinks(false)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-black">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {isAuthenticated ? authLinks(true) : guestLinks(true)}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
