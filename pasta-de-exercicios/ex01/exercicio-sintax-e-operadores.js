const COMPARADOR = (num1, num2) => {
    const N1 = num1;
    const N2 = num2;
    const SOMA = n1 + n2;
    const CONFERE_10 = (SOMA >10) ?  `é maior que 10` :  `é menor que 10`
    const CONFERE_20 = (SOMA <20) ?  `menor que 20` :  `maior que 20`
    const IGUALDADE = n1 === n2 ;

(IGUALDADE) ? 
        console.log(`Os números ${N1} e ${N2} são iguais. Sua soma é ${SOMA}, que ${CONFERE_10} e ${CONFERE_20 }` ) 
    :   console.log(`Os números ${N1} e ${N2} são diferentes. Sua soma é ${SOMA}, que ${CONFERE_10} e ${CONFERE_20 }` )

    
}

COMPARADOR(1, 11);