function teste1 (num) {
    if(num > 7) 
        console.log(num)
        console.log("Final") /* vai ler apenas a primeira declação dentro do if */
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {
        console.log (num)
    }
}

teste2(3)
teste2(9)