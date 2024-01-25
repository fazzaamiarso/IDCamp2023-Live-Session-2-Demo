import { create } from "zustand";

const stepsVariant = {
  personal: "personal",
  plan: "plan",
  addons: "addons",
  summary: "summary",
};

const useFormStore = create((set) => ({
  personal: null,
  plan: null,
  addons: null,
  summary: null,
  updateData: ({ data, currentStep }) =>
    set((state) => {
      return {
        ...state,
        [stepsVariant[currentStep]]: data,
      };
    }),
}));

export { useFormStore, stepsVariant };
