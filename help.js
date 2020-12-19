module.exports = {
    name: 'Help',
    description: 'Prints out an embed to mention bot commands ',
    execute(message, args, Discord) 
    {

        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#f6062b')
	    .setTitle('bot commands')
        .setDescription('Following are all teh commands you can use')
        .setThumbnail('https://i.imgur.com/OxFDGbm.png')
        .addFields(
            { name: 'Cyberpunk', value: 'Torrent link for Cyberpunk 2077' },
            { name: 'games', value: 'Torrent link for many famous games'},
            { name: 'Invite', value:  'Send an Invite for IIITA 2024 server'},
            { name: 'Ping', value: 'Just a confirmation to check is the bot is online '},
            { name: 'Prefix', value: 'Print sout the Current prefix'},
            { name: 'YT', value: 'Try it'},
            { name: 'Clear', value: 'deletes number of messages entered after %clear, max number of msgs that can be deleted is 100'},
            { name: 'Help', value: 'Lists all commads'},
            { name: '\u200B', value: '\u200B' },

        )
        .setImage('https://i.imgur.com/OxFDGbm.png')
        .setTimestamp()
        .setFooter('', 'https://i.imgur.com/OxFDGbm.png');

    message.channel.send(exampleEmbed);
    
    }
}
