const renderWelcomeScreen = (container) => {
  const screen = container;
  screen.innerHTML = `
    <div id="welcome-screen" class="active welcome-screen">
      <h1>Welcome to Battleship</h1>
      <button id="start-button" class="start-button">Start Game</button>
    </div>
  `;

  document.getElementById('start-button').addEventListener('click', () => {
    const navigationEvent = new CustomEvent('navigation', { detail: { screen: 'setup' } });
    document.dispatchEvent(navigationEvent);
  });
};

export default renderWelcomeScreen;
