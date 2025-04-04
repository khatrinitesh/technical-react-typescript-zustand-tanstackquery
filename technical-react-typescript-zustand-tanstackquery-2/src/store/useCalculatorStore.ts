import { create } from "zustand";


export interface CalculatorStore {
    currentInput: string;
    previousInput: string;
    result: string;
    setCurrentInput: (input: string) => void;
    setPreviousInput: (input: string) => void;
    setResult: (result: string) => void;
    reset: () => void;
    appendToInput: (value: string) => void;
    calculate: () => void;
  }

  export const useCalculatorStore = create<CalculatorStore>((set) => ({
    currentInput: '',
    previousInput: '',
    result: '0',
    setCurrentInput: (input) => set({ currentInput: input }),
    setPreviousInput: (input) => set({ previousInput: input }),
    setResult: (result) => set({ result }),
    reset: () => set({ currentInput: '', previousInput: '', result: '0' }),
    appendToInput: (value) => set((state) => ({
      currentInput: state.currentInput + value,
    })),
    calculate: () => set((state) => {
      try {
        const result = eval(state.currentInput); // Simple evaluation (could be improved)
        return { result: String(result), currentInput: '', previousInput: state.currentInput };
      } catch {
        return { result: 'Error' };
      }
    }),
  }));