function jediName(firstName, lastName) {
    return lastName.slice(0, 3) + firstName.slice(0, 2);
}

let fullName = jediName('Beyonce', 'Knowles');
console.log(fullName);
console.log(jediName('Beyonce', 'Knowles'));


function beyond(num) {
    if (num === Infinity) {
        console.log('And beyond');
    } else if (isFinite(num) === true && num > 0) {
        console.log('To infinity');
    } else if (isFinite(num) === true && num < 0) {
        console.log('To negative inifinity');
    } else if (num === 0) {
        console.log('Staying home');
    }
}


function decode(word) {
    const message = [];
    let code = word.split(" ");
    for (let i = 0; i < code.length; i++) {
        if (code[i][0] === 'a') {
            message.push(code[i][1]);
        } else if (code[i][0] === 'b') {
            message.push(code[i][2]);
        } else if (code[i][0] === 'c') {
            message.push(code[i][3]); 
        } else if (code[i][0] === 'd') {
            message.push(code[i][4]); 
        } else {
            message.push(" ");
        }
    }
    return message.join("");
}



function daysInMonth(month, leapYear) {
   const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
   for (let i = 0; i < months.length; i++) {
       if (month.toLowerCase() === months[i]) {
           switch (month) {
               case 'january':
               case 'march':
               case 'may':
               case 'july':
               case 'august':
               case 'october':
               case 'december':
                return `${month} has 31 days`;
                break;

                case 'april':
                case 'june':
                case 'september':
                case 'november':
                 return `${month} has 30 days`;
                 break;

                case 'february':
                    if (leapYear === true) {
                        return `${month} has 29 days`;
                    } else {
                        return `${month} has 28 days`;
                    }
           } 
       }
   }
   return 'Must provide a valid month.';
}
   console.log(daysInMonth('february', true));



function rockPaperScissors(num) {
    if (num < 1 || num > 3) {
        throw new Error('Please pick between rock(1), paper(2), or scissors(3)');
    }
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if (num === randomNo) {
        return 'It is a tie.';
    } else if (num === 1 && randomNo === 3) {
        return 'Rock beats scissors. You win.';
    } else if (num === 1 && randomNo === 2) {
        return 'Paper beats rock. You lose.';
    } else if (num === 2 && randomNo === 1) {
        return 'Paper beat rock. You win.';
    } else if (num === 2 && randomNo === 3) {
        return 'Scissors beats paper. You lose.';
    } else if (num === 3 && randomNo === 1) {
        return 'Rock beats scissors. You lose.';
    } else if (num === 3 && randomNo === 2) {
        return 'Scissors beats paper. You win.';
    }
}

console.log(rockPaperScissors(2));
