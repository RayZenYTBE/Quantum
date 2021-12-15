const Discord = require("discord.js");
const MessageEmbed = require("discord.js")

module.exports.run = async (client, message, args) => {
    const text = args.join(' ');
    const search = args.join('+');
    if (!text) {
    return message.reply("Enter some text to search for on Google!")
    }
    const embed = new Discord.MessageEmbed()
    .setTitle("Google Search")
    .addField(`You Searched for`, `${text}`)
    .addField(`Results`, `[Here's What I found](https://www.google.com/search?q=${search})`)
    .setColor("RANDOM");
    message.channel.send(embed);
};
