//require('dotenv').config(); 
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
    bot.user.setStatus('available')
    bot.user.setActivity('Truth or Dare', {
        type: 'PLAYING'
    });
});

var dares = [
'Send a screenshot of your home screen',
'Tell an embarrasing story',
'Wear an outfit chosen be other players and send a picture',
'Wear your clothes backwards',
'Tell a dirty joke',
'Eat something without using your hands',
'Tell a funny joke',
'Drink salt water',
'Sent a screenshot of your browser history',
'Wear your clothes inside out and send a picture',
'Say something nice about the epic creator of this bot, <@303097521314725890> !',
'Do twenty pushups',
'Eat a slice of lemon',
'Let a player pick a website for you to visit',
'Draw a face on your stomach',
'Give a tree a hug',
'Tell everyone your strangest dream',
'Video yourself recalling the alphabet backwards',
'Send a selfie to the group',
'Sing some Micheal Jackson',
'Nominate someone else to do a dare',
'What is the wierdest thing you have done with the opposite sex',
'Message us a funny or spooky story... Your choice!!',
'LEAVE THIS SPARE',
]

var daresDone = [];

var currentDare;

var needDareReset = false;
var needTruthReset = false;

var chosen;

function chooseDare(){
    var conflict = 1;
    while(conflict > 0){
	    chosen = Math.floor(Math.random() * dares.length - 1);
        console.log(chosen);
        var conflict = 0;
        if(daresDone.length == dares.length - 1){
            needDareReset = true;
            break;
        }
        else {
	        daresDone.forEach(function (i, index){
                console.log("position: " + i);
		        if(i == chosen){
                    console.log("position: " + i);
			        conflict += 1;
		        }
	        });
        }
    }
}   

bot.on('message', msg => {
	if(msg.content === '-truth' && msg.channel.id === '737296527973810206'){
	msg.channel.send('thinking of truth...');
	}
else if(msg.content === '-truth'){
msg.channel.send("You can only use me in the truth or dare channel!"); }

	if(msg.content === '-dare'  && msg.channel.id === '737296527973810206'){
	if(needDareReset){
		msg.channel.send("You have gone through them all! Please use the `-resetDare` command to start over, or just do some truths!");
	}
	else{
		if(daresDone.length == dares.length){
		msg.channel.send("You have gone through them all! Please use the `-resetDare` command to start over, or just do some truths!");
		needDareReset = true;
		}
		else{
		msg.channel.send('thinking of dare...');
			chooseDare();
			msg.reply('I dare you to... ' + dares[chosen]);
			daresDone.push(chosen);
		console.log(daresDone);
		}
	}
	}
else if(msg.content === '-dare'){
msg.channel.send("You can only use me in the truth or dare channel!"); }

	if(msg.content === '-resetDare'  && msg.channel.id === '737296527973810206'){
	msg.channel.send('Reset Dares!');
		daresDone = [];
	needDareReset = false;
	}
else if(msg.content === '-resetDare'){
msg.channel.send("You can only use me in the truth or dare channel!"); }
	if(msg.content === 'hey bot!'){
	msg.reply('Hi!');
	}
	if(msg.content === 'shutdown'){
	bot.destroy();
	}
	if(msg.content === '-help'){
	msg.channel.send("Hey! I'm the truth or dare bot here on Nerve! With me, you don't need to worry about thinking of truths or dares! Just use `-truth` and `-dare` when it is your turn and the bot will think of one for you! Of course, my creator is only human so please feel free to DM <@303097521314725890> with more truth or dares!");
	}

var index = 0;
setInterval(function(){
    if(index === 0){
    bot.setActivity("my development", {type: "WATCHING"});
    index = 1;
}
else{
    index = 0;
     bot.setActivity("Truth or Dare", {type: "PLAYING"});
}, 2000);

changeStat();

});
