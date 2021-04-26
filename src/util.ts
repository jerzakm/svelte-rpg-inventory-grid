export const make2dArray = (a: number, b: number, value: any) => {
  let array = [];

  // creating two dimensional array
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      array[i] = [];
    }
  }

  // inserting elements to array
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      array[i][j] = value;
    }
  }
  return array;
};
