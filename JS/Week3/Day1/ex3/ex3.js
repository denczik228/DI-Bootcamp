//Exercise 3 : Change The Navbar

//In the < div >, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const div = document.querySelector('div');
div.setAttribute("id", "socialNetworkNavigation");

//We are going to add a new <li> to the <ul>.
//First, create a new < li > tag(use the createElement method).
const par = document.createElement("li");

//Create a new text node with “Logout” as its specified text.
const text = document.createTextNode(`Logout`);
const e = document.createElement('a');
e.href = '#';
e.title = 'link';
e.appendChild(text);

//Append the text node to the newly created list node(<li>).
par.appendChild(e);

//Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
const wrap = document.querySelector('ul');
wrap.appendChild(par);

//Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).


//document.querySelectorAll('a')[0].textContent = 'vhnofd'
document.querySelector('ul').firstElementChild.firstChild.textContent = 'first'
document.querySelector('ul').lastElementChild.lastChild.textContent = 'end';
//console.log(document.querySelector('ul').firstElementChild.textContent = "ere");
// let listA = document.getElementsByTagName('a');
// console.log(listA.firstElementChild.firstElementChild
// console.log(listA.lastElementChild.textContent('End'));


