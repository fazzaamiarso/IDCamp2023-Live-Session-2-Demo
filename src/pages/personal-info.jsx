import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { stepsVariant, useFormStore } from "../store/form-store";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const updateData = useFormStore((state) => state.updateData);
  const personalData = useFormStore((state) => state.personal);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ values: personalData });

  const onSubmit = async (data) => {
    updateData({ data, currentStep: stepsVariant.personal });
    navigate("/plan");
  };

  return (
    <div className="rounded-md bg-white p-6 shadow-md">
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-primary-marineBlue">
          Personal Info
        </h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form
        id="step-form"
        className="space-y-6"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-[500]">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Please fill out this field" })}
            id="name"
            placeholder="e.g. Stephen King"
          />
          {errors?.name ? <p>{errors.name.message}</p> : null}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-[500]">
            Email Address
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Please fill out this field",
              pattern: {
                message: "Email format is invalid",
                // eslint-disable-next-line no-useless-escape
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              },
            })}
            id="email"
            placeholder="e.g. stephenking@lorem.com"
          />
          {errors?.email ? <p>{errors.email.message}</p> : null}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phoneNumber" className="font-[500]">
            Phone Number{" "}
          </label>
          <input
            type="text"
            {...register("phoneNumber", {
              required: "Please fill out this field",
              pattern: {
                message: "Email format is invalid",
                // eslint-disable-next-line no-useless-escape
                value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
              },
            })}
            id="phoneNumber"
            placeholder="e.g. +1 234 567 890"
          />
          {errors?.phoneNumber ? <p>{errors.phoneNumber.message}</p> : null}
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-white py-4">
          <div className="mx-auto flex w-11/12 items-center">
            <button className="ml-auto rounded-sm bg-primary-marineBlue p-2 text-neutral-magnolia">
              Next Step
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
