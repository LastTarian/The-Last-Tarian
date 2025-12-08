// === EASTER EGGS FOR "LUNAR BOY" UNIVERSE ===

document.addEventListener('DOMContentLoaded', () => {
    injectEasterEggStyles();
    setupGlobalKeySequences();
    setupMainPageTarianEgg();
    setupSuperSecretTAR1AN();
    setupSalomeaRydorianEgg();
    // setupKoMarisTrialEgg();   // ЭТУ строку убрать / закомментировать
    setupLiraArchivesEgg();
    setupLaarGuardEgg();
    setupAtrissaProphecyEgg();
});
/* =========================
   СТИЛИ ДЛЯ ВСЕХ ПАСХАЛОК
========================= */

function injectEasterEggStyles() {
    const css = `
/* ==== ОБЩИЙ ОВЕРЛЕЙ ==== */
.egg-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
}

.egg-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* ==== ТАРИАН — КУБ ==== */

.egg-tarian-cube {
    width: 220px;
    height: 220px;
    border-radius: 24px;
    border: 2px solid rgba(180, 230, 255, 0.8);
    box-shadow:
        0 0 20px rgba(80, 180, 255, 0.8),
        0 0 60px rgba(120, 210, 255, 0.75),
        inset 0 0 25px rgba(20, 40, 80, 0.9);
    background:
        radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 55%),
        radial-gradient(circle at 75% 80%, rgba(120,200,255,0.45), transparent 60%),
        rgba(4, 10, 26, 0.96);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: eggCubeFloat 3s ease-in-out infinite,
               eggCubeAppear 0.5s ease-out forwards;
    position: relative;
    overflow: hidden;
}

.egg-tarian-angry .egg-tarian-cube {
    border-color: rgba(255, 120, 180, 0.9);
    box-shadow:
        0 0 24px rgba(255, 90, 140, 0.9),
        0 0 70px rgba(255, 60, 120, 0.85),
        inset 0 0 35px rgba(40, 0, 40, 0.95);
    background:
        radial-gradient(circle at 20% 10%, rgba(255,255,255,0.35), transparent 55%),
        radial-gradient(circle at 80% 90%, rgba(255,120,200,0.5), transparent 60%),
        rgba(10, 0, 18, 0.98);
}

.egg-tarian-runes {
    font-family: "Segoe UI", system-ui, sans-serif;
    letter-spacing: 0.2em;
    font-size: 18px;
    color: #dbeafe;
    text-shadow:
        0 0 8px rgba(180, 230, 255, 0.9),
        0 0 18px rgba(100, 200, 255, 0.85);
    animation: eggRunesPulse 2.8s ease-in-out infinite;
    text-align: center;
    padding: 0 12px;
}

/* гравитационная волна при исчезновении */
.egg-tarian-wave {
    position: absolute;
    inset: -40vh -40vw;
    background:
        radial-gradient(circle, rgba(180,220,255,0.3), transparent 60%);
    opacity: 0;
    animation: eggWave 0.7s ease-out forwards;
}

/* текст под супер-секретной сердцевиной */
.egg-heart-text {
    margin-top: 18px;
    text-align: center;
    font-size: 16px;
    color: #e5edff;
    text-shadow: 0 0 10px rgba(180,230,255,0.9);
}

/* сердцевина Тар’иана */
.egg-heart-core {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background:
        radial-gradient(circle, rgba(255,255,255,0.9), transparent 55%),
        radial-gradient(circle at 20% 20%, rgba(180,230,255,0.9), transparent 55%),
        radial-gradient(circle at 80% 80%, rgba(120,160,255,0.8), transparent 55%),
        rgba(2,6,23,1);
    box-shadow:
        0 0 30px rgba(180,230,255,0.9),
        0 0 80px rgba(120,160,255,0.8);
    position: relative;
    overflow: hidden;
    animation: eggHeartSpin 4s linear infinite;
}

.egg-heart-core::before,
.egg-heart-core::after {
    content: "";
    position: absolute;
    inset: 12%;
    border-radius: 50%;
    border: 1px solid rgba(200,240,255,0.55);
    box-shadow:
        0 0 15px rgba(200,240,255,0.8),
        0 0 40px rgba(150,190,255,0.7);
    animation: eggHeartRings 3.5s ease-in-out infinite;
}

/* Rydorian ship fly-by */
.egg-ryd-ship {
    position: fixed;
    top: 40%;
    left: -20%;
    width: 260px;
    height: 60px;
    background:
        linear-gradient(90deg, rgba(120,220,255,1), rgba(40,120,255,1));
    border-radius: 50px;
    box-shadow:
        0 0 20px rgba(120,220,255,0.9),
        0 0 45px rgba(40,120,255,0.85);
    transform: skewX(-25deg);
    z-index: 9998;
    animation: eggShipFly 1.6s ease-out forwards;
}

.egg-ryd-trails {
    position: fixed;
    inset: 0;
    pointer-events: none;
    background:
        radial-gradient(circle at 10% 50%, rgba(140,220,255,0.18), transparent 60%),
        radial-gradient(circle at 30% 40%, rgba(120,200,255,0.18), transparent 60%),
        radial-gradient(circle at 50% 60%, rgba(100,180,255,0.18), transparent 60%);
    opacity: 0;
    animation: eggTrails 1.5s ease-out forwards;
    z-index: 9997;
}

.egg-ryd-text {
    position: fixed;
    bottom: 12%;
    width: 100%;
    text-align: center;
    font-size: 18px;
    letter-spacing: 0.16em;
    color: #e5edff;
    text-shadow:
        0 0 10px rgba(150,210,255,0.9),
        0 0 24px rgba(120,160,255,0.85);
    opacity: 0;
    animation: eggTextFade 1.4s ease-out forwards 0.3s;
    z-index: 9999;
}

/* Мини-игра Ко’Марис */
.egg-game-overlay {
    position: fixed;
    inset: 0;
    background: radial-gradient(circle at 50% 10%, rgba(148,163,255,0.2), rgba(15,23,42,0.96));
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #e5e7eb;
    font-family: "Segoe UI", sans-serif;
}

.egg-game-box {
    width: 420px;
    height: 320px;
    background: rgba(15,23,42,0.9);
    border-radius: 18px;
    border: 1px solid rgba(148,163,255,0.6);
    box-shadow:
        0 0 25px rgba(129,140,248,0.8),
        0 0 60px rgba(59,130,246,0.6);
    padding: 12px 16px;
    position: relative;
    overflow: hidden;
}

.egg-game-header {
    text-align: center;
    margin-bottom: 6px;
    font-size: 15px;
    color: #c7d2fe;
}

.egg-game-arena {
    position: relative;
    width: 100%;
    height: 250px;
    background: radial-gradient(circle at 50% 0, rgba(59,130,246,0.25), rgba(15,23,42,1));
    overflow: hidden;
    border-radius: 10px;
}

.egg-game-player {
    position: absolute;
    bottom: 10px;
    width: 36px;
    height: 18px;
    border-radius: 999px;
    background: linear-gradient(90deg, #e0f2fe, #93c5fd);
    box-shadow:
        0 0 12px rgba(125,211,252,0.9),
        0 0 30px rgba(59,130,246,0.8);
}

.egg-game-drone {
    position: absolute;
    top: -20px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle, #f87171, #b91c1c);
    box-shadow:
        0 0 10px rgba(248,113,113,0.9),
        0 0 26px rgba(239,68,68,0.85);
}

.egg-game-msg {
    margin-top: 8px;
    font-size: 13px;
    color: #e5e7eb;
    text-align: center;
}

/* Модальное окно (Лира, Атрисса и т.п.) */
.egg-modal-backdrop {
    position: fixed;
    inset: 0;
    background: radial-gradient(circle at 50% 10%, rgba(30,64,175,0.5), rgba(15,23,42,0.96));
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.egg-modal {
    background: rgba(15,23,42,0.95);
    border-radius: 16px;
    border: 1px solid rgba(191,219,254,0.7);
    padding: 18px 20px;
    max-width: 420px;
    box-shadow:
        0 0 20px rgba(191,219,254,0.8),
        0 0 60px rgba(59,130,246,0.7);
    color: #e5e7eb;
    font-size: 14px;
    position: relative;
}

.egg-modal-title {
    font-weight: 600;
    margin-bottom: 10px;
    color: #bfdbfe;
    text-align: center;
}

.egg-modal-text {
    font-style: italic;
    line-height: 1.5;
}

/* Лаар — боевой режим */
.egg-laar-battle {
    outline: 2px solid rgba(248,250,252,0.9);
    box-shadow:
        0 0 22px rgba(248,250,252,0.9),
        0 0 60px rgba(59,130,246,0.9);
    transition: box-shadow 0.3s ease-out, outline 0.3s ease-out;
}

.egg-laar-battle-name {
    font-family: "Oswald","Segoe UI",sans-serif !important;
    letter-spacing: 0.28em !important;
    text-transform: uppercase;
}

/* Анимации */

@keyframes eggCubeFloat {
    0%,100% { transform: translate(-50%, -52%); }
    50% { transform: translate(-50%, -48%); }
}

@keyframes eggCubeAppear {
    from { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
    to   { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}

@keyframes eggRunesPulse {
    0%,100% {
        text-shadow:
            0 0 6px rgba(180,230,255,0.7),
            0 0 14px rgba(129,200,255,0.6);
        opacity: 0.9;
    }
    50% {
        text-shadow:
            0 0 10px rgba(225,250,255,1),
            0 0 26px rgba(148,210,255,0.9);
        opacity: 1;
    }
}

@keyframes eggWave {
    from { opacity: 0.7; transform: scale(0.9); }
    to   { opacity: 0; transform: scale(1.25); }
}

@keyframes eggHeartSpin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
}

@keyframes eggHeartRings {
    0%,100% { opacity: 0.7; transform: scale(0.96); }
    50%     { opacity: 1; transform: scale(1.04); }
}

@keyframes eggShipFly {
    from { transform: translateX(0) translateY(0) skewX(-25deg); opacity: 1; }
    to   { transform: translateX(140vw) translateY(-30px) skewX(-25deg); opacity: 0; }
}

@keyframes eggTrails {
    from { opacity: 0.7; }
    to   { opacity: 0; }
}

@keyframes eggTextFade {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
}
`;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
}

