const translate = require("@iamtraction/google-translate")

module.exports.run = async (client, message, args) => {
  const query = args.join(" ");
  if(!query) return message.reply("Please specify a text to be translated into Portuguese/Português!");

  const translated = await translate(query, { to: 'pt'});
  message.channel.send(translated.text)
}
