import { create } from "zustand";
import Barraca from "../interfaces/Barraca";

interface BarracasStore {
    pagina: number;
    tamanho: number;
    nome: string;
    campo: string;
    ordem: "asc" | "desc"; 
    barracaSelecionada: Barraca;
    idsBarracasEmRemocao: Set<number>;

    setPagina: (pagina: number) => void;
    setTamanho: (tamanho: number) => void;
    setNome: (nome: string) => void;
    setBarracaSelecionada: (barraca: Barraca) => void;
    setCampo: (ordem: string) => void;
    setOrdem: (ordem: "asc" | "desc") => void;
    adicionarBarracaEmRemocao: (id: number) => void;
    deletarBarracaRemovida: (id: number) => void;
}

const useBarracasStore = create<BarracasStore>((set) => ({
    pagina: 0,
    tamanho: 5,
    nome: "",
    campo: "id",
    ordem: "desc",
    barracaSelecionada: {} as Barraca,
    idsBarracasEmRemocao: new Set<number>(),

    setPagina: (novaPagina: number) => set(() => ({ pagina: novaPagina })),
    
    setTamanho: (novoTamanho: number) => set(() => ({ tamanho: novoTamanho })),
    
    setNome: (novoNome: string) => set(() => ({ nome: novoNome })),
    
    setBarracaSelecionada: (novaBarracaSelecionada: Barraca) =>
        set(() => ({ barracaSelecionada: novaBarracaSelecionada })),
    
    setCampo: (novoCampo: string) => set(() => ({ campo: novoCampo})),

    setOrdem: (novaOrdem: "asc" | "desc") => set(() => ({ ordem: novaOrdem})),

    adicionarBarracaEmRemocao: (id: number) =>
        set((s) => {
            const novoIdsBarracasEmRemocao = new Set(s.idsBarracasEmRemocao);
            novoIdsBarracasEmRemocao.add(id);
            return { idsBarracasEmRemocao: novoIdsBarracasEmRemocao };
        }),
    deletarBarracaRemovida: (id: number) =>
        set((s) => {
            const novoIdsBarracasEmRemocao = new Set(s.idsBarracasEmRemocao);
            novoIdsBarracasEmRemocao.delete(id);
            return { idsBarracasEmRemocao: novoIdsBarracasEmRemocao };
        }),
}));


export default useBarracasStore;