/* ==========================================
   ГЛОБАЛЬНЫЕ ПОСЛЕДОВАТЕЛЬНОСТИ КЛАВИШ
========================================== */

let lastTarianTrigger = 0;
let konamiBuffer = [];
const KONAMI_SEQ = [
    'ArrowUp','ArrowUp',
    'ArrowDown','ArrowDown',
    'ArrowLeft','ArrowRight',
    'ArrowLeft','ArrowRight',
    'l','m'
];

function setupGlobalKeySequences() {
    document.addEventListener('keydown', (e) => {
        // KONAMI
        konamiBuffer.push(e.key);
        if (konamiBuffer.length > KONAMI_SEQ.length) {
            konamiBuffer.shift();
        }
        if (arraysEqual(konamiBuffer.map(k => k.toLowerCase()), KONAMI_SEQ.map(k => k.toLowerCase()))) {
            triggerTarianCube();
        }
    });
}

function arraysEqual(a,b) {
    if (a.length !== b.length) return false;
    for (let i=0;i<a.length;i++) if (a[i] !== b[i]) return false;
    return true;
}

/* =====================================
   ГЛАВНАЯ: ВЫДЕЛИТЬ "ЛУННЫЙ МАЛЬЧИК" + ↓↓
===================================== */

let downPressCount = 0;
let lastDownPressTime = 0;

