const objects = [
    {
        day : "Monday", 
        a : "Math : 12.30",
        b : "Math : 12.30",
        c : "Math : 12.30",
        d : "Math : 12.30",
    },
    {
        day : "Tuesday", 
        a : "Math : 12.30",
        b : "Math : 12.30",
        c : "Math : 12.30",
        d : "Math : 12.30",
    },
    {
        day : "Wednesday",
        a : "Math : 12.30",
        b : "Math : 12.30",
        c : "Math : 12.30",
        d : "Math : 12.30",
    },
    {
        day : "Thursday",
        a : "Math : 12.30",
        b : "Math : 12.30",
        c : "Math : 12.30",
        d : "Math : 12.30",
    },
    { 
        day : "Friday",
        a : "Math : 12.30",
        b : "Math : 12.30",
        c : "Math : 12.30",
        d : "Math : 12.30",
    },
    {
        day : "Saturday",
        a : "Math : 12.30",
        b : "Math : 12.30",
        c : "Math : 12.30",
        d : "Math : 12.30",
    },
    {
        day : "Sunday", 
        a : "Math : 12.30",
        b : "Math : 12.30",
        c : "Math : 12.30",
        d : "Math : 12.30",
    },
];

const table = document.getElementById("table");
const tbody = table.children[1];

const loaded = (filters = {}) => {

    const data = objects.filter((obj) => obj.day.includes(filters.firstName || "") );

    data.map( (t) => {
        const row = document.createElement("tr");
        row.innerHTML = 
        `
        <th scope="row">${t.day}</th>
        <td>${t.a}</td>
        <td>${t.b}</td>
        <td>${t.c}</td>
        <td>${t.d}</td>
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