// let pronoun = ['the', 'our', 'they'];
// let adj = ['fabulos', 'amazing', 'kawaii'];
// let noun = ['chicken', 'racoon', 'capybara'];

let arrayDomain = [
   ['the', 'our', 'they'],
   ['fabulos', 'amazing', 'kawaii'],
   ['chicken', 'racoon', 'capybara']
];


for (let i = 0; i < arrayDomain.length; i++) {
    //console.log(arrayDomain[0][i])
    for (let j = 0; j < arrayDomain.length; j++) {
        //console.log(arrayDomain[0][i] + arrayDomain[1][j])
        for (let k = 0; k < arrayDomain.length; k++){
            //console.log(arrayDomain[i] + arrayDomain [j] + arrayDomain[k])
            console.log(arrayDomain[0][i] + arrayDomain [1][j] + arrayDomain [2][k] + ".com") 
        }

    }
        //newDomain = pronoun[i] + adj [i] + noun [i]
}




