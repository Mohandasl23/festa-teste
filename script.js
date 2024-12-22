document
	.getElementById("contato-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		alert("Obrigado pelo contato! Em breve retornaremos.");
	});
let slideIndex = 0;
mostrarSlide(slideIndex);

function mudarSlide(n) {
	mostrarSlide((slideIndex += n));
}

function mostrarSlide(n) {
	let slides = document.querySelectorAll(".slides img");
	if (n >= slides.length) slideIndex = 0;
	if (n < 0) slideIndex = slides.length - 1;

	slides.forEach((slide) => slide.classList.remove("active"));
	slides[slideIndex].classList.add("active");
	setInterval(() => mudarSlide(1), 3000); // Troca de slide a cada 3 segundos
}
