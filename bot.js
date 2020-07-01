const Discord = require('discord.js');

const bot = new Discord.Client();

bot.on('ready', function (evt) {
    console.info('Logged in as ' + bot.user.tag);
});


bot.on('messageReactionAdd', async (reaction, user) => {
		// When we receive a reaction we check if the reaction is partial or not
	if (reaction.partial) {
		// If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
		try {
			await reaction.fetch();
		} catch (error) {
			console.log('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
	}
	// Now the message has been cached and is fully available
	//console.log(reaction.message.author + 's message ' + reaction.message.content + ' gained a reaction!');
	if(reaction.message.channel.id == 653696571610890292 && reaction.emoji.name == '📌'
		&& reaction.message.member.roles.has('493325071377629194')) {
		console.log(reaction.message.member.roles.has('493325071377629194'));
		reaction.message.pin();
	}
	
	if(reaction.message.channel.id == 723962040036753448 && reaction.emoji.name == '📌'
		&& reaction.message.member.roles.has('724650792660893826') && (reaction.count >= 3)) {
		reaction.message.pin();
	}
	
	// The reaction is now also fully available and the properties will be reflected accurately:
	//console.log(reaction.emoji.name + ' with reaction');
});

bot.login(process.env.BOT_TOKEN);