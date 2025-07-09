const input = document.getElementById('input');
const output = document.getElementById('output');

const commands = {
  help: `Available commands: <br>about, links, now, matrix, echo, reboot, clear`,
  about: `Shakil: Retro-futurist. Aesthetic tactician. Broadcasting from Port Blair.`,
  links: `<a href="https://instagram.com/yourhandle" target="_blank">Instagram</a> | 
          <a href="https://threads.net/yourhandle" target="_blank">Threads</a> | 
          <a href="https://facebook.com/yourhandle" target="_blank">Facebook</a>`,
  now: `"Booted clean. Shadows aligned. Posting with precision."`,
  matrix: `💊 Welcome to the shell. You’ve chosen the red one.`,
  echo: `You’re not just the signal. You’re the pattern.`,
  reboot: `System cycle complete. Returning to silence.`,
};

function typeEffect(element, text, speed = 35) {
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

function bootSequence(lines, callback) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < lines.length) {
      output.innerHTML += `<div>${lines[index++]}</div>`;
    } else {
      clearInterval(interval);
      callback();
    }
  }, 500);
}

window.onload = () => {
  const bootLines = [
    "Initializing shakil@terminal...",
    "Loading identity modules...",
    "Syncing aesthetics layer... ✅",
    "Decrypting profile matrix... 🔓",
    "System ready. Type 'help' to begin."
  ];
  bootSequence(bootLines, () => {
    document.querySelector('.prompt').style.display = 'flex';
    input.focus();
  });
};

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const cmd = input.value.trim();
    const div = document.createElement('div');
    div.innerHTML = `> ${cmd}`;
    output.appendChild(div);

    if (cmd === 'clear') {
      output.innerHTML = '';
    } else if (commands[cmd]) {
      const response = document.createElement('div');
      output.appendChild(response);
      typeEffect(response, commands[cmd]);
    } else {
      output.innerHTML += `<div>command not found: ${cmd}</div>`;
    }

    input.value = '';
    window.scrollTo(0, document.body.scrollHeight);
  }
});