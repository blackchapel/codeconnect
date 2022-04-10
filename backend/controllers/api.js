const fetch = require('cross-fetch');

const base = 'https://api.stackexchange.com';
const pathURL1 = '/2.3/search/advanced?order=desc&sort=relevance&';
const pathURL2 = 'q=javascript';
const pathURL3 = '&site=stackoverflow'

let questions = [];
let filteredqns = [];

const stackExchangeQuestion = async () => {
    const url = base + pathURL1 + pathURL2 + pathURL3;
    const response = await fetch(url);

    questions = await response.json();
    const items = questions.items;

    const n = items.length;

    for (let i = 0; i < n; i++) {
        let a = items[i];
        let x = a.question_id;
        filteredqns.push(x);
    }
    console.log(filteredqns);
}

const ids = filteredqns.join([separator = ';']);

stackExchangeQuestion();

const ansURL1 = '/2.3/questions/';
const ansURL2 = '5767325';
const ansURL3 = '/answers?order=desc&sort=activity&site=stackoverflow&filter=!nKzQURF6Y5';

let answers = [];
let filteredAnsBody = [];
let filteredAnsId = [];

const stackExchangeAnswer = async () => {
    const ansurl = base + ansURL1 + ansURL2 + ansURL3;
    const response = await fetch(ansurl);

    answers = await response.json();
    const ansitems = answers.items;

    const m = ansitems.length;

    for (let i = 0; i < m; i++) {
        let b = ansitems[i];
        let y = b.body;
        let z = b.answer_id;
        filteredAnsBody.push(y);
        filteredAnsId.push(z);
    }
    console.log(filteredAnsBody);
}

stackExchangeAnswer();

