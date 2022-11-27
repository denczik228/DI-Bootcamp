//Ex1:Users
//Retrieve the div and console.log it
const forDiv = document.body.firstElementChild
console.log(forDiv);

//Change the name “Pete” to “Richard”.
const nameCh = forDiv.nextElementSibling.lastElementChild;//selecting last item
const newN = document.createElement('li');//creating a new list of names
newN.innerHTML = 'John';
nameCh.parentNode.replaceChild(newN, nameCh);//get the parent of the target element and calling of replaceC method with newElem and old-one; 
console.log(newN);

//Change each first name of the two < ul > 's to your name.
function changN() {
    const allLi = document.getElementsByTagName("li");
    allLi[0].textContent = "Den";
    allLi[2].textContent = "Den";
}
changN();

//Delete the <li> that contains the text node “Sarah”.
const rem = document.getElementsByTagName("li")[3];
const reS = rem.parentNode.removeChild(rem);
console.log(reS);

//Add a class called student_list to both of the <ul>'s.
const cl = document.getElementsByClassName("list");//get a nodelist of all classes list
cl.textContent = 'student_list';
console.log(cl);

//Add the classes university and attendance to the first <ul>.
const a = forDiv.nextElementSibling;
const b = a.classList.add('attendance', 'university');