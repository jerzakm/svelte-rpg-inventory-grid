import { writable } from "svelte/store";

const defaultDragData = {
  itemX: 0,
  itemY: 0,
  dragging: false,
  itemImage: "",
  itemSize: [0, 0],
  fits: false,
  onGrid: false,
};

const dragStore = writable<IDragStatus>(defaultDragData);

const resetDragStatus = () => {
  dragStore.set(defaultDragData);
  console.log("drag status reset");
};

export const dragStatus = {
  store: dragStore,
  reset: resetDragStatus,
};

export interface IDragStatus {
  itemX: number;
  itemY: number;
  dragging: boolean;
  itemImage: string;
  itemSize: number[];
  fits: boolean;
  onGrid: boolean;
}
