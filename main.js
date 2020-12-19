const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '%';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) 
{
    const command = require(`./Commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => { //terminal command to make sure that bot is online
    console.log('Reso9ce is up and running.');
});

client.on('guildMemberAdd', guildMember => { //adds a role upon joining server
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'IIITians');
    guildMember.roles.add(welcomeRole);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'ping') 
    {
        client.commands.get('ping').execute(message, args);
    }
    else if(command == 'games' || command == 'game') 
    {
        client.commands.get('games').execute(message, args);
    }
    else if(command == 'invite') 
    {
        client.commands.get('Invite').execute(message, args, Discord);
    }    
    else if(command == 'help') 
    {
        client.commands.get('Help').execute(message, args, Discord);
    }    
    else if(command == 'rules') 
    {
        client.commands.get('Rules').execute(message, args, Discord);
    }
    else if(command == 'clear') 
    {
        client.commands.get('Clear').execute(message, args, Discord);
    }
    else if (command == 'reactionrole') 
    {
        client.commands.get('Reactionrole').execute(message, args, Discord, client);
    }
    else if(command == 'cyberpunk') 
    {
        client.commands.get('cyberpunk').execute(message, args);
    }   
     else if(command == 'kick') 
    {
        client.commands.get('Kick').execute(message, args);
    }
    else if(command == 'ban') 
    {
        client.commands.get('Ban').execute(message, args);
    }
    else if (command == 'yt' || command == 'youtube') 
    {
        client.commands.get('YT').execute(message, args);
    } 
    else if(command == "prefix")
    {
        client.commands.get('Prefix').execute(message, args);
    }
});


client.login('Nzg3MTg4Njg2ODY4NzA5Mzk3.X9RUmA.KVs-aa3MhdaRbTtQoisPnTxU3T4');