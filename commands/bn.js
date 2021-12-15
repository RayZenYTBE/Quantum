const translate = require("@iamtraction/google-translate")

module.exports.run = async (client, message, args) => {
  const query = args.join(" ");
  if(!query) return message.reply("Please specify a text to be translated into Bengali/বাংলা!");

  const translated = await translate(query, { to: 'bn'});
  message.channel.send(translated.text)
}
