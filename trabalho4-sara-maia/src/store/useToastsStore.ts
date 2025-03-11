import { create } from 'zustand';
import { ToastItem } from '../interfaces/interfacesAuxiliares';

interface ToastsState {
  toasts: ToastItem[];
  adicionarToast: (toast: ToastItem, duration?: number) => void;
}

const useToastsStore = create<ToastsState>((set) => ({
  toasts: [],
  adicionarToast: (toast, duracao = 5000) => {
    set((s) => ({
      toasts: [...s.toasts, toast],
    }));

    setTimeout(() => {
      set((s) => ({
        toasts: s.toasts.filter((t) => t.id !== toast.id),
      }));
    }, duracao);
  }
}));

export default useToastsStore;
