const { execSync } = require('child_process');

const expectedNode = '20.19.0';
const expectedNpm = '10.8.2';

const actualNode = process.version.replace(/^v/, '');
const actualNpm = execSync('npm -v').toString().trim();

if (actualNode !== expectedNode) {
  console.error(
    `\n❌ Versão incorreta do Node.js: esperada ${expectedNode}, atual ${actualNode}\n`,
  );
  process.exit(1);
}

if (actualNpm !== expectedNpm) {
  console.error(
    `\n❌ Versão incorreta do npm: esperada ${expectedNpm}, atual ${actualNpm}\n`,
  );
  process.exit(1);
}

console.log(
  '✅ Versões corretas de Node.js e npm detectadas. Continuando a instalação...',
);
