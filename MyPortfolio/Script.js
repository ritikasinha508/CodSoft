const toggle = document.getElementById('menu-toggle');
if (toggle) {
    toggle.addEventListener('change', () => {
        document.body.classList.toggle('no-scroll', toggle.checked);
    });
}

const words = [
    "Student Of MCA", "Developer", "Freelancer"
];
const typingText = document.getElementById('typing-span');

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, nextWordDelay); // pause before erasing
        } else {
            setTimeout(type, typingDelay);
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // move to next word
            setTimeout(type, 500); // short pause before typing again
        } else {
            setTimeout(type, erasingDelay);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (words.length) type();
});

document.getElementById("downloadCV").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "assets/curr_Resume.pdf";  
    link.download = "curr_Resume.pdf"; 
    link.click();
});
