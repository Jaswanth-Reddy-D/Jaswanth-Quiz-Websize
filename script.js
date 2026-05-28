/* ────────── QUESTIONS ────────── */
const ALL_QUESTIONS = {
  webdev: {
    icon: '💻', name: 'Web Dev', questions: [
      { q: 'Which HTML tag is used to define an internal style sheet?', options: ['<css>', '<style>', '<script>', '<head>'], answer: 1 },
      { q: 'What does CSS stand for?', options: ['Creative Style Sheets', 'Computer Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'], answer: 2 },
      { q: 'Which property is used to change the text color in CSS?', options: ['font-color', 'text-color', 'color', 'foreground'], answer: 2 },
      { q: 'What does "DOM" stand for?', options: ['Data Object Model', 'Document Object Model', 'Design Object Module', 'Dynamic Object Markup'], answer: 1 },
      { q: 'Which method adds an element to the end of an array in JavaScript?', options: ['push()', 'append()', 'add()', 'insert()'], answer: 0 },
      { q: 'What is the correct HTML element for the largest heading?', options: ['<heading>', '<h6>', '<head>', '<h1>'], answer: 3 },
      { q: 'Which CSS unit is relative to the viewport width?', options: ['em', 'rem', 'vw', 'px'], answer: 2 },
      { q: 'What does localStorage.getItem() return if the key doesn\'t exist?', options: ['undefined', 'false', 'null', '0'], answer: 2 },
      { q: 'Which JS method is used to select an element by its ID?', options: ['querySelector()', 'getElementById()', 'getElement()', 'selectById()'], answer: 1 },
      { q: 'What is the box model in CSS?', options: ['A design pattern', 'Content, padding, border, margin', 'A layout grid', 'A color scheme'], answer: 1 },
    ]
  },
  js: {
    icon: '⚡', name: 'JavaScript', questions: [
      { q: 'Which keyword declares a constant in JavaScript?', options: ['var', 'let', 'const', 'static'], answer: 2 },
      { q: 'What does "===" check in JavaScript?', options: ['Value only', 'Type only', 'Value and type', 'Reference'], answer: 2 },
      { q: 'What is the output of typeof null?', options: ['"null"', '"undefined"', '"object"', '"boolean"'], answer: 2 },
      { q: 'Which array method returns a new filtered array?', options: ['forEach()', 'map()', 'filter()', 'reduce()'], answer: 2 },
      { q: 'What does async/await handle?', options: ['Loops', 'DOM manipulation', 'Asynchronous code', 'Styling'], answer: 2 },
      { q: 'What is a closure in JavaScript?', options: ['A way to close a browser tab', 'A function with access to its outer scope', 'An error handler', 'A module pattern only'], answer: 1 },
      { q: 'Which method converts a JSON string to a JavaScript object?', options: ['JSON.stringify()', 'JSON.parse()', 'JSON.convert()', 'JSON.decode()'], answer: 1 },
      { q: 'What is event bubbling?', options: ['An animation technique', 'Events propagating from child to parent', 'A CSS effect', 'A loop pattern'], answer: 1 },
      { q: 'What does the spread operator (...) do?', options: ['Multiplies values', 'Expands iterables into individual elements', 'Declares variables', 'Deletes properties'], answer: 1 },
      { q: 'Which statement exits a loop immediately?', options: ['exit', 'return', 'break', 'stop'], answer: 2 },
    ]
  },
  general: {
    icon: '🌍', name: 'General Tech', questions: [
      { q: 'What does HTTP stand for?', options: ['HyperText Transfer Protocol', 'High Tech Transfer Protocol', 'Hyper Transfer Text Program', 'Host Transfer Text Protocol'], answer: 0 },
      { q: 'What is an API?', options: ['A programming language', 'Application Programming Interface', 'Automated Program Installation', 'A database type'], answer: 1 },
      { q: 'What does "open source" mean?', options: ['Free software only', 'Publicly available source code', 'Cloud-based apps', 'Subscription software'], answer: 1 },
      { q: 'What is version control used for?', options: ['Speed optimization', 'Tracking changes in code over time', 'Deploying websites', 'Managing databases'], answer: 1 },
      { q: 'What is a "bug" in programming?', options: ['A virus', 'An unintended error in code', 'A feature request', 'A type of loop'], answer: 1 },
      { q: 'What does "responsive design" mean?', options: ['Fast loading pages', 'Design adapts to different screen sizes', 'Design with animations', 'Dark mode support'], answer: 1 },
      { q: 'What is the role of a web server?', options: ['Store passwords', 'Serve web pages to clients', 'Design interfaces', 'Write JavaScript'], answer: 1 },
      { q: 'What is a "repository" in Git?', options: ['A bug tracker', 'A storage location for project code and history', 'A deployment server', 'A CSS framework'], answer: 1 },
      { q: 'What does "UI" stand for?', options: ['Unified Interface', 'User Interface', 'Universal Input', 'Uniform Integration'], answer: 1 },
      { q: 'What is the purpose of a CDN?', options: ['Write code faster', 'Deliver content from servers closer to users', 'Store database records', 'Manage user authentication'], answer: 1 },
    ]
  },
  logic: {
    icon: '🧠', name: 'Logic & CS', questions: [
      { q: 'What is Big O notation used for?', options: ['Measuring CSS specificity', 'Describing algorithm efficiency', 'Naming variables', 'Writing documentation'], answer: 1 },
      { q: 'What data structure uses LIFO (Last In, First Out)?', options: ['Queue', 'Array', 'Stack', 'Tree'], answer: 2 },
      { q: 'What is recursion?', options: ['A loop syntax', 'A function that calls itself', 'A sorting algorithm', 'A data type'], answer: 1 },
      { q: 'Which of these is NOT a primitive data type in JS?', options: ['string', 'boolean', 'object', 'number'], answer: 2 },
      { q: 'What does a hash function do?', options: ['Encrypts passwords with a key', 'Maps input data to a fixed-size value', 'Compresses files', 'Sorts arrays'], answer: 1 },
      { q: 'What is the time complexity of binary search?', options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'], answer: 2 },
      { q: 'In boolean logic, what does AND return if one input is false?', options: ['true', 'false', 'null', 'undefined'], answer: 1 },
      { q: 'What is an algorithm?', options: ['A type of variable', 'A step-by-step procedure to solve a problem', 'A data structure', 'A programming language'], answer: 1 },
      { q: 'What is the binary representation of the number 5?', options: ['100', '101', '110', '011'], answer: 1 },
      { q: 'Which sorting algorithm has O(n log n) average time complexity?', options: ['Bubble sort', 'Insertion sort', 'Merge sort', 'Selection sort'], answer: 2 },
    ]
  }
};

const LETTERS = ['A', 'B', 'C', 'D'];
const TIME_PER_Q = 15;
const CIRCUMFERENCE = 2 * Math.PI * 18; // r=18

/* ────────── STATE ────────── */
let selectedCat = null;
let questions   = [];
let qIndex      = 0;
let score       = 0;
let answered    = false;
let timerID     = null;
let timeLeft    = TIME_PER_Q;
let timeSpent   = [];
let results     = [];

/* ────────── CATEGORY SCREEN ────────── */
const catGrid  = document.getElementById('cat-grid');
const startBtn = document.getElementById('start-btn');

Object.entries(ALL_QUESTIONS).forEach(([key, cat]) => {
  const card = document.createElement('div');
  card.className = 'cat-card';
  card.innerHTML = `
    <span class="cat-icon">${cat.icon}</span>
    <div class="cat-name">${cat.name}</div>
    <div class="cat-count">${cat.questions.length} questions</div>
  `;
  card.addEventListener('click', () => {
    document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    selectedCat = key;
    startBtn.disabled = false;
    startBtn.textContent = `Start ${cat.name} Quiz →`;
  });
  catGrid.appendChild(card);
});

startBtn.addEventListener('click', () => {
  if (!selectedCat) return;
  questions = shuffle([...ALL_QUESTIONS[selectedCat].questions]);
  qIndex = 0; score = 0; timeSpent = []; results = [];
  showScreen('screen-quiz');
  renderQuestion();
});

/* ────────── QUIZ SCREEN ────────── */
function renderQuestion() {
  answered = false;
  timeLeft = TIME_PER_Q;
  clearInterval(timerID);

  const q = questions[qIndex];
  const total = questions.length;
  const catInfo = ALL_QUESTIONS[selectedCat];

  document.getElementById('q-num').textContent   = qIndex + 1;
  document.getElementById('q-total').textContent = total;
  document.getElementById('q-progress').style.width = ((qIndex / total) * 100) + '%';
  document.getElementById('q-cat-label').textContent = catInfo.icon + ' ' + catInfo.name;
  document.getElementById('q-text').textContent  = q.q;

  // hide feedback / next
  const fb = document.getElementById('feedback-bar');
  fb.className = 'feedback-bar';
  document.getElementById('next-btn').classList.remove('show');

  // render options
  const grid = document.getElementById('options-grid');
  grid.innerHTML = shuffle(q.options.map((opt, origIdx) => ({ opt, origIdx }))).map((item, i) => `
    <button class="option-btn" data-orig="${item.origIdx}" onclick="selectAnswer(this, ${item.origIdx === q.answer})">
      <span class="opt-letter">${LETTERS[i]}</span>
      ${escHtml(item.opt)}
    </button>
  `).join('');

  // start timer
  updateTimer();
  const startTime = Date.now();
  timerID = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(timerID);
      if (!answered) timeoutAnswer(Date.now() - startTime);
    }
  }, 1000);

  // store start time on question el
  document.getElementById('screen-quiz').dataset.startTime = Date.now();
}

