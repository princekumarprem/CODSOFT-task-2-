console.log("script running....")
document.querySelector('.cross').style.display = 'none'
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(()=>{
        document.querySelector('.cross').style.display = 'inline'
    },350)
    }
})

// JavaScript to control the timing of text animation
document.addEventListener("DOMContentLoaded", function() {
    const text = "i to engineer";
    const textContainer = document.getElementById("textAnimation");
    let delay = 0;

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement("span");
        span.textContent = text[i];
        span.style.animationDelay = `${delay}s`;
        textContainer.appendChild(span);
        delay += 0.5; // Adjust the delay as needed
    }

    textContainer.style.opacity = 1;
});


    const toggleDetails = document.querySelectorAll('.toggle-details');

    toggleDetails.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const details = toggle.previousElementSibling;
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });
    });
