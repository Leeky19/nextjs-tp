'use client';

import {
  HomeIcon,
  GlobeAltIcon,
  BellIcon,
  DocumentTextIcon,
  CogIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Alerts',
    href: '/dashboard/alerts',
    icon: BellIcon ,
  },
  { name: 'Studio', href: '/dashboard/studio', icon: GlobeAltIcon },
  { name: 'Reports', href: '/dashboard/reports', icon: DocumentTextIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: CogIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm text-purple-100 font-medium hover:bg-purple-300 hover:text-purple-500 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-purple-300 text-purple-500': pathname === link.href,
                'bg-transparent': pathname !== link.href, // Ajoutez cette classe pour rendre le fond transparent
              },
            )}
            
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
