let days =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
console.log(days);
let  ranDom = Math.random()*6;
console.log(Math.ceil(ranDom));
document.write(`<h1 class="heading">${ days[Math.ceil(ranDom)]}</h1>`);
