import { IPosition2D, make2dArray } from './util'

export class Inventory {
  items: Item[]
  gridSpace: (Item | undefined)[][]
  gridSize: IPosition2D

  constructor(gridSize: IPosition2D, items: Item[] = []) {
    this.gridSize = gridSize
    this.items = items
    this.calculateGridSpace()
  }

  /** Calculates free and occupied inventory spaces and puts them in gridSpace[][]*/
  private calculateGridSpace() {
    this.gridSpace = make2dArray(this.gridSize.x, this.gridSize.y, undefined)

    for (const item of this.items) {
      for (let x = 0; x < item.size.x; x++) {
        for (let y = 0; y < item.size.y; y++) {
          this.gridSpace[item.position.x + x][item.position.y + y] = item
        }
      }
    }
  }
}

interface Item {
  id: string
  position: IPosition2D
  size: IPosition2D
  details: { name: string }
}
