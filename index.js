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

    topButton.addEventListener("click", function () {
        topButton.classList.remove("visible");
    });

    document.getElementById("habitizer").addEventListener("click", function () {
        window.open("https://github.com/CSE-110-Winter-2025/habitizer-team-11");
    });

    document
        .getElementById("pacePartner")
        .addEventListener("click", function () {
            window.open("https://pace-partner.onrender.com");
        });

    document
        .getElementById("minesweeper")
        .addEventListener("click", function () {
            window.open("https://minesweeper-em9.pages.dev");
        });
});

document.addEventListener("scroll", function () {
    const habitizer = document.getElementById("habitizer");
    const pacePartner = document.getElementById("pacePartner");
    const minesweeper = document.getElementById("minesweeper");
    const aboutMe = document.getElementById("aboutMe");

    const habitizerRect = habitizer.getBoundingClientRect();
    if (habitizerRect.top < window.innerHeight && habitizerRect.bottom >= 0) {
        habitizer.classList.add("loaded");
    }

    const pacePartnerRect = pacePartner.getBoundingClientRect();
    if (
        pacePartnerRect.top < window.innerHeight &&
        pacePartnerRect.bottom >= 0
    ) {
        pacePartner.classList.add("loaded");
    }

    const minesweeperRect = minesweeper.getBoundingClientRect();
    if (
        minesweeperRect.top < window.innerHeight &&
        minesweeperRect.bottom >= 0
    ) {
        minesweeper.classList.add("loaded");
    }
    const aboutMeRect = aboutMe.getBoundingClientRect();
    if (aboutMeRect.top < window.innerHeight && aboutMeRect.bottom >= 0) {
        aboutMe.classList.add("loaded");
    }
});
