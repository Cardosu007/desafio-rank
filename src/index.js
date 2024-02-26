let win = 40;
let lose = 25;
let result = rank(win, lose);

function rank(win, lose){
    let balance = win - lose;
    let level;

    if (win < 10) {
        level = "Ferro";
    } else if (win >= 11 && win <= 20){
        level = "Bronze";
    } else if (win >= 21 && win <= 50){
        level = "Prata";
    
    } else if (win >= 51 && win <= 80){
        level = "Ouro";
    
    } else if (win >= 81 && win <= 90){
        level = "Diamante";
    
    } else if (win >= 91 && win <= 100){
        level = "Lendário";
    
    } else {
        level = "Imortal";
}

    return {balance, level};
}

console.log(`O Herói tem de saldo de ${result.balance} pontos e está no rank de ${result.level}`);