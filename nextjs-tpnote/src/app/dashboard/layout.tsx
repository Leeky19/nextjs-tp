import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64" style={{ background: 'linear-gradient(to bottom, #657ac2, #000000 90%)' }}>
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12" style={{ background: 'linear-gradient(to bottom, #657ac2, #000000 25%)'}}>{children}</div>
    </div>
  );
}
