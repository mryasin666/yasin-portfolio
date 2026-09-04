const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

const systemText = document.querySelector(".system-text");

function typeText(text, speed = 50) {
    systemText.textContent = "";
    
    let i = 0;

    const typing = setInterval(() => {
        systemText.textContent += text[i];
        i++;

        if (i >= text.length) {
            clearInterval(typing);
        }
    }, speed);
}

typeText("SYSTEM INSTALLING...");

setTimeout(() => {
    typeText("SYSTEM INSTALLATION COMPLETE");
}, 2000);

setTimeout(() => {
    typeText("SYSTEM ONLINE");
}, 3500);