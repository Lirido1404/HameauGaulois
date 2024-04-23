import { create } from "zustand";

type CounterStore = {
    date:string | undefined,
    setDate: (newDate: string) => void; // Ajout de la fonction pour mettre à jour la date
};

export const useDateStore = create<CounterStore>((set) => ({
    date: undefined,
    setDate: (newDate) => set({ date: newDate }), // Implémentation de la fonction pour mettre à jour la date
}));
