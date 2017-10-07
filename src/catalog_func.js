module.exports = {
   /* goToCatalogFace1: function (callbackQuery)
{

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
},

    goToCatalogHair1: function(callbackQuery) {

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
},

    goToCatalogBody1: function (callbackQuery) {

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
},

    goToCatalogSkin1: function (callbackQuery) {

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
},
goToCatalogOil1: function (callbackQuery) {

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
*/
goToCatalogComplex1: function (tg, callbackQuery) {

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



}