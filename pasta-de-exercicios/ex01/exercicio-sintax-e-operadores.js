const comparador = (num1, num2) => {
    const n1 = num1;
    const n2 = num2;
    const soma = n1 + n2;
    const confere10 = (soma >10) ?  `é maior que 10` :  `é menor que 10`
    const confere20 = (soma <20) ?  `menor que 20` :  `maior que 20`
    const igualdade = n1 === n2 ;

(igualdade) ? 
        console.log(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que ${confere10} e ${confere20}` ) 
    :   console.log(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${soma}, que ${confere10} e ${confere20}` )

    
}

comparador(1, 11);