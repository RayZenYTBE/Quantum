const Discord = require("discord.js");
const MessageEmbed = require("discord.js")

module.exports.run = async (client, message, args) => {
    const text = args.join(' ');
    const search = args.join('+');
    if (!text) {
    return message.reply("Enter some text to search for on Google!")
    }
    const embed = new Discord.MessageEmbed()
    .setTitle("Google Image Search")
    .addField(`You Searched for`, `${text}`)
    .addField(`Results`, `[Here's What I found](https://www.google.com/search?q=${search}&rlz=1C1PRUI_enID921ID921&sxsrf=AOaemvJtLeQpCvW2kAs5dFygde7CaxWyAQ:1639491259006&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj3uOvwvOP0AhUZS2wGHf9YCwQQ_AUoA3oECAIQBQ&biw=1366&bih=667&dpr=1)`)
    .setColor("RANDOM");
    message.channel.send(embed);
};
