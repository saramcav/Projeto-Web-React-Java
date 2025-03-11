import { create } from "zustand";

interface AuthState {
  usuarioLogado: string | null;
  login: (email: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  usuarioLogado: null,
  login: (email) => set({ usuarioLogado: email }),
  logout: () => set({ usuarioLogado: null }),
}));

export default useAuthStore;
