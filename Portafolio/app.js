document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(el => el.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
