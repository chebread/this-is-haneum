import './reset.css';
import './app.css';
import profileImg from './imgs/profile.png';

const root = document.querySelector('#root');
const stackOverflowUrl = 'https://stackoverflow.com/users/16726480/chebread';
const blogUrl = 'https://haneum-blog.vercel.app/';
const githubUrl = 'https://github.com/chebread';
root.innerHTML = `
  <header>
    <img src="${profileImg}"/>
    <h1>Cha Haneum ∙ <span>Front-end developer</span></h1>
  </header>
  <main>
    <p>Hello. I am a Cha Haneum. I'm a front-end developer and a developer who aims to implement all-user-centric UI/UX. I'm also interested in the backend.</p>
    <p>But I still only know how to configure only the Webpack server with Express.js.</p>
    <br/>
    <p>Also, I love answering relatively easy JavaScript-related questions on <a href="${stackOverflowUrl}">Stack Overflow.</a></p>
    <br/>
    <p>I really like JavaScript itself. But it's not just JavaScript. I sometimes use React.js.</p>
    <br/>
    <p>The beauty of JavaScript, in my opinion, is that it supports flexible types. This can be annoying for developers, but I think this is one of the strengths of JavaScript.</p>
    <p>So I've never used TypeScript. Still, I think TypeScript is a fascinating language!</p>
    <br/>
    <p>If you have any questions about me, please visit <a href="${blogUrl}">my blog</a> or <a href="${githubUrl}">github</a>.</p>
  </main>
  <footer>
    <p><a href="${blogUrl}">Blog</a> <a href="${githubUrl}">GitHub</a></p>
  </footer>
`;
const links = document.querySelectorAll('a');
links.forEach(item => {
  item.addEventListener('mouseover', e => {
    if (e.target.classList.value === 'is-hover') {
    } else {
      e.target.classList += 'is-hover';
    }
  });
  item.addEventListener('mouseout', e => {
    if (e.target.classList.value === 'is-hover') {
      e.target.classList.remove('is-hover');
    }
  });
});
