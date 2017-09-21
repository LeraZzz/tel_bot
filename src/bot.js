import TelegramBot from 'node-telegram-bot-api'

let tg

function create() {
    const token = "387016243:AAEXimznXpHl5ke6qpUanexj_Wm9mH79y_s"
    tg = new TelegramBot(token, {
        polling: true
    })
    tg.on('message', onMessage)
    tg.on('callback_query', onCallbackQuery)
}


function onMessage(message) {
    console.log('message:', message)
    if (message.text && message.text.toLowerCase() === 'ping') {
        tg.sendMessage(message.chat.id, '<pre>pong</pre>', {
            parse_mode: 'HTML'
        })
        return
    }
    //
    if (message.text && message.text.toLowerCase() === '/start') {
        sendStartMessage(message)
        return
    }
}


function onCallbackQuery(callbackQuery) {
    console.log('callbackQuery:', callbackQuery)
    if (callbackQuery.data === 'catalogCmd') {
        const goToFromMenu1 = goToCatalog(callbackQuery)
    }

    else if (callbackQuery.data === 'FAQCmd') {
        const goToFromMenu2 = goToFAQ(callbackQuery)
    }

    else if (callbackQuery.data === 'callBackCmd') {
        var getNumberForCallBack = goToCallBack(callbackQuery)
    }

    else if (callbackQuery.data === 'feedBackCmd') {
        const helpText = "Если у вас есть пожелания к работе магазина, пишите сюда, хули"
        const answer = "Ну а хули вы хотели??!"
        tg.sendMessage(callbackQuery.message.chat.id, helpText, {caption: "I\'m a cute bot!"})
        tg.answerCallbackQuery(callbackQuery.id, answer)
    }
}

// *********************************************
function goToCallBack(callbackQuery) {

    var options = {
        "parse_mode": "Markdown",
        "reply_markup": {
            "one_time_keyboard": true,
            "keyboard": [[{
                text: "My phone number",
                request_contact: true
            }], ["Cancel"]]
        }
    }

    tg.sendMessage(callbackQuery.message.chat.id, "How to contact you?", options)
}

function goToFAQ(callbackQuery) {

    var text = 'Часто задаваемые вопросы'

    var Button1 = {
        text: '1',
        callback_data: '1'
    }

    var Button2 = {
        text: '2',
        callback_data: '2'
    }

    var options = {}
    options.reply_markup = {}
    options.reply_markup.inline_keyboard = []
    options.reply_markup.inline_keyboard.push([Button1])
    options.reply_markup.inline_keyboard.push([Button2])

    tg.sendMessage(callbackQuery.message.chat.id, text, options)
}

function goToCatalog(callbackQuery) {

    var text = 'CATALOG'

    var Button1 = {
        text: '1',
        callback_data: '1'
    }

    var Button2 = {
        text: '2',
        callback_data: '2'
    }

    var options = {}
    options.reply_markup = {}
    options.reply_markup.inline_keyboard = []
    options.reply_markup.inline_keyboard.push([Button1])
    options.reply_markup.inline_keyboard.push([Button2])


    tg.sendMessage(callbackQuery.message.chat.id, text, options)
}


function sendStartMessage(message) {
    var text = 'Выберите желаемое действие : '

    var catalogButton = {
        text: 'Каталог товаров',
        callback_data: 'catalogCmd'

    }

    var FAQButton = {
        text: "FAQ",
        callback_data: 'FAQCmd'
    }

    var callBackButton = {
        text: "Заказ обратного звонка",
        callback_data: 'callBackCmd'
    }

    var feedBackButton = {
        text: "Отзывы и предложения",
        callback_data: 'feedBackCmd'
    }

    var options = {}
    options.reply_markup = {}
    options.reply_markup.inline_keyboard = []
    options.reply_markup.inline_keyboard.push([catalogButton])
    options.reply_markup.inline_keyboard.push([FAQButton])
    options.reply_markup.inline_keyboard.push([callBackButton])
    options.reply_markup.inline_keyboard.push([feedBackButton])

    tg.sendMessage(message.chat.id, text, options)
}

create()