function setupMainPageTarianEgg() {
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowDown') return;

        const sel = window.getSelection ? window.getSelection().toString().toLowerCase() : "";
        if (!sel.includes('лунный мальчик') && !sel.includes('lunar boy')) return;

        const now = Date.now();

        if (now - lastDownPressTime > 1200) {
            // слишком большая пауза — начинаем заново
            downPressCount = 0;
        }

        downPressCount++;
        lastDownPressTime = now;

        if (downPressCount >= 2) {
            triggerTarianCube();
            downPressCount = 0;
        }
    });
}

/* === Общий запуск куба Тар’иан === */

function triggerTarianCube() {
    const now = Date.now();
    const angry = (now - lastTarianTrigger) < 60000; // меньше минуты — "злится"
    lastTarianTrigger = now;

    const overlay = document.createElement('div');
    overlay.className = 'egg-overlay' + (angry ? ' egg-tarian-angry' : '');

    const center = document.createElement('div');
    center.className = 'egg-center';
    const cube = document.createElement('div');
    cube.className = 'egg-tarian-cube';

    const runes = document.createElement('div');
    runes.className = 'egg-tarian-runes';
    runes.textContent = angry
        ? '⟟⟠⟣ ⟦⟧⟠⟡ ⟞⟜⟙'
        : '⟠⟡ ⟟⟧ ⟦⟣ ⟞⟜ ⟡⟡';

    cube.appendChild(runes);
    center.appendChild(cube);
    overlay.appendChild(center);
    document.body.appendChild(overlay);

    // волна при исчезновении
    setTimeout(() => {
        const wave = document.createElement('div');
        wave.className = 'egg-tarian-wave';
        overlay.appendChild(wave);
    }, 1200);

    setTimeout(() => {
        overlay.remove();
    }, angry ? 2200 : 2000);
}

