tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        dark: "black",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".theme-controller")
    .addEventListener("change", function () {
      if (this.checked) {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "black");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
      }
    });
});

const FAQ = [
  {
    question: "Qui êtes-vous?",
    answer:
      "Je m'appelle Yacine, 25 ans, actuellement en formation développeur Full Stack (BAC+3) depuis le 14 mai 2024. Passionné d'informatique, je recherche un stage de fin de formation du 11 décembre 2024 au 16 avril 2025",
  },
  {
    question: "Pouvez-vous nous parler plus en détail de votre stage ?",
    answer:
      "Mon stage de fin de formation dure 4 mois. La rémunération est prise en charge par la région, sans coût pour l'entreprise. J'aspire à développer mes compétences en front-end et back-end, notamment avec React et NextJS.",
  },
  {
    question:
      "Bien que vous soyez débutant, qu'est-ce qui vous distingue des autres développeurs juniors ?",
    answer:
      "Ma passion pour le développement web, mon autodidaxie et mon approche de résolution de problèmes. Par exemple, j'ai réalisé une réplique du site Amazon en apprenant JavaScript à travers ce projet.",
  },
  {
    question:
      "Pourquoi avoir choisi de vous concentrer sur JavaScript, HTML et Tailwind CSS",
    answer:
      "Ces technologies forment une base solide pour le développement web moderne. JavaScript offre une polyvalence et une interactivité rapide et possède un énorme éco-système qui répond à tous mes besoins, HTML structure le contenu, et Tailwind CSS apporte le design et permet un développement rapide et responsive. Mon Portfolio a utilisé cette stack.",
  },
  {
    question:
      "Comment envisagez-vous votre progression en tant que développeur dans les prochains mois ?",
    answer:
      "Je prévois d'approfondir mes connaissances en JavaScript en apprenant React et Next.js. Je suis également un cours sur Express.js pour développer mes compétences back-end. Mon objectif est de devenir développeur full-stack junior",
  },
  {
    question:
      "Pouvez-vous décrire un défi technique que vous avez rencontré récemment et comment vous l'avez surmonté ?",
    answer:
      "J'ai rencontré des difficultés pour implémenter la librairie AOS dans mon projet \"Réplique Liverpool\" à cause d'incompatibilités. J'ai résolu le problème en décomposant la tâche et en utilisant JavaScript pour générer dynamiquement le HTML avec les méthodes forEach et map. Cette expérience a renforcé ma capacité à résoudre méthodiquement des problèmes.",
  },
];

const Competences = [
  {
    category: "Front-end",
    skills: ["html.svg", "Css.svg", "Javascript.svg", "Tailwind.svg"],
  },
  {
    category: "Back-end",
    skills: ["Express-js.svg", "NodeJs.svg"],
  },
  {
    category: "Database",
    skills: ["mysql.svg"],
  },
  {
    category: "Divers",
    skills: ["github-brands-solid.svg", "Figma.svg", "Jira.svg"],
  },
];

// Fonction pour générer la FAQ
function GenererFaq() {
  const faqContainer = document.getElementById("faq-container");
  FAQ.forEach((item, index) => {
    const faqItem = document.createElement("div");
    faqItem.className = `collapse collapse-arrow mt-2 rounded-lg overflow-hidden border-2 border-black dark:border-white`;
    faqItem.innerHTML = `
      <input type="checkbox" class="peer" />
      <div class="collapse-title text-xl font-bold text-black dark:text-white">
        ${item.question}
      </div>
      <div class="collapse-content font-medium text-black dark:text-white">
        <p>${item.answer}</p>
      </div>
    `;
    faqContainer.appendChild(faqItem);
  });
}

function GenererCompetences() {
  const skillsContainer = document.getElementById("skills-container");
  skillsContainer.innerHTML = `
    <h2 class="text-2xl font-bold text-center mb-6 dark:text-slate-50">
      Mes compétences techniques
    </h2>
    <div class="flex flex-wrap justify-center -mx-2">
      ${Competences.map(
        (category) => `
        <div class="w-full md:w-1/2 px-2 mb-4">
          <div class="card bg-base-100 shadow-xl h-full">
            <div class="card-body rounded-xl border-2 border-black dark:border-white">
              <h3 class="card-title mb-4 font-bold dark:text-slate-50">${
                category.category
              }</h3>
              <div class="flex flex-wrap gap-4">
                ${category.skills
                  .map(
                    (skill) => `
                  <img class="w-10 dark:invert" src="images/${skill}" alt="${
                      skill.split(".")[0]
                    }">
                `
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      `
      ).join("")}
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  GenererFaq();
  GenererCompetences();
});
