/* RANDOM REFERENCE OBJECT GENERATOR */

const classOptions = [
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
  13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18,
];

const randomRefObjGenerator = (refObj = {}, num = 36, arr = classOptions) => {
  if (num < 1) return refObj;
  randomIndex = Math.floor(Math.random() * num);
  refObj[num] = classOptions[randomIndex];
  arr.splice(randomIndex, 1);
  return randomRefObjGenerator(refObj, num - 1, arr);
};

const randomRefObj = randomRefObjGenerator();

/* RUN GAME FUNCTION */

//CARD STATE 0 = no cards exposed - 1 = one card exposed - 2 = two cards exposed
let cardState = 0;
let isPlayer1sTurn = true;
let player1Score = 0;
let player2Score = 0;
const player1VisibleScore = document.getElementById(`player-one-score`);
const player2VisibleScore = document.getElementById(`player-two-score`);
let header = document.getElementById(`header`);
let selectedCard1;
let selectedCard2;
let selectedPic1;
let selectedPic2;

const runGame = (e) => {
  const cardId = e.target.innerText;
  cardState++;

  if (cardState === 1) {
    selectedPic1 = document.getElementById(`pic${cardId}`);
    selectedCard1 = document.getElementById(`cover${cardId}`);
    selectedCard1.classList.add('selected');
  }
  if (cardState === 2) {
    selectedPic2 = document.getElementById(`pic${cardId}`);
    selectedCard2 = document.getElementById(`cover${cardId}`);
    selectedCard2.classList.add('selected');

    setTimeout(() => {
      cardState = 0;

      if (selectedPic1.classList[1] !== selectedPic2.classList[1]) {
        selectedCard1.classList.remove('selected');
        selectedCard2.classList.remove('selected');

        isPlayer1sTurn = !isPlayer1sTurn;
      } else {
        selectedCard1.removeEventListener('click', runGame);
        selectedCard2.removeEventListener('click', runGame);
        selectedCard1.classList.remove('card');
        selectedCard2.classList.remove('card');

        if (isPlayer1sTurn) {
          player1Score++;
          player1VisibleScore.innerText = player1Score;
          isPlayer1sTurn = !isPlayer1sTurn;

          if (player1Score + player2Score === 18) {
            if (player1Score > player2Score)
              header.innerText = 'Player One Wins - Refresh to restart';
            else if (player1Score < player2Score)
              header.innerText = 'Player Two Wins - Refresh to restart';
            else header.innerText = 'Honorable Draw - Refresh to restart';
          }
        } else {
          player2Score++;
          player2VisibleScore.innerText = player2Score;
          isPlayer1sTurn = !isPlayer1sTurn;

          if (player1Score + player2Score === 18) {
            if (player1Score > player2Score)
              header.innerText = 'Player One Wins - Refresh to restart';
            else if (player1Score < player2Score)
              header.innerText = 'Player Two Wins - Refresh to restart';
            else header.innerText = 'Honorable Draw - Refresh to restart';
          }
        }
      }
    }, 1000);
  }
};

/* GET ALL 16 SQUARES AND ASSIGN RANDOM PAIR CLASSES PLUS EVENTLISTENER */

