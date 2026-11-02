"use strict";

const categories = {
  PNC: { short: "PN Conseil", name: "Parent Nourricier Conseil", family: "PN", color: "#57a978" },
  PNS: { short: "PN Sauveur", name: "Parent Nourricier Sauveur", family: "PN", color: "#8bc99f" },
  PNP: { short: "PN Protect.", name: "Parent Normatif Protecteur", family: "PNO", color: "#f0b94f" },
  PNR: { short: "PN Perséc.", name: "Parent Normatif Persécuteur", family: "PNO", color: "#e58b3e" },
  A:   { short: "Adulte", name: "Adulte", family: "A", color: "#6e8fe8" },
  ELS: { short: "EL Spont.", name: "Enfant Libre Spontané", family: "EL", color: "#ef6d57" },
  ELT: { short: "EL Tyrann.", name: "Enfant Libre Tyrannique", family: "EL", color: "#f19b87" },
  EAM: { short: "EA Modèle", name: "Enfant Adapté Modèle", family: "EA", color: "#8b70c9" },
  EAS: { short: "EA Soumis", name: "Enfant Adapté Soumis", family: "EA", color: "#ae9bd6" },
  EAR: { short: "EA Rebelle", name: "Enfant Adapté Rebelle", family: "EA", color: "#5474c4" }
};

const families = {
  PN: {
    name: "Parent Nourricier",
    icon: "PN",
    color: "#b8e1c5",
    description: "Soutenir, écouter et prendre soin.",
    summary: "Vous mobilisez volontiers l’écoute, l’encouragement et le soutien. Votre présence peut offrir un espace rassurant aux autres.",
    title: "L’allié bienveillant",
    strength: "Créer de la sécurité et du lien",
    watch: "Aider sans vous rendre indispensable ni oublier vos propres limites."
  },
  PNO: {
    name: "Parent Normatif",
    icon: "Pƒ",
    color: "#f8d985",
    description: "Structurer, protéger et poser des repères.",
    summary: "Vous vous appuyez sur des règles, des valeurs et des standards clairs. Vous savez sécuriser une situation en lui donnant un cadre.",
    title: "Le gardien du cadre",
    strength: "Clarifier les règles et les priorités",
    watch: "Garder de la souplesse pour que l’exigence ne devienne pas jugement."
  },
  A: {
    name: "Adulte",
    icon: "A",
    color: "#b9c9f2",
    description: "Observer, analyser et décider au présent.",
    summary: "Vous cherchez les faits, pesez les options et ajustez vos décisions à la réalité du moment. Votre force est la clarté pragmatique.",
    title: "L’analyste lucide",
    strength: "Décider avec recul et discernement",
    watch: "L’analyse gagne à laisser aussi une place aux émotions et à l’intuition."
  },
  EL: {
    name: "Enfant Libre",
    icon: "EL",
    color: "#f4b3a4",
    description: "Créer, ressentir et agir spontanément.",
    summary: "Vous donnez une place importante à l’élan, à la curiosité et au plaisir. Cette énergie nourrit votre créativité et votre authenticité.",
    title: "L’explorateur spontané",
    strength: "Apporter énergie, créativité et sincérité",
    watch: "Canaliser l’impulsion pour préserver les limites et les engagements."
  },
  EA: {
    name: "Enfant Adapté",
    icon: "EA",
    color: "#c9bde4",
    description: "S’ajuster, coopérer ou résister aux attentes.",
    summary: "Vous êtes attentif aux attentes et aux règles du groupe. Vous savez vous adapter, coopérer et parfois vous opposer pour préserver votre place.",
    title: "Le fin lecteur du contexte",
    strength: "Comprendre les attentes et vous ajuster",
    watch: "Choisir votre adaptation au lieu de subir l’approbation ou la résistance."
  }
};

