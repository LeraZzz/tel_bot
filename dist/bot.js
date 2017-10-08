'use strict';

var _nodeTelegramBotApi = require('node-telegram-bot-api');

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

var _goods_func = require('./goods_func');

var _goods_func2 = _interopRequireDefault(_goods_func);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var botan = require('botanio')('786f747c-6fe7-4a7f-95a6-c8ef510a59f0');

var mongoose = require('mongoose');

var start_functions = require('./start_functions.js');
var catalog_func = require('./catalog_func.js');
var menu_func = require('./menu_func.js');

mongoose.connect('mongodb://localhost/test', { useMongoClient: true, promiseLibrary: global.Promise });

var Schema = mongoose.Schema;

var userSchema = new Schema({
    first_name: String,
    last_name: String,
    message_text: String,
    date: Number,
    //hidden: Boolean,
    chat_id: Number
});

var userNumberSchema = new Schema({
    first_name: String,
    last_name: String,
    message_text: String,
    date: { type: Date, default: Date.now },
    //hidden: Boolean,
    chat_id: Number,
    number: String
});

var userReviewSchema = new Schema({
    first_name: String,
    last_name: String,
    message_text: String,
    date: Number,
    chat_id: Number,
    review: String
});

var User = mongoose.model('User', userSchema);
var UserNumber = mongoose.model('UserNumber', userNumberSchema);
var UserReview = mongoose.model('UserReview', userReviewSchema);

var tg = void 0;

function create() {
    var token = "387016243:AAEXimznXpHl5ke6qpUanexj_Wm9mH79y_s";
    //  const token = "467244885:AAHILNeTqyldJJzC4XLyfbIl8JxmdK8w62A"
    tg = new _nodeTelegramBotApi2.default(token, {
        polling: true
    });
    tg.on('message', onMessage);
    tg.on('callback_query', onCallbackQuery);
}

function onMessage(message) {
    console.log('message:', message);

    botan.track(message, 'Start', function (err) {
        if (err) {
            console.log("ANALYTICS ERROR: ", err);
        }
    });

    User.create({

        first_name: message.from.first_name,
        last_name: message.from.last_name,
        message_text: message.text,
        chat_id: message.chat.id,
        date: message.date
    }, function (err) {

        if (err) return handleError(err);
    });

    if (message.text && message.text.toLowerCase() === 'ping') {
        tg.sendMessage(message.chat.id, '<b>pong</b> <strong>holy shit</strong> <em>rrr</em> <i>ololo</i>', {
            parse_mode: 'HTML'
        });
        return;
    }

    if (message.text && message.text.toLowerCase() === '/start') {
        start_functions.sendStartMessage(tg, message);
        return;
    }
}

function onCallbackQuery(callbackQuery) {

    console.log('callbackQuery:', callbackQuery);

    if (callbackQuery.data === 'catalogCmd') {
        var goToFromMenu1 = menu_func.goToCatalog(tg, callbackQuery);
    } else if (callbackQuery.data === 'menuCmd') {

        var goToMenu = start_functions.sendStartMessage2(tg, callbackQuery);
    } else if (callbackQuery.data === 'catalogHair') {

        var goToComplexHair = good_func.goToComplexHair1(tg, callbackQuery);
    } else if (callbackQuery.data === 'catalogFace') {
        var goToComplexFace = _goods_func2.default.goToComplexFace1(tg, callbackQuery);
    } else if (callbackQuery.data === 'catalogBody') {

        var goToComplexBody = _goods_func2.default.goToComplexBody1(tg, callbackQuery);
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

            var goToCatalogComplex = goToCatalogComplex1(tg, callbackQuery);
        } else if (callbackQuery.data === 'FAQCmd') {
            var goToFromMenu2 = menu_func.goToFAQ(tg, callbackQuery);
        } else if (callbackQuery.data === 'callBackCmd') {
            var getNumberForCallBack = menu_func.goToCallBack(tg, callbackQuery);
        } else if (callbackQuery.data === 'aboutCmd') {
            var goToAboutInfo1 = goToAboutInfo(tg, 'callbackQuery');
        }
        /*
            else if (callbackQuery.data === 'orderCmd'){
                let goToOrder = goToOrder1('callbackQuery')
            }
        
            else if (callbackQuery.data === 'principCmd'){
                let goToPrincip = goToPrincip1('callbackQuery')
            }    */

        else if (callbackQuery.data === 'feedBackCmd') {

                var helpText = "Если у вас есть пожелания к работе магазина, напишите сюда ваш отзыв, и мы обязательно учтем его в дальнейшей работе";

                tg.sendMessage(callbackQuery.message.chat.id, helpText);
            }
}

create();