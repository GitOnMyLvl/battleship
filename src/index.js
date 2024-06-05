import './style.css';
import renderWelcomeScreen from './screens/welcome';
import renderSetupScreen from './screens/setup';
import renderGameScreen from './screens/game';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  renderWelcomeScreen(app);

  document.addEventListener('navigation', (event) => {
    switch (event.detail.screen) {
      case 'setup':
        renderSetupScreen(app);
        break;
      case 'game':
        renderGameScreen(app, event.detail.difficulty);
        break;
      case 'welcome':
      default:
        renderWelcomeScreen(app);
    }
  });
});