const questions = [
  { text: "Avant de décider, je vérifie les faits et les informations disponibles.", category: "A" },
  { text: "J’écoute une personne jusqu’au bout avant de lui proposer une piste.", category: "PNC" },
  { text: "Je rappelle les règles lorsqu’elles permettent d’éviter un risque.", category: "PNP" },
  { text: "J’exprime facilement mon enthousiasme, ma curiosité ou mon plaisir.", category: "ELS" },
  { text: "Je cherche à bien faire pour répondre aux attentes de mon entourage.", category: "EAM" },
  { text: "Je prends spontanément en charge les problèmes des autres.", category: "PNS" },
  { text: "Quand une règle me paraît injuste, mon premier réflexe est de la contester.", category: "EAR" },
  { text: "Je me montre très exigeant quand quelqu’un ne respecte pas mes standards.", category: "PNR" },
  { text: "J’accepte parfois sans discuter pour éviter un conflit.", category: "EAS" },
  { text: "Quand j’ai très envie de quelque chose, attendre ou renoncer m’est difficile.", category: "ELT" },
  { text: "Face à un désaccord, je distingue ce que je sais de ce que je suppose.", category: "A" },
  { text: "J’aime encourager les autres à trouver leur propre solution.", category: "PNC" },
  { text: "J’anticipe les conséquences et pose des limites claires.", category: "PNP" },
  { text: "Je laisse volontiers de la place au jeu, à l’imagination et à l’imprévu.", category: "ELS" },
  { text: "On peut compter sur moi pour suivre une consigne avec sérieux.", category: "EAM" },
  { text: "Je continue d’aider même lorsque personne ne me l’a demandé.", category: "PNS" },
  { text: "Il m’arrive de faire l’inverse de ce qu’on attend pour affirmer ma liberté.", category: "EAR" },
  { text: "Je relève rapidement les erreurs et les manquements.", category: "PNR" },
  { text: "Je cherche l’approbation avant d’exprimer un choix personnel.", category: "EAS" },
  { text: "Sous le coup de l’envie ou de l’émotion, je veux que les choses aillent tout de suite dans mon sens.", category: "ELT" }
];

const answerOptions = [
  { value: 0, label: "Jamais" },
  { value: 1, label: "Rarement" },
  { value: 2, label: "Parfois" },
  { value: 3, label: "Souvent" },
  { value: 4, label: "Presque toujours" }
];

const screens = [...document.querySelectorAll(".screen")];
const questionTitle = document.querySelector("#question-title");
const questionCount = document.querySelector("#question-count");
const questionNumber = document.querySelector("#question-number");
const answeredCount = document.querySelector("#answered-count");
const progressBar = document.querySelector("#progress-bar");
const answersContainer = document.querySelector("#answers");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");

let currentQuestion = 0;
let answers = Array(questions.length).fill(null);

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("is-active", screen.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  currentQuestion = 0;
  answers = Array(questions.length).fill(null);
  renderQuestion();
  showScreen("quiz");
}

function renderQuestion() {
  const current = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  questionTitle.textContent = current.text;
  questionCount.textContent = `Question ${currentQuestion + 1}`;
  questionNumber.textContent = String(currentQuestion + 1).padStart(2, "0");
  const completed = answers.filter(value => value !== null).length;
  answeredCount.textContent = `${completed} réponse${completed > 1 ? "s" : ""}`;
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

  answersContainer.replaceChildren(...answerOptions.map((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `answer-option${selectedAnswer === option.value ? " is-selected" : ""}`;
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", selectedAnswer === option.value ? "true" : "false");
    button.innerHTML = `<span class="answer-key">${index + 1}</span><span class="answer-label">${option.label}</span>`;
    button.addEventListener("click", () => selectAnswer(option.value));
    return button;
  }));

  previousButton.style.visibility = currentQuestion === 0 ? "hidden" : "visible";
  nextButton.disabled = selectedAnswer === null;
  nextButton.innerHTML = currentQuestion === questions.length - 1
    ? "Voir mon profil <span aria-hidden=\"true\">→</span>"
    : "Suivant <span aria-hidden=\"true\">→</span>";
}