/* =====================================
   СУПЕР-СЕКРЕТНЫЙ УРОВЕНЬ: "TAR1AN"
===================================== */

let tar1anIndex = 0;
const TAR1AN_SEQ = ['t','a','r','1','a','n'];

function setupSuperSecretTAR1AN() {
    document.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase();

        if (key === TAR1AN_SEQ[tar1anIndex]) {
            tar1anIndex++;
            if (tar1anIndex === TAR1AN_SEQ.length) {
                tar1anIndex = 0;
                triggerHeartCore();
            }
        } else {
            tar1anIndex = (key === TAR1AN_SEQ[0]) ? 1 : 0;
        }
    });
}

function triggerHeartCore() {
    const overlay = document.createElement('div');
    overlay.className = 'egg-overlay';

    const center = document.createElement('div');
    center.className = 'egg-center';

    const core = document.createElement('div');
    core.className = 'egg-heart-core';

    const text = document.createElement('div');
    text.className = 'egg-heart-text';
    text.textContent = 'Связь установлена. Наследник отмечен.';

    center.appendChild(core);
    center.appendChild(text);
    overlay.appendChild(center);
    document.body.appendChild(overlay);

    setTimeout(() => overlay.remove(), 3500);
}

/* =====================================
   САЛОМЕЯ — РАЙДОРИАНСКИЕ ГОНКИ
===================================== */

function setupSalomeaRydorianEgg() {
    const salomeaName = findHeroNameElement(['SALOMEA L’AKRIS','САЛОМЕЯ Л’АКРИС','Саломея Л’Акрис']);
    if (!salomeaName) return;

    let clickCount = 0;
    let timer = null;

    salomeaName.style.cursor = 'default';

    salomeaName.addEventListener('click', () => {
        clickCount++;
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            if (clickCount >= 7) {
                triggerRydorianFly();
            }
            clickCount = 0;
        }, 800);
    });
}

function triggerRydorianFly() {
    const ship = document.createElement('div');
    ship.className = 'egg-ryd-ship';

    const trails = document.createElement('div');
    trails.className = 'egg-ryd-trails';

    const text = document.createElement('div');
    text.className = 'egg-ryd-text';
    text.textContent = 'Ранг подтверждён: RYD-10';

    document.body.appendChild(trails);
    document.body.appendChild(ship);
    document.body.appendChild(text);

    setTimeout(() => { ship.remove(); trails.remove(); text.remove(); }, 1900);
}

/* =====================================
   КО’МАРИС — ИСПЫТАНИЕ КАДЕТА
===================================== */

