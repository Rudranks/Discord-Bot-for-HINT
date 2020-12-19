module.exports = {
    name: 'Rules',
    description: 'Prints out an embed to mention discord rules ',
    execute(message, args, Discord) 
    {

        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#f6062b')
	    .setTitle('Discord Rules')
        .setDescription('Please read these rules and follow them!')
        .setThumbnail('https://upload.wikimedia.org/wikipedia/en/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png')
        .addFields(
            { name: 'Rule 1', value: 'Keep discussions in their respective channels.' },
            { name: 'Rule 2', value: '(Try to)Be nice.'},
            { name: 'Rule 3', value:  'NO spamming in the INFORMATION channels.'},
            { name: 'Rule 4', value: 'No swearing is allowed in the INFORMATIONS channel (warna baaki jagah mauj karo :P)'},
            { name: 'Rule 5', value: 'If you have any suggestions put them in #suggestions '},
            { name: 'Rule 6', value: 'Don not mention @everyone unless you have a valid reason to, in order to avoid spamming notifications.'},
            { name: 'Rule 7', value: 'Unleash your Yin in the #dark-wala-channel '},
            { name: 'Rule 8', value: ' Enjoy these 4 years lol'},
            { name: 'Rule 9', value: 'Select your respective section using *rank Section A/B/C/D or if you are a senior use *rank Seniors'},
            { name: '\u200B', value: '\u200B' },

        )
        .setImage('https://it.iiita.ac.in/images/IIIT_logo_transparent.gif')
        .setTimestamp()
        .setFooter('', 'https://upload.wikimedia.org/wikipedia/en/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png');

    message.channel.send(exampleEmbed);
    
    }
}
