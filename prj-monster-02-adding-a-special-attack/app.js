const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}


const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      gameOver: false
    };
  },
  watch:{
    playerHealth(value){
      if(value <= 0 && this.monsterHealth <= 0){
        this.winner = 'draw'
        this.gameOver = true;
      } else if(value <= 0){
        this.winner = 'monster'
        this.gameOver = true;
      }

    },
    monsterHealth(value){
       if( value <= 0 && this.playerHealth <= 0){
        this.winner = 'draw'
        this.gameOver = true;
       }else if (value <= 0){
        this.winner = 'player'
        this.gameOver = true;
       }
    }
  },

  computed: {
    monsterBarStyles() {
      if(this.monsterHealth <= 0){
        return {width: '0%'}
      }
      return { width: this.monsterHealth + '%' };
    },
    playerBarStyles() {
      if(this.playerHealth <= 0){
        return {width: '0%'}
      }
      return { width: this.playerHealth + '%' };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    }
  }, 
  methods: {
    startNewGame(){
      this.winner = null;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameOver = false;
      this.currentRound = 0;
    },
    surrender(){
      this.winner = 'monster';
      this.gameOver = true;
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer(){
      const healValue = getRandomValue(8, 20);
      if(this.playerHealth + healValue >= 100){
         this.playerHealth = 100;
      } else {
        this.playerHealth +=healValue;
      }
    this.attackPlayer();
    },
  },
});

app.mount('#game');
