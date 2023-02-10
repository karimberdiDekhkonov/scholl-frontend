const cards = document.getElementById("cards");

const sections = [
    {title: "Teachers", link: "./htmls/teacher.html"},
    {title: "Students", link: "./htmls/student.html"},
    {title: "Employees", link: "./htmls/employees.html"},
    {title: "Subjects", link: "./htmls/subjects.html"},
    {title: "Rooms", link: "./htmls/rooms.html"},
    {title: "Schedule", link: "./htmls/schedule.html"},
]; 

const setCards = () =>{
    sections.map(
        (section) =>{
            const col = document.createElement("div");
            col.className = "col-md-6 col-lg-4 mb-3";

            const link = document.createElement("a");
            link.className = "shadow bg-white rounded p-5 d-block decoration";
            link.href = section.link;
            link.innerHTML = section.title;

            col.appendChild(link);
            cards.appendChild(col);
        }
    )
}

const loaded = () => setCards();