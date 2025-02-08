document.addEventListener("DOMContentLoaded", function () {


     // Prevent pinch zoom on touch devices
     document.addEventListener('touchmove', function(event) {
        if (event.scale !== 1) {
            event.preventDefault();
        }
    }, { passive: false });

    // Prevent double-tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });

    // Prevent zoom on desktop (Ctrl + mouse wheel)
    document.addEventListener('wheel', function(event) {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, { passive: false });

    // Prevent zoom on desktop (Ctrl + "+"/"-" keys)
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '=')) {
            event.preventDefault();
        }
    });

    // Prevent zoom on desktop (Ctrl + mouse wheel in Firefox)
    document.addEventListener('DOMMouseScroll', function(event) {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, { passive: false });


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

    // Mencegah Zoom Out di Desktop (Ctrl + Scroll atau Ctrl + "+" / "-")
    document.addEventListener("wheel", function(event) {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, { passive: false });

    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && (event.key === "+" || event.key === "-")) {
            event.preventDefault();
        }
    });
});
