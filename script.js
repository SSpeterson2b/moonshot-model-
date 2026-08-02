// ======================
//  TODAY'S PICKS - EDIT THIS SECTION DAILY
// ======================
const todayPicks = [
  {
    name: "Aaron Judge",
    team: "NYY",
    confidence: 97.6,
    exitVelo: 96,
    barrel: "19%",
    hardHit: "63%",
    pitcherHR9: 1.8,
    weather: "+5",
    park: "+4",
    note: "Elite Pick"
  },
  {
    name: "Shohei Ohtani",
    team: "LAD",
    confidence: 91.2,
    exitVelo: 94,
    barrel: "17%",
    hardHit: "58%",
    pitcherHR9: 1.6,
    weather: "+3",
    park: "+2",
    note: "Strong Matchup"
  },
  {
    name: "Juan Soto",
    team: "NYY",
    confidence: 88.4,
    exitVelo: 93,
    barrel: "15%",
    hardHit: "55%",
    pitcherHR9: 1.9,
    weather: "+5",
    park: "+4",
    note: "Value"
  },
  {
    name: "Yordan Alvarez",
    team: "HOU",
    confidence: 86.1,
    exitVelo: 95,
    barrel: "18%",
    hardHit: "60%",
    pitcherHR9: 1.7,
    weather: "+2",
    park: "+1",
    note: "Power Profile"
  }
];

// ======================
//  DO NOT EDIT BELOW
// ======================

function renderPicks() {
  const container = document.getElementById("picksContainer");
  container.innerHTML = "";

  todayPicks.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    card.innerHTML = `
      <div class="player-header">
        <div>
          <div class="player-name">${player.name}</div>
          <div class="tag">${player.team} • ${player.note}</div>
        </div>
        <div class="confidence">${player.confidence}</div>
      </div>

      <div class="stats">
        <div class="stat"><span>Exit Velo</span><span>${player.exitVelo} mph</span></div>
        <div class="stat"><span>Barrel %</span><span>${player.barrel}</span></div>
        <div class="stat"><span>Hard Hit %</span><span>${player.hardHit}</span></div>
        <div class="stat"><span>Pitcher HR/9</span><span>${player.pitcherHR9}</span></div>
        <div class="stat"><span>Weather</span><span>${player.weather}</span></div>
        <div class="stat"><span>Park Factor</span><span>${player.park}</span></div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Show today's date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("todayDate").textContent = new Date().toLocaleDateString('en-US', options);

// Load the picks
renderPicks();


