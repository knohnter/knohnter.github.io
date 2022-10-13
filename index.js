let btn = document.getElementById('btn');
let username = document.getElementById('name');
let output = document.getElementById('output');


btn.addEventListener('click', function() {
    output.innerHTML = username.value; 
    $("#output").load("test.txt");
});