const pic1 = document.getElementById('pic1');
if (pic1) {
  pic1.classList.add(`pair-num-${randomRefObj['1']}`);
  const cover1 = document.getElementById('cover1');
  cover1.addEventListener('click', runGame);

  const pic2 = document.getElementById('pic2');
  pic2.classList.add(`pair-num-${randomRefObj['2']}`);
  const cover2 = document.getElementById('cover2');
  cover2.addEventListener('click', runGame);

  const pic3 = document.getElementById('pic3');
  pic3.classList.add(`pair-num-${randomRefObj['3']}`);
  const cover3 = document.getElementById('cover3');
  cover3.addEventListener('click', runGame);

  const pic4 = document.getElementById('pic4');
  pic4.classList.add(`pair-num-${randomRefObj['4']}`);
  const cover4 = document.getElementById('cover4');
  cover4.addEventListener('click', runGame);

  const pic5 = document.getElementById('pic5');
  pic5.classList.add(`pair-num-${randomRefObj['5']}`);
  const cover5 = document.getElementById('cover5');
  cover5.addEventListener('click', runGame);

  const pic6 = document.getElementById('pic6');
  pic6.classList.add(`pair-num-${randomRefObj['6']}`);
  const cover6 = document.getElementById('cover6');
  cover6.addEventListener('click', runGame);

  const pic7 = document.getElementById('pic7');
  pic7.classList.add(`pair-num-${randomRefObj['7']}`);
  const cover7 = document.getElementById('cover7');
  cover7.addEventListener('click', runGame);

  const pic8 = document.getElementById('pic8');
  pic8.classList.add(`pair-num-${randomRefObj['8']}`);
  const cover8 = document.getElementById('cover8');
  cover8.addEventListener('click', runGame);

  const pic9 = document.getElementById('pic9');
  pic9.classList.add(`pair-num-${randomRefObj['9']}`);
  const cover9 = document.getElementById('cover9');
  cover9.addEventListener('click', runGame);

  const pic10 = document.getElementById('pic10');
  pic10.classList.add(`pair-num-${randomRefObj['10']}`);
  const cover10 = document.getElementById('cover10');
  cover10.addEventListener('click', runGame);

  const pic11 = document.getElementById('pic11');
  pic11.classList.add(`pair-num-${randomRefObj['11']}`);
  const cover11 = document.getElementById('cover11');
  cover11.addEventListener('click', runGame);

  const pic12 = document.getElementById('pic12');
  pic12.classList.add(`pair-num-${randomRefObj['12']}`);
  const cover12 = document.getElementById('cover12');
  cover12.addEventListener('click', runGame);

  const pic13 = document.getElementById('pic13');
  pic13.classList.add(`pair-num-${randomRefObj['13']}`);
  const cover13 = document.getElementById('cover13');
  cover13.addEventListener('click', runGame);

  const pic14 = document.getElementById('pic14');
  pic14.classList.add(`pair-num-${randomRefObj['14']}`);
  const cover14 = document.getElementById('cover14');
  cover14.addEventListener('click', runGame);

  const pic15 = document.getElementById('pic15');
  pic15.classList.add(`pair-num-${randomRefObj['15']}`);
  const cover15 = document.getElementById('cover15');
  cover15.addEventListener('click', runGame);

  const pic16 = document.getElementById('pic16');
  pic16.classList.add(`pair-num-${randomRefObj['16']}`);
  const cover16 = document.getElementById('cover16');
  cover16.addEventListener('click', runGame);

  const pic17 = document.getElementById('pic17');
  pic17.classList.add(`pair-num-${randomRefObj['17']}`);
  const cover17 = document.getElementById('cover17');
  cover17.addEventListener('click', runGame);

  const pic18 = document.getElementById('pic18');
  pic18.classList.add(`pair-num-${randomRefObj['18']}`);
  const cover18 = document.getElementById('cover18');
  cover18.addEventListener('click', runGame);

  const pic19 = document.getElementById('pic19');
  pic19.classList.add(`pair-num-${randomRefObj['19']}`);
  const cover19 = document.getElementById('cover19');
  cover19.addEventListener('click', runGame);

  const pic20 = document.getElementById('pic20');
  pic20.classList.add(`pair-num-${randomRefObj['20']}`);
  const cover20 = document.getElementById('cover20');
  cover20.addEventListener('click', runGame);

  const pic21 = document.getElementById('pic21');
  pic21.classList.add(`pair-num-${randomRefObj['21']}`);
  const cover21 = document.getElementById('cover21');
  cover21.addEventListener('click', runGame);

  const pic22 = document.getElementById('pic22');
  pic22.classList.add(`pair-num-${randomRefObj['22']}`);
  const cover22 = document.getElementById('cover22');
  cover22.addEventListener('click', runGame);

  const pic23 = document.getElementById('pic23');
  pic23.classList.add(`pair-num-${randomRefObj['23']}`);
  const cover23 = document.getElementById('cover23');
  cover23.addEventListener('click', runGame);

  const pic24 = document.getElementById('pic24');
  pic24.classList.add(`pair-num-${randomRefObj['24']}`);
  const cover24 = document.getElementById('cover24');
  cover24.addEventListener('click', runGame);

  const pic25 = document.getElementById('pic25');
  pic25.classList.add(`pair-num-${randomRefObj['25']}`);
  const cover25 = document.getElementById('cover25');
  cover25.addEventListener('click', runGame);

  const pic26 = document.getElementById('pic26');
  pic26.classList.add(`pair-num-${randomRefObj['26']}`);
  const cover26 = document.getElementById('cover26');
  cover26.addEventListener('click', runGame);

  const pic27 = document.getElementById('pic27');
  pic27.classList.add(`pair-num-${randomRefObj['27']}`);
  const cover27 = document.getElementById('cover27');
  cover27.addEventListener('click', runGame);

  const pic28 = document.getElementById('pic28');
  pic28.classList.add(`pair-num-${randomRefObj['28']}`);
  const cover28 = document.getElementById('cover28');
  cover28.addEventListener('click', runGame);

  const pic29 = document.getElementById('pic29');
  pic29.classList.add(`pair-num-${randomRefObj['29']}`);
  const cover29 = document.getElementById('cover29');
  cover29.addEventListener('click', runGame);

  const pic30 = document.getElementById('pic30');
  pic30.classList.add(`pair-num-${randomRefObj['30']}`);
  const cover30 = document.getElementById('cover30');
  cover30.addEventListener('click', runGame);

  const pic31 = document.getElementById('pic31');
  pic31.classList.add(`pair-num-${randomRefObj['31']}`);
  const cover31 = document.getElementById('cover31');
  cover31.addEventListener('click', runGame);

  const pic32 = document.getElementById('pic32');
  pic32.classList.add(`pair-num-${randomRefObj['32']}`);
  const cover32 = document.getElementById('cover32');
  cover32.addEventListener('click', runGame);

  const pic33 = document.getElementById('pic33');
  pic33.classList.add(`pair-num-${randomRefObj['33']}`);
  const cover33 = document.getElementById('cover33');
  cover33.addEventListener('click', runGame);

  const pic34 = document.getElementById('pic34');
  pic34.classList.add(`pair-num-${randomRefObj['34']}`);
  const cover34 = document.getElementById('cover34');
  cover34.addEventListener('click', runGame);

  const pic35 = document.getElementById('pic35');
  pic35.classList.add(`pair-num-${randomRefObj['35']}`);
  const cover35 = document.getElementById('cover35');
  cover35.addEventListener('click', runGame);

  const pic36 = document.getElementById('pic36');
  pic36.classList.add(`pair-num-${randomRefObj['36']}`);
  const cover36 = document.getElementById('cover36');
  cover36.addEventListener('click', runGame);
}

