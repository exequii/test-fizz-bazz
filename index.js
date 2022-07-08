function fizzBazz (num){

    const divisiblePor = (divisor, num) => num % divisor === 0;

    const incluyeUnNumero = (num,numeroIncluido) => {
        var arrayNum = String(num).split("");
        var retorno = false;
        arrayNum.forEach((element) => {
            if(element === String(numeroIncluido)) retorno = true;
        });
        return retorno;
    }

    if(typeof num !== "number") return "Error type variable";

    if(num === 0) return num;

    if(divisiblePor(5,num) && divisiblePor(3,num)){
        return "fizzBazz";
    }
    if(divisiblePor(3,num) || incluyeUnNumero(num,3)){
        return "fizz";
    }
    if(divisiblePor(5,num) || incluyeUnNumero(num,5)){
        return "bazz";
    }
    return num;
}


module.exports = fizzBazz;