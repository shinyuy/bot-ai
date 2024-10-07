import { Icon } from '@iconify/react';
import { FaChartPie, FaRegBuilding, FaFileAlt, FaCog, FaWhatsapp, FaFolder } from 'react-icons/fa';
import { AiOutlineDashboard, AiOutlineApartment, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineSource, MdOutlineAnalytics } from "react-icons/md";
import { RiChatHistoryLine } from "react-icons/ri";
import { TbMessageChatbot } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";


import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiOutlineDashboard className="text-2xl mr-3" />,
  },
  {
    title: 'Company',
    path: '/dashboard/company',
    icon: <FaRegBuilding className="text-2xl mr-3" />,
  },
  {
    title: 'Data Sources',
    path: '/dashboard/data_sources',
    icon: <MdOutlineSource className="text-2xl mr-3" />,
  },
  {
    title: 'Chats History',
    path: '/dashboard/chats',
    icon: <RiChatHistoryLine className="text-2xl mr-3" />,
  },
  {
    title: 'Chatbots',
    path: '/dashboard/manage_chatbots',
    icon: <TbMessageChatbot className="text-2xl mr-3" />,
  },
  {
    title: 'WhatsApp',
    path: '/dashboard/whatsapp',
    icon: <FaWhatsapp className="text-2xl mr-3" />,
  },
  {
    title: 'Analytics',
    path: '/dashboard/analytics',
    icon: <MdOutlineAnalytics className="text-2xl mr-3" />,
  },
  // {
  //   title: 'Calls',
  //   path: '/dashboard/calls',
  //   icon: <MdOutlineAnalytics className="text-2xl mr-3" />,
  // },
  {
    title: 'Settings',
    path: '/dashboard/settings',
    icon: <CiSettings className="text-2xl mr-3" />,
  },
  {
    title: 'Help',
    path: '/help',
    icon: <IoIosHelpCircleOutline className="text-2xl mr-3" />,
  },
];
