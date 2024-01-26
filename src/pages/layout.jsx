import { Outlet, useLocation } from "react-router-dom";

const steps = {
  personal: {
    step: 1,
  },
  plan: {
    step: 2,
  },
  addons: {
    step: 3,
  },
  summary: {
    step: 4,
  },
};

const Layout = () => {
  const location = useLocation();

  return (
    <main className="relative min-h-screen w-full bg-neutral-magnolia bg-[url('/src/assets/images/bg-sidebar-mobile.svg')] bg-contain bg-no-repeat font-ubuntu text-primary-marineBlue">
      <div className="mx-auto flex w-max  gap-4 py-8">
        {Object.entries(steps).map(([key, value]) => {
          return (
            <div
              key={key}
              className={`flex aspect-square w-12 items-center justify-center rounded-full  ring-1 ring-white`.concat(
                location.pathname.includes(key)
                  ? " bg-neutral-magnolia text-primary-marineBlue"
                  : " text-white",
              )}
            >
              {value.step}
            </div>
          );
        })}
      </div>
      <div className="mx-auto w-11/12 max-w-xl">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
