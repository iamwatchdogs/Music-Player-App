(function generateRandomTagline() {
  const taglines = [
    `Feel the Beat, It's what you Seek.`,
    `Feel the Beat, Your Heartly Suite.`,
    `Feel the Beat, It's your Heart Beat.`,
    `Feel the Beat, This is your League.`,
    `Feel the Beat, Balance your life's Off Beat.`,
    `Feel the Beat, A Musical Starfleet.`,
    `Feel the Beat, Don't forget to Tweet.`,
    `Feel the Beat, 'Cause it's for elite.`,
  ];
  const randomNumber = Math.round(Math.random() * taglines.length);
  const index = randomNumber % taglines.length;
  document.getElementById("tag-line").innerText = taglines[index];
})();

(function slowBlinkCopyright() {
  const copyright = document.getElementById("copyright");
  let setTimeroutId = null;

  copyright.style.opacity = 1;
  copyright.style.transition = "opacity 1s";

  const setTimeIntervalId = setInterval(() => {
    copyright.style.opacity = 1;
    setTimeroutId = setTimeout(() => {
      copyright.style.opacity = 0;
    }, 60000);
  }, 120000);

  function clearSetInterval() {
    clearInterval(setTimeIntervalId);
    clearTimeout(setTimeroutId);
  }

  // stop blinking and toggle opacity by click event
  copyright.addEventListener("click", () => {
    clearSetInterval();
    copyright.style.opacity = copyright.style.opacity == 0 ? 1 : 0;
  });
})();
