import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2" style={{ background: 'linear-gradient(to bottom, #657ac2, #000000 25%)' }}>
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40 text-purple-100"
        href="/"
      >
        <span
          className="absolute top-2 left-8"
          style={{ fontSize: '1.2rem', fontFamily: 'SArial, sans-serif', fontWeight: 'bold' }}
        >
          Logo
        </span>
      </Link>
      <div className="flex flex-col gap-2 flex-grow">
        <NavLinks />
        <div className="h-auto rounded-md"></div>
        <form>
          <button className="flex h-[48px] w-full gap-2 rounded-md p-3 text-sm text-purple-100 font-medium hover:bg-purple-300 hover:text-purple-600">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
