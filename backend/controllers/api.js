const fetch = require('cross-fetch');

const stackExchange = async (req, res) => {
    // Fetching questions
    const base = 'https://api.stackexchange.com';
    const pathURL1 = '/2.3/search/advanced?order=desc&sort=relevance&q=';
    const pathURL2 = req.body.query;
    const pathURL3 = '&site=stackoverflow';

    let questions = [];
    let filteredqns = [];

    const url = base + pathURL1 + pathURL2 + pathURL3;
    const qnResponse = await fetch(url);

    questions = await qnResponse.json();
    const items = questions.items;

    const n = items.length;

    for (let i = 0; i < n; i++) {
        let a = items[i];
        let x = a.question_id;
        filteredqns.push(x);
    }
    //console.log(filteredqns);

    const ids = filteredqns.join([separator = ';']);
    console.log(ids);

    // Fetching answers to fetched questions
    const ansURL1 = '/2.3/questions/';
    const ansURL2 = ids;
    const ansURL3 = '/answers?order=desc&sort=activity&site=stackoverflow&filter=!nKzQURF6Y5';

    let answers = [];
    let filteredAnsBody = [];
    let filteredAnsId = [];

    const ansurl = base + ansURL1 + ansURL2 + ansURL3;
    const ansResponse = await fetch(ansurl);

    answers = await ansResponse.json();
    console.log(answers);
    const ansitems = answers.items;
    console.log(ansitems);

    const m = ansitems.length;

    for (let i = 0; i < m; i++) {
        let b = ansitems[i];
        let y = b.body;
        let z = b.answer_id;
        filteredAnsBody.push(y);
        filteredAnsId.push(z);
    }
    console.log(filteredAnsBody);

    res.status(201).json({
        data: { 
            filteredAnsBody, 
            filteredAnsId 
        }
    });
}

module.exports = stackExchange;







