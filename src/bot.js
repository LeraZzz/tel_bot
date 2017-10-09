import TelegramBot from 'node-telegram-bot-api'

import goods_func from './goods_func'
let botan = require('botanio')('786f747c-6fe7-4a7f-95a6-c8ef510a59f0')

let mongoose = require('mongoose')

let start_functions = require('./start_functions.js')
let catalog_func = require('./catalog_func.js')
let menu_func = require('./menu_func.js')

mongoose.connect('mongodb://localhost/test', {useMongoClient: true, promiseLibrary: global.Promise})

let Schema = mongoose.Schema;

let userSchema = new Schema({
    first_name: String,
    last_name: String,
    message_text: String,
    date: Number,
    //hidden: Boolean,
    chat_id: Number
});

let userNumberSchema = new Schema({
    first_name: String,
    last_name: String,
    message_text: String,
    date: {type: Date, default: Date.now},
    //hidden: Boolean,
    chat_id: Number,
    number: String
});

let userReviewSchema = new Schema({
    first_name: String,
    last_name: String,
    message_text: String,
    date: Number,
    chat_id: Number,
    review: String
});

let User = mongoose.model('User', userSchema)
let UserNumber = mongoose.model('UserNumber', userNumberSchema)
let UserReview = mongoose.model('UserReview', userReviewSchema)


let tg

function create() {
     const token = "387016243:AAEXimznXpHl5ke6qpUanexj_Wm9mH79y_s"
  //  const token = "467244885:AAHILNeTqyldJJzC4XLyfbIl8JxmdK8w62A"
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

     else if (message.text && message.text.toLowerCase() === '/start') {
        start_functions.sendStartMessage(tg, message)
        return
    }

     else if (message.contact !== 0){
        let text = 'Заказ обратного звонка: '+ message.contact.first_name + ' ' + message.contact.last_name + ' ' + message.contact.phone_number
        tg.sendMessage(-1001126980476, text)
    }
}

/*function onContact(contact){
    console.log('YEAAHHH')
    let t = contact.first_name
    var text ='Заказ звонка:'+ //contact.first_name + contact.last_name + contact.phone_number

  let textInfo = Informat.toString()
    tg.sendMessage(-1001126980476, text)

}*/

function onCallbackQuery(callbackQuery) {

    console.log('callbackQuery:', callbackQuery);

    if (callbackQuery.data === 'catalogCmd') {
        const goToFromMenu1 = menu_func.goToCatalog(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'menuCmd') {

        const goToMenu = start_functions.sendStartMessage2(tg, callbackQuery)
    }




    else if (callbackQuery.data === 'catalogHair') {

        const goToComplexHair = goods_func.goToComplexHair1(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'catalogFace') {
        const goToComplexFace = goods_func.goToComplexFace1(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'catalogBody') {

        const goToComplexBody = goods_func.goToComplexBody1(tg, callbackQuery)
    }
    /*
    else if (callbackQuery.data === 'catalogSkin') {

        const goToCatalogSkin = goToCatalogSkin1(callbackQuery)
    }


    else if (callbackQuery.data === 'catalogOil') {

        const goToCatalogOil = goToCatalogOil1(callbackQuery)
    }
*/
    else if (callbackQuery.data === 'catalogComplex') {

        const goToCatalogComplex = goToCatalogComplex1(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'FAQCmd') {
        const goToFromMenu2 = menu_func.goToFAQ(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'callBackCmd') {
        let getNumberForCallBack = menu_func.goToCallBack(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'aboutCmd'){
        let goToAboutInfo1 = menu_func.goToAboutInfo(tg, callbackQuery)
    }
/*
    else if (callbackQuery.data === 'orderCmd'){
        let goToOrder = goToOrder1('callbackQuery')
    }
*/
    else if (callbackQuery.data === 'principCmd'){
        let goToPrincip = menu_func.goToPrincip1(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'feedBackCmd') {

        const helpText = "Если у вас есть пожелания к работе магазина, напишите сюда ваш отзыв, и мы обязательно учтем его в дальнейшей работе"

        tg.sendMessage(callbackQuery.message.chat.id, helpText)

    }
}



create()