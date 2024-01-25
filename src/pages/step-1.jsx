import { useForm } from "react-hook-form";

const Step1 = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-[500]">
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            id="name"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-[500]">
            Email Address
          </label>
          <input
            type="email"
            {...register("email")}
            id="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone-number" className="font-[500]">
            Phone Number{" "}
          </label>
          <input
            type="text"
            {...register("phone-number")}
            id="phone-number"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </div>
  );
};

export default Step1;
