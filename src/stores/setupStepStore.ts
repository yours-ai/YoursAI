import { create } from "zustand";

type State = {
  step: number;
};

type Actions = {
  increase: () => void;
  decrease: () => void;
};

const useSetupStepsStore = create<State & Actions>((set) => ({
  step: 0,
  increase: () => set((state) => ({ step: state.step + 1 })),
  decrease: () => set((state) => ({ step: state.step - 1 })),
}));

export default useSetupStepsStore;
