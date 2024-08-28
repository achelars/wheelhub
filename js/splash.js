document.addEventListener('DOMContentLoaded', (event) => {
    const logo = document.querySelector('.logo');
    const splashScreen = document.querySelector('.splash-screen');
    const sidebar = document.querySelector('.sidebar');
    const homeSection = document.querySelector('.home-section');
    const body = document.querySelector('body');

    logo.addEventListener('animationend', (e) => {
        if (e.animationName === 'fadeInRotateScale') {
            setTimeout(() => {
                splashScreen.classList.add('hidden');
                document.body.style.overflow = 'auto'; // Allow scrolling after splash screen
            }, 1000); // Adjust the delay to match the horizontal wipe effect duration
        }
    });
});
