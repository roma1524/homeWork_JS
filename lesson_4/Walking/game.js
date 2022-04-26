'use strict';

let game = {
  // Запускает саму игру
  run() {
    while (true) {

      // Получаем направление от игрока
      const direction = mover.getDirection();
      if (direction === null) {
        console.log('Game is over!')
        return;
      }
      const nextPoint = mover.getNextPosition(direction);
      renderer.clear();
      player.move(nextPoint);
      renderer.render();
    }
  },

  // Выполняется при запуске страницы
  init() {
    console.log('Ваше положение на поле в виде О.');
    renderer.render();
    console.log('Чтобы начать игру наберите game.run() и нажмите Enter.');
  }
};

game.init();