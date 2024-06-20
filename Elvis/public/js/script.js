// script.js
document.addEventListener("DOMContentLoaded", function() {
    const text = "I am a web developer, designer, mobile app developer";
    const headlineElement = document.querySelector(".headline");
    let index = 0;

    function type() {
        if (index < text.length) {
            headlineElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust speed by changing the delay time (in milliseconds)
        } else {
            // Optionally, restart the typing effect
            setTimeout(() => {
                headlineElement.textContent = '';
                index = 0;
                type();
            }, 2000); // Adjust delay before restarting (in milliseconds)
        }
    }

    type();
});
