const objects = [
    {
        owner : "John", 
        number: 5,
        specialized : "Math",
        seats: 45
    },
    {
        owner : "Juny", 
        number: 2,
        specialized : "English",
        seats: 25
    },
    {
        owner : "Kevin", 
        number: 4,
        specialized : "Biology",
        seats: 34
    },
    {
        owner : "Sam", 
        number: 51,
        specialized : "Russian",
        seats: 32
    },
];

const table = document.getElementById("table");
const tbody = table.children[1];

const loaded = (filters = {}) => {

    const data = objects.filter((obj) => obj.owner.includes(filters.firstName || "") );

    data.map( (t, i) => {
        const row = document.createElement("tr");
        row.innerHTML = 
        `
        <th scope="row">${i+1}</th>
        <td>${t.owner}</td>
        <td>${t.number}</td>
        <td>${t.specialized}</td>
        <td>${t.seats}</td>
        <td>
            <button class="btn" onclick="trash(this)"><i class="fas fa-trash"></i></button>
        </td>
        `;
        tbody.appendChild(row);
    });
}

const filter = (e) =>{
    tbody.innerHTML = "";
    loaded({firstName: e.target.value})
}

const trash = (e) =>{
    e.parentNode.parentNode.remove();
}


const deleteAll = (e) =>{
    if(e.parentNode.parentNode.children[2].children[0].children[1] != null) e.parentNode.parentNode.children[2].children[0].children[1].remove();
}