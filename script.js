function toggleLightbulb() {
    var lightBulb = document.getElementById('light-bulb');
    if (lightBulb.classList.contains('light-bulb-off')) {
      lightBulb.classList.remove('light-bulb-off');
      lightBulb.classList.add('light-bulb-on');
    } else {
      lightBulb.classList.remove('light-bulb-on');
      lightBulb.classList.add('light-bulb-off');
    }
  }