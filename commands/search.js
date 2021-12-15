const Discord = require("discord.js");
const MessageEmbed = require("discord.js")

module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) return;

   const invites = new Discord.MessageEmbed()
        .setColor('GOLD')
        .setTitle("Available Search List")
        .setDescription(`My prefix in this server is **${prefix}**`)
        .addField("google", 'Search for results on Google')
        .addField("github", 'Search for results on GitHub')
        .addField("image", 'Search for image result from Google')
        .addField("topgg", 'Search for results on Top.gg')
        .addField("youtube", 'Search for results on YouTube')
        .addField("youtubedir", 'Search for results from YouTube and display it in an embed shape')
        .setTimestamp()
        .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send(invites);
};
