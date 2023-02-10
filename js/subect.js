const objects = [
    {
        name : "Math", 
        teachers: 5,
        students : 190,
        rooms: 5
    },
    {
        name : "English", 
        teachers: 5,
        students : 280,
        rooms: 13
    },
    {
        name : "Biology", 
        teachers: 3,
        students : 180,
        rooms: 12
    },
    {
        name : "Physiology", 
        teachers: 2,
        students : 110,
        rooms: 4
    },
];

const table = document.getElementById("table");
const tbody = table.children[1];

const loaded = (filters = {}) => {

    const data = objects.filter((obj) => obj.name.includes(filters.firstName || "") );

    data.map( (t, i) => {
        const row = document.createElement("tr");
        row.innerHTML = 
        `
        <th scope="row">${i+1}</th>
        <td>${t.name}</td>
        <td>${t.teachers}</td>
        <td>${t.students}</td>
        <td>${t.rooms}</td>
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