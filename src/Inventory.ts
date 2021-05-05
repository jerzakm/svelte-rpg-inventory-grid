import { IPoint2, make2dArray, uuidv4 } from "./util";

export class Inventory {
  items: InventoryItem[];
  gridSpace: (InventoryItem | boolean)[][];
  gridSize: IPoint2;

  constructor(gridSize: IPoint2, items: InventoryItem[] = []) {
    this.gridSize = gridSize;
    this.items = items;
    this.calculateGridSpace();
  }

  /** Calculates free and occupied inventory spaces and puts them in gridSpace[][]*/
  private calculateGridSpace() {
    this.gridSpace = make2dArray(this.gridSize.x, this.gridSize.y, false);

    for (const item of this.items) {
      for (let x = 0; x < item.size.x; x++) {
        for (let y = 0; y < item.size.y; y++) {
          this.gridSpace[item.position.x + x][item.position.y + y] = item;
        }
      }
    }
  }

  public addRandomItems(count = 3) {
    for (let i = 0; i < count; i++) {
      this.items.push({
        id: uuidv4(),
        size: { x: 1, y: 1 },
        position: { x: i, y: i },
        details: {
          name: `${Math.round(Math.random() * 500)}`,
          color: `rgba(${Math.round(Math.random() * 150 + 104)},${Math.round(
            Math.random() * 200 + 54
          )},${Math.round(Math.random() * 200 + 54)},1.0)`,
        },
      });
    }

    this.calculateGridSpace();
  }
}

export interface InventoryItem {
  id: string;
  position: IPoint2;
  size: IPoint2;
  details: { name: string; color: string };
}
