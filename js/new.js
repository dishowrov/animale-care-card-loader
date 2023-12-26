
document.addEventListener("DOMContentLoaded", function () {
  const centerImage = document.getElementById("centerImage");
  const orbits = document.querySelectorAll(".orbit");

  let angle = 0;

  function updateOrbitPositions() {
    const orbitRadius = 100;
    const centerX = centerImage.offsetLeft + centerImage.offsetWidth / 2;
    const centerY = centerImage.offsetTop + centerImage.offsetHeight / 2;

    orbits.forEach((orbit, index) => {
      const orbitAngle = angle + (index * 90);
      const orbitX = centerX + orbitRadius * Math.cos(orbitAngle * Math.PI / 180);
      const orbitY = centerY + orbitRadius * Math.sin(orbitAngle * Math.PI / 180);

      orbit.style.left = orbitX - orbit.offsetWidth / 2 + "px";
      orbit.style.top = orbitY - orbit.offsetHeight / 2 + "px";
    });
  }

  function animateOrbit() {
    angle += 1;
    updateOrbitPositions();
    requestAnimationFrame(animateOrbit);
  }

  animateOrbit();
});