// ------- WELCOME MESSAGE -------

const message = document.getElementById('welcome');

const messageArr = [
  ` `,
  'H',
  'e',
  'l',
  'l',
  'o',
  ` `,
  'a',
  'n',
  'd',
  ` `,
  'w',
  'e',
  'l',
  'c',
  'o',
  'm',
  'e',
  ` `,
  't',
  'o',
  ` `,
  't',
  'h',
  'e',
  ` `,
  'm',
  'a',
  'g',
  'i',
  'c',
  'a',
  'l',
  ' ',
  'g',
  'a',
  'm',
  'e',
  ` `,
  'e',
  'm',
  'p',
  'o',
  'r',
  'i',
  'u',
  'm',
  ` `,
  'o',
  'f',
  ` `,
  'I',
  's',
  'l',
  'a',
  ` `,
  'a',
  'n',
  'd',
  ` `,
  'A',
  'l',
  'y',
  's',
  ' ',
  'P',
  'l',
  'e',
  'a',
  's',
  'e',
  ' ',
  'E',
  'N',
  'T',
  'E',
  'R',
];

const playMessage = () => {
  if (messageArr.length < 1) return 'fini';
  if (messageArr[0] === ' ') message.innerText = messageArr[0];
  message.innerText += messageArr.shift();
  setTimeout(playMessage, 200);
};
playMessage();