function selectAnswer(value) {
  answers[currentQuestion] = value;
  renderQuestion();
}

function calculateResults() {
  const totals = Object.fromEntries(Object.keys(categories).map(key => [key, { sum: 0, count: 0 }]));
  questions.forEach((question, index) => {
    totals[question.category].sum += answers[index];
    totals[question.category].count += 1;
  });

  const categoryScores = {};
  Object.entries(totals).forEach(([key, value]) => {
    categoryScores[key] = Math.round((value.sum / (value.count * 4)) * 100);
  });

  const familyScores = {};
  Object.keys(families).forEach(familyKey => {
    const scores = Object.keys(categories)
      .filter(key => categories[key].family === familyKey)
      .map(key => categoryScores[key]);
    familyScores[familyKey] = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  });

  return { categoryScores, familyScores };
}

function renderResults() {
  const { categoryScores, familyScores } = calculateResults();
  const dominantKey = Object.keys(familyScores).sort((a, b) => familyScores[b] - familyScores[a])[0];
  const dominant = families[dominantKey];
  const dominantScore = familyScores[dominantKey];

  document.querySelector("#dominant-title").textContent = dominant.name;
  document.querySelector("#dominant-summary").textContent = dominant.summary;
  document.querySelector("#dominant-score").textContent = `${dominantScore}%`;
  document.querySelector("#profile-title").textContent = dominant.title;
  document.querySelector("#profile-description").textContent = dominant.summary;
  document.querySelector("#profile-strength").textContent = dominant.strength;
  document.querySelector("#profile-watch").textContent = dominant.watch;
  document.querySelector("#score-seal").style.boxShadow = `10px 12px 0 ${dominant.color}`;

  const chart = document.querySelector("#detail-chart");
  chart.replaceChildren(...Object.entries(categories).map(([key, category]) => {
    const score = categoryScores[key];
    const item = document.createElement("div");
    item.className = "bar-item";
    item.style.setProperty("--score", `${score}%`);
    item.style.setProperty("--bar-color", category.color);
    item.setAttribute("aria-label", `${category.name} : ${score} %`);
    item.innerHTML = `
      <div class="bar-column">
        <span class="bar-value">${score}%</span>
        <span class="bar-fill"></span>
      </div>
      <span class="bar-label"><abbr title="${category.name}">${category.short}</abbr></span>`;
    return item;
  }));

  const familyGrid = document.querySelector("#family-grid");
  familyGrid.replaceChildren(...Object.entries(families).map(([key, family]) => {
    const score = familyScores[key];
    const card = document.createElement("article");
    card.className = "family-card";
    card.style.setProperty("--family-color", family.color);
    card.style.setProperty("--family-score", `${score}%`);
    card.innerHTML = `
      <div>
        <div class="family-head"><span class="family-icon">${family.icon}</span><span class="family-score">${score}%</span></div>
        <h3>${family.name}</h3>
        <p>${family.description}</p>
      </div>
      <div class="family-meter" aria-hidden="true"><span></span></div>`;
    return card;
  }));

  showScreen("results");
}

document.querySelector("#start-button").addEventListener("click", startQuiz);
document.querySelector("#restart-button").addEventListener("click", startQuiz);
document.querySelector("#print-button").addEventListener("click", () => window.print());
document.querySelector("#quit-button").addEventListener("click", () => showScreen("intro"));

previousButton.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuestion();
  }
});

nextButton.addEventListener("click", () => {
  if (answers[currentQuestion] === null) return;
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    renderResults();
  }
});

document.addEventListener("keydown", event => {
  if (!document.querySelector("#quiz").classList.contains("is-active")) return;
  const number = Number(event.key);
  if (number >= 1 && number <= 5) selectAnswer(number - 1);
  if (event.key === "ArrowLeft" && currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuestion();
  }
  if (event.key === "ArrowRight" && answers[currentQuestion] !== null) nextButton.click();
});
