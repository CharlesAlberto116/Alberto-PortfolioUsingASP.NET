const target = document.getElementById("about-me-text");
let index = 0;

// First paragraph (your name)
const nameText = `<p class="name-highlight">Charles Bryan L. Alberto.</p>`;

const restText = `<p class="about-details">A fresh graduate eager to explore and enhance my knowledge and skills in the field of technology. I have hands-on experience as both a front-end and back-end developer, which has given me a strong foundation in full-stack development. As I embark on my professional journey, I am excited to take on new projects that will challenge me, allow me to grow, and refine my capabilities as a developer. I am passionate about continuous learning and committed to building innovative and impactful solutions.</p>`;

const fullText = nameText + restText;

function type() {
    if (index < fullText.length) {
        target.innerHTML = fullText.slice(0, index + 1) + '<span class="cursor"></span>';
        index++;
        setTimeout(type, 50);
    } else {
        target.innerHTML = fullText;
    }
}

window.onload = type;
