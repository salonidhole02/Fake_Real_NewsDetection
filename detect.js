function analyseNews() {
  const title = document.getElementById('news-title').value.trim();
  const text  = document.getElementById('news-text').value.trim();

  if (!title || !text) {
    alert('Please fill in both the title and article text.');
    return;
  }

  const btn = document.getElementById('detect-btn');
  btn.textContent = 'Analysing...';
  btn.disabled = true;

  fetch('/predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: title, text: text })
  })
  .then(res => res.json())
  .then(data => showResult(data.prediction))
  .catch(err => {
    console.error(err);
    alert('Could not connect to the server. Make sure Flask is running.');
    btn.textContent = 'Analyse Article';
    btn.disabled = false;
  });
}

function showResult(prediction) {
  const overlay = document.getElementById('result-overlay');
  const icon    = document.getElementById('result-icon');
  const label   = document.getElementById('result-label');
  const message = document.getElementById('result-message');

  if (prediction === 'REAL') {
    overlay.className   = 'result-overlay real';
    icon.textContent    = '✅';
    label.textContent   = 'This News Appears Real';
    message.textContent = 'Our model has classified this article as genuine based on its language patterns and structure.';
  } else {
    overlay.className   = 'result-overlay fake';
    icon.textContent    = '🚨';
    label.textContent   = 'This News Appears Fake';
    message.textContent = 'Our model has flagged this article as potentially fabricated. Treat this content with caution.';
  }

  overlay.classList.add('active');
}

function resetPage() {
  const overlay = document.getElementById('result-overlay');
  overlay.classList.remove('active');

  const btn = document.getElementById('detect-btn');
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
    Analyse Article
  `;
  btn.disabled = false;
}