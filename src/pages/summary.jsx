import { Link, useNavigate } from "react-router-dom";
import { useFormStore } from "../store/form-store";

const Summary = () => {
  const navigate = useNavigate();
  const { plan, addons } = useFormStore();

  // please fix this naming
  const perText = plan.billType === "monthly" ? "mo" : "yr";

  return (
    <div className="rounded-md bg-white p-6 shadow-md">
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-primary-marineBlue">
          Finishing up
        </h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div>
        <div className="space-y-4 rounded-md bg-neutral-magnolia p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold">
                {plan.name} (
                {plan.billType[0].toUpperCase() + plan.billType.slice(1)})
              </p>
              <Link to="/plan" className="text-neutral-coolGray underline">
                Change
              </Link>
            </div>
            <div className="font-bold">
              ${plan.price}/{perText}
            </div>
          </div>
          <div className="h-[1px] w-full bg-neutral-lightGray"></div>
          {addons ? (
            <ul className="space-y-2">
              {addons.map((addon) => {
                return (
                  <li
                    key={addon.name}
                    className="flex items-center justify-between "
                  >
                    <p className="text-neutral-coolGray">{addon.name}</p>
                    <div>
                      +${addon.price}/{perText}
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
        <div className="flex justify-between p-4 py-8">
          <div className="text-neutral-coolGray">
            Total (per {plan.billType === "monthly" ? "month" : "year"})
          </div>
          <div className="font-bold text-primary-purplishBlue">
            +${plan.price + addons.reduce((acc, curr) => acc + curr.price, 0)}/
            {perText}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-white py-4">
          <div className="mx-auto flex w-11/12 items-center">
            <button
              type="button"
              onClick={() => {
                navigate(-1);
              }}
              className="rounded-sm  p-2 text-neutral-coolGray"
            >
              Go Back
            </button>
            <button
              type="button"
              onClick={() => {
                navigate("/thank");
              }}
              className="ml-auto rounded-sm bg-primary-purplishBlue p-2 text-neutral-magnolia"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