(function () {
  const komarisLink = document.querySelector(".egg-komaris-link");
  if (!komarisLink) return; // страница без Руайлы

  let clickCount = 0;
  let clickTimer = null;
  let lastTriggerTime = 0;       // когда последний раз активировали пасхалку
  const GAME_WINDOW = 60000;     // 60 секунд

  komarisLink.addEventListener("click", (e) => {
    e.preventDefault();

    clickCount++;
    if (clickTimer) clearTimeout(clickTimer);

    // даём небольшое окно по времени, чтобы считать именно тройной клик
    clickTimer = setTimeout(() => {
      clickCount = 0;
    }, 600);

    if (clickCount >= 3) {
      clickCount = 0;
      activateKomarisEgg();
    }
  });

  function activateKomarisEgg() {
    const now = Date.now();

    // если в течение минуты — запускаем мини-игру
    if (now - lastTriggerTime < GAME_WINDOW) {
      startDroneGame();
    } else {
      lastTriggerTime = now;
      showRuailaMessage();
    }
  }

  // ---------- ЭФФЕКТ 1: фраза Руайлы ----------
  function showRuailaMessage() {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.background =
      "radial-gradient(circle at 50% 50%, rgba(15,23,42,0.9), rgba(2,6,23,0.95))";
    overlay.style.zIndex = "9999";

    const box = document.createElement("div");
    box.style.maxWidth = "520px";
    box.style.padding = "24px 28px";
    box.style.borderRadius = "18px";
    box.style.border = "1px solid rgba(148,163,184,0.7)";
    box.style.background = "rgba(15,23,42,0.95)";
    box.style.boxShadow = "0 18px 60px rgba(0,0,0,0.9)";
    box.style.color = "#e5e7eb";
    box.style.fontSize = "16px";
    box.style.textAlign = "center";
    box.style.lineHeight = "1.6";

    box.innerHTML =
      "<strong style='color:#facc15; display:block; margin-bottom:8px;'>Руайла</strong>" +
      "«Кадет, ты не должен был это находить… " +
      "но раз уж нашёл — держи модуль испытания.»";

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.style.opacity = "0";
      overlay.style.transition = "opacity .4s ease-out";
      setTimeout(() => overlay.remove(), 400);
    }, 3000);
  }

  // ---------- ЭФФЕКТ 2: мини-игра с дронами ----------
  function startDroneGame() {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.background =
      "radial-gradient(circle at 50% 50%, rgba(15,23,42,0.96), rgba(2,6,23,0.98))";
    overlay.style.zIndex = "10000";
    overlay.style.color = "#e5e7eb";
    document.body.appendChild(overlay);

    const gameBox = document.createElement("div");
    gameBox.style.width = "500px";
    gameBox.style.height = "260px";
    gameBox.style.borderRadius = "18px";
    gameBox.style.border = "1px solid rgba(148,163,184,0.7)";
    gameBox.style.background =
      "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,60,0.98))";
    gameBox.style.position = "relative";
    gameBox.style.overflow = "hidden";
    gameBox.style.boxShadow = "0 18px 60px rgba(0,0,0,0.9)";
    overlay.appendChild(gameBox);

    const info = document.createElement("div");
    info.style.position = "absolute";
    info.style.left = "16px";
    info.style.top = "10px";
    info.style.fontSize = "13px";
    info.style.opacity = "0.85";
    info.textContent = "← →  — уклонение | 3 попадания — проигрыш | 10 секунд — победа";
    gameBox.appendChild(info);

    const status = document.createElement("div");
    status.style.position = "absolute";
    status.style.right = "16px";
    status.style.top = "10px";
    status.style.fontSize = "13px";
    status.textContent = "Время: 10.0";
    gameBox.appendChild(status);

    // игрок
    const player = document.createElement("div");
    player.style.position = "absolute";
    player.style.bottom = "16px";
    player.style.left = "50%";
    player.style.width = "40px";
    player.style.height = "40px";
    player.style.marginLeft = "-20px";
    player.style.borderRadius = "50%";
    player.style.border = "2px solid #38bdf8";
    player.style.boxShadow = "0 0 15px rgba(56,189,248,0.9)";
    player.style.background = "radial-gradient(circle, #0ea5e9 0%, #020617 65%)";
    gameBox.appendChild(player);

    let playerX = 250;
    let hits = 0;
    let timeLeft = 10.0;
    let running = true;

    const drones = [];

    function spawnDrone() {
      if (!running) return;
      const d = document.createElement("div");
      d.style.position = "absolute";
      d.style.top = "-24px";
      d.style.width = "24px";
      d.style.height = "24px";
      d.style.borderRadius = "50%";
      d.style.background = "radial-gradient(circle, #f97316 0%, #7c2d12 70%)";
      d.style.boxShadow = "0 0 14px rgba(248, 113, 22, 0.9)";
      d.style.left = 30 + Math.random() * 440 + "px";
      gameBox.appendChild(d);

      drones.push({
        el: d,
        x: parseFloat(d.style.left),
        y: -24,
        speed: 3.2 + Math.random() * 2.2,
      });

      if (running) {
        setTimeout(spawnDrone, 550 + Math.random() * 550);
      }
    }

    function loop() {
      if (!running) return;

      // движение дронов
      for (let i = drones.length - 1; i >= 0; i--) {
        const dr = drones[i];
        dr.y += dr.speed;
        dr.el.style.top = dr.y + "px";

        // столкновение
        const dy = 260 - 16 - 40 - dr.y; // очень грубая оценка, но хватает
        const dx = (dr.x + 12) - playerX;
        if (Math.abs(dx) < 32 && dy < 40 && dy > -10) {
          hits++;
          dr.el.style.boxShadow = "0 0 20px rgba(248,113,22,1)";
          gameBox.removeChild(dr.el);
          drones.splice(i, 1);
        } else if (dr.y > 260) {
          gameBox.removeChild(dr.el);
          drones.splice(i, 1);
        }
      }

      // обновляем игрока
      player.style.left = playerX + "px";

      // обновляем время
      timeLeft -= 0.016;
      if (timeLeft < 0) timeLeft = 0;
      status.textContent = `Время: ${timeLeft.toFixed(1)} | Попаданий: ${hits}`;

      if (hits >= 3) {
        endGame(false);
      } else if (timeLeft <= 0) {
        endGame(true);
      } else {
        requestAnimationFrame(loop);
      }
    }

    function endGame(win) {
      running = false;

      const msg = document.createElement("div");
      msg.style.position = "absolute";
      msg.style.inset = "0";
      msg.style.display = "flex";
      msg.style.alignItems = "center";
      msg.style.justifyContent = "center";
      msg.style.background = "rgba(15,23,42,0.9)";
      msg.style.fontSize = "18px";
      msg.style.fontWeight = "500";

      if (win) {
        msg.innerHTML =
          "<span style='color:#facc15'>Статус: Кадет подтверждён.</span>";
      } else {
        msg.innerHTML = "<span style='color:#f87171'>Тренировка провалена.</span>";
      }

      gameBox.appendChild(msg);

      setTimeout(() => {
        document.removeEventListener("keydown", onKey);
        overlay.remove();
      }, 2500);
    }

    function onKey(e) {
      if (!running) return;
      const step = 18;
      if (e.key === "ArrowLeft") {
        playerX = Math.max(30, playerX - step);
      } else if (e.key === "ArrowRight") {
        playerX = Math.max(30, Math.min(470, playerX + step));
      } else if (e.key === "Escape") {
        // выход
        running = false;
        document.removeEventListener("keydown", onKey);
        overlay.remove();
      }
    }

    document.addEventListener("keydown", onKey);
    spawnDrone();
    loop();
  }
})();
/* =====================================
   ЛИРА НЕЛИОС — СЕКРЕТНЫЕ ФАЙЛЫ
===================================== */

