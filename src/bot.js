import TelegramBot from 'node-telegram-bot-api'
var botan = require('botanio')('786f747c-6fe7-4a7f-95a6-c8ef510a59f0')

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useMongoClient: true, promiseLibrary: global.Promise });

var Schema = mongoose.Schema;

var userSchema = new Schema({
        first_name: String,
        last_name: String,
        message_text:   String,
        date: Number,
        //hidden: Boolean,
        chat_id: Number
});

var userNumberSchema = new Schema({
        first_name: String,
        last_name: String,
        message_text:   String,
        date: { type: Date, default: Date.now },
        //hidden: Boolean,
        chat_id: Number,
        number: String
});

var userReviewSchema = new Schema({
    first_name: String,
    last_name: String,
    message_text:   String,
    date: Number,
    chat_id: Number,
    review: String
});

var User = mongoose.model('User', userSchema)
var UserNumber = mongoose.model('UserNumber', userNumberSchema)
var UserReview = mongoose.model('UserReview', userReviewSchema)



let tg
function create() {
//  const token = "387016243:AAEXimznXpHl5ke6qpUanexj_Wm9mH79y_s"
    const token =  "467244885:AAHILNeTqyldJJzC4XLyfbIl8JxmdK8w62A"
   tg = new TelegramBot(token, {
        polling: true
    })
    tg.on('message', onMessage)
    tg.on('callback_query', onCallbackQuery)
}


function onMessage(message) {
    console.log('message:', message)

    botan.track(message, 'Start', (err) => {
        if (err) {
            console.log("ANALYTICS ERROR: ", err)
        }
    })

    User.create({

        first_name: message.from.first_name,
        last_name: message.from.last_name,
        message_text: message.text,
        chat_id: message.chat.id,
        date: message.date
    }, function (err) {

        if (err) return handleError(err);
    })



    if (message.text && message.text.toLowerCase() === 'ping') {
        tg.sendMessage(message.chat.id, '<b>pong</b> <strong>holy shit</strong> <em>rrr</em> <i>ololo</i>', {
            parse_mode: 'HTML'
        })
        return
    }

    if (message.text && message.text.toLowerCase() === '/start') {
        sendStartMessage(message)
        return
    }

}


function onCallbackQuery(callbackQuery) {

    console.log('callbackQuery:', callbackQuery);

    if (callbackQuery.data === 'catalogCmd') {
        const goToFromMenu1 = goToCatalog(callbackQuery)
    }

    else if (callbackQuery.data === 'catalogHair') {
        console.log('it s after checking data')
        const goToCatalogHair = goToCatalogHair1(callbackQuery)
    }

    else if (callbackQuery.data === 'catalogFace') {
        const goToCatalogFace = goToCatalogFace1(callbackQuery)
    }


    else if (callbackQuery.data === 'FAQCmd') {
        const goToFromMenu2 = goToFAQ(callbackQuery)
    }

    else if (callbackQuery.data === 'callBackCmd') {
        var getNumberForCallBack = goToCallBack(callbackQuery)
    }

    else if (callbackQuery.data === 'feedBackCmd') {
        const helpText = "Если у вас есть пожелания к работе магазина, напишите сюда ваш отзыв, и мы обязательно учтем его в дальнейшей работе"

        tg.sendMessage(callbackQuery.message.chat.id, helpText)
       // tg.answerCallbackQuery(message.chat.id, text, answer)
    }
}

// *********************************************
function goToCallBack(callbackQuery) {

    var options = {
        "parse_mode": "Markdown",
        "reply_markup": {
            "force_reply" : true,
            "one_time_keyboard": true,
            "resize_keyboard": true,
            "remove_keyboard": true,
            "callback_data": "numberQuery",
            "keyboard": [[{
                text: "My phone number",
                request_contact: true
            }], ["Cancel"]]
        }
    }

    tg.sendMessage(callbackQuery.message.chat.id, "How to contact you?", options)

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

}

function goToFAQ(callbackQuery) {

    var text = 'Часто задаваемые вопросы:'

    var Button1 = {
        text: 'wtf',
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
        text: 'Уход за волосами',
        callback_data: 'catalogHair'
    }

    var Button2 = {
        text: 'Уход за лицом',
        callback_data: 'catalogFace'
    }

    var Button3 = {
        text: 'Уход за телом',
        callback_data: 'catalogBody'
       // callback_data: 'FAQCmd'
    }

    var Button4 = {
        text: '2Уход за кожей',
        callback_data: 'catalogSkin'
    }
    var Button5 = {
        text: 'Комплексный уход',
        callback_data: 'catalogComplex'
    }

    var Button6 = {
        text: 'Озонированное масло О3',
        callback_data: 'catalogOil'
    }



    var options = {}
    options.reply_markup = {}
    options.reply_markup.inline_keyboard = []
    options.reply_markup.inline_keyboard.push([Button1])
    options.reply_markup.inline_keyboard.push([Button2])
    options.reply_markup.inline_keyboard.push([Button3])
    options.reply_markup.inline_keyboard.push([Button4])
    options.reply_markup.inline_keyboard.push([Button5])


    tg.sendMessage(callbackQuery.message.chat.id, text, options)
}

function goToCatalogFace1(callbackQuery) {

    let text = "Face cosmetics here"
    var Button1 = {
        text: 'wtf',
        callback_data: 'catalogFace1'
    }

    var Button2 = {
        text: '2',
        callback_data: 'catalogFace2'
    }

    var options = {}
    options.reply_markup = {}
    options.reply_markup.inline_keyboard = []
    options.reply_markup.inline_keyboard.push([Button1])
    options.reply_markup.inline_keyboard.push([Button2])

    tg.editMessageText(callbackQuery.message.id,  options)
}

function goToCatalogHair1(callbackQuery) {

    //var text = 'Наши озоновые крем-маски — непревзойденное средство для восстановления и роста волос. Они обладают бактерицидными и противогрибковыми свойствами, оказывают противоалергенное и проивовоспалительное действие. Пройдите курсовое лечение, и результаты вас приятно удивят!'
    var text = 'ololo'
    var Button1 = {
        text: 'OZONE CREAM PV500',
        callback_data: 'catalogHairPV500'

    }

    var Button2 = {
        text: 'OzoneBeauty',
        callback_data: 'catalogHairOzoneBeauty'
    }

    var options = {}
    options.reply_markup = {}
    options.reply_markup.inline_keyboard = []
    options.reply_markup.inline_keyboard.push([Button1])
    options.reply_markup.inline_keyboard.push([Button2])

    tg.sendMessage(callbackQuery.message.chat.id, text, options)
}
function sendStartMessage(message) {
    var text = ' Ozone Cosmetics bot is here for you: '

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