const players = [`Messi`, `Ronaldo`, `Neymar`, `Haland`];
console.log(players)
for( let i =0; i<=2; i++){
    players.shift();
}
console.log(players);