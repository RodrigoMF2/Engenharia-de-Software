const VALOR_ATACK = 10;
let clickcount = 0;
let maxVida = 100;
let valoractualVidaM = maxVida;
let valoractualVidaJ = maxVida;

adjustHealthBars(maxVida);


function atack(){
    const perda = dealMonsterDamage(VALOR_ATACK);
    valoractualVidaM = valoractualVidaM - perda;
    clickcount++;
    if(clickcount === 3){
        const perdaP = dealPlayerDamage(VALOR_ATACK);
        valoractualVidaJ = valoractualVidaJ - perdaP;
        clickcount=0;
    }
}
function strongatack(){
    const perda = dealMonsterDamage(VALOR_ATACK * 8) ;
    valoractualVidaM = valoractualVidaM - perda;
    
}
function heal(){
    const winlife = 20;
    increasePlayerHealth(winlife);
    clickcount++;
    if(clickcount === 2){
        increaseMosnterHealth(winlife * 2);
        clickcount=0;
    }

}

attackBtn.addEventListener('click',atack);
strongAttackBtn.addEventListener('click',strongatack)
healBtn.addEventListener('click', heal);