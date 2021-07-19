//cache elements
const d4 = document.getElementById('d4');
const d6 = document.getElementById('d6');
const d8 = document.getElementById('d8');
const d10 = document.getElementById('d10');
const d12 = document.getElementById('d12');
const d20 = document.getElementById('d20');
const d100 = document.getElementById('d100');
const result = document.getElementById('result');

// dice function than rolls the dice
function dice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// main function than creates the events in each dice
function main() {
  d4.addEventListener('click', () => {
    let r = dice(1, 4);
    result.innerText = r;
    return r;
  });
  d6.addEventListener('click', () => {
    let r = dice(1, 6);
    result.innerText = r;
    return r;
  });
  d8.addEventListener('click', () => {
    let r = dice(1, 8);
    result.innerText = r;
    return r;
  });
  d10.addEventListener('click', () => {
    let r = dice(1, 10);
    result.innerText = r;
    return r;
  });
  d12.addEventListener('click', () => {
    let r = dice(1, 12);
    result.innerText = r;
    return r;
  });
  d20.addEventListener('click', () => {
    let r = dice(1, 20);
    result.innerText = r;
    return r;
  });
  d100.addEventListener('click', () => {
    let r = dice(1, 100);
    result.innerText = r;
    return r;
  });
}

// callback the main function
console.log(main());
