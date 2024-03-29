const projectsSection = document.querySelector(".projects");
const interestsSection = document.querySelector(".interests");

const backendDiv = projectsSection.querySelector(".backend");
const frontendDiv = projectsSection.querySelector(".frontend");

const headers = document.getElementsByTagName("header");

for (let i = 0; i < headers.length; i++) {
    const header = headers[i];

    const tags = header.getElementsByClassName("tag");
    const projectTag = tags[0];
    const interestsTag = tags[1];

    projectsSection.addEventListener("mouseenter", e => {
        projectTag.setAttribute("style", "display : block");
    });
    projectsSection.addEventListener("mouseleave", e => {
        projectTag.setAttribute("style", "display : none");
    });

    interestsSection.addEventListener("mouseenter", e => {
        interestsTag.setAttribute("style", "display : block");
    });
    interestsSection.addEventListener("mouseleave", e => {
        interestsTag.setAttribute("style", "display : none");
    });
}

function Project(link, imageUrl, title, description, skills, period) {
    this.link = link;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.skills = skills;
    this.period = period;
}

function addProject(project, targetContainer, imageSize, imagePosition) {
    let container;
    if (targetContainer === "backend") {
        container = backendDiv;
    }
    else {
        container = frontendDiv;
    }

    const article = document.createElement("article");
    const a = document.createElement("a");
    const projectImg = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("h6");
    const skills = document.createElement("div");
    const period = document.createElement("span");
    
    article.setAttribute("class", project.title);
    a.setAttribute("href", project.link);
    a.setAttribute("target", "_blank");
    projectImg.setAttribute("class", "project-img");
    projectImg.setAttribute("style", `background: no-repeat ${imagePosition} url('${project.imageUrl}'); background-size: ${imageSize}`);
    title.setAttribute("class", "title");
    title.innerText = project.title;
    description.className = "description";
    description.innerText = project.description;
    skills.setAttribute("class", "skills");
    period.className = "period";
    period.innerText = `${project.period[0]} ~ ${project.period[1]}`;

    a.append(projectImg);
    article.append(a);
    article.append(title);
    article.append(description);
    project.skills.forEach(str => {
        const skill = document.createElement("span");
        skill.innerText = str;
        skills.append(skill);
    });
    article.append(skills);
    article.append(period);

    container.append(article);
}

// Projects 
/*
const sample = new Project(
    "about:blank",
    "/resources/images/yao.gif",
    "sample",
    "sample sample",
    ['ReactJS','Typescript'],
    ['2023.03.09', "2023.04.30"]
);

addProject(sample, "frontend", "cover", "center");
*/

const bookSearch = new Project(
    "/booksearch",
    "/resources/images/booksearch.png",
    "Book Search",
    "Book Search and Inquiry Service",
    ['VanilaJS', 'jQeury', 'Kakao Search API'],
    ['2023.03.12', "2023.03.13"]
);

addProject(bookSearch, "frontend", "contain", "center");

const omok = new Project(
    "/omok",
    "/resources/images/omok.png",
    "Omok",
    "Let's play a fun Omok game!",
    ['VanilaJS'],
    ['2023.03.11', "2023.03.12"]
);

addProject(omok, "frontend", "contain", "center");

const atm = new Project(
    "https://github.com/youngjae0216/atm.git",
    "/resources/images/bank.png",
    "YoungJae BANK",
    "Console ATM (Java mini project)",
    ['Java'],
    ['2023.03.14', "2023.03.15"]
);


const rpg_game = new Project(
    "https://github.com/youngjae0216/rpg-game.git",
    "/resources/images/rpg.png",
    "RPG-Game",
    "Console Rpg-Game (Java mini project)",
    ['Java'],
    ['2023.03.18', "2023.03.20"]
);
    
    
const Intranet = new Project(
    "http://intranet-service.store/",
    "/resources/images/intranet.png",
    "Intranet-Service",
    "University Academic Management System",
    ['JSP', 'JSTL', 'Java 11', 'Tomcat 9', 'MySQL', 'jQuery'],
    ['2023.04.10', "2023.04.24"]
);
        
        
const LaundryGarden = new Project(
    "http://laundrygarden.store/",
    "/resources/images/laundrygarden.png",
    "LaundryGarden(세정원)",
    "Non-face-to-face Laundry Service",
    ['spring boot', 'spring mvc', 'spring data(jpa)','kakao api', 'uploadcare', 'JSP', 'Java 11', 'Tomcat 9', 'MySQL', 'jQuery'],
    ['2023.04.27', "2023.05.15"]
);

const RentalProject = new Project(
    "https://github.com/youngjae0216/RentalProject.git",
    "/resources/images/rentcar.png",
    "RentalProject",
    "Rent Vehicle Service",
    ['JSP', 'Scriptlet', 'Java 11', 'Tomcat 9', 'MySQL', 'jQuery'],
    ['2023.04.04', "2023.04.10"]
);

addProject(LaundryGarden, "backend", "contain", "center");
addProject(Intranet, "backend", "contain", "center");
addProject(atm, "backend", "contain", "center");
addProject(rpg_game, "backend", "contain", "center");
addProject(RentalProject, "backend", "contain", "center");
