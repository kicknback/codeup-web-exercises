const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let usersWithLanguages = users.filter((user) => {
    return user.languages.length  >= 3;
});

// console.log(usersWithLanguages);


let emails = users.map(user => user.email);

// console.log(emails);

let averageYears = users.reduce((accum, currVal) => {
    return accum + currVal.yearsOfExperience;
}, 0) / users.length;

// console.log(averageYears);


let longestEmail = emails.reduce((accum, currVal) => {
    return accum.length > currVal.length ? accum : currVal;
}, "");

// console.log(longestEmail);


let nameString = users.reduce((accum, currVal, index) => {
    // return accum + currVal.name + " ";
    if (index === users.length -1) {
        return accum + currVal.name;
    }
    return `${accum + currVal.name}, `;
}, "Your instructors are: ");

// console.log(nameString);


let uniqueLanguages = users.reduce((accum, user) => {
    let uniqueLang = user.languages.filter((lang) => {
        if (!accum.includes(lang)) {
            return lang;
        }
    })
    accum.push(...uniqueLang);
    return accum;
}, []);

console.log(uniqueLanguages);






