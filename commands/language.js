const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) return;

  let help = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle("Quantum's Language List")
    .setDescription(`My prefix in this server is **${prefix}**`)
    .addField("en 🇬🇧", 'Translate text to English')
    .addField("ar 🇸🇦", 'Translate text to Arabic')
    .addField("bn 🇸🇦", 'Translate text to Bengali')
    .addField("de 🇩🇪", 'Translate text to German')
    .addField("es 🇪🇸", 'Translate text to Spanish')
    .addField("fr 🇫🇷", 'Translate text to France')
    .addField("hin 🇮🇳", 'Translate text to Hindi/India')
    .addField("id 🇮🇩", 'Transate text to Indonesian')
    .addField("ja 🇯🇵", 'Translate text to Japanese')
    .addField("pt 🇵🇹", 'Translate text to Portugueses')
    .addField("ru 🇷🇺", 'Translate text to Russian')
    .setTimestamp()
    .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
  message.channel.send(help);
}

module.exports.help = {
  name: "help"
}
