const translate = require("@iamtraction/google-translate")

module.exports.run = async (client, message, args) => {
  const query = args.join(" ");
  if(!query) return message.reply("Please specify a text to be translated into Spanish/lengua española!");

  const translated = await translate(query, { to: 'es'});
  message.channel.send(translated.text)
}
