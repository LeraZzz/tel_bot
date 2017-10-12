import TelegramBot from 'node-telegram-bot-api'
import faq_func from './faq_func'
import goods_func from './goods_func'
import buy_func from './buy_func'

let botan = require('botanio')('786f747c-6fe7-4a7f-95a6-c8ef510a59f0')

let mongoose = require('mongoose')

let start_functions = require('./start_functions.js')

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
    const token = "387016243:AAEXimznXpHl5ke6qpUanexj_Wm9mH79y_s"//zzz_bot
    //  const token = "467244885:AAHILNeTqyldJJzC4XLyfbIl8JxmdK8w62A" //ozone_cosmetics
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


    if (message.text && message.text.toLowerCase() === 'хуй') {
        tg.sendMessage(message.chat.id, '<b>Ты</b> ', {
            parse_mode: 'HTML'
        })
        return
    }

    else if (message.text && message.text.toLowerCase() === '/start') {
        start_functions.sendStartMessage(tg, message)
        return
    }

    else if (message.contact !== undefined && message.contact !== 0) {
        let text = 'Заказ обратного звонка: ' + message.contact.first_name + ' ' + message.contact.last_name + ' ' + message.contact.phone_number
        tg.sendMessage(-1001126980476, text)
    }

    else {
        tg.sendMessage(message.chat.id, '<b>Данная команда не поддерживается! \n</b>' + 'Испоьзуйте <b>/help</b> для справки!', {
            parse_mode: 'HTML'
        })
        let text = 'Сообщение:\n' + 'отправитель: ' + message.from.first_name + ' ' + message.from.last_name + '\n' +
            'текст: ' + message.text
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


    else if (callbackQuery.data === 'catalogHairCmd') {

        const goToComplexHair = goods_func.goToComplexHair1(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'buyComplexHairCmd') {

        const buyComplexHair = buy_func.buyComplexHair1(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'catalogFaceCmd') {
        const goToComplexFace = goods_func.goToComplexFace1(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'buyCoplexFaceCmd') {
        const buyComplexFace = buy_func.buyComplexFace1(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'catalogBodyCmd') {

        const goToComplexBody = goods_func.goToComplexBody1(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'buyComplexBodyCmd') {

        const buyComplexBody = buy_func.buyComplexBody1(tg, callbackQuery)
    }
    /*
    else if (callbackQuery.data === 'catalogSkin') {

        const goToCatalogSkin = goToCatalogSkin1(callbackQuery)
    }


    else if (callbackQuery.data === 'catalogOil') {

        const goToCatalogOil = goToCatalogOil1(callbackQuery)
    }

    else if (callbackQuery.data === 'catalogComplex') {

        const goToCatalogComplex = goToCatalogComplex1(tg, callbackQuery)
    }
*/
    else if (callbackQuery.data === 'FAQCmd') {
        const goToFromMenu2 = menu_func.goToFAQ(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'faqMythsCmd') {
        let goToFaqMyths1 = faq_func.goToFaqMyths(tg, callbackQuery)
    }



    else if (callbackQuery.data === 'myth1Cmd') {
        let goTo1Myth1 = faq_func.goTo1Myth(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'myth2Cmd') {
        let goTo2Myth1 = faq_func.goTo2Myth(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'myth3Cmd') {
        let goTo3Myth1 = faq_func.goTo3Myth(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'faqQuestionsCmd') {
        let goToFaqQuestions1 = faq_func.goToFaqQuestions(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'faq1Cmd') {
        let goTo1Faq1 = faq_func.goTo1Faq(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'faq2Cmd') {
        let goTo2Faq1 = faq_func.goTo2Faq(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'faq3Cmd') {
        let goTo3Faq1 = faq_func.goTo3Faq(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'faq4Cmd') {
        let goTo4Faq1 = faq_func.goTo4Faq(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'faq5Cmd') {
        let goTo5Faq1 = faq_func.goTo5Faq(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'faq6Cmd') {
        let goTo6Faq1 = faq_func.goTo6Faq(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'faq7Cmd') {
        let goTo7Faq1 = faq_func.goTo7Faq(tg, callbackQuery)
    }


    else if (callbackQuery.data === 'callBackCmd') {
        let getNumberForCallBack = menu_func.goToCallBack(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'aboutCmd') {
        let goToAboutInfo1 = menu_func.goToAboutInfo(tg, callbackQuery)
    }


    else if (callbackQuery.data === 'principCmd') {
        let goToPrincip = menu_func.goToPrincip1(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'feedBackCmd') {

        const helpText = "Если у вас есть пожелания к работе магазина, напишите сюда ваш отзыв, и мы обязательно учтем его в дальнейшей работе"

        tg.sendMessage(callbackQuery.message.chat.id, helpText)
    }
}


create()

