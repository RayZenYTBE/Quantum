const translate = require("@iamtraction/google-translate")

module.exports.run = async (client, message, args) => {
  const query = args.join(" ");
  if(!query) return message.reply("Please specify a text to be translated into Indonesian/Bahasa Indonesia!");

  const translated = await translate(query, { to: 'id'});
  message.channel.send(translated.text)
}
