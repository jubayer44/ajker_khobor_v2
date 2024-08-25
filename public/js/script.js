document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  // Loop through each nav link
  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");

    if (currentPath === linkHref) {
      link.classList.add("text-blue-500");
      link.classList.add("border-b-2");
    }
  });
});

window.onload = async () => {
  try {
    const response = await fetch("https://ajkerkhobor.news/api/latest");
    const data = await response.json();

    const itemsHtml = data
      .slice(0, 8)
      .map((item) => {
        return `
          <span class="ticker-item"><a href="news/${item?._id}">${item?.title}</a></span>
        `;
      })
      .join("");

    document.getElementById("text-slider").innerHTML = itemsHtml;
  } catch (error) {
    console.log(error);
  }
};
