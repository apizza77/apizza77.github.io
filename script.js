document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('.start-button');
    const startMenu = document.querySelector('.start-menu');
    const taskbarApps = document.querySelectorAll('.taskbar-app');
    const appFrame = document.getElementById('app-frame');
    const changeBackgroundButton = document.querySelector('.change-background');
    const backgrounds = ['images/background1.jpg', 'images/background2.jpg'];
    let currentBackgroundIndex = 0;

    startButton.addEventListener('click', () => {
        startMenu.style.display = startMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    taskbarApps.forEach(appButton => {
        appButton.addEventListener('click', () => {
            const appSrc = appButton.getAttribute('data-app');
            appFrame.src = appSrc;
        });
    });

    changeBackgroundButton.addEventListener('click', () => {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        document.querySelector('.desktop').style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
    });
});
