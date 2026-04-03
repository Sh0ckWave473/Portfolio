/* ── ANIMATED WAVE BACKGROUND ── */
(function () {
    const canvas = document.getElementById("wave-canvas");
    const ctx = canvas.getContext("2d");
    let W, H;
    function resize() {
        W = canvas.width = canvas.parentElement.offsetWidth;
        H = canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);
    const LINES = 30;
    function draw(t) {
        ctx.clearRect(0, 0, W, H);
        for (let i = 0; i < LINES; i++) {
            const p = i / LINES;
            const alpha = 0.07 + p * 0.5;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(200,38,38,${alpha})`;
            ctx.lineWidth = 0.75;
            const freq = 1.6 + p * 2.8;
            const amp = 35 + p * 95;
            const yBase = H * 0.3 + p * H * 0.45;
            const phase = t * 0.00038 * (1 + p * 0.55) + i * 0.25;
            for (let x = 0; x <= W; x += 2) {
                const nx = x / W;
                const y =
                    yBase +
                    Math.sin(nx * Math.PI * freq + phase) * amp +
                    Math.sin(nx * Math.PI * freq * 0.48 - phase * 0.65) *
                        amp *
                        0.38;
                x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.stroke();
        }
        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
})();

/* ── SCROLL REVEAL ── */
(function () {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add("in");
                    io.unobserve(e.target);
                }
            });
        },
        { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    document
        .querySelectorAll("#home .reveal")
        .forEach((el) => el.classList.add("in"));
})();

/* ── KEYBOARD SUPPORT FOR PROJECT CARDS ── */
document.querySelectorAll('.proj-card[role="link"]').forEach((card) => {
    card.addEventListener("keydown", (e) => {
        if (e.key === "Enter") card.click();
    });
});
