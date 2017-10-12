module.exports ={

    goToFaqMyths: function(tg, callbackQuery){
        let text ='<b>Мифы и правда об озоновой косметике: \n</b>'


        let Button1 = {
            text: 'МИФ №1. Озоновый запах.',
            callback_data: 'myth1Cmd'
        }

        let Button2 = {
            text: 'МИФ №2. Я пробовала – она не работает.',
            callback_data: 'myth2Cmd'
        }
        let Button3 = {
            text: 'Реальность: наши комплексы ',
            callback_data: 'myth3Cmd'
        }

        let Button4 = {
            text: "🔙",
            callback_data: 'FAQCmd'
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

    goTo1Myth : function(tg, callbackQuery){

        let text = "<b>МИФ №1. Озоновые крема имеют ярко выраженный специфический запах.\n</b>"+
            'Собственно говоря, и отрицать тут нечего – все верно! Озоновая косметика пахнет озоном. А чем другим она должна пахнуть? Скажу больше: хорошая озоновая косметика ДОЛЖНА пахнуть озоном! Если озоновый крем не имеет характерного запаха – это должно вас насторожить, т.к. возникает резонный вопрос: а есть ли там вообще озон? За что Вы платите деньги? За пустой крем с отдушкой лаванды? Приятный носу, но пустой для кожи?\n' +
            '\n' +
            'Теперь по поводу специфичности этого самого запаха: где в природе мы можем слышать запах озона? Правильно, летом после грозы. Большинству моих подруг этот запах нравится – он ассоциируется у них со свежестью. Поэтому все относительно. Кто-то сочтет запах озона специфично-отталкивающим, а для кого-то он приятен. Ведь и парфюм мы приобретаем, полагаясь исключительно на своё обоняние: нет универсального аромата, который боготворят все.\n' +
            '\n' +
            'Таким образом, итог: настоящая озонсодержащая косметика пахнет и должна пахнуть озоном! Этот запах – свидетельство неподдельной продукции. Каждый человек воспринимает запах озона по-разному, равно как и любые другие запахи – это нормально!\n' +
            '\n'
        let Button1 = {
            text: '🔙',
            callback_data: 'faqMythsCmd'
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

    goTo2Myth : function(tg, callbackQuery){

        let text ='<b>МИФ №2. Я пробовал (-ла) озоновую косметику – она не работает.\n</b>' +
            'Зачастую слышу и такое. Например, был случай: девушка, будучи в положении, испытывала проблему с внезапным появлением прыщиков. Очень важно понимать причину явления, и тогда бороться с ним будет гораздо проще. В данном конкретном случае озоновый крем сделал свое дело на сколько смог: кожа стала ровнее, здоровее, нормализовался цвет лица, прыщики стали меньше в размерах и сократилось их количество. НО! Прыщики не ушли до конца, из-за чего девушка сделала вывод: «косметика не работает». Это не правильный вывод. Появление акне было обусловлено гормональными причинами, которые и лечить-то не нужно было – нужно было просто родить J Природа умнее нас, она все предусмотрела. Использование озонового крема помогло, это очевидно. Но не стоить играть с природой и пытаться её переиграть. Будьте здоровы!\n' +
            '\n'+
            '\n'
        let Button1 = {
            text: '🔙',
            callback_data: 'faqMythsCmd'
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

    goTo3Myth : function(tg, callbackQuery){

        let text = '<b>Не миф – реальность: наши комплексы и личная жизнь.\n</b>'+
            'Любить – это хотеть прикасаться. Согласны? Неукротимое желание постоянно трогать и обнимать объект своего вожделения, а уж покопаться в волосах любимой и «занырнуть» в них – это обычное дело. А теперь представьте, что у Вас на голове не полный порядок. При это в самой голове все ок! Потому что Вы понимаете, перхоть на голове или случайно нащупанная болячка вашим любимым не доставят ему эстетического наслаждения. Это понимание рождает комплексы, зажатое поведение, когда вы не можете полностью расслабиться.\n' +
            '\n' +
            'Беда усугубляется тем, что иногда мы и вовсе не знаем о том, в каком состоянии, например, наш затылок (я еще не встречала ни одного человека, у которого был бы там третий глаз!). А если проблема только начинается? Ответ очевиден: не запускать себя. Ибо профилактика – лучшее, что мы можем сделать для себя сами, без обращения ко врачу.\n' +
            '\n' +
            'Позаботьтесь о своих волосах, любите себя и будьте в себе уверены.\n'
        let Button1 = {
            text: '🔙',
            callback_data: 'faqMythsCmd'
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

    goToFaqQuestions: function (tg, callbackQuery) {
        let text = 'Наиболее часто задаваемые вопросы: \n'+
            ' \n'+
            '1. У озона формула О3, а у вас в описании О2, а это уже кислород. \n'+
            '2. Про озонированное оливковое масло: \n'+
            '3. Я извиняюсь что достаю, но насколько я знаю, из уроков химии, озон не подлежит ни транспортировке и уж тем более хранению. Или к примеру то, что озон относится к высокому классу опасности поэтому ядовит. Особенно если он проникает во внутренние клетки кожи и там как я понимаю уже распадается Просто интересен процесс)) не представляю как это делается.. Как они впихнули воздух в масло?)) Я тут прочитала, что сам озон это не стабильная молекула, способная за несколько минут превращаться в кислород с выделением тепла при нормальных условиях.. Поэтому не понятно как стабильно он может держаться во флаконах с кремом.. И получается в итоге не озоновая косметика, а кислородная))\n'+
            '4. Как озонированное масло влияет на поры кожи? Просто на сколько я знаю по своей коже – поры на коже забиваются сильно. Косметолог мне запретил пользоваться маслом. Извините за вопросы ))) Просто 3 года своей жизни я потратила чтобы вытащить кожу лица из...... Занесла бактерии после пользования просроченной пудрой \n'+
            '5. Какое средство лучше взять при псориазе и дерматите?\n'+
            '6. Как масло может помочь от стоматита? Полость рта надо смывать?\n'+
            '7. А при Коньюктивите? Глаза же драть будет.'

        let Button1 = {
            text: '🔙',
            callback_data: 'faqMythsCmd'
        }

        let Button1 = {
            text: '🔙',
            callback_data: 'faqMythsCmd'
        }




        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button1],

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