const { Telegraf } = require('telegraf')
require('dotenv').config()
const { payMessage, paidMessage } = require('./messages')

const bot = new Telegraf(process.env.BOT_TOKEN, {channelMode: true})
bot.command('pay', async (ctx) => {
  return await ctx.reply(payMessage)
})
bot.command('paid', async (ctx) => {
  return await ctx.reply(paidMessage)
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
