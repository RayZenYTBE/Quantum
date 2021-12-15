const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) return;

  let help = new Discord.MessageEmbed()
    .setColor('RED')
    .setThumbnail(`${message.client.user.displayAvatarURL()}`)
    .setTitle("Quantum's Language List")
    .setDescription(`My prefix in this server is **${prefix}**`)
    .addField("language", 'Show available languages list')
    .addField("help", 'Send help to the chat')
    .addField("invite", 'Generate an invite link to invite me')
    .setTimestamp()
    .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
  message.channel.send(help);
}

module.exports.help = {
  name: "help"
}
