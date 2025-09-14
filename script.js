document.addEventListener("DOMContentLoaded", () => {
  const roleItems = document.querySelectorAll(".roles li");
  const panels = document.querySelectorAll(".testimonial");
  if (!roleItems.length || !panels.length) return;

  const activate = (id, li) => {
    roleItems.forEach(x => x.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));
    li.classList.add("active");
    const target = document.getElementById(id);
    if (target) target.classList.add("active");
  };

  roleItems.forEach(li => {
    li.addEventListener("click", () => activate(li.dataset.testimonial, li));
  });
});