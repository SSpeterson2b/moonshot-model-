// ========================================================
//  ONLY EDIT THIS SECTION EVERY DAY
// ======================================================

const todayPicks = [
  { name: "John Rave", team: "KC", confidence: 92.4, note: "Strong Matchup" },
  { name: "Esmerlyn Valdez", team: "PIT", confidence: 90.1, note: "Hot Streak" },
  { name: "Gage Workman", team: "PIT", confidence: 88.7, note: "Power Upside" },
  { name: "Jarred Kelenic", team: "TEX", confidence: 87.3, note: "Favorable Pitcher" },
  { name: "James Wood", team: "WAS", confidence: 85.9, note: "Park Factor" },
  { name: "Munetaka Murakami", team: "CWS", confidence: 84.2, note: "Elite Exit Velo" },
  { name: "Yordan Alvarez", team: "HOU", confidence: 83.5, note: "Consistent Power" },
  { name: "Giancarlo Stanton", team: "NYY", confidence: 81.8, note: "Launch Angle" },
  { name: "Kyle Schwarber", team: "PHI", confidence: 80.4, note: "Pull-Side Threat" },
  { name: "Shohei Ohtani", team: "LAD", confidence: 79.6, note: "Two-Way Edge" },
  { name: "Christian Encarnacion-Strand", team: "BAL", confidence: 78.1, note: "Raw Power" }
];

const bestParlay = {
  leg1: "John Rave",
  leg2: "Esmerlyn Valdez",
  odds: "+720"
};

// ======================================================
//  DO NOT EDIT BELOW
// ======================================================
function renderPicks() {
  const container = document.getElementById("picksContainer");
  container.innerHTML = "";

  todayPicks.forEach((player, index) => {
    const card = document.createElement("div");
    card.className = "player-card";

    card.innerHTML = `
      <div class="player-header">
        <div>
          <div class="player-name">${index + 1}. ${player.name}</div>
          <div class="tag">${player.team} • ${player.note}</div>
        </div>
        <div class="confidence">${player.confidence}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderParlay() {
  const container = document.getElementById("parlayContainer");
  const p1 = todayPicks.find(p => p.name === bestParlay.leg1) || { team: "" };
  const p2 = todayPicks.find(p => p.name === bestParlay.leg2) || { team: "" };

  container.innerHTML = `
    <div class="parlay-legs">
      <div class="leg">
        <div>
          <div class="leg-player">${bestParlay.leg1}</div>
          <div class="leg-team">${p1.team}</div>
        </div>
        <div class="hr-badge">HR</div>
      </div>
      <div class="leg">
        <div>
          <div class="leg-player">${bestParlay.leg2}</div>
          <div class="leg-team">${p2.team}</div>
        </div>
        <div class="hr-badge">HR</div>
      </div>
    </div>
    <div class="parlay-footer">
      <div>
        <div class="parlay-label">Combined Odds</div>
        <div class="parlay-odds">${bestParlay.odds}</div>
      </div>
      <div class="confidence">High</div>
    </div>
  `;
}

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("todayDate").textContent = new Date().toLocaleDateString('en-US', options);

renderPicks();
renderParlay();