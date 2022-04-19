import './footer.css';
import { contents } from './contents.js';

const languages = {
  en: 'English',
  ko: 'Korean',
  jp: 'Japanese',
  cn: 'Chinese',
  de: 'Germany',
  ar: 'Arabic',
  fr: 'France',
  es: 'Spanish',
};
export const footer = () => `
  <footer>
    ${Object.keys(contents).map(
      item => `<button value="${item}">${languages[item]}</button>`
    )}
  </footer>
`;
