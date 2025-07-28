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

    const scrollBall = document.getElementById("scrollBall");
    const scrollBar = document.getElementById("scrollBar");
    const navbarOffset = document.getElementById("navbar").offsetHeight + 20;

    const scrollTop =
        (document.documentElement.scrollTop || document.body.scrollTop) +
        navbarOffset;

    const barTop = scrollBar.getBoundingClientRect().top + window.scrollY;
    const barHeight = scrollBar.offsetHeight;
    const ballHeight = scrollBall.offsetHeight;

    const scrollRange = barHeight - ballHeight;

    const sectionStart = barTop;
    const sectionEnd = barTop + barHeight - window.innerHeight;

    if (scrollTop >= sectionStart && scrollTop <= sectionEnd) {
        const relativeScroll = scrollTop - sectionStart;
        const maxScroll = sectionEnd - sectionStart;

        const scrollPercentage = relativeScroll / maxScroll;
        console.log(`Scroll Percentage: ${scrollPercentage}`);
        const ballPosition = scrollPercentage * scrollRange;

        scrollBall.style.top = `${ballPosition}px`;
    } else if (scrollTop < sectionStart) {
        scrollBall.style.top = "0px";
    } else {
        scrollBall.style.top = `${scrollRange}px`;
    }
});
