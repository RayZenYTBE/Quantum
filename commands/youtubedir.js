const ytsr = require("ytsr");
const Discord = require("discord.js");
const MessageEmbed = require("discord.js")

module.exports.run = async (client, message, args) => {
    const query = args.join(" ");
    if(!query) return message.channel.send("Please specify a search query!");

    const res = await ytsr(query).catch(e => {
      return message.channel.send("No results were found for that search query! Try another search query!");
    });

    const video = res.items.filter(i => i.type == "video")[0];
    if(!video) return message.channel.send("No results were found for that search query! Try another search query!")

    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("YouTube Search")
    .addField("Results :", `[${video.title}](${video.url})`)
    .setImage(video.bestThumbnail.url)
    .setFooter(`Requested by ${message.author.tag}`)
    .setTimestamp()

    message.channel.send("Searching whole YouTube...").then (
      message.channel.send(embed)
    )
};
