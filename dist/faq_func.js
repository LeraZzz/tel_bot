'use strict';

module.exports = {

    goToFaqMyths: function goToFaqMyths(tg, callbackQuery) {
        var text = '<b>Мифы и правда об озоновой косметике: \n</b>';

        var Button1 = {
            text: 'МИФ №1. Озоновый запах.',
            callback_data: 'myth1Cmd'
        };

        var Button2 = {
            text: 'МИФ №2. Я пробовала – она не работает.',
            callback_data: 'myth2Cmd'
        };
        var Button3 = {
            text: 'Реальность: наши комплексы ',
            callback_data: 'myth3Cmd'
        };

        var Button4 = {
            text: "🔙",
            callback_data: 'FAQCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1], [Button2], [Button3], [Button4]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    },

    goTo1Myth: function goTo1Myth(tg, callbackQuery) {

        var text = "<b>МИФ №1. Озоновые крема имеют ярко выраженный специфический запах.\n</b>" + 'Собственно говоря, и отрицать тут нечего – все верно! Озоновая косметика пахнет озоном. А чем другим она должна пахнуть? Скажу больше: хорошая озоновая косметика ДОЛЖНА пахнуть озоном! Если озоновый крем не имеет характерного запаха – это должно вас насторожить, т.к. возникает резонный вопрос: а есть ли там вообще озон? За что Вы платите деньги? За пустой крем с отдушкой лаванды? Приятный носу, но пустой для кожи?\n' + '\n' + 'Теперь по поводу специфичности этого самого запаха: где в природе мы можем слышать запах озона? Правильно, летом после грозы. Большинству моих подруг этот запах нравится – он ассоциируется у них со свежестью. Поэтому все относительно. Кто-то сочтет запах озона специфично-отталкивающим, а для кого-то он приятен. Ведь и парфюм мы приобретаем, полагаясь исключительно на своё обоняние: нет универсального аромата, который боготворят все.\n' + '\n' + 'Таким образом, итог: настоящая озонсодержащая косметика пахнет и должна пахнуть озоном! Этот запах – свидетельство неподдельной продукции. Каждый человек воспринимает запах озона по-разному, равно как и любые другие запахи – это нормально!\n' + '\n';
        var Button1 = {
            text: '🔙',
            callback_data: 'faqMythsCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    },

    goTo2Myth: function goTo2Myth(tg, callbackQuery) {

        var text = '<b>МИФ №2. Я пробовал (-ла) озоновую косметику – она не работает.\n</b>' + 'Зачастую слышу и такое. Например, был случай: девушка, будучи в положении, испытывала проблему с внезапным появлением прыщиков. Очень важно понимать причину явления, и тогда бороться с ним будет гораздо проще. В данном конкретном случае озоновый крем сделал свое дело на сколько смог: кожа стала ровнее, здоровее, нормализовался цвет лица, прыщики стали меньше в размерах и сократилось их количество. НО! Прыщики не ушли до конца, из-за чего девушка сделала вывод: «косметика не работает». Это не правильный вывод. Появление акне было обусловлено гормональными причинами, которые и лечить-то не нужно было – нужно было просто родить J Природа умнее нас, она все предусмотрела. Использование озонового крема помогло, это очевидно. Но не стоить играть с природой и пытаться её переиграть. Будьте здоровы!\n' + '\n' + '\n';
        var Button1 = {
            text: '🔙',
            callback_data: 'faqMythsCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    },

    goTo3Myth: function goTo3Myth(tg, callbackQuery) {

        var text = '<b>Не миф – реальность: наши комплексы и личная жизнь.\n</b>' + 'Любить – это хотеть прикасаться. Согласны? Неукротимое желание постоянно трогать и обнимать объект своего вожделения, а уж покопаться в волосах любимой и «занырнуть» в них – это обычное дело. А теперь представьте, что у Вас на голове не полный порядок. При это в самой голове все ок! Потому что Вы понимаете, перхоть на голове или случайно нащупанная болячка вашим любимым не доставят ему эстетического наслаждения. Это понимание рождает комплексы, зажатое поведение, когда вы не можете полностью расслабиться.\n' + '\n' + 'Беда усугубляется тем, что иногда мы и вовсе не знаем о том, в каком состоянии, например, наш затылок (я еще не встречала ни одного человека, у которого был бы там третий глаз!). А если проблема только начинается? Ответ очевиден: не запускать себя. Ибо профилактика – лучшее, что мы можем сделать для себя сами, без обращения ко врачу.\n' + '\n' + 'Позаботьтесь о своих волосах, любите себя и будьте в себе уверены.\n';
        var Button1 = {
            text: '🔙',
            callback_data: 'faqMythsCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    },

    goToFaqQuestions: function goToFaqQuestions(tg, callbackQuery) {
        var text = 'Здесь перечислены наиболее часто встречающиеся сомнения и вопросы про нашу продукцию <b>Ozone Box</b>: \n' + '\n';

        var Button1 = {
            text: 'Формула озона',
            callback_data: 'faq1Cmd'
        };

        var Button2 = {
            text: 'Озонированное оливковое масло',
            callback_data: 'faq2Cmd'
        };
        var Button3 = {
            text: 'Технология производства',
            callback_data: 'faq3Cmd'
        };
        var Button4 = {
            text: 'Влияние масла на поры кожи',
            callback_data: 'faq4Cmd'
        };
        var Button5 = {
            text: 'Средства при псориазе и дерматите',
            callback_data: 'faq5Cmd'
        };
        var Button6 = {
            text: 'Помощь при стоматите',
            callback_data: 'faq6Cmd'
        };
        var Button7 = {
            text: 'Помощь при коньюктивите',
            callback_data: 'faq7Cmd'
        };
        var Button8 = {
            text: '🔙',
            callback_data: 'FAQCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1], [Button2], [Button3], [Button4], [Button5], [Button6], [Button7], [Button8]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });

        tg.editMessageText(text, options);
    },

    goTo7Faq: function goTo7Faq(tg, callbackQuery) {
        var text = '<b>Как использовать масло при коньюктивите? Не будет ли больно глазам?</b>>\n' + '\n' + 'При коньюнктивите следует применять специальное слабоозонированное масло, с низкими кислотными и пероксидными числами. ОТРИ 6000 и ОТРИ 12000 для этих целей не подходят.\n';

        var Button1 = {
            text: '🔙',
            callback_data: 'faqQuestionsCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });

        tg.editMessageText(text, options);
    },

    goTo1Faq: function goTo1Faq(tg, callbackQuery) {
        var text = '<b> У озона формула О3, а у вас в описании О2, а это уже кислород.</b>\n' + '\n' + 'Кратко.\n' + 'Действующее вещество озоновой косметики – озониды. Их получают, пропуская озон через благородное оливковое масло. Для успешного применения нужно знать, сколько озонидов содержит косметика. Количество озонидов определяется методом титрования и измеряется в миллиграммах активного кислорода (или активных форм кислорода). Записывается так : мг О2. Кстати, лечебное действие и озона, и озонидов, связывают, в основном, с действием активных форм кислорода.';

        var Button1 = {
            text: '🔙',
            callback_data: 'faqQuestionsCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });

        tg.editMessageText(text, options);
    },

    goTo2Faq: function goTo2Faq(tg, callbackQuery) {
        var text = '<b> Вы знаете что при окислении масла получается очень нехорошее вещество? А озонирование – это и есть окисление! Может газификация? Может вы совсем запутались…\n</b>' + '\n' + 'Кратко.\n' + '\n' + 'Да, действительно, в результате длительного хранения на свету, да ещё при повышенной температуре, растительные масла окисляются, портятся, проще говоря - прогоркают. При этом они приобретают неприятный запах и вкус, который им сообщается продуктами окисления: альдегидами, кетонами, гидроксикислотами и пр. И Вы правы, эти продукты окисления, мягко говоря, неполезны при употреблении в пищу.\n' + '\n' + 'То, что происходит при озонировании, окислением можно назвать лишь с большой натяжкой. При озонировании в оливковом масле происходит целый ряд химических реакций и связанных с ними изменений, которые обуславливают совершенно другие свойства конечного продукта. Проозонированное оливковое масло содержит контролируемое количество полезных соединений (озонидов) и «неполезных» веществ (см. выше), что совершенно не снижает общей ценности продукта, тем более что он не предназначен для употребления в пищу.';

        var Button1 = {
            text: '🔙',
            callback_data: 'faqQuestionsCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });

        tg.editMessageText(text, options);
    },

    goTo3Faq: function goTo3Faq(tg, callbackQuery) {
        var text = '<b> Я извиняюсь что достаю, но насколько я знаю, из уроков химии, озон не подлежит ни транспортировке и уж тем более хранению. Или к примеру то, что озон относится к высокому классу опасности поэтому ядовит. Особенно если он проникает во внутренние клетки кожи и там как я понимаю уже распадается Просто интересен процесс)) не представляю как это делается.. Как они впихнули воздух в масло?)) Я тут прочитала, что сам озон это не стабильная молекула, способная за несколько минут превращаться в кислород с выделением тепла при нормальных условиях.. Поэтому не понятно как стабильно он может держаться во флаконах с кремом.. И получается в итоге не озоновая косметика, а кислородная))</b>\n' + '\n' + 'Всё верно, озон это газ, время его жизни исчисляется минутами, он распадается под воздействием ультрафиолета. Не удивительно, что лечение с помощью озона (озонотерапия) выполняется около озонатора, сразу после получения озона.\n' + '\n' + 'Но активное вещество нашей озоновой косметики не короткоживущий озон, а озониды, устойчивые соединения озона с ненасыщенными жирными кислотами, содержащимися в оливковом масле. Проще говоря, мы сначала получаем озонированное оливковое масло с высоким содержанием озонидов (ОТРИ 20000), а потом, в процессе производства, добавляем его в продукцию. Озониды сохраняют целебные свойства озона в течение нескольких лет, это своеобразные «аккумуляторы» энергии озона, высвобождающие её при нанесении кожу.\n' + '\n' + 'Почему косметика называется озоновая, а не кислородная? Потому что косметика с озонидами относится к озонотерапии, к озоновому лечению.\n' + '\n' + 'И Вы правы, газ озон вдыхать нельзя, он ядовит, но в нашей косметике озон «связан», «аккумулирован» в креме и поэтому не опасен.';

        var Button1 = {
            text: '🔙',
            callback_data: 'faqQuestionsCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });

        tg.editMessageText(text, options);
    },

    goTo4Faq: function goTo4Faq(tg, callbackQuery) {
        var text = '<b> Как озонированное масло влияет на поры кожи? Просто на сколько я знаю по своей коже – поры на коже забиваются сильно. Косметолог мне запретил пользоваться маслом. Извините за вопросы ))) Просто 3 года своей жизни я потратила чтобы вытащить кожу лица из...... Занесла бактерии после пользования просроченной пудрой</b>\n' + '\n' + 'Озонированное масло по лицу используют ограниченно, локально, как правило, с лечебными целями. Для ухода за лицом следует использовать озоновые крема. Занести бактерии с озоновой косметикой (и озонированным маслом) невозможно, в ней они не выживут, поскольку такая\n' + '\n' + 'косметика быстро подавляет любые вирусы и бактерии. Более того, озоновую косметику успешно применяют для борьбы с бактериальной и вирусной инфекцией на коже и слизистых.';

        var Button1 = {
            text: '🔙',
            callback_data: 'faqQuestionsCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });

        tg.editMessageText(text, options);
    },

    goTo5Faq: function goTo5Faq(tg, callbackQuery) {
        var text = '<b> Какое средство лучше взять при псориазе и дерматите?</b>\n' + '\n' + 'Озоновые крема для волос, лица, тела, в зависимости от места применения.';

        var Button1 = {
            text: '🔙',
            callback_data: 'faqQuestionsCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });

        tg.editMessageText(text, options);
    },

    goTo6Faq: function goTo6Faq(tg, callbackQuery) {
        var text = '<b>Как масло может помочь от стоматита? Полость рта надо смывать? </b>\n' + '\n' + 'При стоматитах (включая герпетический стоматит) на язвочки нанести озонированное масло ОТРИ 6000 или ОТРИ 12000 (подобрать, чтобы не было жжения) несколько раз в день.';

        var Button1 = {
            text: '🔙',
            callback_data: 'faqQuestionsCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });

        tg.editMessageText(text, options);
    }

};