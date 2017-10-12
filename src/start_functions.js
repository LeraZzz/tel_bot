
module.exports = {

    sendStartMessage: function (tg, message)
{
    let text = '<b>Озоновая косметика OZONE BOX \n</b>' +
        'Здесь вы можете узнать больше о нашей компании и продукции, посмотреть каталог  косметики и одним кликом купить товар, а также заказать звонок нашего менеджера.\n'+
        '\n'+
        '\n'


    let catalogButton = {
        text: 'Наши решения  🌟',
        callback_data: 'catalogCmd'

    }

    let FAQButton = {
        text: "FAQ  ❓",
        callback_data: 'FAQCmd'
    }

    let aboutButton = {
        text: "О нас  ⭐️",
        callback_data: 'aboutCmd'
    }

    let principButton = {
        text: "Принцип действия  🌐 ",
        callback_data: 'principCmd'
    }


    let callBackButton = {
        text: "Обратный звонок  ☎",
        callback_data: 'callBackCmd'
    }


    let feedBackButton = {
        text: " Оставить отзыв 😘",
        callback_data: 'feedBackCmd'
    }
    let options = Object.assign(
        {},
        {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify(
                {

                    inline_keyboard: [
                        [aboutButton],
                        [principButton],
                        [catalogButton],
                        [FAQButton],
                        [callBackButton]
                    ]
                })
        })
    tg.sendMessage(message.chat.id, text, options)
},


    sendStartMessage2 : function (tg, callbackQuery) {
        let text = '<b>Озоновая косметика OZONE BOX \n</b>' +
            'Здесь вы можете узнать больше о нашей компании и продукции, посмотреть каталог  косметики и одним кликом купить товар, а также заказать звонок нашего менеджера.\n'+
            '\n'+
            '\n'


        let catalogButton = {
        text: 'Наши решения  🌟',
        callback_data: 'catalogCmd'

    }

    let FAQButton = {
        text: "FAQ  ❓",
        callback_data: 'FAQCmd'
    }

    let aboutButton = {
        text: "О нас  ⭐️",
        callback_data: 'aboutCmd'
    }

    let principButton = {
        text: "Принцип действия  🌐 ",
        callback_data: 'principCmd'
    }


    let callBackButton = {
        text: "Обратный звонок  ☎",
        callback_data: 'callBackCmd'
    }


    let feedBackButton = {
        text: " Оставить отзыв 😘",
        callback_data: 'feedBackCmd'
    }

    let options = Object.assign(
        {},
        {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify(
                {

                    inline_keyboard: [
                        [aboutButton],
                        [principButton],
                        [catalogButton],
                        [FAQButton],
                        [callBackButton]
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