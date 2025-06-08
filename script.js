
// Launch confetti burst once on load
window.onload = () => {
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 },
  });
};