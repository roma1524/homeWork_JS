'use strict';

let renderer = {
  // Сюда запишем всё, что надо отобразить
  map: '',

  // Отрисовывает игру в консоле
  render() {
  for (let row = 0; row < config.rowsCount; row++) {
    for (let col = 0; col < config.colsCount; col++){
      if(player.y === row && player.x === col){
        this.map += '& ';
      } else this.map += 'x ';
    }
    this.map += '\n';
  }
    console.log(this.map);
  },

  clear() {
    console.clear();
    this.map = '';
  }

}