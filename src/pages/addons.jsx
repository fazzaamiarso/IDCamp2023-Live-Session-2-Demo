const addonsVariants = [
  {
    name: "Online service",
    description: "Access to multiple games",
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];

const Addons = () => {
  return (
    <div className="rounded-md bg-white p-6 shadow-md">
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-primary-marineBlue">
          Pick add-ons
        </h1>
        <p>Add-ons help enhance your gaming experience</p>
      </div>
      <form>
        <div className="absolute bottom-0 left-0 w-full bg-white py-4">
          <div className="mx-auto flex w-11/12 items-center">
            <button
              type="button"
              onClick={() => {}}
              className="rounded-sm  p-2 text-neutral-coolGray"
            >
              Go Back
            </button>
            <button
              type="button"
              onClick={() => {}}
              className="ml-auto rounded-sm bg-primary-marineBlue p-2 text-neutral-magnolia"
            >
              Next Step
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addons;
