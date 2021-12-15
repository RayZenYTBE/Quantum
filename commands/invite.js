const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) return;

  let help = new Discord.MessageEmbed()
    .setColor('#FFFFFF')
    .setTitle("Invite Quantum as Your Discord Daily Translator")
    .setDescription(`My prefix in this server is **${prefix}**`)
    .addField("Thanks for inviting Quantum!", '[Invite Generated!](https://discord.com/api/oauth2/authorize?client_id=917389549620056145&permissions=274878102529&scope=bot)')
    .setTimestamp()
    .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
  message.channel.send(help);
}
