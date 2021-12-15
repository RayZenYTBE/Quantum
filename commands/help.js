const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) return;

  let help = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("Pegasus Help Panel")
    .setDescription(`My prefix in this server is **${prefix}**`)
    .addField("invite", 'Send Invites')
    .addField("help", 'Send help to the chat')
    .addField("search", 'Show Available Search List')
    .setTimestamp()
    .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
  message.channel.send(help);
}
