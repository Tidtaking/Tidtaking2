// selvanviser-funksjoner.js

// Denne filen forventes å kjøres etter at selvanviser-app.html er lastet inn i hovedsiden.

console.log("selvanviser-funksjoner.js lastet");

// Eksempel: automatisk fokus på navn ved lasting
const nameInput = document.getElementById('shooterName');
if (nameInput) nameInput.focus();

// Eksempel: ryddeknapp for resultattabellen (kun visuell sletting)
const clearSeriesBtn = document.createElement('button');
clearSeriesBtn.textContent = 'Rydd resultater';
clearSeriesBtn.style.margin = '10px';
clearSeriesBtn.onclick = () => {
  const tbody = document.querySelector('#resultTable tbody');
  if (tbody) tbody.innerHTML = '';
};

const controlsDiv = document.getElementById('controls');
if (controlsDiv) controlsDiv.appendChild(clearSeriesBtn);

// Eksempel: vis alert hvis Supabase-innsending feiler
const originalInsertFunction = window.supabaseInsertHandler;
if (typeof originalInsertFunction === 'function') {
  window.supabaseInsertHandler = async (...args) => {
    const result = await originalInsertFunction(...args);
    if (result.error) {
      alert('Feil ved lagring til Supabase: ' + result.error.message);
    }
    return result;
  };
}
