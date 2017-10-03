import TelegramBot from 'node-telegram-bot-api'

let botan = require('botanio')('786f747c-6fe7-4a7f-95a6-c8ef510a59f0')

let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useMongoClient: true, promiseLibrary: global.Promise});

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
//  const token = "387016243:AAEXimznXpHl5ke6qpUanexj_Wm9mH79y_s"
    const token = "467244885:AAHILNeTqyldJJzC4XLyfbIl8JxmdK8w62A"
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

    else if (callbackQuery.data === 'menuCmd') {

        const goToMenu = sendStartMessage2(callbackQuery)
    }

    else if (callbackQuery.data === 'catalogHair') {

        const goToCatalogHair = goToCatalogHair1(callbackQuery)
    }

    else if (callbackQuery.data === 'catalogFace') {
        const goToCatalogFace = goToCatalogFace1(callbackQuery)
    }
    else if (callbackQuery.data === 'catalogBody') {

        const goToCatalogBody = goToCatalogBody1(callbackQuery)
    }
    else if (callbackQuery.data === 'catalogSkin') {

        const goToCatalogSkin = goToCatalogSkin1(callbackQuery)
    }

    else if (callbackQuery.data === 'catalogComplex') {

        const goToCatalogComplex = goToCatalogComplex1(callbackQuery)
    }
    else if (callbackQuery.data === 'catalogOil') {

        const goToCatalogOil = goToCatalogOil1(callbackQuery)
    }

    else if (callbackQuery.data === 'FAQCmd') {
        const goToFromMenu2 = goToFAQ(callbackQuery)
    }

    else if (callbackQuery.data === 'callBackCmd') {
        let getNumberForCallBack = goToCallBack(callbackQuery)
    }

    else if (callbackQuery.data === 'feedBackCmd') {
        const helpText = "Если у вас есть пожелания к работе магазина, напишите сюда ваш отзыв, и мы обязательно учтем его в дальнейшей работе"

        tg.sendMessage(callbackQuery.message.chat.id, helpText)
        // tg.answerCallbackQuery(message.chat.id, text, answer)
    }
}

// *********************************************
function goToCallBack(callbackQuery) {

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

    tg.sendMessage(callbackQuery.message.chat.id,"Как с вами связаться?", options)//"text inside"

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
}

function goToCatalog(callbackQuery) {

    let text = 'Каталог нашей продукции :'

    let Button1 = {
        text: 'Уход за волосами',
        callback_data: 'catalogHair'
    }

    let Button2 = {
        text: 'Уход за лицом',
        callback_data: 'catalogFace'
    }

    let Button3 = {
        text: 'Уход за телом',
        callback_data: 'catalogBody'

    }

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
                        [Button4],
                        [Button5],
                        [Button6],
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
}

