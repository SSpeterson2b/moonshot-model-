// ======================================================
//  ONLY EDIT THIS SECTION EVERY DAY
// ======================================================

const todayPicks = [
  { name: "Aaron Judge", team: "NYY", confidence: 97.6, note: "Elite Matchup" },
  { name: "Shohei Ohtani", team: "LAD", confidence: 91.2, note: "Strong Park Edge" },
  { name: "Juan Soto", team: "NYY", confidence: 88.4, note: "Vulnerable Pitcher" },
  { name: "Yordan Alvarez", team: "HOU", confidence: 86.1, note: "Power Profile" }
];

// Best 2-Leg Parlay (just put the two names)
const bestParlay = {
  leg1: "Aaron Judge",
  leg2: "Shohei Ohtani",
  odds: "+650"
};

// ======================================================
//  DO NOT EDIT BELOW THIS LINE
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

  // Find the full player objects so we can show team names
  const p1 = todayPicks.find(p => p.name === bestParlay.leg1) || { team: "" };
  const p2 = todayPicks.find(p => p.name === bestParlay.leg2) || { team: "" };

  container.innerHTML = `
    <div class="parlay-legs">
      <div class="leg">
        <div>
          <div class="leg-player">${bestParlay.leg1}</div>
          <div class="leg-team">${p1.team}</div>
        </div>
        <div>HR</div>
      </div>
      <div class="leg">
        <div>
          <div class="leg-player">${bestParlay.leg2}</div>
          <div class="leg-team">${p2.team}</div>
        </div>
        <div>HR</div>
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

// Show today's date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("todayDate").textContent = new Date().toLocaleDateString('en-US', options);

// Render everything
renderPicks();
renderParlay();