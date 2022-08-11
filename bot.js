 require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');
const bot = new Telegraf(process.env.BOT_TOKEN||8080)
bot.start((ctx) => {ctx.reply(`Привет ${ctx.message.from.first_name}`)
console.log(ctx.message)})
bot.help((ctx) => ctx.reply('Напиши /bot'))
bot.hears('/bot', async (ctx) => {
    async function request2(){
     try{
      const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
      const data = await response.json()
 
      for (let i = 0; i < 5; i++) {
        score_dealer = data.items.results[i].results.score_dealer
      score_player = data.items.results[i].results.score_player
      // console.log(score_dealer);
    }
            if(data.items.results[0].results.card_dealer.suit=='spades' && data.items.results[1].results.card_dealer.suit=='hearts'
           && data.items.results[2].results.card_dealer.suit=='diamonds'&& data.items.results[3].results.card_dealer.suit=='clubs'){
          ctx.reply("Пика чирва буби крести У Дилера");

        }
        if(data.items.results[0].results.card_dealer.suit=='spades' && data.items.results[2].results.card_dealer.suit=='hearts'
           && data.items.results[1].results.card_dealer.suit=='diamonds'&& data.items.results[3].results.card_dealer.suit=='clubs'){
          ctx.reply("Пика буби чирва крести У Дилера");

        }
     if(data.items.results[0].results.card_dealer.suit=='spades' && data.items.results[2].results.card_dealer.suit=='hearts'
           && data.items.results[3].results.card_dealer.suit=='diamonds'&& data.items.results[1].results.card_dealer.suit=='clubs'){
          ctx.reply("Пика буби крести чирва У Дилера");

        }
      if(data.items.results[0].results.card_dealer.suit=='spades' && data.items.results[3].results.card_dealer.suit=='hearts'
           && data.items.results[2].results.card_dealer.suit=='diamonds'&& data.items.results[1].results.card_dealer.suit=='clubs'){
          ctx.reply("Пика крести буби чирва У Дилера");

        }
     if(data.items.results[0].results.card_dealer.suit=='spades' && data.items.results[3].results.card_dealer.suit=='hearts'
           && data.items.results[1].results.card_dealer.suit=='diamonds'&& data.items.results[2].results.card_dealer.suit=='clubs'){
          ctx.reply("Пика крести чирва буби У Дилера");
    console.log("Проверь");
        }
      if(data.items.results[0].results.card_dealer.suit=='spades' && data.items.results[1].results.card_dealer.suit=='hearts'
           && data.items.results[3].results.card_dealer.suit=='diamonds'&& data.items.results[2].results.card_dealer.suit=='clubs'){
          ctx.reply("Пика чирва крести буби У Дилера");

        }
     //3 1
      if(data.items.results[2].results.card_dealer.suit=='spades' && data.items.results[1].results.card_dealer.suit=='hearts'
           && data.items.results[3].results.card_dealer.suit=='diamonds'&& data.items.results[0].results.card_dealer.suit=='clubs'){
          ctx.reply("крести чирва Пика буби У Дилера");

        }
       if(data.items.results[3].results.card_dealer.suit=='spades' && data.items.results[1].results.card_dealer.suit=='hearts'
           && data.items.results[2].results.card_dealer.suit=='diamonds'&& data.items.results[0].results.card_dealer.suit=='clubs'){
          ctx.reply("крести чирва буби Пика У Дилера");

        }
     //3 2
       if(data.items.results[3].results.card_dealer.suit=='spades' && data.items.results[2].results.card_dealer.suit=='hearts'
           && data.items.results[1].results.card_dealer.suit=='diamonds'&& data.items.results[0].results.card_dealer.suit=='clubs'){
          ctx.reply("крести буби чирва Пика У Дилера");

        }
      if(data.items.results[2].results.card_dealer.suit=='spades' && data.items.results[3].results.card_dealer.suit=='hearts'
           && data.items.results[1].results.card_dealer.suit=='diamonds'&& data.items.results[0].results.card_dealer.suit=='clubs'){
          ctx.reply("крести буби Пика чирва У Дилера");
        }
     // 3 0
       if(data.items.results[1].results.card_dealer.suit=='spades' && data.items.results[3].results.card_dealer.suit=='hearts'
           && data.items.results[2].results.card_dealer.suit=='diamonds'&& data.items.results[0].results.card_dealer.suit=='clubs'){
          ctx.reply("крести Пика буби чирва У Дилера");
        }
      if(data.items.results[1].results.card_dealer.suit=='spades' && data.items.results[2].results.card_dealer.suit=='hearts'
           && data.items.results[3].results.card_dealer.suit=='diamonds'&& data.items.results[0].results.card_dealer.suit=='clubs'){
          ctx.reply("крести Пика чирва буби У Дилера");
        }
     // 1 3 
        if(data.items.results[2].results.card_dealer.suit=='spades' && data.items.results[0].results.card_dealer.suit=='hearts'
           && data.items.results[3].results.card_dealer.suit=='diamonds'&& data.items.results[1].results.card_dealer.suit=='clubs'){
          ctx.reply("чирва крести Пика буби У Дилера");
        }
       if(data.items.results[3].results.card_dealer.suit=='spades' && data.items.results[0].results.card_dealer.suit=='hearts'
           && data.items.results[2].results.card_dealer.suit=='diamonds'&& data.items.results[1].results.card_dealer.suit=='clubs'){
          ctx.reply("чирва крести буби Пика У Дилера");
        }
     //1 2
       if(data.items.results[3].results.card_dealer.suit=='spades' && data.items.results[0].results.card_dealer.suit=='hearts'
           && data.items.results[2].results.card_dealer.suit=='diamonds'&& data.items.results[1].results.card_dealer.suit=='clubs'){
          ctx.reply("чирва буби крести Пика У Дилера");

        }
       if(data.items.results[2].results.card_dealer.suit=='spades' && data.items.results[0].results.card_dealer.suit=='hearts'
           && data.items.results[1].results.card_dealer.suit=='diamonds'&& data.items.results[3].results.card_dealer.suit=='clubs'){
          ctx.reply("чирва буби Пика крести У Дилера");
        }
     //1 0
       if(data.items.results[1].results.card_dealer.suit=='spades' && data.items.results[0].results.card_dealer.suit=='hearts'
           && data.items.results[2].results.card_dealer.suit=='diamonds'&& data.items.results[3].results.card_dealer.suit=='clubs'){
          ctx.reply("чирва Пика буби крести У Дилера");
        }
        if(data.items.results[1].results.card_dealer.suit=='spades' && data.items.results[0].results.card_dealer.suit=='hearts'
           && data.items.results[3].results.card_dealer.suit=='diamonds'&& data.items.results[2].results.card_dealer.suit=='clubs'){
          ctx.reply("чирва Пика крести буби У Дилера");
        }
     // 2 0
      if(data.items.results[1].results.card_dealer.suit=='spades' && data.items.results[3].results.card_dealer.suit=='hearts'
           && data.items.results[0].results.card_dealer.suit=='diamonds'&& data.items.results[2].results.card_dealer.suit=='clubs'){
          ctx.reply("буби Пика крести чирва У Дилера");

      }
        if(data.items.results[1].results.card_dealer.suit=='spades' && data.items.results[2].results.card_dealer.suit=='hearts'
           && data.items.results[0].results.card_dealer.suit=='diamonds'&& data.items.results[3].results.card_dealer.suit=='clubs'){
          ctx.reply("буби Пика чирва крести У Дилера");
 
        }
     // 2 1
          if(data.items.results[2].results.card_dealer.suit=='spades' && data.items.results[1].results.card_dealer.suit=='hearts'
           && data.items.results[0].results.card_dealer.suit=='diamonds'&& data.items.results[3].results.card_dealer.suit=='clubs'){
          ctx.reply("буби чирва Пика крести У Дилера");

        }
     if(data.items.results[3].results.card_dealer.suit=='spades' && data.items.results[1].results.card_dealer.suit=='hearts'
           && data.items.results[0].results.card_dealer.suit=='diamonds'&& data.items.results[2].results.card_dealer.suit=='clubs'){
          ctx.reply("буби чирва крести Пика У Дилера");

        }
     //2 3
     if(data.items.results[3].results.card_dealer.suit=='spades' && data.items.results[2].results.card_dealer.suit=='hearts'
           && data.items.results[0].results.card_dealer.suit=='diamonds'&& data.items.results[1].results.card_dealer.suit=='clubs'){
          ctx.reply("буби крести чирва Пика У Дилера");

        }
       if(data.items.results[2].results.card_dealer.suit=='spades' && data.items.results[3].results.card_dealer.suit=='hearts'
           && data.items.results[0].results.card_dealer.suit=='diamonds'&& data.items.results[1].results.card_dealer.suit=='clubs'){
          ctx.reply("буби крести Пика чирва У Дилера");
        }
    
     
     //игрок player
        if(data.items.results[0].results.card_player.suit=='spades' && data.items.results[1].results.card_player.suit=='hearts'
           && data.items.results[2].results.card_player.suit=='diamonds'&& data.items.results[3].results.card_player.suit=='clubs'){
          ctx.reply("Пика чирва буби крести У Игрока");

        }
        if(data.items.results[0].results.card_player.suit=='spades' && data.items.results[2].results.card_player.suit=='hearts'
           && data.items.results[1].results.card_player.suit=='diamonds'&& data.items.results[3].results.card_player.suit=='clubs'){
          ctx.reply("Пика буби чирва крести У Игрока");

        }
     if(data.items.results[0].results.card_player.suit=='spades' && data.items.results[3].results.card_player.suit=='hearts'
           && data.items.results[1].results.card_player.suit=='diamonds'&& data.items.results[2].results.card_player.suit=='clubs'){
          ctx.reply("Пика буби крести чирва У Игрока");

        }
      if(data.items.results[0].results.card_player.suit=='spades' && data.items.results[3].results.card_player.suit=='hearts'
           && data.items.results[2].results.card_player.suit=='diamonds'&& data.items.results[1].results.card_player.suit=='clubs'){
          ctx.reply("Пика крести буби чирва У Игрока");

        }
     if(data.items.results[0].results.card_player.suit=='spades' && data.items.results[2].results.card_player.suit=='hearts'
           && data.items.results[3].results.card_player.suit=='diamonds'&& data.items.results[1].results.card_player.suit=='clubs'){
          ctx.reply("Пика крести чирва буби У Игрока");

        }
      if(data.items.results[0].results.card_player.suit=='spades' && data.items.results[1].results.card_player.suit=='hearts'
           && data.items.results[3].results.card_player.suit=='diamonds'&& data.items.results[2].results.card_player.suit=='clubs'){
          ctx.reply("Пика чирва крести буби У Игрока");

        }
     //3 1
      if(data.items.results[2].results.card_player.suit=='spades' && data.items.results[1].results.card_player.suit=='hearts'
           && data.items.results[3].results.card_player.suit=='diamonds'&& data.items.results[0].results.card_player.suit=='clubs'){
          ctx.reply("крести чирва Пика буби У Игрока");

        }
       if(data.items.results[3].results.card_player.suit=='spades' && data.items.results[1].results.card_player.suit=='hearts'
           && data.items.results[2].results.card_player.suit=='diamonds'&& data.items.results[0].results.card_player.suit=='clubs'){
          ctx.reply("крести чирва буби Пика У Игрока");

        }
     //3 2
       if(data.items.results[3].results.card_player.suit=='spades' && data.items.results[2].results.card_player.suit=='hearts'
           && data.items.results[1].results.card_player.suit=='diamonds'&& data.items.results[0].results.card_player.suit=='clubs'){
          ctx.reply("крести буби чирва Пика У Игрока");

        }
      if(data.items.results[2].results.card_player.suit=='spades' && data.items.results[3].results.card_player.suit=='hearts'
           && data.items.results[1].results.card_player.suit=='diamonds'&& data.items.results[0].results.card_player.suit=='clubs'){
          ctx.reply("крести буби Пика чирва У Игрока");

        }
     // 3 0
       if(data.items.results[1].results.card_player.suit=='spades' && data.items.results[3].results.card_player.suit=='hearts'
           && data.items.results[2].results.card_player.suit=='diamonds'&& data.items.results[0].results.card_player.suit=='clubs'){
          ctx.reply("крести Пика буби чирва У Игрока");

        }
      if(data.items.results[1].results.card_player.suit=='spades' && data.items.results[2].results.card_player.suit=='hearts'
           && data.items.results[3].results.card_player.suit=='diamonds'&& data.items.results[0].results.card_player.suit=='clubs'){
          ctx.reply("крести Пика чирва буби У Игрока");

        }
     // 1 3 
        if(data.items.results[2].results.card_player.suit=='spades' && data.items.results[0].results.card_player.suit=='hearts'
           && data.items.results[3].results.card_player.suit=='diamonds'&& data.items.results[1].results.card_player.suit=='clubs'){
          ctx.reply("чирва крести Пика буби У Игрока");

        }
       if(data.items.results[3].results.card_player.suit=='spades' && data.items.results[0].results.card_player.suit=='hearts'
           && data.items.results[2].results.card_player.suit=='diamonds'&& data.items.results[1].results.card_player.suit=='clubs'){
          ctx.reply("чирва крести буби Пика У Игрока");

        }
     //1 2
       if(data.items.results[3].results.card_player.suit=='spades' && data.items.results[0].results.card_player.suit=='hearts'
           && data.items.results[1].results.card_player.suit=='diamonds'&& data.items.results[2].results.card_player.suit=='clubs'){
          ctx.reply("чирва буби крести Пика У Игрока");

        }
       if(data.items.results[2].results.card_player.suit=='spades' && data.items.results[0].results.card_player.suit=='hearts'
           && data.items.results[1].results.card_player.suit=='diamonds'&& data.items.results[3].results.card_player.suit=='clubs'){
          ctx.reply("чирва буби Пика крести У Игрока");

        }
     //1 0
       if(data.items.results[1].results.card_player.suit=='spades' && data.items.results[0].results.card_player.suit=='hearts'
           && data.items.results[2].results.card_player.suit=='diamonds'&& data.items.results[3].results.card_player.suit=='clubs'){
          ctx.reply("чирва Пика буби крести У Игрока");

        }
        if(data.items.results[1].results.card_player.suit=='spades' && data.items.results[0].results.card_player.suit=='hearts'
           && data.items.results[3].results.card_player.suit=='diamonds'&& data.items.results[2].results.card_player.suit=='clubs'){
          ctx.reply("чирва Пика крести буби У Игрока");

        }
     // 2 0
      if(data.items.results[1].results.card_player.suit=='spades' && data.items.results[3].results.card_player.suit=='hearts'
           && data.items.results[0].results.card_player.suit=='diamonds'&& data.items.results[2].results.card_player.suit=='clubs'){
          ctx.reply("буби Пика крести чирва У Игрока");

      }
        if(data.items.results[2].results.card_player.suit=='spades' && data.items.results[0].results.card_player.suit=='hearts'
           && data.items.results[0].results.card_player.suit=='diamonds'&& data.items.results[3].results.card_player.suit=='clubs'){
          ctx.reply("буби Пика чирва крести У Игрока");
        }
     // 2 1
          if(data.items.results[2].results.card_player.suit=='spades' && data.items.results[1].results.card_player.suit=='hearts'
           && data.items.results[0].results.card_player.suit=='diamonds'&& data.items.results[3].results.card_player.suit=='clubs'){
          ctx.reply("буби чирва Пика крести У Игрока");
        }
     if(data.items.results[3].results.card_player.suit=='spades' && data.items.results[1].results.card_player.suit=='hearts'
           && data.items.results[0].results.card_player.suit=='diamonds'&& data.items.results[2].results.card_player.suit=='clubs'){
          ctx.reply("буби чирва крести Пика У Игрока");

        }
     //2 3
     if(data.items.results[3].results.card_player.suit=='spades' && data.items.results[2].results.card_player.suit=='hearts'
           && data.items.results[0].results.card_player.suit=='diamonds'&& data.items.results[1].results.card_player.suit=='clubs'){
          ctx.reply("буби крести чирва Пика У Игрока");

        }
       if(data.items.results[2].results.card_player.suit=='spades' && data.items.results[3].results.card_player.suit=='hearts'
           && data.items.results[0].results.card_player.suit=='diamonds'&& data.items.results[1].results.card_player.suit=='clubs'){
          ctx.reply("буби крести Пика чирва У Игрока");
        }   
     
     
    if ((data.items.results[0].results.score_dealer == 10 && data.items.results[1].results.score_dealer == 6 && 
      data.items.results[2].results.score_dealer == 4) ) {
    ctx.reply("10 6 4 У Дилера");

    }
    if ((data.items.results[0].results.score_dealer == 6 && data.items.results[1].results.score_dealer == 10 && 
      data.items.results[2].results.score_dealer == 4) ) {
    ctx.reply(" 6 10 4 У Дилера");

    }
    if ((data.items.results[0].results.score_dealer == 4 && data.items.results[1].results.score_dealer == 10 && 
      data.items.results[2].results.score_dealer == 6) ) {
    ctx.reply("4 10 6 У Дилера");

    }
    if ((data.items.results[0].results.score_dealer == 4 && data.items.results[1].results.score_dealer ==6 && 
      data.items.results[2].results.score_dealer == 10) ) {
    ctx.reply("4 6 10 У Дилера");

    }
    if ((data.items.results[0].results.score_dealer == 10 && data.items.results[1].results.score_dealer == 4 && 
      data.items.results[2].results.score_dealer == 6) ) {
    ctx.reply("10 4 6 У Дилера");

    }
    if ((data.items.results[0].results.score_dealer == 6 && data.items.results[1].results.score_dealer == 4 && 
      data.items.results[2].results.score_dealer == 10) ) {
    ctx.reply("6 4 10 У Дилера");

    }



    if ((data.items.results[0].results.score_player == 10 && data.items.results[1].results.score_player == 6 && 
      data.items.results[2].results.score_player == 4) ) {
    ctx.reply("10 6 4 У Игрока");
    }
    if ((data.items.results[0].results.score_player == 6 && data.items.results[1].results.score_player == 10 && 
      data.items.results[2].results.score_player == 4) ) {
    ctx.reply(" 6 10 4 У Игрока");
    }
    if ((data.items.results[0].results.score_player == 4 && data.items.results[1].results.score_player == 10 && 
      data.items.results[2].results.score_player == 6) ) {
    ctx.reply("4 10 6 У Игрока");
    }
    if ((data.items.results[0].results.score_player == 4 && data.items.results[1].results.score_player ==6 && 
      data.items.results[2].results.score_player == 10) ) {
    ctx.reply("4 6 10 У Игрока");
    }
    if ((data.items.results[0].results.score_player == 10 && data.items.results[1].results.score_player == 4 && 
      data.items.results[2].results.score_player == 6) ) {
    ctx.reply("10 4 6 У Игрока");
    }
    if ((data.items.results[0].results.score_player == 6 && data.items.results[1].results.score_player == 4 && 
      data.items.results[2].results.score_player == 10) ) {
    ctx.reply("6 4 10 У Игрока");
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

    let player0=parseInt(data.items.results[0].results.score_player,10)
    let player1=parseInt(data.items.results[1].results.score_player,10)
    let dealer0=parseInt(data.items.results[0].results.score_dealer,10)
    let dealer1=parseInt(data.items.results[1].results.score_dealer,10)
    console.log( typeof player0)
    console.log(dealer1 - 1)
    console.log(player1 + ' ' + dealer1)
    if ((player0 === player1) && ((dealer0 === (dealer1 + 1) || (dealer0 === (dealer1 - 1)))) ||
        (player0 === dealer1) && ((dealer0 === (player1 + 1) || (dealer0 === (player1 - 1))))||
        (dealer0 === player1) && ((player0 === (dealer1 + 1) || (player0 === (dealer1 - 1))))||
        (dealer0 === dealer1) && ((player0 === (player1 + 1) || (player0 === (player1 - 1)))))
    {
         ctx.reply("была ничья и вторая пара +1 или -1");
    }
      }
    catch (err) {
       console.log(err)
    }
    }
    function good(){
      ctx.reply( "Вы запустили Бота ");
      ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
       global.time= setInterval(request2,30000) 
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

 //diamonds- буби
 //clubs - крести
 //spades - пики
 //hearts - чирва
 //

