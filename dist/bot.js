'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nodeTelegramBotApi = require('node-telegram-bot-api');

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tg = void 0;

function create() {
    var token = "387016243:AAEXimznXpHl5ke6qpUanexj_Wm9mH79y_s";
    tg = new _nodeTelegramBotApi2.default(token, {
        polling: true
    });
    tg.on('message', onMessage);
    tg.on('callback_query', onCallbackQuery);
}

function onMessage(message) {
    console.log('message:', message);
    if (message.text && message.text.toLowerCase() === 'ping') {
        tg.sendMessage(message.chat.id, '<pre>pong</pre>', {
            parse_mode: 'HTML'
        });
        return;
    }
    //
    if (message.text && message.text.toLowerCase() === '/start') {
        sendStartMessage(message);
        return;
    }
}

function onCallbackQuery(callbackQuery) {
    console.log('callbackQuery:', callbackQuery);
    if (callbackQuery.data === 'helpCmd') {
        var helpText = "Tonight game will be very hot, dude";
        tg.sendMessage(callbackQuery.message.chat.id, helpText);
        tg.answerCallbackQuery(callbackQuery.id);
    } else if (callbackQuery.data === 'gameCmd') {
        var _helpText = "Take off the t-shirt, make photo and send it to ur girlfriend, ok, ololo?";
        tg.sendMessage(callbackQuery.message.chat.id, _helpText);
        tg.answerCallbackQuery(callbackQuery.id);
    }
}

// *********************************************
function sendStartMessage(message) {
    var text = 'Hello, my dear Mitya';
    //
    var helpButton = {
        text: "Об игре",
        callback_data: 'helpCmd'
        //
    };var gameButton = {
        text: "Начать игру",
        callback_data: 'gameCmd'
        //
    };var options = {};
    options.reply_markup = {};
    options.reply_markup.inline_keyboard = [];
    options.reply_markup.inline_keyboard.push([helpButton]);
    options.reply_markup.inline_keyboard.push([gameButton]);
    tg.sendMessage(message.chat.id, text, options);
}

exports.default = create;