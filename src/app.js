import App from './scripts/App.js';
import Header from './scripts/components/Header.js';

const app = new App('app');
app.add(new Header()).add(new Header()); // return this from add; 
console.log(app);
