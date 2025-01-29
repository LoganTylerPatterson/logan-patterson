import { initializeBranches } from './branches';
import './style.css'

document.querySelector('#app').innerHTML = `
  <div id="warning">under construction: shamelessly derived from mr doob's branches</div>
  <div id="info">click anywhere</div>
  <div id="container"></div>
`;

initializeBranches();