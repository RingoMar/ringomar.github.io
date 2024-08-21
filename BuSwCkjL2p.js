const projects = [
  {
    imgSrc: "b0p3a4jcQh.png",
    title: "The Time Keeper",
    description:
      "This project is creating a tool for Kai Ceant to use during marathon gaming sessions. The tool leverages Unix timestamps, which are numerical time representations, to potentially schedule breaks, segment the marathon for pacing or challenges, and even automate tasks during the gameplay.",
    link: "./projects/timekeeper",
    linkText: "Read More...",
  },
  {
    imgSrc: "b0p3a4jcQh.png",
    title: "Place Control",
    description:
      "My most successful website helper yet - used my many in the r/Place event in order to control a group of people to place pixels.",
    link: "./websites/placecontrol",
    linkText: "Read More",
  },
  {
    imgSrc: "b0p3a4jcQh.png",
    title: "BoardQuelle",
    description:
      "Ever wonder what goes on in Zaquelle's mind? BoardQuelle archives it all - the wildest, the weirdest, and everything in between.",
    link: "https://ringomar.github.io/BoardQuelle",
    linkText: "View Site",
  },
  {
    imgSrc: "b0p3a4jcQh.png",
    title: "Project Temporal",
    description:
      "Temporal is a project that enables users to process near real-time audio and use it to power a bot capable of handling voice commands and tracking spoken information for various purposes.",
    link: "https://ringomar.github.io/project-temporal",
    linkText: "Read More",
  },
  {
    imgSrc: "b0p3a4jcQh.png",
    title: "Rin Sky",
    description:
      "Idle screen program like what you see in sci-fi shows that shows all the planes passing over in the given time",
    link: "https://ringomar.github.io/rinsky",
    linkText: "Vist Site",
  },
  {
    imgSrc: "b0p3a4jcQh.png",
    title: "Yume",
    description:
      "Limited by hardware I spent hours working on computer vision!",
    link: "https://github.com/ringomar/yume",
    linkText: "Github",
  },
  {
    imgSrc: "b0p3a4jcQh.png",
    title: "Rin Rain",
    description:
      "I measured the rain through the dry season here and the results were interesting...",
    link: "https://ringomar.github.io/rinrain",
    linkText: "Vist Site",
  },
  {
    imgSrc: "b0p3a4jcQh.png",
    title: "Rin Names",
    description:
      "In twitch chat you will notice people will pick out the most common name... this program tries to figure it out.",
    link: "https://github.com/RingoMar/rinNames",
    linkText: "Github",
  },
  {
    imgSrc: "b0p3a4jcQh.png",
    title: "Rin IRC",
    description:
      "IRC is going out of style but is good to have backwards compatabitly....",
    link: "https://github.com/RingoMar/rin-irc",
    linkText: "GitHub",
  },
  {
    imgSrc: "b0p3a4jcQh.png",
    title: "Kick QC",
    description:
      "A simple website with one goal: Watch XQC on kick with twitch chat only for the better viewing experance... This is kinda outdated as it seems as though twitch chat no longer hates to use kick chat",
    link: "https://ringomar.github.io/kickQC",
    linkText: "Vist",
  },
  {
    imgSrc: "b0p3a4jcQh.png",
    title: "kickeq",
    description:
      "Level up your browsing experience on Kick.com! Let's add a smooth scroll wheel for effortless navigation and a built-in compressor to keep your browsing cool and efficient. Imagine zipping through content like a boss!",
    link: "https://github.com/RingoMar/kickeq",
    linkText: "Github",
  },
  {
    imgSrc: "b0p3a4jcQh.png",
    title: "AT Scroll",
    description:
      "Make Angel Thump even more user-friendly! Adding a scroll wheel will make navigating content a breeze. It'll be like having a tiny angel on your shoulder, helping you explore with ease.",
    link: "https://github.com/RingoMar/at_scroll",
    linkText: "Github",
  },
  {
    imgSrc: "b0p3a4jcQh.png",
    title: "First Time Chatter",
    description:
      "Count the number of new twitch chatters that has came in your chat",
    link: "",
    linkText: "",
  },
];

const itemsPerPage = 5;
let currentPage = 1;

function renderProjects() {
  const projectList = document.getElementById("projectList");
  projectList.innerHTML = "";
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentProjects = projects.slice(start, end);

  currentProjects.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item bg-cc text-white mb-2";

    const img = document.createElement("img");
    img.className = "img-responsive img-rounded";
    img.src = project.imgSrc;
    listItem.appendChild(img);

    const heading = document.createElement("h3");
    heading.className = "list-group-item-heading";
    heading.textContent = project.title;
    listItem.appendChild(heading);

    const description = document.createElement("p");
    description.className = "list-group-item-text lead";
    description.innerHTML = project.description;
    if (project.link) {
      description.innerHTML += `<br /><a href="${project.link}"><small>${project.linkText}</small></a>`;
    }
    listItem.appendChild(description);

    projectList.appendChild(listItem);
  });
}

function renderPagination() {
  const paginationControls = document.getElementById("paginationControls");
  paginationControls.innerHTML = "";
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.className = `page-item ${i === currentPage ? "active" : ""}`;

    const a = document.createElement("a");
    a.className = "page-link";
    a.href = "#";
    a.textContent = i;
    a.addEventListener("click", function (event) {
      event.preventDefault();
      currentPage = i;
      renderProjects();
      renderPagination();
    });

    li.appendChild(a);
    paginationControls.appendChild(li);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderProjects();
  renderPagination();
});
