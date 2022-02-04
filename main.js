const { Telegraf } = require('telegraf')
require('dotenv').config()
const { payMessage, paidMessage } = require('./messages')

const bot = new Telegraf(process.env.BOT_TOKEN, {channelMode: true})

bot.telegram.setMyCommands(
  [
    {
      command: '/pay',
      description: 'Отправить сообщение, что ты ожидаешь оплату за занятие',
    },
    {
      command: '/paid',
      description: '_'
    }
  ]
)

bot.command('pay', async (ctx) => {
  return await ctx.reply(payMessage)
})
bot.command('paid', async (ctx) => {
  return await ctx.reply(paidMessage)
})
bot.command('help', async (ctx) => {
  return await ctx.reply(`Используй команду /pay, чтобы отправить сообщение, что ты ожидаешь получить оплату за следующее занятие`)
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
