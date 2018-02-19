function jediName(firstName, lastName) {
    return lastName.slice(0, 3) + firstName.slice(0, 2);
}

jediName('Beyonce', 'Knowles');


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