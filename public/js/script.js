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

// load latest news
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

// Sorbosesh and Sorbadhik pothito new Tab
let activeTab = 1;
function setActiveTab(tabNumber) {
  activeTab = tabNumber;
  document
    .getElementById("tab1")
    .classList.toggle("bg-blue-500", activeTab === 1);
  document
    .getElementById("tab1")
    .classList.toggle("text-white", activeTab === 1);
  document
    .getElementById("tab2")
    .classList.toggle("bg-blue-500", activeTab === 2);
  document
    .getElementById("tab2")
    .classList.toggle("text-white", activeTab === 2);

  document
    .getElementById("content1")
    .classList.toggle("hidden", activeTab !== 1);
  document
    .getElementById("content2")
    .classList.toggle("hidden", activeTab !== 2);
}
