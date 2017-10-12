

module.exports = {

        buyComplexFace1: function(tg, callbackQuery) {
            let text = '<b>Комплекс\n'+'«Безупречно чистая кожа»\n</b>' +
                '<b>3 990 руб\n</b>' +
                '\n'+

                '<b>В комплекс входит:\n</b>' +
                '• Озоновый крем дневной. Экспресс-уход. PV 500 (50 мл)\n' +
                '• Озоновый крем ночной. Релакс. PV 500 (50 мл)\n' +
                '• Озонированное масло ОТРИ® 6 000 (25 мл)\n' +
                '• Инструкция по применению'+
                '\n'+
                'Для того, чтобы '

            let Button1 = {
                text: '🔙',
                callback_data: 'catalogCmd'
            }


            let options = Object.assign(
                {},
                {
                    parse_mode: 'HTML',
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