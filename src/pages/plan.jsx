import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store/form-store";

const Plan = () => {
  const navigate = useNavigate();
  const personal = useFormStore((state) => state.personal);

  console.log(personal);
  return (
    <div className="rounded-md bg-white p-6 shadow-md">
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-primary-marineBlue">
          Select Your Plan
        </h1>
        <p>You have the option of monthly or yearly billing</p>
      </div>
      <form>
        <div className="absolute bottom-0 left-0 w-full bg-white py-4">
          <div className="mx-auto flex w-11/12 items-center">
            <button
              type="button"
              className="rounded-sm  p-2 text-neutral-coolGray"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Go Back
            </button>
            <button className="ml-auto rounded-sm bg-primary-marineBlue p-2 text-neutral-magnolia">
              Next Step
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Plan;
