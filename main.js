// handle navbar

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".navbar").classList.toggle("active");
    header = document.querySelector(".header").classList.toggle("active");
}

//scroll to top 

let arrowTop = document.getElementById('scrollTop');

arrowTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

window.addEventListener("scroll", () => {

    if (window.scrollY >= 100) {
        arrowTop.classList.add("show");
    } else {
        arrowTop.classList.remove("show");
    }

});

// cards hover 
const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`)
    target.style.setProperty("--mouse-y", `${y}px`)
}

for (const card of document.querySelectorAll(".Statistics-card")) {
    card.onmousemove = e => handleOnMouseMove(e);
}

document.querySelector(".about-card").onmousemove = e => handleOnMouseMove(e);

// count numbers with scroll

let nums = document.querySelectorAll('.statistics-num');
let aboutSection = document.querySelector(".Statistics-section");
let started = false;

window.onscroll = function () {
    if (window.scrollY >= aboutSection.offsetTop - 600) {
        if (!started) {
            setTimeout(() => {
                nums.forEach((num) => startCount(num));
            }, 100);
        }
        started = true;
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    // let count = 0;
    let counter = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(counter)
        }
    }, 2000 / goal)
}

// add animations with scroll

const observer = new IntersectionObserver((entries, obeserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const animationType = entry.target.dataset.animate;
            entry.target.classList.add(`${animationType}`);
            observer.unobserve(entry.target);
        };
    })
},{threshold:0.4})

document.querySelectorAll(".animate").forEach(section => {
    observer.observe(section);
})


// send emails

document.querySelectorAll('.copy-button').forEach(btn => {
    btn.addEventListener('click', function () {
        const textToCopy = btn.getAttribute('data-text');


        navigator.clipboard.writeText(textToCopy).then(() => {

            btn.innerHTML = '<i class="copy-icon fas fa-check"> </i>'

        });
        setTimeout(() => {
            btn.innerHTML = '<i class="copy-icon fas fa-copy "> </i>'

        }, 1000);
    });
});
