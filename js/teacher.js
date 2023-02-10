const teachers = [
    {
        firstName : "John", 
        lastName: "Mask",
        subject : "computer science",
        phoneNumber:"+1 123 435 999"
    },
    {
        firstName : "July", 
        lastName: "Mask",
        subject : "Math",
        phoneNumber:"+1 980 435 234"
    },
    {
        firstName : "Jony", 
        lastName: "Sam",
        subject : "English",
        phoneNumber:"+1 586 435 435"
    },
    {
        firstName : "Kevin", 
        lastName: "Hack",
        subject : "Biology",
        phoneNumber:"+1 345 435 657"
    }
];

const teachersTable = document.getElementById("teachersTable");
const tbody = teachersTable.children[1];

const loaded = (filters = {}) => {

    const data = teachers.filter((obj) => obj.firstName.includes(filters.name) || obj.lastName.includes(filters.name || "") )

    data.map( (t, i) => {
        const row = document.createElement("tr");
        row.innerHTML = 
        `
        <th scope="row">${i+1}</th>
        <td>${t.firstName}</td>
        <td>${t.lastName}</td>
        <td>${t.subject}</td>
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
    loaded({name:e.target.value});
}

const trash = (e) =>{
    e.parentNode.parentNode.remove();
}

const deleteAll = (e) =>{
    if(e.parentNode.parentNode.children[2].children[0].children[1] != null) e.parentNode.parentNode.children[2].children[0].children[1].remove();
}