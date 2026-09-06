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
    return this.rows[0].map((el, i) => {
      return this.rows.map(row => row[i])
    })
  }
}
