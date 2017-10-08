
module.exports = {

    sendStartMessage: function (tg, message)
{
    let text = 'Интернет магазин озоновой косметики Ozone Box. Теперь в Telegram!'

    let catalogButton = {
        text: 'Наши решения 🌟',
        callback_data: 'catalogCmd'

    }

    let FAQButton = {
        text: "FAQ ❓",
        callback_data: 'FAQCmd'
    }


    let aboutButton = {
        text: "О нас    🔊",
        callback_data: 'aboutCmd'
    }

    let principButton = {
        text: "Принцип действия   🌐 ",
        callback_data: 'principCmd'
    }


    let callBackButton = {
        text: "Обратный ввонок  📲",
        callback_data: 'callBackCmd'
    }


    let feedBackButton = {
        text: " Оставить отзыв 😘",
        callback_data: 'feedBackCmd'
    }
    let options = Object.assign(
        {},
        {
            reply_markup: JSON.stringify(
                {
                    inline_keyboard: [
                        [aboutButton],
                        [principButton],
                        [catalogButton],
                        [FAQButton],
                        [callBackButton],
                        [feedBackButton]
                    ]
                })
        })
    tg.sendMessage(message.chat.id, text, options)
},


    sendStartMessage2 : function (tg, callbackQuery) {
    let text = 'Интернет магазин озоновой косметики Ozone Box. Теперь в Telegram!'

    let catalogButton = {
        text: 'Наши решения 🌟',
        callback_data: 'catalogCmd'

    }

    let FAQButton = {
        text: "FAQ ❓",
        callback_data: 'FAQCmd'
    }

    let aboutButton = {
        text: "О нас    🔊",
        callback_data: 'aboutCmd'
    }

    let principButton = {
        text: "Принцип действия   🌐 ",
        callback_data: 'principCmd'
    }


    let callBackButton = {
        text: "Обратный ввонок  📲",
        callback_data: 'callBackCmd'
    }


    let feedBackButton = {
        text: " Оставить отзыв 😘",
        callback_data: 'feedBackCmd'
    }

    let options = Object.assign(
        {},
        {
            reply_markup: JSON.stringify(
                {
                    inline_keyboard: [
                        [aboutButton],
                        [principButton],
                        [catalogButton],
                        [FAQButton],
                        [callBackButton],
                        [feedBackButton]
                    ]
                })
        },
        {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        }
    )
    tg.editMessageText(text, options)
}
}