function goToCatalogFace1(callbackQuery) {

    let text = 'УХОД ЗА ЛИЦОМ\n' +
        '\n' +
        'По отзывам косметологов, в эстетической медицине не существует проблем, которые в той или иной степени не решались бы с помощью косметики с озоном! Главный принцип действия озоновых кремов для ухода за лица — коррекция повреждений и возрастных изменений кожи за счет активизации собственных защитных сил и реакций восстановления.'

    let Button1 = {
        text: 'OZONE CREAM PV500. Озоновый крем дневной. Экспресс-уход (вакуумный флакон 50 мл)',
        callback_data: 'catalogFaceDayExpress'
    }

    let Button2 = {
        text: 'OZONE CREAM PV500. Озоновый крем ночной. Релакс (вакуумный флакон 50 мл)',
        callback_data: 'catalogFaceNightRelax'
    }

    let Button3 = {
        text: 'OzoneBeauty ® Крем для лица с озоном. Комбинированная и жирная кожа. PV 2000 (вакуумный флакон, 50 мл)',
        callback_data: 'catalogFacePV20001'
    }

    let Button4 = {
        text: 'OzoneBeauty ® Крем для лица с озоном. Сухая и нормальная кожа. PV 2000 (вакуумный флакон, 50 мл)',
        callback_data: 'catalogFacePV20002'
    }

    let Button5 = {
        text: 'Назад к каталогу',
        callback_data: 'catalogCmd'
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
                        [Button4],
                        [Button5]

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

function goToCatalogHair1(callbackQuery) {

    let text = 'Наши озоновые крем-маски — непревзойденное средство для восстановления и роста волос. Они обладают бактерицидными и противогрибковыми свойствами, оказывают противоалергенное и проивовоспалительное действие. Пройдите курсовое лечение, и результаты вас приятно удивят!'

    let Button1 = {
        text: 'OZONE CREAM PV500',
        callback_data: 'catalogHairPV500'

    }

    let Button2 = {
        text: 'OzoneBeauty',
        callback_data: 'catalogHairOzoneBeauty'
    }

    let Button3 = {
        text: 'Назад к каталогу',
        callback_data: 'catalogCmd'
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
}

function goToCatalogBody1(callbackQuery) {

    let text = 'УХОД ЗА ТЕЛОМ ЛЕНИНА\n' +
        '\n' +
        'Антицеллюлитная серия •Уникальный комплекс озонидов расщепляет и выводит жир, повышает упругость и улучшает текстуру кожи. Заметно улучшает состояние кожи, уменьшает эффект ―апельсиновой корки‖. •Применение озон - крема усиливает лимфодренаж и выделение жидкости из тканей, что способствует быстрой потере объемов и снижению веса. •При регулярном применении озон-крем улучшает тонус кожи, придает ей эластичность и бархатистость.'


    let Button1 = {
        text: 'OzoneTherapy® Озон-крем антицеллюлитный. PV 3000. (банка 125 мл)',
        callback_data: 'catalogBodyOzoneTherapy'
    }
    let Button2 = {
        text: 'Назад к каталогу',
        callback_data: 'catalogCmd'
    }

    let options = Object.assign(
        {},
        {
            reply_markup: JSON.stringify(
                {
                    inline_keyboard: [
                        [Button1],
                        [Button2]
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

function goToCatalogSkin1(callbackQuery) {

    let text = 'ПРОФИЛАКТИЧЕСКАЯ СЕРИЯ OZODERMIS. ОЗОНОВЫЙ УХОД ЗА КОЖЕЙ\n' +
        '\n' +
        'Представляем серию профилактических кремов OZODERMIS. Активное вещество крема – озониды, эффективное средство для лечения и восстановления поврежденной кожи. Озониды защищают кожу от вирусов и бактерий, активируют кровообращение и кислородоснабжение тканей, процессы клеточного дыхания и иммунитета, удаляют токсины, повышают устойчивость к агрессивной внешней среде. Производится 3 крема с озонидами, отличающиеся содержанием активного компонента.'

    let Button1 = {
        text: 'ОZODERMIS 3% (80ml)',
        callback_data: 'catalogSkinOzodermis3'

    }

    let Button2 = {
        text: 'ОZODERMIS 5% (50ml)',
        callback_data: 'catalogSkinOzodermis5'
    }
    let Button3 = {
        text: 'ОZODERMIS 10% (30ml)',
        callback_data: 'catalogSkinOzodermis10'
    }
    let Button4 = {
        text: 'Назад к каталогу',
        callback_data: 'catalogCmd'
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
                        [Button4]
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

function goToCatalogComplex1(callbackQuery) {

    let text = 'Коплексный уход :'
    let Button1 = {
        text: 'КОМПЛЕКС «ПОЛНОЕ ВОССТАНОВЛЕНИЕ ВОЛОС»',
        callback_data: 'catalogComplexHair'

    }

    let Button2 = {
        text: 'КОМПЛЕКС «ИДЕАЛЬНОЕ ТЕЛО»',
        callback_data: 'catalogComplexBody'
    }


    let Button3 = {
        text: 'КОМПЛЕКС «БЕЗУПРЕЧНО ЧИСТАЯ КОЖА»',
        callback_data: 'catalogComplexSkin'
    }
    let Button4 = {
        text: 'Назад к каталогу',
        callback_data: 'catalogCmd'
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
                        [Button4]
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

function goToCatalogOil1(callbackQuery) {

    let text = 'ОЗОНИРОВАННОЕ МАСЛО ОТРИ®\n' +
        '\n' +
        'Показания к применению препаратов серии ОТРИ ®: герпес, кондиломы остроконечные, экземы, атопический дерматит, пиодермии, кандидоз, грибковые заболевания кожи и ногтей, фурункулез, баланопоститы, кольпиты, крауроз вульвы, уретриты и простатиты, раны (в т.ч. вялозаживающие), пролежни, трофические язвы, ожоги, геморрой, трещины заднего прохода, сосков, стопы, стоматиты, гингивиты, конъюнктивиты, острые воспалительные заболевания уха, горла, носа и т.п.'

    let Button1 = {
        text: 'Озонированное оливковое масло ОТРИ® 6 000 (1 упаковка = 4 флакона по 25 мл)',
        callback_data: 'catalogOilOtri6'

    }

    let Button2 = {
        text: 'Озонированное оливковое масло ОТРИ® 12000 (1 упаковка = 4 флакона по 25 мл)',
        callback_data: 'catalogOilOtri12'
    }

    let Button3 = {
        text: 'Назад к каталогу',
        callback_data: 'catalogCmd'
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
}


function sendStartMessage(message) {
    let text = ' Ozone Cosmetics bot is here for you: 😘'

    let catalogButton = {
        text: 'Каталог товаров 😘',
        callback_data: 'catalogCmd'

    }

    let FAQButton = {
        text: "FAQ",
        callback_data: 'FAQCmd'
    }

    let callBackButton = {
        text: "Заказ обратного звонка",
        callback_data: 'callBackCmd'
    }

    let feedBackButton = {
        text: "Отзывы и предложения",
        callback_data: 'feedBackCmd'
    }


    let options = {}
    options.reply_markup = {}
    options.reply_markup.inline_keyboard = []
    options.reply_markup.inline_keyboard.push([catalogButton])
    options.reply_markup.inline_keyboard.push([FAQButton])
    options.reply_markup.inline_keyboard.push([callBackButton])
    options.reply_markup.inline_keyboard.push([feedBackButton])

    tg.sendMessage(message.chat.id, text, options)
}
function sendStartMessage2(callbackQuery) {
    let text = ' Ozone Cosmetics bot is here for you: 😘'

    let catalogButton = {
        text: 'Каталог товаров',
        callback_data: 'catalogCmd'

    }

    let FAQButton = {
        text: "FAQ ",
        callback_data: 'FAQCmd'
    }

    let callBackButton = {
        text: "Заказ обратного звонка",
        callback_data: 'callBackCmd'
    }

    let feedBackButton = {
        text: " Оставить отзыв 😘",
        callback_data: 'feedBackCmd'
    }

    let options = Object.assign(
    {},
    {
        reply_markup: JSON.stringify(
            {
                inline_keyboard: [
                    [catalogButton],
                    [FAQButton],
                    [callBackButton],
                    [feedBackButton]
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

create()