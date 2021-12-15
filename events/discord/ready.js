module.exports = (client, message) => {
  console.log(`[STATUS] ${client.user.tag} is now online!\n[INFO] Bot by AtMostFear\n[Invite Link] https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8\n[INFO] Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);
  const activities = [`!help | नमस्ते! मेरा नाम क्वांटम है!`, `!help | こんにちは！私の名前はクアンタムです！`, `!help | Привет! Меня зовут Квантум!`, `!help | Halo! Nama saya Quantum!`];
  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(activity, { type: "WATCHING" });
  }, 20000);

};
