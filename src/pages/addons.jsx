import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useState } from "react";
import { useFormStore } from "../store/form-store";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const initialAddons = useFormStore((state) => state.addons);
  const [selectedAddonsIdx, setSelectedAddonsIdx] = useState(
    initialAddons?.map((addon) => addon.idx) ?? [],
  );
  const billingType = useFormStore((state) => state.plan?.billType);
  const updateData = useFormStore((state) => state.updateData);

  const onSubmit = () => {
    const data = selectedAddonsIdx.length
      ? selectedAddonsIdx.map((addon) => {
          return {
            name: addonsVariants[addon].name,
            price: addonsVariants[addon].price[billingType],
            idx: addon,
          };
        })
      : null;
    updateData({
      currentStep: "addons",
      data,
    });
  };

  console.log(selectedAddonsIdx);

  return (
    <div className="rounded-md bg-white p-6 shadow-md">
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-primary-marineBlue">
          Pick add-ons
        </h1>
        <p>Add-ons help enhance your gaming experience</p>
      </div>
      <form>
        <ToggleGroup.Root
          type="multiple"
          value={selectedAddonsIdx}
          onValueChange={setSelectedAddonsIdx}
          className="flex w-full flex-col space-y-4"
        >
          {addonsVariants.map((addon, idx) => {
            return (
              <ToggleGroup.Item
                key={addon.name}
                value={idx}
                className="group flex items-center gap-4 rounded-lg p-4 ring-1 transition-colors data-[state=on]:bg-neutral-alabaster data-[state=on]:ring-2 data-[state=on]:ring-primary-purplishBlue"
              >
                <div className="flex aspect-square items-center justify-center rounded-md p-2 ring-1 transition-colors  group-data-[state=on]:bg-primary-purplishBlue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                    viewBox="0 0 12 9"
                  >
                    <path
                      fill="none"
                      stroke="#FFF"
                      strokeWidth="2"
                      d="m1 4 3.433 3.433L10.866 1"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <p className="font-[500]">{addon.name}</p>
                  <p className="text-neutral-coolGray">{addon.description}</p>
                </div>
                <div className="ml-auto text-primary-purplishBlue">
                  +${addon.price[billingType]}/
                  {billingType === "monthly" ? "mo" : "yr"}
                </div>
              </ToggleGroup.Item>
            );
          })}
        </ToggleGroup.Root>
        <div className="absolute bottom-0 left-0 w-full bg-white py-4">
          <div className="mx-auto flex w-11/12 items-center">
            <button
              type="button"
              onClick={() => {
                onSubmit();
                navigate(-1);
              }}
              className="rounded-sm  p-2 text-neutral-coolGray"
            >
              Go Back
            </button>
            <button
              type="button"
              onClick={() => {
                onSubmit();
              }}
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
