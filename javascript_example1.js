// your JavaScript file
const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

//adding a red p
const pContent = document.createElement('p');
pContent.classList.add('red');
pContent.style.color = 'red';
pContent.textContent = "Hey I'm red!";
container.appendChild(pContent);

//add a blue h3
const h3Content = document.createElement('h3');
h3Content.style.cssText = 'color: blue; background: white;';
h3Content.textContent = "I'm a blue h3!"
container.appendChild(h3Content);

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
const dContent = document.createElement('div');
dContent.style.cssText = 'background: pink;   border: 3px solid black;' ;
const h1Content = document.createElement('h1');
h1Content.textContent = "I'm in a div";

const p2Content = document.createElement('p');
p2Content.textContent = "ME TOO!"

dContent.appendChild(h1Content);
dContent.appendChild(p2Content);

container.appendChild(dContent);
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.


//create the functionality for the second button in an external file:
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");