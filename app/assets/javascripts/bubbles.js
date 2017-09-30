// var $bubbles = $('.bubbles');
//
// function bubbles() {
//   var min_bubble_count = 5,
//       max_bubble_count = 13,
//       min_bubble_size = 3,
//       max_bubble_size = 5;
//
//   var bubbleCount = min_bubble_count + Math.floor(Math.random() * (max_bubble_count + 1));
//
//   for (var i = 0; i < bubbleCount; i++) {
//     $bubbles.append('<div class="bubble-container"><div class="bubble"></div></div>');
//   }
//
//   $bubbles.find('.bubble-container').each(function(){
//     var pos_rand = Math.floor(Math.random() * 101);
//     var size_rand = min_bubble_size + Math.floor(Math.random() * (max_bubble_size + 1));
//     var delay_rand = Math.floor(Math.random() * 16);
//     var speed_rand = 1.5 + Math.random() * 1;
//     var $this = $(this);
//     $this.css({
//       'left' : pos_rand + '%',
//       '-webkit-animation-duration' : speed_rand + 's',
//       '-moz-animation-duration' : speed_rand + 's',
//       '-ms-animation-duration' : speed_rand + 's',
//       'animation-duration' : speed_rand + 's',
//       '-webkit-animation-delay' : delay_rand + 's',
//       '-moz-animation-delay' : delay_rand + 's',
//       '-ms-animation-delay' : delay_rand + 's',
//       'animation-delay' : delay_rand + 's'
//     });
//     $this.children('.bubble').css({
//       'width' : size_rand + 'px',
//       'height' : size_rand + 'px'
//     });
//   });
// };
// bubbles();
// document.getElementsByClassName('main').style = "background: white;";
//
// function generateBubbles() {
//   var bubble_amount = Math.floor((Math.random() * 13) + 1);
//
//   for (let i=0; i<bubble_amount; i++) {
//     let aquarium = document.querySelector('.aquarium');
//     let bubble = document.createElement("div");
//     bubble.className = "bubble";
//     bubble.appendChild(aquarium);
//   }
//   var bubbles = document.querySelectorAll('.bubble');
//   for (let i=0; i<bubbles; i++) {
//     let position = Math.floor(Math.random() * 100);
//     let size = Math.floor((Math.random() * 10) + 1);
//     let speed = 1.5 * Math.random() * 1;
//     let animation_delay = Math.floor(Math.random() * 13);
//     bubbles[i].style.width = size +'px';
//     bubbles[i].style.hieght = size +'px';
//     bubbles[i].style.background = 'rba(255, 255, 255, 0.3)';
//     bubbles[i].style.left = position +'px';
//
//   }
// }
//
// generateBubbles();
