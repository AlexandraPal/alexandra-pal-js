(function (window) {
  console.log('IIFE, SIAF');

  window.myName = 'Dragos';
})(window);

console.log(window.myName);