function setupLiraArchivesEgg() {
    const liraCard = findHeroCardByName(['LIRA NELIOS','ЛИРА НЕЛИОС','Лира Нелиос']);
    if (!liraCard) return;

    const runeSpan = liraCard.querySelector('.selarit');
    if (!runeSpan) return;

    runeSpan.style.cursor = 'default';
    runeSpan.addEventListener('click', () => {
        triggerLiraModal();
    });
}

function triggerLiraModal() {
    const phrases = [
        'Первый Свет не гаснет во Тьме, пока наследник жив.',
        'Тар’иан был создан не для активации, а для выбора.',
        'Гибель Первых — не итог, а начало отсчёта.'
    ];

    const backdrop = document.createElement('div');
    backdrop.className = 'egg-modal-backdrop';

    const modal = document.createElement('div');
    modal.className = 'egg-modal';

    const title = document.createElement('div');
    title.className = 'egg-modal-title';
    title.textContent = 'Засекреченные фрагменты Архива';

    const text = document.createElement('div');
    text.className = 'egg-modal-text';

    modal.appendChild(title);
    modal.appendChild(text);
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    let idx = 0;
    function updateText() {
        text.textContent = phrases[idx];
        idx = (idx + 1) % phrases.length;
    }
    updateText();

    const interval = setInterval(updateText, 15000);

    backdrop.addEventListener('click', () => {
        clearInterval(interval);
        backdrop.remove();
    });
}

