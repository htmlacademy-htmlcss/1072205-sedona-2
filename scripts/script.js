let modal = document.querySelector(".modal-container");
let openButton = document.querySelector(".search-button");
let closeButton = document.querySelector(".modal-close-button");

openButton.onclick = function() {
  modal.classList.remove("modal-container-close");
}

closeButton.onclick = function() {
  modal.classList.add("modal-container-close");
}

closeButton.onclick = function() {
  modal.classList.add("modal-container-close");
}

// const div = document.querySelector( '#popup');

// document.addEventListener( 'click', (e) => {
// 	const withinBoundaries = e.composedPath().includes(div);

// 	if ( ! withinBoundaries ) {
// 		div.style.display = 'none'; // скрываем элемент т к клик был за его пределами
// 	}
// })

// document.addEventListener('keydown', function(e) {
// 	if( e.keyCode == 27 ){ // код клавиши Escape, но можно использовать e.key
// 		div.style.display = 'none';
// 	}
// });
