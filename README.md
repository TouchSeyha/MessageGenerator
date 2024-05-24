```markdown
# Inspirational Message Generator

This project is a simple JavaScript application that generates a random inspirational message based on predefined lists of zodiac signs, fortunes, and pieces of advice. 

## Overview

The application randomly selects a zodiac sign, a fortune, and a piece of advice from predefined arrays and combines them into a personalized inspirational message. The message is then formatted and printed to the console.

## Functionality

### `GenerateRandomNum(num)`

This function generates a random integer between 0 and `num - 1`.

```javascript
function GenerateRandomNum(num) {
    return Math.floor(Math.random() * num);
}
```

### `WisdomMessage` Object

This object contains three arrays:
- `zodiacSign`: A list of zodiac signs.
- `fortuneOutput`: A list of possible fortunes.
- `givenAdvice`: A list of advice messages.

```javascript
const WisdomMessage = {
    zodiacSign: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra',
        'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    fortuneOutput: ['Goodluck', 'Unlucky', 'Happier', 'More Heal', 'Strong', 'Childish', 'Sad'],
    givenAdvice: ['Never Give Up!', 'Keep Going!', 'You can do it!', 'Enjoyed you days', 'Live a better life', 'It\'s never too late']
};
```

### Generate and Store the Inspirational Message

The application iterates over the properties of `WisdomMessage`, randomly selects an element from each array, and stores the resulting messages in `personalMessage`.

```javascript
let personalMessage = [];

for (let prop in WisdomMessage) {
    let optionIndex = GenerateRandomNum(WisdomMessage[prop].length);

    switch (prop) {
        case 'zodiacSign':
            personalMessage.push(`Your random Zodiac Sign: ${WisdomMessage[prop][optionIndex]}`);
            break;
        case 'fortuneOutput':
            personalMessage.push(`Your fortune today is: ${WisdomMessage[prop][optionIndex]}`);
            break;
        case 'givenAdvice':
            personalMessage.push(`My advice to you is that: ${WisdomMessage[prop][optionIndex]}`);
            break;
        default:
            personalMessage.push(`Not enough Information!`);
            break;
    }
}
```

### Format and Print the Message

The `formatWisdom` function formats the collected messages into a single string and prints it to the console.

```javascript
function formatWisdom(wisdom) {
    const formatted = personalMessage.join('\n');
    console.log(formatted);
}

formatWisdom(personalMessage);
```

## How to Run

1. Copy the code into a `.js` file (e.g., `inspirationalMessage.js`).
2. Run the file using Node.js:

```bash
node inspirationalMessage.js
```

## Example Output

```
Your random Zodiac Sign: Gemini
Your fortune today is: Happier
My advice to you is that: Never Give Up!
```

## License

This project is licensed under the MIT License.
```

This `README.md` provides a clear summary of your project, including an overview, functionality breakdown, instructions for running the code, and example output.
