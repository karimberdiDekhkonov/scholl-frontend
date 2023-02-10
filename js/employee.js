const objects = [
    {
        firstName : "John", 
        lastName: "Mask",
        job : "Cleaner",
        salary : 2000,
        phoneNumber:"+1 123 435 999"
    },
    {
        firstName : "July", 
        lastName: "Mask",
        job : "Teacher",
        salary : 4000,
        phoneNumber:"+1 980 435 234"
    },
    {
        firstName : "Jony", 
        lastName: "Sam",
        job : "Security",
        salary : 3000,
        phoneNumber:"+1 586 435 435"
    },
    {
        firstName : "Kevin", 
        lastName: "Hack",
        job : "Leader",
        salary : 2500,
        phoneNumber:"+1 345 435 657"
    }
];

const table = document.getElementById("table");
const tbody = table.children[1];

const loaded = (filters = {}) => {

    const data = objects.filter((obj) => obj.firstName.includes(filters.name) || obj.lastName.includes(filters.name || "") )

    data.map( (t, i) => {
        const row = document.createElement("tr");
        row.innerHTML = 
        `
        <th scope="row">${i+1}</th>
        <td>${t.firstName}</td>
        <td>${t.lastName}</td>
        <td>${t.job}</td>
        <td>${t.salary}</td>
        <td>${t.phoneNumber}</td>
        <td>
            <button class="btn" onclick="trash(this)"><i class="fas fa-trash"></i></button>
        </td>
        `;
        tbody.appendChild(row);
    });
}

const filter = (e) =>{
    tbody.innerHTML = "";
    loaded({name: e.target.value})
}


const trash = (e) =>{
    e.parentNode.parentNode.remove();
}


const deleteAll = (e) =>{
    if(e.parentNode.parentNode.children[2].children[0].children[1] != null) e.parentNode.parentNode.children[2].children[0].children[1].remove();
}