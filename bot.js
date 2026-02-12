import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("🤖 Bot en ligne !");
});

bot.on("text", (ctx) => {
  ctx.reply("Message reçu ✅");
});

bot.launch();
console.log("Bot running 🚀");
