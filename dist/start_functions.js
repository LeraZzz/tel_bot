'use strict';

module.exports = {

    sendStartMessage: function sendStartMessage(tg, message) {
        var text = /*'<a href="https://pp.userapi.com/c824202/v824202891/c644/liHWp02ZbJw.jpg">&#8205;</a>' */'<b>Озоновая косметика OZONE BOX \n</b>' + '\n' + 'Здесь вы можете узнать больше о нашей компании и продукции, посмотреть каталог  косметики и одним кликом купить товар, а также заказать звонок нашего менеджера.\n' + '\n' + '\n';

        var catalogButton = {
            text: 'Наши решения  🌟',
            callback_data: 'catalogCmd'

        };

        var FAQButton = {
            text: "FAQ  ❓",
            callback_data: 'FAQCmd'
        };

        var aboutButton = {
            text: "О нас  ⭐️",
            callback_data: 'aboutCmd'
        };

        var principButton = {
            text: "Принцип действия  🌐 ",
            callback_data: 'principCmd'
        };

        var callBackButton = {
            text: "Обратный звонок  ☎",
            callback_data: 'callBackCmd'
        };

        var feedBackButton = {
            text: " Оставить отзыв 😘",
            callback_data: 'feedBackCmd'
        };

        var goToBeforeAfter = {
            text: 'До/После   🙀😻',
            callback_data: 'goToBeforeAfterCmd'

        };
        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({

                inline_keyboard: [[aboutButton], [principButton], [goToBeforeAfter], [catalogButton], [FAQButton], [callBackButton]]
            })
        });
        tg.sendMessage(message.chat.id, text, options);
    },

    sendStartMessage2: function sendStartMessage2(tg, callbackQuery) {
        var text = '<b>Озоновая косметика OZONE BOX \n</b>' + 'Здесь вы можете узнать больше о нашей компании и продукции, посмотреть каталог  косметики и одним кликом купить товар, а также заказать звонок нашего менеджера.\n' + '\n' + '\n';

        var catalogButton = {
            text: 'Наши решения  🌟',
            callback_data: 'catalogCmd'

        };

        var FAQButton = {
            text: "FAQ  ❓",
            callback_data: 'FAQCmd'
        };

        var aboutButton = {
            text: "О нас  ⭐️",
            callback_data: 'aboutCmd'
        };

        var principButton = {
            text: "Принцип действия  🌐 ",
            callback_data: 'principCmd'
        };

        var callBackButton = {
            text: "Обратный звонок  ☎",
            callback_data: 'callBackCmd'
        };

        var goToBeforeAfter = {
            text: 'До/После   🙀😻',
            callback_data: 'goToBeforeAfterCmd'

        };

        var feedBackButton = {
            text: " Оставить отзыв 😘",
            callback_data: 'feedBackCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({

                inline_keyboard: [[aboutButton], [principButton], [goToBeforeAfter], [catalogButton], [FAQButton], [callBackButton]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    }
};