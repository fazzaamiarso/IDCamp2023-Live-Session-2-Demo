import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="relative min-h-screen w-full bg-neutral-magnolia bg-[url('/src/assets/images/bg-sidebar-mobile.svg')] bg-contain bg-no-repeat font-ubuntu text-primary-marineBlue">
      <div className="mx-auto flex w-max gap-4 py-8">
        <div className="flex aspect-square w-12 items-center justify-center rounded-full text-white ring-1 ring-white">
          1
        </div>
        <div className="flex aspect-square w-12 items-center justify-center rounded-full text-white ring-1 ring-white">
          2
        </div>
        <div className="flex aspect-square w-12 items-center justify-center rounded-full text-white ring-1 ring-white">
          3
        </div>
        <div className="flex aspect-square w-12 items-center justify-center rounded-full text-white ring-1 ring-white">
          4
        </div>
      </div>
      <div className="mx-auto w-11/12">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
