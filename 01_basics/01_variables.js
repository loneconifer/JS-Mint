const accountId = 244532
let accountEmail = "conifer@google.com"
var accountPassword = "35412"
accountCity = "Bijoynagar"
let accountState;

// accountId = 2 // Not allowed

accountEmail = "lc@lc.com"
accountPassword = "204325"
accountCity = "Azara"

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
