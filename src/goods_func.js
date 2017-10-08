module.exports = {
    goToComplexFace1: function(tg, callbackQuery) {
        let text ='<b>Комплекс «Безупречно чистая кожа»\n</b>' +
            '<b>                3 990 руб</b>'

        let Button4 = {
            text: 'Назад к каталогу',
            callback_data: 'catalogCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button4]
                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )
        tg.editMessageText(text, options)

    },
    goToComplexHair1: function(tg, callbackQuery) {
        let text ='<b>Ozone Box Face Complex</b>'

        let Button4 = {
            text: 'Назад к каталогу',
            callback_data: 'catalogCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button4]
                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )
        tg.editMessageText(text, options)


    },
    goToComplexBody1: function(tg, callbackQuery) {
        let text ='<b>Комплекс «Безупречно чистая кожа»\n</b>' +
            '<b>                3 990 руб</b>'

        let Button4 = {
            text: 'Назад к каталогу',
            callback_data: 'catalogCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button4]
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