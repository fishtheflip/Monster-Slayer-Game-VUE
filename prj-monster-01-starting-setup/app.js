// const app = new Vue({
//     el: '#app',
//     data() {
//         return{
//         playerHealth: 100,
//         monsterHealth: 100           
//         }
//     },
//     methods:{
//         attackMonster(){
//             alert('GOT')
//             const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
//             this.monsterHealth -=  attackValue; 
//             this.attackPlayer()
//         },
//         attackPlayer(){
//             const attackValue = Math.floor(Math.random() * (15 - 8)) + 8;
//             this.playerHealth -=  attackValue; 
//         },
//     }
//   })


const app = Vue.createApp({
    data(){
        return{
        playerHealth: 100,
        monsterHealth: 100           
        }
    },
    methods:{
        attackMonster(){
        alert('GOT')
        const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
        this.monsterHealth -=  attackValue; 
        this.attackPlayer()
        },
        attackPlayer(){
            const attackValue = Math.floor(Math.random() * (15 - 8)) + 8;
            this.playerHealth -=  attackValue; 
        },
    }
})