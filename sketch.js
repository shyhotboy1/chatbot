

let bot;
let text_input, text_output;

async function loadBot() {
  await bot.loadFile('brain.rive');
  bot.sortReplies();
  let num = floor(random(10)) + 1;
  console.log(num);
  await bot.reply('local-user', 'set ' + num);
}

async function chat() {
  let txt = text_input.value();
  let reply = await bot.reply('local-user', txt);
  text_output.html(reply);
}

function setup() {
  noCanvas();
  bot = new RiveScript();
  let button = select('#submit');
  text_input = select('#user_input');
  text_output = select('#output');
  loadBot();
  button.mousePressed(chat);
}