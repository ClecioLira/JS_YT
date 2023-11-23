let myLeads = [];
// myLeads = JSON.parse(myLeads);
// myLeads.push("www");
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads);

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');

const leads = JSON.parse(localStorage.getItem('myLeads'));

if (leads) {
    myLeads = leads;
    renderLeads();
}

function renderLeads() {
    let listItems = "";
    for(let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a>
            </li>`
        // const li = document.createElement('li');
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems;
}

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    renderLeads();
    inputEl.value = "";
})

deleteBtn.addEventListener('click', function() {
    localStorage.clear();
    myLeads = [];
    renderLeads();
})

