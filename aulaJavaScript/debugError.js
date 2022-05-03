function validaArray(arr, num) {
    try{
        if(!arr && !num) 
            throw new ReferenceError('Envie os Parâmetros');

        if (typeof arr !== "object")
            throw new TypeError('Array precisa ser do tipo object');
    
        if (typeof num !== "number") 
            throw new TypeError('Array precisa ser do tipo number');
   
        if (arr.length !== num) 
            throw new RangeError('Tamanho Inválido!');
        
        return arr;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este é um ReferenceError!")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Este é um TypeError!")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Este é um RangeError!")
            console.log(e.message)
        } else  {
            console.log("Este é um Erro não Esperado!")
            console.log(e.message)
        }

    }
}

console.log(validaArray())