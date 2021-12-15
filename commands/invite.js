const Discord = require("discord.js");
const MessageEmbed = require("discord.js")
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) return;

   const invites = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Invite Pegasus and Start Searching From Discord!")
        .setDescription(`My prefix in this server is **${prefix}**`)
        .addField("Thanks for inviting Pegasus!", '[Invite Generated!](https://discord.com/api/oauth2/authorize?client_id=915947566380765184&permissions=274878102593&scope=bot)')
        .setTimestamp()
        .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send(invites);
};
