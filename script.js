//JS
//1. Criando uma variavel e chame com queryselector as imagens do player-options div > img
//2. criando um loop FOR para selecionar todas as imagens e colocar a opacidade das imagens clicada à 1 (usando eventlistener click)
//3. agora, crio uma função para deixar apenas a imagem clicada à 1, e resetar as outras pra 0.3
//4. nessa função, coloco o loop dentro dela e coloca opc 0.3
//5. chamo essa função em baixo do evento de listener, e dps de chamá-la dentro desse loop, abra uma funcao (t) pra deixar OPC 1 na clicada
//6. Aqui ja deve clicar nas imagens e 1 delas mantem a cor e as outras somem.
//7. Ah, n esquecer de criar a var - opt e t.target.getattribute('opt') pra identificar cada 1 no clique

//segunda etapa
//8. Criamos uma função pro inimigo jogar, essa função vai ser chamada em baixo do player 1 (getAttribute);
//9. Nessa função, criamos uma variavel LET randomica
//10. ela chamada de Math.floor(Math.random()*3) (MATH MAIUSCULO)
//11. depois criamos uma var CONST chamanda todas as imagens do inimigo
//12. dentro dela, criamos um FOR (pra chamar tudo de uma vez), e dentro desse for, criamos um IF
//13. IF (i == random){inimigo[i] fica OPACIDADE 1} (vai jogar um numero aleatorio, e o numero que cair, a opc vai a 1)

//AQUI O INIMIGO JA LIGA AS LUZES

//TERCEIRA ETAPA
//14. para resetar as luzes do inimigo e apaga-las e deixar apenas uma aleatoria ligada devemos:
//15. criar uma funcao resetarInimigo e chamá-la na funcao inimigoJoga em cima do For
//16. Na funcao criada, eu vou criar uma variavel chamando enemy options (as imagens)
//17. loop FOR pra pegar todas, e colocar OPC 0.3

/*
//QUARTA E ULTIMA ETAPA

Antes de iniciar a quarta etapa, crie uma var inimigoOpt =""; e chame um atributo no inimigo joga > enemyOpt = inimigoOpt[i].getAttribute('opt');
18. CRIO UMA FUNCAO PARA VALIDAR A VITORIA E CHAMO ESSA FUNCAO DENTRO DA FUNC INIMIGOJOGA
19. Nessa função voce chamada um div que tens que criar la em cima chamdada Vencedor, sem nada dentro
20. Chama essa div criando uma var doc query selector
21. em baixo dessa variavel, voce coloca um if(playerOpt == "rock"){if(inimigo Opt == "rock") vencedor.innerHTML = "voce venceu"     }

*/

var playerOpt = "";
var inimigoOpt= "";

function validarvitoria(){

    var vitoria = document.querySelector('.vitoria');
    if(playerOpt == "paper"){
        if(inimigoOpt == "paper"){
        vitoria.innerHTML="Voce empatou";
        }
        else if(inimigoOpt == "rock"){
            vitoria.innerHTML="Voce ganhou";
        }
        else if(inimigoOpt == "scisor"){
            vitoria.innerHTML="Voce perdeu";
        }
    }
    if(playerOpt == "rock"){
        if(inimigoOpt == "paper"){
        vitoria.innerHTML="Voce perdeu";
        }
        else if(inimigoOpt == "rock"){
            vitoria.innerHTML="Voce empatou ";
        }
        else if(inimigoOpt == "scisor"){
            vitoria.innerHTML="Voce ganhou";
        }
    }
    if(playerOpt == "scisor"){
        if(inimigoOpt == "paper"){
        vitoria.innerHTML="Voce ganhou";
        }
        else if(inimigoOpt == "rock"){
            vitoria.innerHTML="Voce perdeu";
        }
        else if(inimigoOpt == "scisor"){
            vitoria.innerHTML="Voce empatou";
        }
    }

}


function resetarInimigo (){
    var inimigo = document.querySelectorAll('.enemy-options div > img');
    for(var i = 0; i < inimigo.length; i++){
        inimigo[i].style.opacity= 0.3;
    }
}



function inimigoJoga(){
   
    var inimigo = document.querySelectorAll('.enemy-options div > img');
   
    let random = Math.floor(Math.random()*3);
    resetarInimigo();
    for(var i = 0; i < inimigo.length; i++){
        if(i == random){
            inimigo[i].style.opacity=1;
            inimigoOpt=inimigo[i].getAttribute('opt');
        }
    }
    validarvitoria();
}




function resetarOpacity(){
    for(var i = 0; i < player.length; i++){
    player[i].style.opacity=0.3;
    }}



var player = document.querySelectorAll('.player-options div > img');
for(var i = 0; i < player.length; i++){
player[i].addEventListener('click',function (t){
    resetarOpacity();
    t.target.style.opacity=1;
    playerOpt = t.target.getAttribute('opt')
    inimigoJoga();
})

}



