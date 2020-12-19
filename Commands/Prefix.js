module.exports = {
    name: 'Prefix',
    description: 'Prints out prefix',
    execute(message, args) {
 
            message.channel.send('The current prefix is %');
    
    }
}
