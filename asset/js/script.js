const body = document.querySelector("body"),
    modeToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");
modeText = document.getElementById("link-text");
icon = document.getElementById("moon-sun");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.toggle("dark");

}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        modeText.innerText = "Dark Mode";
        icon.innerHTML = "<i class='uil uil-moon'></i>";
        localStorage.setItem("mode", "dark");
    } else {
        modeText.innerText = "Light Mode";
        icon.innerHTML = "<i class='uil uil-brightness'></i>";
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
    } else {
        localStorage.setItem("status", "open");
    }
})



// Define the data for the chart
const data = [
    { value: 30, color: "#ff6347" },
    { value: 70, color: "#87ceeb" }
];

// Get the chart element from the DOM
const chart = document.getElementById("chart");

// Loop through the data and create a slice for each item
let startAngle = 0;
data.forEach(item => {
    // Calculate the end angle based on the value
    const endAngle = startAngle + (item.value / 100) * 360;

    // Create a new slice element
    const slice = document.createElement("div");
    slice.classList.add("slice");
    slice.style.backgroundColor = item.color;
    slice.style.transform = `rotate(${startAngle}deg)`;

    // Create a clip path to mask the slice
    const clipPath = document.createElement("div");
    clipPath.style.clip = `rect(0px, 30px, 60px, 0px)`;
    clipPath.appendChild(slice);
    chart.appendChild(clipPath);

    // Update the start angle for the next slice
    startAngle = endAngle;
});