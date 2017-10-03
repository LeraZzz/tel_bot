'use strict';

var _nodeTelegramBotApi = require('node-telegram-bot-api');

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var botan = require('botanio')('786f747c-6fe7-4a7f-95a6-c8ef510a59f0');

var mongoose = require('mongoose');

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
    //  const token = "387016243:AAEXimznXpHl5ke6qpUanexj_Wm9mH79y_s"
    var token = "467244885:AAHILNeTqyldJJzC4XLyfbIl8JxmdK8w62A";
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
        sendStartMessage(message);
        return;
    }
}

function onCallbackQuery(callbackQuery) {

    console.log('callbackQuery:', callbackQuery);

    if (callbackQuery.data === 'catalogCmd') {
        var goToFromMenu1 = goToCatalog(callbackQuery);
    } else if (callbackQuery.data === 'menuCmd') {

        var goToMenu = sendStartMessage2(callbackQuery);
    } else if (callbackQuery.data === 'catalogHair') {

        var goToCatalogHair = goToCatalogHair1(callbackQuery);
    } else if (callbackQuery.data === 'catalogFace') {
        var goToCatalogFace = goToCatalogFace1(callbackQuery);
    } else if (callbackQuery.data === 'catalogBody') {

        var goToCatalogBody = goToCatalogBody1(callbackQuery);
    } else if (callbackQuery.data === 'catalogSkin') {

        var goToCatalogSkin = goToCatalogSkin1(callbackQuery);
    } else if (callbackQuery.data === 'catalogComplex') {

        var goToCatalogComplex = goToCatalogComplex1(callbackQuery);
    } else if (callbackQuery.data === 'catalogOil') {

        var goToCatalogOil = goToCatalogOil1(callbackQuery);
    } else if (callbackQuery.data === 'FAQCmd') {
        var goToFromMenu2 = goToFAQ(callbackQuery);
    } else if (callbackQuery.data === 'callBackCmd') {
        var getNumberForCallBack = goToCallBack(callbackQuery);
    } else if (callbackQuery.data === 'feedBackCmd') {
        var helpText = "Если у вас есть пожелания к работе магазина, напишите сюда ваш отзыв, и мы обязательно учтем его в дальнейшей работе";

        tg.sendMessage(callbackQuery.message.chat.id, helpText);
        // tg.answerCallbackQuery(message.chat.id, text, answer)
    }
}

// *********************************************
function goToCallBack(callbackQuery) {

    var options = {
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
    };

    tg.sendMessage(callbackQuery.message.chat.id, "Как с вами связаться?", options); //"text inside"

    User.create({

        first_name: message.from.first_name,
        last_name: message.from.last_name,
        message_text: message.text,
        chat_id: message.chat.id,
        date: message.date,
        number: String
    }, function (err) {

        if (err) return handleError(err);
    });
}

function goToFAQ(callbackQuery) {

    var text = 'Часто задаваемые вопросы 🤗 :';

    var Button1 = {
        text: 'wtf',
        callback_data: '1'
    };

    var Button2 = {
        text: 'Do Androids dream of electric sheep?',
        callback_data: '2'
    };
    var Button3 = {
        text: 'Назад в меню',
        callback_data: 'menuCmd'
    };

    var options = Object.assign({}, {
        reply_markup: JSON.stringify({
            inline_keyboard: [[Button1], [Button2], [Button3]]
        })
    }, {
        message_id: callbackQuery.message.message_id,
        chat_id: callbackQuery.message.chat.id
    });
    tg.editMessageText(text, options);
}

function goToCatalog(callbackQuery) {

    var text = 'Каталог нашей продукции :';

    var Button1 = {
        text: 'Уход за волосами',
        callback_data: 'catalogHair'
    };

    var Button2 = {
        text: 'Уход за лицом',
        callback_data: 'catalogFace'
    };

    var Button3 = {
        text: 'Уход за телом',
        callback_data: 'catalogBody'

    };

    var Button4 = {
        text: 'Уход за кожей',
        callback_data: 'catalogSkin'
    };
    var Button5 = {
        text: 'Комплексный уход',
        callback_data: 'catalogComplex'
    };

    var Button6 = {
        text: 'Озонированное масло О3',
        callback_data: 'catalogOil'
    };

    var Button7 = {
        text: 'Назад в меню',
        callback_data: 'menuCmd'
    };

    var options = Object.assign({}, {
        reply_markup: JSON.stringify({
            inline_keyboard: [[Button1], [Button2], [Button3], [Button4], [Button5], [Button6], [Button7]]
        })
    }, {
        message_id: callbackQuery.message.message_id,
        chat_id: callbackQuery.message.chat.id
    });
    tg.editMessageText(text, options);
}

