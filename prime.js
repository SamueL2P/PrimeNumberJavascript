function CheckRules(){
    
    var number = parseInt(f1.t1.value);

    if(number <= 1)
        return false;

    if(number === 2)
        return true;

    if(number % 2 === 0)
        return false;

    for(let i = 3 ; i <= Math.sqrt(number); i += 2){
        if(number % i === 0)
            return false;
    }
    return true;
}


function CheckPrime(){
    let result = document.getElementById('result');
    result.innerHTML = CheckRules() ? "Prime number" : "Not Prime Number";
}