//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix_string) {
    this.matrix = matrix_string
      .split('\n')
      .map(row => row.split(' ').map(Number))
  }

  get rows() {
    return this.matrix
  }

  get columns() {
    const col = []
  
    for (let i = 0; i < this.matrix[0].length; i++) {
      const column = []
  
      for (let j = 0; j < this.matrix.length; j++) {
        column.push(this.matrix[j][i])
      }
  
      col.push(column)
    }
  
    return col
  }
}
