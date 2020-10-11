const tabContentOrder = document.querySelector("#tab-content");
const btnOngoing = document.querySelector("#ongoing");
const btnPast = document.querySelector("#past");

btnOngoing.addEventListener("click", function () {
  orderTabContent(btnOngoing, btnPast);
  getContentOngoing();
});

btnPast.addEventListener("click", function () {
  orderTabContent(btnPast, btnOngoing);
  getContentPast();
});

function orderTabContent(a, b) {
  a.classList.add("active");
  b.classList.remove("active");
}

function getContentOngoing() {
  tabContentOrder.innerHTML = `<div class="row tab-item mx-auto mt-3">
    <div class="col wording">
      <h5>XXX</h5>
      <h6>Logo Design</h6>
      <h4 class="mt-3">Rp. ###</h4>
      <p class="text-primary">More Details</p>
    </div>
    <div class="col img-container">
      <img src="img/d-logo.png" class="img-tab" />
    </div>
  </div>`;
}
function getContentPast() {
  tabContentOrder.innerHTML = `<div class="row tab-item mx-auto mt-3">
      <div class="col wording">
        <h5>XXX</h5>
        <h6>Logo Design</h6>
        <h4 class="mt-3">Rp. ###</h4>
        <p class="text-primary">More Details</p>
      </div>
      <div class="col img-container">
        <img src="img/d-logo.png" class="img-tab" />
      </div>
    </div>
    <div class="row tab-item mx-auto mt-3">
      <div class="col wording">
        <h5>XXX</h5>
        <h6>Char Design</h6>
        <h4 class="mt-3">Rp. ###</h4>
        <p class="text-primary">More Details</p>
      </div>
      <div class="col img-container">
        <img src="img/d-char.png" class="img-tab" />
      </div>
    </div>
    <div class="row tab-item mx-auto mt-3">
      <div class="col wording">
        <h5>XXX</h5>
        <h6>Game Design</h6>
        <h4 class="mt-3">Rp. ###</h4>
        <p class="text-primary">More Details</p>
      </div>
      <div class="col img-container">
        <img src="img/d-game.png" class="img-tab" />
      </div>
    </div>`;
}
// document.addEventListener("deviceready", onDeviceReady, false);

// function onDeviceReady() {
// Cordova is now initialized. Have fun!

//   console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
//   document.getElementById("deviceready").classList.add("ready");
// }
