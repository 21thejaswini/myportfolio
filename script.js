
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.documentElement.classList.add("dark");
    themeIcon.src = "./images/moon_5043117.png";
} else {
    themeIcon.src = "./images/night.png";
}

themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeIcon.src = "./images/moon_5043117.png";
    } else {
        localStorage.setItem("theme", "light");
        themeIcon.src = "./images/night.png";
    }
});


// =================== Mobile Menu ===================
const sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.classList.remove("translate-x-full");
}

function closeMenu() {
    sideMenu.classList.add("translate-x-full");
}


// =================== Navbar Scroll Effect ===================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add(
            "bg-white",
            "dark:bg-gray-900",
            "shadow-xl"
        );

        navbar.classList.remove(
            "bg-white/70",
            "dark:bg-gray-900/70"
        );
    } else {
        navbar.classList.remove(
            "bg-white",
            "dark:bg-gray-900",
            "shadow-xl"
        );

        navbar.classList.add(
            "bg-white/70",
            "dark:bg-gray-900/70"
        );
    }
});