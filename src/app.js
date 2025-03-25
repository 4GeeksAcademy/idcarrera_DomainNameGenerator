// let pronoun = ['the', 'our', 'they'];
// let adj = ['fabulos', 'amazing', 'kawaii'];
// let noun = ['chicken', 'racoon', 'capybara'];

let arrayDomain = [
   ['the', 'our', 'they'],
   ['fabulos', 'amazing', 'kawaii'],
   ['chicken', 'racoon', 'capybara'],
   ['.com', '.gob', '.net','.mx']
];


for (let i = 0; i < arrayDomain[0].length; i++) {
    //console.log(arrayDomain[0][i])
    for (let j = 0; j < arrayDomain[1].length; j++) {
        //console.log(arrayDomain[0][i] + arrayDomain[1][j])
        for (let k = 0; k < arrayDomain[2].length; k++){
            //console.log(arrayDomain[i] + arrayDomain [j] + arrayDomain[k])
            //console.log(arrayDomain[0][i] + arrayDomain [1][j] + arrayDomain [2][k] + ".com")
            for (let l = 0; l < arrayDomain[3].length; l++){
                console.log(arrayDomain[0][i] + arrayDomain[1][j] + arrayDomain[2][k] + arrayDomain[3][l])
            }
        }

    }
        //newDomain = pronoun[i] + adj [i] + noun [i]
}
