
function slice(array, start, end) {
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  start = start == null ? 0 : start
  end = end === undefined ? length : end

  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0

  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

function chunk(array, size) {
  size = Math.max(size, 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}


class Matrix {
  constructor(x,y, arr = []) {
    this.x = x;
    this.y = y;
    if(!arr.length) {
      for(let i =0; i<x*y; i++) {
        arr.push(0);
      }
    }

    this.matrix = arr;
  }


  getMatrix() {
    let result = {};
    for(let y =0; y<this.y; y++) {
     result[y] = chunk(this.matrix,this.x)[y];
    }
    return result;
  }

  addMatrix(matrix){
    if(this.x === matrix.x && this.y === matrix.y) {
        for(let i=0; i<this.matrix.length; i++) {
          this.matrix[i] = this.matrix[i] + matrix.matrix[i];
        }
    }
  }

  substractMatrix(matrix){
    if(this.x === matrix.x && this.y === matrix.y) {
        for(let i=0; i<this.matrix.length; i++) {
          this.matrix[i] = this.matrix[i] - matrix.matrix[i];
        }
    }
  }
}

let matrix = new Matrix(2,2,[1,1]);
let matrix2 = new Matrix(2,2,[1,2]);

matrix.addMatrix(matrix2);
