// Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    themeBtn.textContent =
        document.body.classList.contains("dark")
            ? "☀️"
            : "🌙";
});


// Scroll Reveal Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".hidden")
.forEach(el => observer.observe(el));


// Contact Form

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    this.reset();

});
