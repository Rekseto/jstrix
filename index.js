class Matrix {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    for(let i=1; i<y+1; i++) {
      this[i] = [];
      for(let z=0; z<x; z++) {
          this[i].push(0);
      }
    }
  }

  setMatrix(...werses) {
    for(let i=0; i<werses.length; i++) {
      if(werses[i].length === this.x) {
        this[i+1] = werses[i]
      }
    }
  }

  addMatrix(matrix) {
    if(matrix.x === this.x && matrix.y === this.y) {
      for(let y =1; y<matrix.y+1; y++) {
         for(let x=0; x<matrix.x; x++) {
           this[y][x] = this[y][x] + matrix[y][x];
         }
      }
    }
  }

  subtractMatrix(matrix) {
    if(matrix.x === this.x && matrix.y === this.y) {
      for(let y =1; y<matrix.y+1; y++) {
         for(let x=0; x<matrix.x; x++) {
           this[y][x] = this[y][x] - matrix[y][x];
         }
      }
    }
  }

  multiplicationMatrix(matrix) {
    if(matrix.x === this.y && matrix.y === this.x) {
      let result = new Matrix(this.x, this.y);

      for(let y =1; y<this.y+1; y++) {
         for(let x=0; x<this.x; x++) {
           this[y][x] = this[y][x] + matrix[y][x];
         }
      }
    }
  }


}
