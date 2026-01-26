// Terminal typing intro
const text = "whoami\nKent — Platform and Security Engineer / SysAdmin";
let i = 0;
const speed = 50;
const typedText = document.getElementById("typed-text");
const content = document.getElementById("content");

function type() {
  if (i < text.length) {
    typedText.textContent += text[i];
    i++;
    setTimeout(type, speed);
  } else {
    setTimeout(() => {
      content.classList.remove("hidden");
      document.getElementById("hero").style.display = "none";
    }, 600);
  }
}

type();

// Cursor prompt follower
const cursor = document.getElementById("cursor-prompt");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX + 10}px, ${e.clientY + 10}px)`;
});

document.addEventListener("scroll", () => {
  cursor.style.opacity = "0";
  clearTimeout(window.cursorTimeout);
  window.cursorTimeout = setTimeout(() => {
    cursor.style.opacity = "0.6";
  }, 300);
});

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// Mini terminal commands
const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    let response = "";

    switch (cmd) {
      case "whoami":
        response = "Kent — Platform and Security Engineer / SysAdmin";
        break;
      case "skills":
        response = "Windows, Linux, Networking, Security, Labs";
        break;
      case "contact":
        response = "kent@kmzonehq.com";
        break;
      default:
        response = "command not found";
    }

    output.textContent = response;
    input.value = "";
  }
});
