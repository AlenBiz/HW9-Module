const data = [
  [
    { 'name': 'Ivan', 'score': 35, 'date': '2022-10-11' },
    { 'name': 'Maria', 'score': 5, 'date': '2022-10-10' },
    { 'name': 'Olga', 'score': 0, 'date': '' },
    { 'name': 'Stepan', 'score': 35, 'date': '2022-10-12' },
    { 'name': 'Oleg', 'score': 15, 'date': '2022-10-01' },
    { 'name': 'Zanna', 'score': 15, 'date': '2022-10-11' },
  ],
  [
    { 'name': 'Margo', 'score': 0, 'date': '2022-10-11' },
    { 'name': 'Natalia', 'score': 25, 'date': '2022-10-10' },
    { 'name': 'Marina', 'score': 25, 'date': '2022-10-01' },
    { 'name': 'Dmitry', 'score': 25, 'date': '2022-10-12' },
    { 'name': 'Denis', 'score': 0, 'date': '2022-10-02' },
    { 'name': 'Vadimyr', 'score': 1, 'date': '2022-10-11' },
  ],
  [
    { 'name': 'Irina', 'score': 0, 'date': '2022-10-11' },
    { 'name': 'Vasily', 'score': 0, 'date': '2022-10-10' },
    { 'name': 'David', 'score': 0, 'date': '2022-10-11' },
    { 'name': 'Kristina', 'score': 0, 'date': '2022-10-12' },
    { 'name': 'Varvara', 'score': 0, 'date': '2022-10-01' },
    { 'name': 'Tanya', 'score': 0, 'date': '2022-10-11' },
  ],
];

function getTheBest(data) {
  let best = undefined;
  let bestScore = 0;
  let bestDate = '999999999999999';
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
     
      if (data[i][j].date < bestDate && data[i][j].score >= bestScore) {
        bestScore = data[i][j].score;
        bestDate = data[i][j].date;
        best = data[i][j];
      }
    }
  }
  return best;
}
const best = getTheBest(data);
console.log(`Hey, ${best.name}, you are the best with the score ${best.score} at ${best.date}!`);

module.exports = {getTheBest, data};


