document.addEventListener("DOMContentLoaded", function () {
    // Button 1: Scroll ke Content Card
    document.querySelector(".btn1").addEventListener("click", function () {
        const contentCard = document.querySelector(".wallet-addres");
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

    // Button Copy Wallet Address
    document.getElementById("copyButton").addEventListener("click", function () {
        const walletText = document.querySelector(".wallet-addres p").textContent;
        navigator.clipboard.writeText(walletText).then(() => {
            // Buat elemen toast
            let toast = document.createElement("div");
            toast.textContent = "Address copied to clipboard you can paste it on dexscreener.com";
            toast.style.position = "fixed";
            toast.style.bottom = "20px";
            toast.style.left = "50%";
            toast.style.transform = "translateX(-50%)";
            toast.style.backgroundColor = "#333";
            toast.style.color = "#fff";
            toast.style.padding = "10px 20px";
            toast.style.borderRadius = "5px";
            toast.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
            toast.style.zIndex = "1000";
            document.body.appendChild(toast);

            // Hapus toast setelah 2 detik
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 2000);
        }).catch(err => {
            console.error("Error copying text: ", err);
        });
    });

    // Prevent zoom on desktop (Ctrl + Scroll)
    document.addEventListener("wheel", function(event) {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, { passive: false });

    // Prevent zoom on desktop (Ctrl + "+" / "-")
    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && (event.key === "+" || event.key === "-" || event.key === "=")) {
            event.preventDefault();
        }
    });

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
    });
});