/* =====================================
   ЛААР — БОЕВОЙ РЕЖИМ (5 кликов по фото)
===================================== */

// Небольшой "бластер" Лаара через Web Audio API
// НОВЫЙ МОЩНЫЙ БЛАСТЕР ЛААРА
function playLaarBlaster() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;

        const ctx = new AudioCtx();
        const t0 = ctx.currentTime;

        // Мастер-гейн (общая громкость + хвост "удаления")
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.9, t0);
        masterGain.gain.linearRampToValueAtTime(0.25, t0 + 0.25);
        masterGain.gain.linearRampToValueAtTime(0.0001, t0 + 0.8);

        // Лёгкий low-pass, чтобы сделать звук «толще» и убрать лишние писки
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(1800, t0);
        filter.frequency.linearRampToValueAtTime(600, t0 + 0.5);

        masterGain.connect(filter).connect(ctx.destination);

        // Основной осциллятор — мощный низкий «заряд»
        const osc1 = ctx.createOscillator();
        osc1.type = "square"; // более жирный низ
        osc1.frequency.setValueAtTime(220, t0);
        osc1.frequency.exponentialRampToValueAtTime(60, t0 + 0.35);

        // Второй осциллятор — чуть ниже, даёт глубину
        const osc2 = ctx.createOscillator();
        osc2.type = "sawtooth";
        osc2.frequency.setValueAtTime(110, t0);
        osc2.frequency.exponentialRampToValueAtTime(45, t0 + 0.35);

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(1.0, t0);

        osc1.connect(oscGain);
        osc2.connect(oscGain);
        oscGain.connect(masterGain);

        osc1.start(t0);
        osc2.start(t0);

        osc1.stop(t0 + 0.8);
        osc2.stop(t0 + 0.8);

        // Небольшой «щелчок» в начале, как выброс энергии
        const clickOsc = ctx.createOscillator();
        const clickGain = ctx.createGain();

        clickOsc.type = "square";
        clickOsc.frequency.setValueAtTime(900, t0);

        clickGain.gain.setValueAtTime(0.5, t0);
        clickGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.06);

        clickOsc.connect(clickGain).connect(masterGain);
        clickOsc.start(t0);
        clickOsc.stop(t0 + 0.08);
    } catch (e) {
        console.warn("Laar blaster sound error:", e);
    }
}

