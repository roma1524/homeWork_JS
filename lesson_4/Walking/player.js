'use strict';

const player = {
  x: 5,
  y: 5,

  move(nextPoint) {

    this.x = nextPoint.x;
    this.y = nextPoint.y;

    console.log(this.y);
    console.log(this.x);

  }
}