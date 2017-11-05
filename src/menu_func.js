
module.exports = {

    goToCallBack: function (tg, callbackQuery) {


        let options = {
            "parse_mode": "Markdown",
            "reply_markup": {
                "force_reply": true,
                //"one_time_keyboard": true,
                "resize_keyboard": true,
                "remove_keyboard": true,
                "callback_data": "numberQuery",
                "keyboard": [[{
                    text: "Заказать звонок менеджера",
                    request_contact: true
                }]]
            }
        }

        tg.sendMessage(callbackQuery.message.chat.id, 'Пожалуйста, оставьте ваш контактный номер для того, чтобы наш менеджер мог связаться с Вами 👇', options)

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

    },

    goToFAQ: function (tg, callbackQuery) {

        let text = 'В этом разделе собраны наиболее популярные темы вопросов о косметике <b>Ozone Box</b>. Если вы не нашли ответ на свой вопрос, '+
            'закажите звонок нашего менеджера в главном меню и мы с радостью Вам поможем. \n'

        let Button1 = {
            text: 'Часто задаваемые вопросы  🐼',
            callback_data: 'faqQuestionsCmd'
        }

        let Button2 = {
            text: 'Мифы vs Правда  🦄 ',
            callback_data: 'faqMythsCmd'
        }
        let Button3 = {
            text: '🔙',
            callback_data: 'menuCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
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

    goToCatalog: function (tg, callbackQuery) {

        let text = '<b>Выбери свой...</b>'+'\n'

        let Button2 = {
            text: 'OzoneBox для волос   💆',
            callback_data: 'catalogHairCmd'
        }

        let Button1 = {
            text: 'OzoneBox для лица    💁',
            callback_data: 'catalogFaceCmd'
        }

        let Button3 = {
            text: 'OzoneBox для тела    🏃‍♀️',
            callback_data: 'catalogBodyCmd'

        }
/*
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
*/
        let Button7 = {
            text: ' 🔙 ',
            callback_data: 'menuCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [
                            [Button1],
                            [Button2],
                            [Button3],
                           /* [Button4],
                            [Button5],
                            [Button6],*/
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
    },

    goToAboutInfo: function (tg, callbackQuery){
    const text = '<b>О нашей компании: \n</b>'+
        'Косметика «O’THREE COSMETICS LAB» - первый российский бренд 100% натуральной озоновой косметики ведет свою ' +
        'деятельность с 2006 года. За это время она накопила огромный опыт в области производства косметики на основе озона: ' +
        'безупречная формула и уникальные рецептуры, серьезные научные исследования, оптимальные технологические решения, '+
        'а также внедрение современных инноваций.\n' +
        ' На сегодняшний день лаборатории «O’THREE COSMETICS LAB» удалось в полной мере реализовать весь спектр целебных ' +
        'свойств озона. Косметика «O’THREE COSMETICS LAB» имеет всю необходимую сертификацию, соответствует стандартам ' +
        'качества Российского и Европейского сообщества, одобрена и рекомендована Ассоциацией Российских озонотерапевтов.\n'+
        '\n'+
        '<b>ООО «БЬЮМЕТИКС»\n</b>' +
        'официальный представитель O’THREE COSMETIC LAB ' +
        'в Санкт-Петербурге и Северо-Западном регионе\n'+
        '<b>Опыт:\n</b>' +
        'Исследования нашими учеными были начаты более 20 ' +
        'лет назад! К 2009 году «Российская школа озонотерапии» ' +
        'окончательно сформировала свой подход к применению ' +
        'озона, как лечебного средства. Безопасность и ' +
        'эффективность Российских методик озонотерапии ' +
        'многократно обоснована и доказана в различных ' +
        'областях медицины.\n'+

        '<b>Тел.</b>: +7 911 240 22 09\n' +
        '<b>Наталья Касаткина</b>, директор по маркетингу\n' +
        '<b>e-mail</b>: natalia.kasatkina@beaumetics\n' +
        '<b>Тел.</b>: +7 981 831 57 77'


        let Button1 = {
        text: '🔙',
        callback_data: 'menuCmd'
    }

    let options = Object.assign(
        {},
        {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify(
                {
                    inline_keyboard: [
                        [Button1]

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

    goToPrincip1: function(tg, callbackQuery){
        const text = '<b>ХОТИТЕ ПОПРОБОВАТЬ ЧТО-ТО НОВОЕ И ДЕЙСТВИТЕЛЬНО ЭФФЕКТИВНОЕ?\n' +
            'ТОГДА ОЗОНОВАЯ КОСМЕТИКА ДЛЯ ВАС!\n</b>'+
            '\n'+
            '<b>Озон</b> оказывает многогранное благотворное воздействие на организм ' +
            'человека: защищает от вирусов и бактерий, снимает воспаление,' +
            'стимулирует иммунитет, удаляет токсины.\n' +
            '\n'+
            '• <b>Озон</b> обладает способностью «запускать» собственную\n' +
            'антиоксидантную систему защиты организма и улучшать\n' +
            'кислородопитание. За счет этого озон помогает предотвратить старение' +
            'кожи и способствует еѐ омоложению.\n' +
            '• В нашей озоновой косметике, содержащей высокоактивные соединения ' +
            'озона – <b>озониды</b>, удалось в полной мере реализовать весь спектр ' +
            'целебных свойств озона.\n' +
            '\n'+
            '• <b>Озоновая</b> косметика эффективна и безопасна, действует\n' +
            'целенаправленно и всегда даѐт гарантированный результат\n'+
            '\n'+
            '<b>ВАЖНО!\n</b>' +
            '• Содержание озонидов в нашей озоновой косметике указано на ' +
            'упаковке. Маркировка косметики по содержанию активного\n' +
            'компонента гарантирует индивидуальный подбор, эффективность и ' +
            'безопасность применения озоновой косметики.\n'+
            '\n'+
            '<b>ЗА СЧЕТ ЧЕГО ДОСТИГАЕТСЯ ЭФФЕКТ? \n</b>'+
            '<b>Озониды</b> – главный строительный элемент эпидермиса:\n' +
            '• Стимулируют в тканях выработку собственных белков, отвечают за ' +
            'упругость, эластичность и прочность кожи;\n' +
            '• Являются активатором молодости - способствуют выработке коллагена;\n' +
            '• Препятствуют обезвоживанию кожи;\n' +
            '• Помогают возрождению клеток;\n' +
            '• Обладают мощным лифтинг-эффектом.\n' +
            '\n'+
            '<b>Оливковое масло</b>, входящее в состав продукции, ускоряет процессы ' +
            'регенерации кожи: «старые» клетки заменяются новыми – молодыми, ' +
            'наполненными жизненной энергией. Оливковое масло необходимо для ' +
            'красоты и здоровья кожи, так как оно эффективно улучшает ее текстуру и ' +
            'предотвращают повреждения на клеточном уровне.\n' +
            '\n'+
            '<b>Косметика с озоном:\n</b>' +
            '• Запускает механизмы клеточного обновления, активизирует синтез ' +
            'коллагена и межклеточного вещества дермы, укрепляет эластиновый ' +
            'матрикс, ускоряет обменные процессы;\n' +
            '• Оказывает противовирусное, антибактериальное и антимикробное ' +
            'действие, уменьшает акне, снимает воспаление и отек, ускоряет\n' +
            'заживление повреждений кожи;\n' +
            '• Энергетически подпитывает кожу, стимулирует, пробуждает,\n' +
            'омолаживает. ' +
            'Кожа приобретает жизненную силу, становится эластичной и подтянутой, ' +
            'результат виден сразу!'



        let Button1 = {
            text: '🔙',
            callback_data: 'menuCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [
                            [Button1]

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

    goToBeforeAfter1: function (tg, callbackQuery){
        const text = 'Результаты применения косметики<b> OZONE BOX </b>: \n'+
            //'<a href=" https://pp.userapi.com/c841120/v841120315/24aac/LyFIEe8q5DQ.jpg">&#8205;</a>'
            '<a href="https://pp.userapi.com/c824204/v824204587/d36b/tW3HKXnWCI8.jpg">&#8205;</a>\n'
            //'<a href=" https://pp.userapi.com/c841120/v841120315/24ab4/2nbC5yIg-qs.jpg">&#8205;</a>\n'
            /*'<a href=" https://pp.userapi.com/c841120/v841120315/24abd/cimEGZ6GRfc.jpg">&#8205;</a>\n'+
            '<a href=" https://pp.userapi.com/c841120/v841120315/24ac6/eozjunCDFwo.jpg">&#8205;</a>\n'+
            '<a href=" https://pp.userapi.com/c841120/v841120315/24ad8/RpFlG_LX5fQ.jpg">&#8205;</a>\n'+
            '<a href=" https://pp.userapi.com/c841120/v841120315/24ae1/0S3jqnd9dsw.jpg">&#8205;</a>\n'+
            '<a href=" https://pp.userapi.com/c841120/v841120315/24b04/h7b3Btfdmro.jpg">&#8205;</a>\n'+
             '<a href="https://pp.userapi.com/c841120/v841120315/24afc/hW-1_rJiw4U.jpg">&#8205;</a>\n'+
             '<a href="https://pp.userapi.com/c841120/v841120315/24af3/la9-v9tpFno.jpg">&#8205;</a>\n'+
             '<a href="https://pp.userapi.com/c840729/v840729902/eea0/ZXZYLuaNkG4.jpg">&#8205;</a>\n'*/
           //  '<a href="">&#8205;</a>\n'+


        let Button1 = {
            text: '🔙',
            callback_data: 'menuCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [
                            [Button1]

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