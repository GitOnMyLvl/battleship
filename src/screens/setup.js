const renderSetupScreen = (container) => {
  const screen = container;
  screen.innerHTML = `
    <div id="setup-screen" class="active setup-screen">
      <h2>Chose difficulty</h2>
      <button id="easy" class="difficulty">Easy</button>
      <button id="advanced" class="difficulty">Advanced</button>
    </div>
    `;

  document.querySelectorAll('.difficulty').forEach((button) => {
    button.addEventListener('click', (e) => {
      const difficulty = e.target.id;
      const navigationEvent = new CustomEvent('navigation', { detail: { screen: 'game', difficulty } });
      document.dispatchEvent(navigationEvent);
    });
  });
};

export default renderSetupScreen;