function updateTimer() {
  const arc = document.getElementById('timer-arc');
  const num = document.getElementById('timer-num');
  const pct = timeLeft / TIME_PER_Q;
  arc.style.strokeDashoffset = CIRCUMFERENCE * (1 - pct);
  arc.style.stroke = timeLeft <= 5 ? '#f5365c' : timeLeft <= 9 ? '#ffcc00' : '#00c9ff';
  num.style.color  = timeLeft <= 5 ? '#f5365c' : timeLeft <= 9 ? '#ffcc00' : '#00c9ff';
  num.textContent  = timeLeft;
}

function selectAnswer(btn, isCorrect) {
  if (answered) return;
  answered = true;
  clearInterval(timerID);

  const elapsed = Date.now() - parseInt(document.getElementById('screen-quiz').dataset.startTime);
  timeSpent.push(elapsed);

  const q = questions[qIndex];
  const allBtns = document.querySelectorAll('.option-btn');

  allBtns.forEach(b => {
    b.disabled = true;
    if (parseInt(b.dataset.orig) === q.answer) b.classList.add('correct');
  });

  const fb = document.getElementById('feedback-bar');
  if (isCorrect) {
    btn.classList.add('correct');
    score++;
    fb.className = 'feedback-bar correct show';
    document.getElementById('feedback-icon').textContent = '✓';
    document.getElementById('feedback-text').textContent = 'Correct! Well done.';
  } else {
    btn.classList.add('wrong');
    fb.className = 'feedback-bar wrong show';
    document.getElementById('feedback-icon').textContent = '✗';
    document.getElementById('feedback-text').textContent = 'Not quite — the correct answer is highlighted.';
  }

  results.push({ q: q.q, chosen: btn.textContent.trim().slice(1).trim(), correct: q.options[q.answer], isCorrect });
  document.getElementById('next-btn').classList.add('show');
}

