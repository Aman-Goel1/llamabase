import { create } from "zustand";
import { embedder, my_embedder } from "@/data_types/data_types";

interface embeddersState {
  embedders: embedder[];
  setEmbedders: (newEmbedders: embedder[]) => void;
}

interface myEmbeddersState {
  my_embedders: my_embedder[];
  setMyEmbedders: (newEmbedders: my_embedder[]) => void;
}

interface refreshMyEmbedders {
  refreshMyEmbedders: number;
  setRefreshMyEmbedders: (newRefreshMyEmbedders: number) => void;
}

export const useEmbeddersStore = create<embeddersState>((set) => ({
  embedders: [],
  setEmbedders: (newEmbedders) => set({ embedders: newEmbedders }),
}));

export const useMyEmbeddersStore = create<myEmbeddersState>((set) => ({
  my_embedders: [],
  setMyEmbedders: (newEmbedders) => set({ my_embedders: newEmbedders }),
}));

export const useRefreshMyEmbedders = create<refreshMyEmbedders>((set) => ({
  refreshMyEmbedders: 0,
  setRefreshMyEmbedders: (refresh) => set({ refreshMyEmbedders: refresh }),
}));
