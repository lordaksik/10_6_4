 require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');
const bot = new Telegraf(process.env.BOT_TOKEN||8080)
bot.start((ctx) => {ctx.reply(`Привет ${ctx.message.from.first_name}`)
console.log(ctx.message)})
bot.help((ctx) => ctx.reply('Напиши /bot'))
bot.hears('/bot', async (ctx) => {
    async function request2(){
      const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
      const data = await response.json()
  
      for (let i = 0; i < 5; i++) {
        score_dealer = data.items.results[i].results.score_dealer
      score_player = data.items.results[i].results.score_player
      // console.log(score_dealer);
    }
            if(data.items.results[0].results.card_dealer.suit='spades' && data.items.results[1].results.card_dealer.suit='hearts'
           && data.items.results[2].results.card_dealer.suit='diamonds'&& data.items.results[3].results.card_dealer.suit='clubs'){
          ctx.reply("Пика чирва буби крести У Дилера");
    console.log("Проверь");
        }
           if(data.items.results[0].results.card_player.suit='spades' && data.items.results[1].results.card_player.suit='hearts'
           && data.items.results[2].results.card_player.suit='diamonds'&& data.items.results[3].results.card_player.suit='clubs'){
          ctx.reply("Пика чирва буби крести У игрока");
    console.log("Проверь");
        }
    if ((data.items.results[0].results.score_dealer == 10 && data.items.results[1].results.score_dealer == 6 && 
      data.items.results[2].results.score_dealer == 4) ) {
    ctx.reply("10 6 4 У Дилера");
    console.log("Проверь");
    }
    if ((data.items.results[0].results.score_dealer == 6 && data.items.results[1].results.score_dealer == 10 && 
      data.items.results[2].results.score_dealer == 4) ) {
    ctx.reply(" 6 10 4 У Дилера");
    console.log("Проверь");
    }
    if ((data.items.results[0].results.score_dealer == 4 && data.items.results[1].results.score_dealer == 10 && 
      data.items.results[2].results.score_dealer == 6) ) {
    ctx.reply("4 10 6 У Дилера");
    console.log("Проверь");
    }
    if ((data.items.results[0].results.score_dealer == 4 && data.items.results[1].results.score_dealer ==6 && 
      data.items.results[2].results.score_dealer == 10) ) {
    ctx.reply("4 6 10 У Дилера");
    console.log("Проверь");
    }
    if ((data.items.results[0].results.score_dealer == 10 && data.items.results[1].results.score_dealer == 4 && 
      data.items.results[2].results.score_dealer == 6) ) {
    ctx.reply("10 4 6 У Дилера");
    console.log("Проверь");
    }
    if ((data.items.results[0].results.score_dealer == 6 && data.items.results[1].results.score_dealer == 4 && 
      data.items.results[2].results.score_dealer == 10) ) {
    ctx.reply("6 4 10 У Дилера");
    console.log("Проверь");
    }



    if ((data.items.results[0].results.score_player == 10 && data.items.results[1].results.score_player == 6 && 
      data.items.results[2].results.score_player == 4) ) {
    ctx.reply("10 6 4 У Игрока");
    console.log("Проверь");
    }
    if ((data.items.results[0].results.score_player == 6 && data.items.results[1].results.score_player == 10 && 
      data.items.results[2].results.score_player == 4) ) {
    ctx.reply(" 6 10 4 У Игрока");
    console.log("Проверь");
    }
    if ((data.items.results[0].results.score_player == 4 && data.items.results[1].results.score_player == 10 && 
      data.items.results[2].results.score_player == 6) ) {
    ctx.reply("4 10 6 У Игрока");
    console.log("Проверь");
    }
    if ((data.items.results[0].results.score_player == 4 && data.items.results[1].results.score_player ==6 && 
      data.items.results[2].results.score_player == 10) ) {
    ctx.reply("4 6 10 У Игрока");
    console.log("Проверь");
    }
    if ((data.items.results[0].results.score_player == 10 && data.items.results[1].results.score_player == 4 && 
      data.items.results[2].results.score_player == 6) ) {
    ctx.reply("10 4 6 У Игрока");
    console.log("Проверь");
    }
    if ((data.items.results[0].results.score_player == 6 && data.items.results[1].results.score_player == 4 && 
      data.items.results[2].results.score_player == 10) ) {
    ctx.reply("6 4 10 У Игрока");
    console.log("Проверь");
    }
      if ((data.items.results[0].results.score_player == 10 && data.items.results[1].results.score_player == 5)) {
      ctx.reply(" 10 5 У Игрока"); // console.log("Проверь");
    }
    if ((data.items.results[0].results.score_player == 5 && data.items.results[1].results.score_player == 10)) {
      ctx.reply(" 5 10 У Игрока"); // console.log("Проверь");
    }
    if ((data.items.results[0].results.score_dealer == 10 && data.items.results[1].results.score_dealer == 5)) {
      ctx.reply(" 10 5 У Дилера");
    }
    if ((data.items.results[0].results.score_dealer == 5 && data.items.results[1].results.score_dealer == 10)) {
      ctx.reply(" 5 10 У Дилера");
    }
      if ((data.items.results[0].results.score_player == 5 && data.items.results[0].results.score_dealer == 10)) {
      ctx.reply("Выпало 5 10 Горизонтально");
    }
        if ((data.items.results[0].results.score_player == 10 && data.items.results[0].results.score_dealer == 5)) {
      ctx.reply("Выпало 10 5 Горизонтально");
    }
    }
    function good(){
      ctx.reply( "Вы запустили Бота ");
      ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
       global.time= setInterval(request2,20000) 
       }



       
  try {
  good()
} catch (err) {
  ctx.reply("Если вы видите это сообщение, сообщите администратору и скиньте скриншот сообщения");
  clearInterval(global.time);
  good()
}

}
)
bot.hears('/end', async (ctx) => {
   try {
      clearInterval(global.time);
  
      ctx.reply("Пока");  
    } catch(err) {
      ctx.reply("Этот бот и так выключен");    
    } 
})
bot.launch()

async function request24(){
   const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
   const data = await response.json()
   mast1=0;
   mast2=0;
   mast3=0;
   mast4=0;
   one_mast1=0;
   one_mast2=0;
   one_mast3=0;
   one_mast4=0;
   mastvertPl1=0;
   mastvertPl2=0;
   mastvertPl3=0;
   mastvertPl4=0;
   mastvertDil1=0;
   mastvertDil2=0;
   mastvertDil3=0;
   mastvertDil4=0;
   for (let i = 0; i < 3; i++) {
     score_dealer = data.items.results[i].results.card_dealer.suit
     score_player = data.items.results[i].results.card_player.suit
     
     if(score_dealer!='diamonds' && score_player!='diamonds')
     mast1=mast1+1;

 }
}

 //diamonds- буби
 //clubs - крести
 //spades - пики
 //hearts - чирва
 //

