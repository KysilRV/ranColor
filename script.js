const text = document.querySelector('.color'),
      bg = document.querySelector('.main'),
      btn = document.querySelector('.btn');

let gradient = 'background: linear-gradient(to right, rgb(0, 255, 60), 30%, rgb(240, 132, 104));';
function runGradient() {
    function runNum(num) {
        return Math.floor(Math.random() * num);
    };

    gradient = `background: linear-gradient(to right, rgb(${runNum(255)}, ${runNum(255)}, ${runNum(255)}), ${runNum(100)}%, rgb(${runNum(255)}, ${runNum(255)}, ${runNum(255)}));`
    return gradient;
};

text.textContent = gradient;

btn.addEventListener('click', function() {
    this.style.cssText = 'animation: click .3s;';
    text.classList.add('inactive');
    setTimeout(() => {
        text.classList.add('active');
        text.classList.remove('inactive');
        text.textContent = runGradient();
        this.style.cssText = 'animation: none;';
    }, 500);
    bg.style.cssText = gradient;
});