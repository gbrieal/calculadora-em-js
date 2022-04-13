 alert("Seja bem vinde a GabCalculdora :D");

 function calculadora() {
     const operacao = Number(prompt('Escolha uma operação:\n1. Soma (+)\n2. Subtração (-)\n3. Multiplicação (*)\n4. Divisão Real (/)\n5. Divisão Inteira (%)\n6. Potenciação (**)'));

     if (!operacao || operacao >= 7) {
         alert("ERRO - operação inválida!");
         calculadora();
     } else {

         let n1 = Number(prompt('Digite o primeiro número:'));
         let n2 = Number(prompt('Digite o segundo número:'));
         let res;

         if (!n1 || !n2) {
             alert('Erro - parâmetros inválidos');
             calculadora();
         } else {

             function soma() {
                 res = n1 + n2;
                 alert(`${n1} + ${n2} = ${res}`);
                 novaOperacao();
             }

             function subt() {
                 res = n1 - n2;
                 alert(`${n1} - ${n2} = ${res}`);
                 novaOperacao();
             }

             function mult() {
                 res = n1 * n2;
                 alert(`${n1} * ${n2} = ${res}`);
                 novaOperacao();
             }

             function divReal() {
                 res = n1 / n2;
                 alert(`${n1} / ${n2} = ${res}`);
                 novaOperacao();
             }

             function divInt() {
                 res = n1 % n2;
                 alert(`o resto da divisão de ${n1} e ${n2} é igual a ${res}`);
                 novaOperacao();
             }

             function pot() {
                 res = n1 ** n2;
                 alert(`${n1} elevado a ${n2} é igual a ${res}`);
                 novaOperacao();
             }

             function novaOperacao() {
                 let opcao = prompt("Deseja fazer outra operação? Digite \n1. Sim\n2. Não");

                 if (opcao == 1) {
                     calculadora();
                 } else if (opcao == 2) {
                     alert("Bye! o/");
                 } else {
                     alert("Digite uma opção válida!");
                     novaOperacao();
                 }
             }
         }

         switch (operacao) {
             case 1:
                 soma();
                 break;
             case 2:
                 subt();
                 break;
             case 3:
                 mult();
                 break;
             case 4:
                 divReal();
                 break;
             case 5:
                 divInt();
                 break;
             case 6:
                 pot();
                 break;
         }
     }
 }

 calculadora();