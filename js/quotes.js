const quotes = [
  {
    quote: "Stop Dreaming, Start living.",
    author: "Walter Mitty",
  },
  {
    quote:
      "금이라 해서 다 반짝이는 것은 아니니 방황하는 자 모두 길을 잃은 것이 아니다. 오래되었어도 강한 것은 시들지 않으니 깊은 뿌리에는 서리가 닿지 못하리.",
    author: "J. R. R. Tolkien",
  },
  {
    quote: "BELIEVE!",
    author: "Ted Lasso",
  },
  {
    quote: "깨달음을 얻는 쉬운길도 눈먼 자에게는 어렵다.",
    author: "Unknown",
  },
  {
    quote:
      "겨울만 겪어 보고 포기하면 봄의 약속도, 여름의 아름다움도, 가을의 결실도 놓칠 것이다.",
    author: "류시화",
  },
  {
    quote: "My Richness is LIFE.",
    author: "Bob Marley",
  },
  {
    quote:
      "밑바닥까지 떨어졌다면 그때부터 길은 위밖에 없어. 밑바닥에서 보이는 광경은 어둠이 아니야. 땅에 발을 딛고 위를 올려다보면 희망으로 빛나지.",
    author: "Ichiban Kasuga",
  },
  {
    quote: "May the force be with you.",
    author: "StarWars",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
