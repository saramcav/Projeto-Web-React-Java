import { create } from "zustand";

interface UsuarioStore {
    usuarioLogado: string;
    ehAdmin: boolean;
    tentouLogar: boolean;
    rotaDestino: string;
    
    setUsuarioLogado: (usuario: string) => void;
    setTentouLogar: (valor: boolean) => void;
    setRotaDestino: (rota: string) => void;
}

const useUsuarioStore = create<UsuarioStore>((set) => ({
    usuarioLogado: "",
    ehAdmin: false,
    tentouLogar: false,
    rotaDestino: "/",
    
    setUsuarioLogado: (usuario: string) => set(() => {
        const admin = usuario === "root@root.com";
        return { usuarioLogado: usuario, ehAdmin: admin };
    }),
    setTentouLogar: (valor: boolean) => set(() => ({ tentouLogar: valor })),
    setRotaDestino: (rota: string) => set({ rotaDestino: rota }),
}));

export default useUsuarioStore;