function goToCatalogFace1(callbackQuery) {

    var text = 'УХОД ЗА ЛИЦОМ\n' + '\n' + 'По отзывам косметологов, в эстетической медицине не существует проблем, которые в той или иной степени не решались бы с помощью косметики с озоном! Главный принцип действия озоновых кремов для ухода за лица — коррекция повреждений и возрастных изменений кожи за счет активизации собственных защитных сил и реакций восстановления.';

    var Button1 = {
        text: 'OZONE CREAM PV500. Озоновый крем дневной. Экспресс-уход (вакуумный флакон 50 мл)',
        callback_data: 'catalogFaceDayExpress'
    };

    var Button2 = {
        text: 'OZONE CREAM PV500. Озоновый крем ночной. Релакс (вакуумный флакон 50 мл)',
        callback_data: 'catalogFaceNightRelax'
    };

    var Button3 = {
        text: 'OzoneBeauty ® Крем для лица с озоном. Комбинированная и жирная кожа. PV 2000 (вакуумный флакон, 50 мл)',
        callback_data: 'catalogFacePV20001'
    };

    var Button4 = {
        text: 'OzoneBeauty ® Крем для лица с озоном. Сухая и нормальная кожа. PV 2000 (вакуумный флакон, 50 мл)',
        callback_data: 'catalogFacePV20002'
    };

    var Button5 = {
        text: 'Назад к каталогу',
        callback_data: 'catalogCmd'
    };
    var options = Object.assign({}, {
        reply_markup: JSON.stringify({
            inline_keyboard: [[Button1], [Button2], [Button3], [Button4], [Button5]]
        })
    }, {
        message_id: callbackQuery.message.message_id,
        chat_id: callbackQuery.message.chat.id
    });
    tg.editMessageText(text, options);
}

function goToCatalogHair1(callbackQuery) {

    var text = 'Наши озоновые крем-маски — непревзойденное средство для восстановления и роста волос. Они обладают бактерицидными и противогрибковыми свойствами, оказывают противоалергенное и проивовоспалительное действие. Пройдите курсовое лечение, и результаты вас приятно удивят!';

    var Button1 = {
        text: 'OZONE CREAM PV500',
        callback_data: 'catalogHairPV500'

    };

    var Button2 = {
        text: 'OzoneBeauty',
        callback_data: 'catalogHairOzoneBeauty'
    };

    var Button3 = {
        text: 'Назад к каталогу',
        callback_data: 'catalogCmd'
    };

    var options = Object.assign({}, {
        reply_markup: JSON.stringify({
            inline_keyboard: [[Button1], [Button2], [Button3]]
        })
    }, {
        message_id: callbackQuery.message.message_id,
        chat_id: callbackQuery.message.chat.id
    });
    tg.editMessageText(text, options);
}

function goToCatalogBody1(callbackQuery) {

    var text = 'УХОД ЗА ТЕЛОМ ЛЕНИНА\n' + '\n' + 'Антицеллюлитная серия •Уникальный комплекс озонидов расщепляет и выводит жир, повышает упругость и улучшает текстуру кожи. Заметно улучшает состояние кожи, уменьшает эффект ―апельсиновой корки‖. •Применение озон - крема усиливает лимфодренаж и выделение жидкости из тканей, что способствует быстрой потере объемов и снижению веса. •При регулярном применении озон-крем улучшает тонус кожи, придает ей эластичность и бархатистость.';

    var Button1 = {
        text: 'OzoneTherapy® Озон-крем антицеллюлитный. PV 3000. (банка 125 мл)',
        callback_data: 'catalogBodyOzoneTherapy'
    };
    var Button2 = {
        text: 'Назад к каталогу',
        callback_data: 'catalogCmd'
    };

    var options = Object.assign({}, {
        reply_markup: JSON.stringify({
            inline_keyboard: [[Button1], [Button2]]
        })
    }, {
        message_id: callbackQuery.message.message_id,
        chat_id: callbackQuery.message.chat.id
    });
    tg.editMessageText(text, options);
}

function goToCatalogSkin1(callbackQuery) {

    var text = 'ПРОФИЛАКТИЧЕСКАЯ СЕРИЯ OZODERMIS. ОЗОНОВЫЙ УХОД ЗА КОЖЕЙ\n' + '\n' + 'Представляем серию профилактических кремов OZODERMIS. Активное вещество крема – озониды, эффективное средство для лечения и восстановления поврежденной кожи. Озониды защищают кожу от вирусов и бактерий, активируют кровообращение и кислородоснабжение тканей, процессы клеточного дыхания и иммунитета, удаляют токсины, повышают устойчивость к агрессивной внешней среде. Производится 3 крема с озонидами, отличающиеся содержанием активного компонента.';

    var Button1 = {
        text: 'ОZODERMIS 3% (80ml)',
        callback_data: 'catalogSkinOzodermis3'

    };

    var Button2 = {
        text: 'ОZODERMIS 5% (50ml)',
        callback_data: 'catalogSkinOzodermis5'
    };
    var Button3 = {
        text: 'ОZODERMIS 10% (30ml)',
        callback_data: 'catalogSkinOzodermis10'
    };
    var Button4 = {
        text: 'Назад к каталогу',
        callback_data: 'catalogCmd'
    };

    var options = Object.assign({}, {
        reply_markup: JSON.stringify({
            inline_keyboard: [[Button1], [Button2], [Button3], [Button4]]
        })
    }, {
        message_id: callbackQuery.message.message_id,
        chat_id: callbackQuery.message.chat.id
    });
    tg.editMessageText(text, options);
}

