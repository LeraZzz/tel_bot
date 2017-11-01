
module.exports = {

    sendStartMessage: function (tg, message)
{
    let text =/*'<a href="https://pp.userapi.com/c824202/v824202891/c644/liHWp02ZbJw.jpg">&#8205;</a>' */ '<b>Озоновая косметика OZONE BOX \n</b>' +
        '\n' +
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

    let goToBeforeAfter = {
    text: 'До/После   🙀😻',
    callback_data: 'goToBeforeAfterCmd'

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
                        [goToBeforeAfter],
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

        let goToBeforeAfter = {
            text: 'До/После   🙀😻',
            callback_data: 'goToBeforeAfterCmd'

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
                        [goToBeforeAfter],
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