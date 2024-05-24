// This a javascript about inspirational message

// Function that generate a random number

function GenerateRandomNum(num) {

    return Math.floor(Math.random() * num);

}

// Create a object contain of message

const WisdomMessage = {

    zodiacSign: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra',
        'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    fortuneOutput: ['Goodluck', 'Unlucky', 'Happier', 'More Heal', 'Strong', 'Childish', 'Sad'],
    givenAdvice: ['Never Give Up!', 'Keep Going!', 'You can do it!', 'Enjoyed you days', 'Live a better life', 'It\' never too late']
}

// Store WisdomMessage
let personalMessage = [];

// loop switch iterator
for (let prop in WisdomMessage) {
    let optionIndex = GenerateRandomNum(WisdomMessage[prop].length);

    switch (prop) {
        case 'zodiacSign':
            personalMessage.push(`Your random Zodiac Sign: ${WisdomMessage[prop][optionIndex]}`)
            break;
        case 'fortuneOutput':
            personalMessage.push(`Your fortune today is: ${WisdomMessage[prop][optionIndex]}`)
            break;
        case 'givenAdvice':
            personalMessage.push(`My advice to you is that: ${WisdomMessage[prop][optionIndex]}`)
            break;
        default:
            personalMessage.push(`Not enough Information!`);
            break;
    }
}

function formatWisdom(wisdom) {

    const formatted = personalMessage.join('\n')
    console.log(formatted);
}

formatWisdom(personalMessage);