// 1. Where to add
const placeList = document.getElementById('places-list');

// 2. What to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

// 3. Add the child
placeList.appendChild(li);

// 1. Where to add
const mainContainer = document.getElementById('main-container');

// 2. What to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biryani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Salad';
ul.appendChild(li3);
const li4 = document.createElement('li');
li4.innerText = 'Sweets';
ul.appendChild(li4);

// 3. Add the child
section.appendChild(ul);
mainContainer.appendChild(section);

// Set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress section</h1>
<ul>
    <li>Lungi</li>
    <li>T-shirt</li>
    <li>Pant</li>
    <li>Panjabi</li>
</ul>
`
mainContainer.appendChild(sectionDress);