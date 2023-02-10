const sidebar = document.getElementById("sidebar");

const togglesidebar = () => {
    if(sidebar.classList.contains("hide")) sidebar.classList.remove("hide");
    else sidebar.classList.add("hide");
};

const keyup = (e) => {
    if(e.key == "Escape") sidebar.classList.remove("hide");
}