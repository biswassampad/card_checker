exports.validateCard = async(req, res) => {
    let cardInInput = req.body.card;

    if (!cardInInput) return res.json({ status: 1, message: "Please enter a credit/debit card" });

    // spliting the card by making it to string
    let brokenCard = cardInInput.toString().split('');
    let cardType = 'Unknown Card';
    let firstTwo = brokenCard[0] + brokenCard[1];
    let firstThree = firstTwo + brokenCard[2]
    let firstFour = firstThree + brokenCard[3];

    if (brokenCard[0] == '4') {
        cardType = 'VISA Card'
        return res.json({ status: 0, message: ` You are Dealing with ${cardType}` })
    }

    if (firstTwo == "55" || firstTwo == "51") {
        cardType = 'Master Card'
        return res.json({ status: 0, message: ` You are Dealing with ${cardType}` })
    }

    if (brokenCard.length == 15 && (firstTwo == 34 || firstTwo == 37)) {
        cardType = 'American Express Card'
        return res.json({ status: 0, message: ` You are Dealing with ${cardType}` })
    }

    if (firstFour == "6011") {
        cardType = 'Discover Card'
        return res.json({ status: 0, message: ` You are Dealing with ${cardType}` })
    }

    if (brokenCard.length == 14 && (firstThree == 300 || firstThree == 305)) {
        cardType = "Diner's Club Card"
        return res.json({ status: 0, message: ` You are Dealing with ${cardType}` })
    }

    if (brokenCard.length == 14 && (firstTwo == 36 || firstTwo == 38)) {
        cardType = 'Carte Blanche Card'
        return res.json({ status: 0, message: ` You are Dealing with ${cardType}` })
    }

    return res.json({ status: 0, message: ` You are Dealing with ${cardType}` })
}