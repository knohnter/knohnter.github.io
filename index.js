let btn = GetElementByID('btn');
let username = GetElementByID('name');
let output = GetElementByID('output');

btn.addEventListener('click', function() {
    output.innerHTML = username.textContent; 
})
