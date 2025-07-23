document.addEventListener("DOMContentLoaded", function () {
    const info = document.getElementById("info");
    const profile = document.getElementById("profile");

    profile.classList.add("loaded");
    info.classList.add("loaded");

    const topButton = document.getElementById("topButton");

    window.addEventListener("scroll", function () {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            topButton.classList.add("visible");
        } else {
            topButton.classList.remove("visible");
        }
    });
});
