'use strict';

module.exports = (Franz, options) => {
  function getMessages() {
    let directCount = 0;
    let indirectCount = 0;
    let roomInfoContainer = document.querySelectorAll('.unread');

    Array.prototype.forEach.call(roomInfoContainer, function (room) {
      directCount = 1
    });

    Franz.setBadge(directCount, indirectCount);
  }

  Franz.loop(getMessages);
}