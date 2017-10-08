
module.exports = {

    goToCallBack: function (tg, callbackQuery) {

        let options = {
            "parse_mode": "Markdown",
            "reply_markup": {
                "force_reply": true,
                "one_time_keyboard": true,
                "resize_keyboard": true,
                "remove_keyboard": true,
                "callback_data": "numberQuery",
                "keyboard": [[{
                    text: "Заказать звонок менеджера",
                    request_contact: true
                }], ["Cancel"]]
            }
        }

        tg.sendMessage(callbackQuery.message.chat.id, "Как с вами связаться?", options)//"text inside"

        User.create({

            first_name: message.from.first_name,
            last_name: message.from.last_name,
            message_text: message.text,
            chat_id: message.chat.id,
            date: message.date,
            number: String
        }, function (err) {

            if (err) return handleError(err);
        })

    },

    goToFAQ: function (tg, callbackQuery) {

        let text = 'Часто задаваемые вопросы 🤗 :'

        let Button1 = {
            text: 'wtf',
            callback_data: '1'
        }

        let Button2 = {
            text: 'Do Androids dream of electric sheep?',
            callback_data: '2'
        }
        let Button3 = {
            text: 'Назад в меню',
            callback_data: 'menuCmd'
        }

        let options = Object.assign(
            {},
            {
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [
                            [Button1],
                            [Button2],
                            [Button3]
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

    goToCatalog: function (tg, callbackQuery) {

        let text = 'Комплексы Ozone Box:'

        let Button2 = {
            text: 'OzoneBox для волос',
            callback_data: 'catalogHair'
        }

        let Button1 = {
            text: 'OzoneBox для лица',
            callback_data: 'catalogFace'
        }

        let Button3 = {
            text: 'OzoneBox для тела',
            callback_data: 'catalogBody'

        }
/*
        let Button4 = {
            text: 'Уход за кожей',
            callback_data: 'catalogSkin'
        }
        let Button5 = {
            text: 'Комплексный уход',
            callback_data: 'catalogComplex'
        }

        let Button6 = {
            text: 'Озонированное масло О3',
            callback_data: 'catalogOil'
        }
*/
        let Button7 = {
            text: 'Назад в меню',
            callback_data: 'menuCmd'
        }

        let options = Object.assign(
            {},
            {
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [
                            [Button1],
                            [Button2],
                            [Button3],
                           /* [Button4],
                            [Button5],
                            [Button6],*/
                            [Button7]

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

    goToAboutInfo: function (tg, callbackQuery){
    text = 'О нас:'
        let Button1 = {
        text: 'Назад в меню',
        callback_data: 'menuCmd'
    }

    let options = Object.assign(
        {},
        {
           /* text: '<bold>Ozone Box Cosmetics </bold>',
            parse_mode: HTML,*/
            reply_markup: JSON.stringify(
                {
                    inline_keyboard: [
                        [Button1]

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