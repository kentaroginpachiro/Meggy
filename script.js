document.addEventListener("DOMContentLoaded", function () {
    // Button 1: Scroll ke Content Card
    document.querySelector(".btn1").addEventListener("click", function () {
        const contentCard = document.querySelector(".content-card");
        if (contentCard) {
            contentCard.scrollIntoView({ behavior: "smooth" });
        }
    });

    // Button 2: Redirect ke akun X (Twitter)
    document.querySelector(".social-btn").addEventListener("click", function () {
        window.open("https://twitter.com/your_account", "_blank");
    });

    // Button 3: Redirect ke Dexscreener
    document.querySelector(".chart-btn").addEventListener("click", function () {
        window.open("https://dexscreener.com", "_blank");
    });
});
