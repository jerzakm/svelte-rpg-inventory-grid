export const make2dArray = (a: number, b: number, value: any) => {
  let array = []

  // creating two dimensional array
  for (let x = 0; x < a; x++) {
    for (let y = 0; y < b; y++) {
      array[x] = []
    }
  }

  // inserting elements to array
  for (let x = 0; x < a; x++) {
    for (let y = 0; y < b; y++) {
      array[x][y] = value
    }
  }
  return array
}

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export interface IPosition2D {
  x: number
  y: number
}
