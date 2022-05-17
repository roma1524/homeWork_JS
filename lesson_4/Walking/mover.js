'use strict';


let mover = {

  /**
   * Функция получает и возвращает направление от пользователя
   * @returns {null|number}
   */
  getDirection() {
    const availableDirections = [2, 4, 6, 8, 9, 7, 1, 3];
    while (true) {
      let direction = parseInt(prompt('Введите число (2, 4, 6 или 8), куда вы хотите переместиться, "Отмена" для выхода.'));
      if (isNaN(direction)) return null;
      if (!availableDirections.includes(direction)) {
        alert("Для перемещения необходима ввести одно из чисел 2, 4, 6 или 8");
        continue;
      }
      return direction;
    }
  },

  /**
   * Отдает следующую точку в которой будет находиться пользователь после движенияю
   * @param { int } direction Направление движения игрока
   * @returns {{x: int, y: int}} Следующая позиция игрока
   */
  getNextPosition(direction) {
    const nextPosition = {
      x: player.x,
      y: player.y,
    };

    switch (direction) {
      case 2:
        if (nextPosition.y === 10) {
          nextPosition.y;
          break;
        }
        nextPosition.y++;
        break;
      case 4:
        if (nextPosition.x === 0) {
          nextPosition.x;
          break;
        }
        nextPosition.x--;
        break;
      case 6:
        if (nextPosition.x === 10) {
          nextPosition.x;
          break;
        }
        nextPosition.x++;
        break;
      case 8:
        if (nextPosition.y === 0) {
          nextPosition.y;
          break;
        }
        nextPosition.y--;
        break;
      case 9:
        if (nextPosition.x === 10 || nextPosition.y === 0) {
          nextPosition.x;
          nextPosition.y;
          break;
        }
        nextPosition.x++;
        nextPosition.y--;
        break;
      case 7:
        if (nextPosition.x === 0 || nextPosition.y === 0) {
          nextPosition.x;
          nextPosition.y;
          break;
        }
        nextPosition.x--;
        nextPosition.y--;
        break;
      case 3:
        if (nextPosition.x === 10 || nextPosition.y === 10) {
          nextPosition.x;
          nextPosition.y;
          break;
        }
        nextPosition.x++;
        nextPosition.y++;
        break;
      case 1:
        if (nextPosition.x === 0 || nextPosition.y === 10) {
          nextPosition.x;
          nextPosition.y;
          break;
        }
        nextPosition.x--;
        nextPosition.y++;
        break;
    }
    return nextPosition;
  }
};