function setupLaarGuardEgg() {
    // 1) Пытаемся найти по специальному классу (как у тебя в HTML)
    let img = document.querySelector('.egg-laar-target');
    let card = null;

    // 2) Если вдруг класс не найдён — ищем по имени LAAR в карточках
    if (!img) {
        const cards = document.querySelectorAll('.character-card');
        for (const c of cards) {
            const nameEl = c.querySelector('.hero-name');
            if (!nameEl) continue;
            const txt = (nameEl.textContent || "").toLowerCase();
            if (txt.includes('laar')) {
                img = c.querySelector('img');
                card = c;
                break;
            }
        }
    }

    // 3) Если нашли только img, но ещё не выбрали card — берём ближайшую .character-card
    if (img && !card) {
        card = img.closest('.character-card') || document.body;
    }

    // Если вообще ничего не нашли — тихо выходим
    if (!img || !card) return;

    // Чтобы не палить пасхалку — курсор оставляем обычным
    img.style.cursor = 'default';

    let clickCount = 0;
    let clickTimer = null;

    img.addEventListener('click', () => {
        clickCount++;

        // сбрасываем старый таймер, если ещё тикает
        if (clickTimer) clearTimeout(clickTimer);

        // даём 1.5 секунды на серию из 5 кликов
        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 1500);

        if (clickCount >= 5) {
            clickCount = 0;
            triggerLaarBattleMode(card);
        }
    });
}

function triggerLaarBattleMode(card) {
    // визуальный боевой режим
    card.classList.add('egg-laar-battle');

    const nameEl = card.querySelector('.hero-name');
    if (nameEl) {
        nameEl.classList.add('egg-laar-battle-name');
    }

    // звук выстрела бластера Лаара
    playLaarBlaster();

    setTimeout(() => {
        card.classList.remove('egg-laar-battle');
        if (nameEl) nameEl.classList.remove('egg-laar-battle-name');
    }, 2500);
}

/* =====================================
   АТРИССА КСОЛЛ — ПРОРОЧЕСТВО
===================================== */

function setupAtrissaProphecyEgg() {
    const atrissaCard = findHeroCardByName(['ATRISSA XSOLL','АТРИССА КСОЛЛ','Атрисса Ксолл']);
    const atrissaRunes = atrissaCard ? atrissaCard.querySelector('.selarit') : null;

    if (atrissaRunes) {
        atrissaRunes.style.cursor = 'default';
        atrissaRunes.addEventListener('dblclick', () => {
            triggerAtrissaProphecy();
        });
    }

    // Поиск поля "поиска" (очень мягкий, чтобы не ломать ничего)
    const inputs = document.querySelectorAll('input[type="search"], input[placeholder*="поиск"], input[placeholder*="Поиск"]');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value.trim().toLowerCase() === '/пророчество') {
                triggerAtrissaProphecy();
            }
        });
    });
}

function triggerAtrissaProphecy() {
    const backdrop = document.createElement('div');
    backdrop.className = 'egg-modal-backdrop';

    const modal = document.createElement('div');
    modal.className = 'egg-modal';

    const title = document.createElement('div');
    title.className = 'egg-modal-title';
    title.textContent = 'Голос Атриссы Ксолл';

    const text = document.createElement('div');
    text.className = 'egg-modal-text';
    text.textContent = 'То, что скрыто — однажды покажет себя. То, что утеряно — ищи в себе.';

    modal.appendChild(title);
    modal.appendChild(text);
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    backdrop.addEventListener('click', () => {
        backdrop.remove();
    });
}

/* =====================================
   ВСПОМОГАТЕЛЬНЫЕ ПОИСКИ ГЕРОЕВ
===================================== */

// ищем элемент с именем героя по тексту
function findHeroNameElement(nameVariants) {
    const els = document.querySelectorAll('.hero-name, .hero-name-text, h2');
    for (const el of els) {
        const txt = (el.textContent || '').trim();
        for (const v of nameVariants) {
            if (txt.toLowerCase().includes(v.toLowerCase())) {
                return el;
            }
        }
    }
    return null;
}

// ищем карточку героя по его имени
function findHeroCardByName(nameVariants) {
    const cards = document.querySelectorAll('.character-card');
    for (const card of cards) {
        const nameEl = card.querySelector('.hero-name, .hero-name-text, h2');
        if (!nameEl) continue;
        const txt = (nameEl.textContent || '').trim();
        for (const v of nameVariants) {
            if (txt.toLowerCase().includes(v.toLowerCase())) {
                return card;
            }
        }
    }
    return null;
}