function timeoutAnswer(elapsed) {
  answered = true;
  timeSpent.push(elapsed);
  const q = questions[qIndex];
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => {
    b.disabled = true;
    if (parseInt(b.dataset.orig) === q.answer) b.classList.add('correct');
  });
  const fb = document.getElementById('feedback-bar');
  fb.className = 'feedback-bar wrong show';
  document.getElementById('feedback-icon').textContent = '⏱';
  document.getElementById('feedback-text').textContent = "Time's up! The correct answer is highlighted.";
  results.push({ q: q.q, chosen: '—', correct: q.options[q.answer], isCorrect: false });
  document.getElementById('next-btn').classList.add('show');
}

document.getElementById('next-btn').addEventListener('click', () => {
  qIndex++;
  if (qIndex >= questions.length) showResults();
  else renderQuestion();
});

/* ────────── RESULTS ────────── */
function showResults() {
  const total   = questions.length;
  const wrong   = total - score;
  const pct     = Math.round((score / total) * 100);
  const avgMs   = timeSpent.reduce((a,b)=>a+b,0) / timeSpent.length;
  const avgSec  = (avgMs / 1000).toFixed(1);

  const grades = [
    { min:90, emoji:'🏆', label:'Outstanding!',    color:'#ffcc00' },
    { min:70, emoji:'🎯', label:'Great job!',       color:'#2dce89' },
    { min:50, emoji:'📚', label:'Good effort!',     color:'#00c9ff' },
    { min:0,  emoji:'💪', label:'Keep practicing!', color:'#f5365c' },
  ];
  const grade = grades.find(g => pct >= g.min);

  document.getElementById('r-emoji').textContent    = grade.emoji;
  document.getElementById('r-grade').textContent    = pct + '%';
  document.getElementById('r-grade').style.color    = grade.color;
  document.getElementById('r-label').textContent    = grade.label;
  document.getElementById('r-correct').textContent  = score;
  document.getElementById('r-wrong').textContent    = wrong;
  document.getElementById('r-time').textContent     = avgSec + 's';

  // review
  const reviewList = document.getElementById('review-list');
  reviewList.innerHTML = results.map(r => `
    <div class="review-item ${r.isCorrect ? 'c' : 'w'}">
      <div class="review-q">${escHtml(r.q)}</div>
      <div class="review-a">
        ${r.isCorrect
          ? `✓ <strong>${escHtml(r.correct)}</strong>`
          : `Your answer: ${escHtml(r.chosen)} &nbsp;·&nbsp; Correct: <strong>${escHtml(r.correct)}</strong>`}
      </div>
    </div>
  `).join('');

  showScreen('screen-result');
}

document.getElementById('btn-retry').addEventListener('click', () => {
  questions = shuffle([...ALL_QUESTIONS[selectedCat].questions]);
  qIndex = 0; score = 0; timeSpent = []; results = [];
  showScreen('screen-quiz');
  renderQuestion();
});
document.getElementById('btn-menu').addEventListener('click', () => {
  selectedCat = null;
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('selected'));
  startBtn.disabled = true;
  startBtn.textContent = 'Choose a category to begin';
  showScreen('screen-cat');
});

/* ────────── HELPERS ────────── */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}