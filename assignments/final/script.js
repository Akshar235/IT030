const items = [
  {
    name: "HTML",
    category: "Language",
    description: "I use HTML to structure my web pages with clear sections."
  },
  {
    name: "CSS",
    category: "Language",
    description: "I use CSS to style layouts, colors, and spacing for a clean design."
  },
  {
    name: "Portfolio Website",
    category: "Project",
    description: "This project showcases my profile, experience, and goals."
  },
  {
    name: "Community Impact Page",
    category: "Project",
    description: "I created pages to explain my service and fundraising efforts."
  },
  {
    name: "Front-End Growth",
    category: "Goal",
    description: "I want to improve my front-end skills through more practice."
  },
  {
    name: "Internship Experience",
    category: "Goal",
    description: "I aim to gain professional experience and business communication skills."
  }
];

const languageLinks = {
  HTML: "https://www.w3schools.com/html/default.asp",
  CSS: "https://www.w3schools.com/css/default.asp"
};

function renderItems(list) {
  const container = document.getElementById("items-container");

  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const card = document.createElement("div");
    card.className = "project-card";

    const isLanguage = list[i].category === "Language";
    const link = languageLinks[list[i].name];
    const titleMarkup = isLanguage && link
      ? "<h3><a href='" + link + "' target='_blank'>" + list[i].name + "</a></h3>"
      : "<h3>" + list[i].name + "</h3>";

    card.innerHTML =
      "<div class='project-info'>" +
      titleMarkup +
      "<p>" + list[i].description + "</p>" +
      "<p><strong>Category:</strong> " + list[i].category + "</p>" +
      "</div>";

    container.appendChild(card);
  }

  document.getElementById("result-count").textContent =
    list.length + " items shown";
}

function filterItems(selectedCategory) {
  switch (selectedCategory) {
    case "":
      renderItems(items);
      break;

    case "Language":
      const filtered1 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Language") {
          filtered1.push(items[i]);
        }
      }
      renderItems(filtered1);
      break;

    case "Project":
      const filtered2 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Project") {
          filtered2.push(items[i]);
        }
      }
      renderItems(filtered2);
      break;

    case "Goal":
      const filtered3 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Goal") {
          filtered3.push(items[i]);
        }
      }
      renderItems(filtered3);
      break;

    default:
      renderItems(items);
      break;
  }
}

filterItems("");
