const WALLET_ADDRESS = "h5iVBcZPnRdcDD8rBciWmaASNsyGHecc7iNb4HbxYnG";

const clockEl = document.getElementById("clock");
function tick() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  clockEl.textContent = `${h}:${m}:${s}`;
}
tick();
setInterval(tick, 1000);

const yearEl = document.getElementById("year");
yearEl.textContent = String(new Date().getFullYear());

const addrEl = document.getElementById("walletAddr");
addrEl.textContent = WALLET_ADDRESS;

const copyBtn = document.getElementById("copyBtn");
const copyMsg = document.getElementById("copyMsg");
copyBtn.addEventListener("click", async () => {
  if (WALLET_ADDRESS.startsWith("PASTE_")) {
    copyMsg.textContent = "error: address not configured.";
    copyBtn.textContent = "n/a";
    return;
  }
  try {
    await navigator.clipboard.writeText(WALLET_ADDRESS);
    copyBtn.textContent = "copied";
    copyMsg.textContent = "address copied to clipboard.";
    setTimeout(() => {
      copyBtn.textContent = "copy";
      copyMsg.textContent = "";
    }, 2000);
  } catch {
    copyMsg.textContent = "copy failed — select manually.";
  }
});
