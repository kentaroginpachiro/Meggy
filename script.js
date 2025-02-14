document.addEventListener("DOMContentLoaded", function () {
    // Your existing button handlers
    document.querySelector(".btn1").addEventListener("click", function () {
        const contentCard = document.querySelector(".wallet-addres");
        if (contentCard) {
            contentCard.scrollIntoView({ behavior: "smooth" });
        }
    });

    document.querySelector(".social-btn").addEventListener("click", function () {
        window.open("https://x.com/meggyytheshark?s=21", "_blank");
    });

    document.querySelector(".chart-btn").addEventListener("click", function () {
        window.open("https://dexscreener.com", "_blank");
    });

    // Your existing copy button handler
    document.getElementById("copyButton").addEventListener("click", function () {
        const walletText = document.querySelector(".wallet-addres p").textContent;
        navigator.clipboard.writeText(walletText).then(() => {
            // Create toast element
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

            // Remove toast after 2 seconds
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 2000);
        }).catch(err => {
            console.error("Error copying text: ", err);
        });
    });

    // Your existing zoom prevention
    document.addEventListener("wheel", function(event) {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, { passive: false });

    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && (event.key === "+" || event.key === "-" || event.key === "=")) {
            event.preventDefault();
        }
    });

    // ADDED: Enhanced zoom prevention for mobile devices
    // Prevent gesture events (pinch zoom)
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    }, { passive: false });

    document.addEventListener('gesturechange', function(e) {
        e.preventDefault();
    }, { passive: false });

    document.addEventListener('gestureend', function(e) {
        e.preventDefault();
    }, { passive: false });

    // ADDED: Prevent touchmove scaling
    document.addEventListener('touchmove', function(e) {
        if (e.scale && e.scale !== 1) {
            e.preventDefault();
        }
    }, { passive: false });

    // ADDED: Prevent double-tap zooming
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(e) {
        const now = Date.now();
        if (now - lastTouchEnd < 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });

    // Initialize AOS (your existing code)
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
    });
});
