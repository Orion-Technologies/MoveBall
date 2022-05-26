let ball = document.querySelector('.ball');
let moveBy = 10;

window.addEventListener('load', () => {
    ball.style.position ='absolute';
    ball.style.left = 0;
    ball.style.top = 0;
});

window.addEventListener('keyup', (e) => {
    switch(e.key){
        case 'ArrowLeft':
            
                ball.style.left = parseInt(ball.style.left) - moveBy + "px";
            
            break;
        case 'ArrowRight':
            ball.style.left = parseInt(ball.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            ball.style.top = parseInt(ball.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            ball.style.top = parseInt(ball.style.top) + moveBy + 'px';
            break;
    }
});