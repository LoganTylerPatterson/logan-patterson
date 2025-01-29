import { initializeBranches } from './branches';
import './style.css'

document.querySelector('#app').innerHTML = `
  <div id="warning">under construction</div>
  <div id="info">click anywhere</div>
  <div id="container"></div>
`;

initializeBranches();