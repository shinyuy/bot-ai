import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Company',
    path: '/dashboard/company',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
  },
  // {
  //   title: 'Data Sources',
  //   path: '/dashboard/data_sources',
  //   icon: <Icon icon="lucide:folder" width="24" height="24" />,
  // },
  {
    title: 'Settings',
    path: '/dashboard/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