function goToCatalogComplex1(callbackQuery) {

    var text = 'Коплексный уход :';
    var Button1 = {
        text: 'КОМПЛЕКС «ПОЛНОЕ ВОССТАНОВЛЕНИЕ ВОЛОС»',
        callback_data: 'catalogComplexHair'

    };

    var Button2 = {
        text: 'КОМПЛЕКС «ИДЕАЛЬНОЕ ТЕЛО»',
        callback_data: 'catalogComplexBody'
    };

    var Button3 = {
        text: 'КОМПЛЕКС «БЕЗУПРЕЧНО ЧИСТАЯ КОЖА»',
        callback_data: 'catalogComplexSkin'
    };
    var Button4 = {
        text: 'Назад к каталогу',
        callback_data: 'catalogCmd'
    };

    var options = Object.assign({}, {
        reply_markup: JSON.stringify({
            inline_keyboard: [[Button1], [Button2], [Button3], [Button4]]
        })
    }, {
        message_id: callbackQuery.message.message_id,
        chat_id: callbackQuery.message.chat.id
    });
    tg.editMessageText(text, options);
}

function goToCatalogOil1(callbackQuery) {

    var text = 'ОЗОНИРОВАННОЕ МАСЛО ОТРИ®\n' + '\n' + 'Показания к применению препаратов серии ОТРИ ®: герпес, кондиломы остроконечные, экземы, атопический дерматит, пиодермии, кандидоз, грибковые заболевания кожи и ногтей, фурункулез, баланопоститы, кольпиты, крауроз вульвы, уретриты и простатиты, раны (в т.ч. вялозаживающие), пролежни, трофические язвы, ожоги, геморрой, трещины заднего прохода, сосков, стопы, стоматиты, гингивиты, конъюнктивиты, острые воспалительные заболевания уха, горла, носа и т.п.';

    var Button1 = {
        text: 'Озонированное оливковое масло ОТРИ® 6 000 (1 упаковка = 4 флакона по 25 мл)',
        callback_data: 'catalogOilOtri6'

    };

    var Button2 = {
        text: 'Озонированное оливковое масло ОТРИ® 12000 (1 упаковка = 4 флакона по 25 мл)',
        callback_data: 'catalogOilOtri12'
    };

    var Button3 = {
        text: 'Назад к каталогу',
        callback_data: 'catalogCmd'
    };

    var options = Object.assign({}, {
        reply_markup: JSON.stringify({
            inline_keyboard: [[Button1], [Button2], [Button3]]
        })
    }, {
        message_id: callbackQuery.message.message_id,
        chat_id: callbackQuery.message.chat.id
    });
    tg.editMessageText(text, options);
}

function sendStartMessage(message) {
    var text = ' Ozone Cosmetics bot is here for you: 😘';

    var catalogButton = {
        text: 'Каталог товаров 😘',
        callback_data: 'catalogCmd'

    };

    var FAQButton = {
        text: "FAQ",
        callback_data: 'FAQCmd'
    };

    var callBackButton = {
        text: "Заказ обратного звонка",
        callback_data: 'callBackCmd'
    };

    var feedBackButton = {
        text: "Отзывы и предложения",
        callback_data: 'feedBackCmd'
    };

    var options = {};
    options.reply_markup = {};
    options.reply_markup.inline_keyboard = [];
    options.reply_markup.inline_keyboard.push([catalogButton]);
    options.reply_markup.inline_keyboard.push([FAQButton]);
    options.reply_markup.inline_keyboard.push([callBackButton]);
    options.reply_markup.inline_keyboard.push([feedBackButton]);

    tg.sendMessage(message.chat.id, text, options);
}
function sendStartMessage2(callbackQuery) {
    var text = ' Ozone Cosmetics bot is here for you: 😘';

    var catalogButton = {
        text: 'Каталог товаров',
        callback_data: 'catalogCmd'

    };

    var FAQButton = {
        text: "FAQ ",
        callback_data: 'FAQCmd'
    };

    var callBackButton = {
        text: "Заказ обратного звонка",
        callback_data: 'callBackCmd'
    };

    var feedBackButton = {
        text: " Оставить отзыв 😘",
        callback_data: 'feedBackCmd'
    };

    var options = Object.assign({}, {
        reply_markup: JSON.stringify({
            inline_keyboard: [[catalogButton], [FAQButton], [callBackButton], [feedBackButton]]
        })
    }, {
        message_id: callbackQuery.message.message_id,
        chat_id: callbackQuery.message.chat.id
    });
    tg.editMessageText(text, options);
}

create();