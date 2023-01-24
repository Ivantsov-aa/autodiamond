let store = {
    headerNav: [
        {
            name: 'Гарантия',
            path: '/guarantee'
        },
        {
            name: 'Доставка',
            path: '/delivery'
        },
        {
            name: 'Каталог',
            path: '/catalog'
        },
        {
            name: 'Контакты',
            path: '/contacts'
        }
    ],
    footerNav: [
        {
            name: 'Гарантия',
            path: '/guarantee'
        },
        {
            name: 'Доставка',
            path: '/delivery'
        },
        {
            name: 'Запчасти',
            path: '/catalog'
        },
        {
            name: 'Контакты',
            path: '/contacts'
        }
    ],
    // catalog: [
    //     {
    //         logo: './images/brand-logo/chery-logo.svg',
    //         name: 'Chery',
    //         models: [
    //             {
    //                 model: 'Amulet',
    //                 spares: [
    //                     {
    //                         selected: false,
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 selected: false,
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     {
    //                                         selected: false,
    //                                         value: 'chains',
    //                                         name: 'CHAIN,TIMING',
    //                                         parts: [
    //                                             {
    //                                                 selected: false,
    //                                                 title: 'Зубчатый ремень ГРМ',
    //                                                 article: '4801007081BA',
    //                                                 manufacturer: 'Gates',
    //                                                 analogue: [
    //                                                     {
    //                                                         selected: false,
    //                                                         photo: '/images/default-icon-product.svg',
    //                                                         title: 'Ремень ГРМ Chery 1.6 16V Z=97*21.6 04- Gates 5665XS',
    //                                                         article: '5665XS',
    //                                                         manufacturer: 'Gates',
    //                                                         group: 'engine',
    //                                                         category: 'chains',
    //                                                         description: 'Gates – один из немногих производителей приводных ремней и ремней ГРМ в мире, держатель патентов в этой области, крупнейший производитель OEM. Многие конкуренты самостоятельно не производят ремни.',
    //                                                         price: 129,
    //                                                         quantity: 1,
    //                                                         stock: [
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Колосовая, д. 12',
    //                                                                 quantity: 12
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Ангарская, д. 9',
    //                                                                 quantity: 22
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, пр-кт. Героев Сталинграда, д. 21',
    //                                                                 quantity: 17
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Землячки, д. 39-Г',
    //                                                                 quantity: 9
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Еременко, д. 53',
    //                                                                 quantity: 14
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волжский, пр. Ленина, д. 104-а',
    //                                                                 quantity: 23
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Астрахань, ул. Б. Хмельницкого, д. 5',
    //                                                                 quantity: 15
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Ростов - на - Дону, пр. Королёва, д. 1 п',
    //                                                                 quantity: 6
    //                                                             }
    //                                                         ]
    //                                                     },
    //                                                     {
    //                                                         selected: false,
    //                                                         photo: '/images/default-icon-product.svg',
    //                                                         title: 'Зубчатый ремень ГРМ Dayco DY FORD Escort 5357XS DAYCO 94324',
    //                                                         article: '94324',
    //                                                         manufacturer: 'DAYCO',
    //                                                         group: 'engine',
    //                                                         category: 'chains',
    //                                                         description: 'Dayco – это второй по величине в мире изготовитель приводных ремней и ремней ГРМ для автомобилей. Dayco входит в состав одного из крупнейших мировых производителей автомобильных компонентов — компанию Mark IV Automotive, которая, в свою очередь, является частью транснациональной корпорации Mark IV Group.',
    //                                                         price: 39,
    //                                                         quantity: 1,
    //                                                         stock: [
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Колосовая, д. 12',
    //                                                                 quantity: 9
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Ангарская, д. 9',
    //                                                                 quantity: 24
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, пр-кт. Героев Сталинграда, д. 21',
    //                                                                 quantity: 13
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Землячки, д. 39-Г',
    //                                                                 quantity: 15
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Еременко, д. 53',
    //                                                                 quantity: 18
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волжский, пр. Ленина, д. 104-а',
    //                                                                 quantity: 14
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Астрахань, ул. Б. Хмельницкого, д. 5',
    //                                                                 quantity: 6
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Ростов - на - Дону, пр. Королёва, д. 1 п',
    //                                                                 quantity: 16
    //                                                             }
    //                                                         ]
    //                                                     },
    //                                                     {
    //                                                         selected: false,
    //                                                         photo: '/images/default-icon-product.svg',
    //                                                         title: 'Ремень ГРМ! 97x22 Ford Escort/Orion/Fiesta 1.6 CVH 92-00 STELLOX 09-04324-SX',
    //                                                         article: '09-04324-SX',
    //                                                         manufacturer: 'STELLOX',
    //                                                         group: 'engine',
    //                                                         category: 'chains',
    //                                                         description: ' Stellox – известная европейская фирма, которая может похвастать широким охватом рынка.',
    //                                                         price: 32,
    //                                                         quantity: 1,
    //                                                         stock: [
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Колосовая, д. 12',
    //                                                                 quantity: 5
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Ангарская, д. 9',
    //                                                                 quantity: 27
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, пр-кт. Героев Сталинграда, д. 21',
    //                                                                 quantity: 18
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Землячки, д. 39-Г',
    //                                                                 quantity: 4
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Еременко, д. 53',
    //                                                                 quantity: 9
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волжский, пр. Ленина, д. 104-а',
    //                                                                 quantity: 11
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Астрахань, ул. Б. Хмельницкого, д. 5',
    //                                                                 quantity: 13
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Ростов - на - Дону, пр. Королёва, д. 1 п',
    //                                                                 quantity: 19
    //                                                             }
    //                                                         ]
    //                                                     }
    //                                                 ]
    //                                             }
    //                                         ]
    //                                     },
    //                                     {
    //                                         selected: false,
    //                                         name: 'INTAKE MANIFOLD',
    //                                         parts: []
    //                                     },
    //                                     {
    //                                         selected: false,
    //                                         name: 'LUBRICATING SYSTEM',
    //                                         parts: []
    //                                     },
    //                                     {
    //                                         selected: false,
    //                                         name: 'Блок цилиндров',
    //                                         parts: []
    //                                     },
    //                                     {
    //                                         selected: false,
    //                                         name: 'Выхлопная система',
    //                                         parts: []
    //                                     },
    //                                     {
    //                                         selected: false,
    //                                         name: 'Головка цилиндра',
    //                                         parts: []
    //                                     },
    //                                     {
    //                                         selected: false,
    //                                         name: 'Клапанная крышка',
    //                                         parts: []
    //                                     },
    //                                     {
    //                                         selected: false,
    //                                         name: 'Клапанный механизм',
    //                                         parts: []
    //                                     },
    //                                     {
    //                                         selected: false,
    //                                         name: 'Поддон картера',
    //                                         parts: []
    //                                     },
    //                                     {
    //                                         selected: false,
    //                                         name: 'Поршень в сборе',
    //                                         parts: []
    //                                     },
    //                                     {
    //                                         selected: false,
    //                                         name: 'Система зажигания',
    //                                         parts: []
    //                                     },
    //                                     {
    //                                         selected: false,
    //                                         name: 'Система охлаждения',
    //                                         parts: []
    //                                     },
    //                                 ]
    //                             },
    //                             {
    //                                 selected: false,
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 selected: false,
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 selected: false,
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'electrician',
    //                         name: 'Электрика',
    //                         categories: [
    //                             {
    //                                 selected: false,
    //                                 name: 'Chery',
    //                                 products: [
    //                                     {
    //                                         selected: false,
    //                                         value: 'others',
    //                                         name: 'Разное',
    //                                         parts: [
    //                                             {
    //                                                 selected: false,
    //                                                 title: 'Комплект универсальной проводки',
    //                                                 article: '9851478',
    //                                                 manufacturer: 'Baltex',
    //                                                 analogue: [
    //                                                     {
    //                                                         selected: false,
    //                                                         photo: '/images/default-icon-product.svg',
    //                                                         title: 'Комплект универсальной проводки (электрики) Baltex для фаркопа (длина 2,1 м), 7 контактный tb00004',
    //                                                         article: 'tb00004',
    //                                                         manufacturer: 'Baltex',
    //                                                         group: 'electrician',
    //                                                         category: 'others',
    //                                                         description: 'Компания Балтекс расположена в Санкт-Петербурге и входит в группу компаний Металлопродукция.',
    //                                                         price: 1002,
    //                                                         quantity: 1,
    //                                                         stock: [
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Колосовая, д. 12',
    //                                                                 quantity: 4
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Ангарская, д. 9',
    //                                                                 quantity: 19
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, пр-кт. Героев Сталинграда, д. 21',
    //                                                                 quantity: 24
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Землячки, д. 39-Г',
    //                                                                 quantity: 3
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Еременко, д. 53',
    //                                                                 quantity: 18
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волжский, пр. Ленина, д. 104-а',
    //                                                                 quantity: 11
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Астрахань, ул. Б. Хмельницкого, д. 5',
    //                                                                 quantity: 19
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Ростов - на - Дону, пр. Королёва, д. 1 п',
    //                                                                 quantity: 10
    //                                                             }
    //                                                         ]
    //                                                     },
    //                                                     {
    //                                                         selected: false,
    //                                                         photo: '/images/default-icon-product.svg',
    //                                                         title: 'Провода высоковольтные комплект 1.6L TESLA',
    //                                                         article: 'A11-3707130EA-60EA',
    //                                                         manufacturer: 'TESLA BLANTA',
    //                                                         group: 'electrician',
    //                                                         category: 'others',
    //                                                         description: 'Более 40 лет компания «TESLA BLATNA a.s.» занимается разработкой, производством и продажей высоковольтных проводов для систем зажигания.',
    //                                                         price: 1638,
    //                                                         quantity: 1,
    //                                                         stock: [
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Колосовая, д. 12',
    //                                                                 quantity: 9
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Ангарская, д. 9',
    //                                                                 quantity: 24
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, пр-кт. Героев Сталинграда, д. 21',
    //                                                                 quantity: 13
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Землячки, д. 39-Г',
    //                                                                 quantity: 15
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волгоград, ул. Еременко, д. 53',
    //                                                                 quantity: 18
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Волжский, пр. Ленина, д. 104-а',
    //                                                                 quantity: 14
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Астрахань, ул. Б. Хмельницкого, д. 5',
    //                                                                 quantity: 6
    //                                                             },
    //                                                             {
    //                                                                 store: 'г. Ростов - на - Дону, пр. Королёва, д. 1 п',
    //                                                                 quantity: 16
    //                                                             }
    //                                                         ]
    //                                                     }
    //                                                 ]
    //                                             }
    //                                         ]
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Bonus',
    //                 spares: [
    //                     {
    //                         selected: false,
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Cross',
    //                 spares: [
    //                     {
    //                         selected: false,
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Eastar',
    //                 spares: [
    //                     {
    //                         selected: false,
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Foralndi',
    //                 spares: [
    //                     {
    //                         selected: false,
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'SKimoM11',
    //                 spares: [
    //                     {
    //                         selected: false,
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'M12',
    //                 spares: [
    //                     {
    //                         selected: false,
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'QQ',
    //                 spares: [
    //                     {
    //                         selected: false,
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'QQ6',
    //                 spares: [
    //                     {
    //                         selected: false,
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Tiggo',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Very',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //         ]
    //     },
    //     {
    //         logo: './images/brand-logo/geely-logo.svg',
    //         name: 'Geely',
    //         models: [
    //             {
    //                 model: 'Atlas',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Emgrand 7',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Emgrand GT',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Emgrand X7',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'GS6',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'MK',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'MK Cross',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Otaka',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'SC7',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Vision',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //         ]
    //     },
    //     {
    //         logo: './images/brand-logo/great-wall-logo.svg',
    //         name: 'Great Wall',
    //         models: [
    //             {
    //                 model: 'Coolbear',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Cowry',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Deer',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Florid',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Hover',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Hover H3',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Hover H5',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Hover M2',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Pegasus',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Peri',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //         ]
    //     },
    //     {
    //         logo: './images/brand-logo/lifan-logo.svg',
    //         name: 'Lifan',
    //         models: [
    //             {
    //                 model: 'Breez',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Cebrium',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Celliya',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Murman',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Myway',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Smily',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Solano',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'X50',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'X60',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'X70',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //         ]
    //     },
    //     {
    //         logo: './images/brand-logo/vortex-logo.svg',
    //         name: 'Vortex',
    //         models: [
    //             {
    //                 model: 'Estina',
    //                 spares: [
    //                     {
    //                         selected: false,
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         selected: false,
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //         ]
    //     },
    //     {
    //         logo: './images/brand-logo/byd-logo.svg',
    //         name: 'BYD',
    //         models: [
    //             {
    //                 model: 'F0',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'F3',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'F3R',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //         ]
    //     },
    //     {
    //         logo: './images/brand-logo/changan-logo.svg',
    //         name: 'Changan',
    //         models: [
    //             {
    //                 model: 'CS35',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'Eado',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //         ]
    //     },
    //     {
    //         logo: './images/brand-logo/haval-logo.svg',
    //         name: 'HAVAL'
    //     },
    //     {
    //         logo: './images/brand-logo/faw-logo.svg',
    //         name: 'FAW',
    //         models: [
    //             {
    //                 model: 'Besturn B50',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'V2',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //             {
    //                 model: 'V5',
    //                 spares: [
    //                     {
    //                         value: 'engine',
    //                         name: 'Двигатель',
    //                         categories: [
    //                             {
    //                                 name: 'BMW ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'MULTIPOINT ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'UAES MULTIPOINT',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             },
    //                             {
    //                                 name: 'ENGINE',
    //                                 products: [
    //                                     'CHAIN,TIMING',
    //                                     'INTAKE MANIFOLD',
    //                                     'LUBRICATING SYSTEM',
    //                                     'Блок цилиндров',
    //                                     'Выхлопная система',
    //                                     'Головка цилиндра',
    //                                     'Клапанная крышка',
    //                                     'Клапанный механизм',
    //                                     'Поддон картера',
    //                                     'Поршень в сборе',
    //                                     'Система зажигания',
    //                                     'Система охлаждения'
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         value: 'instrumets',
    //                         name: 'Инструменты',

    //                     },
    //                     {
    //                         value: 'components',
    //                         name: 'Комплектующие кузова'
    //                     },
    //                     {
    //                         value: 'parts',
    //                         name: 'Кузовные детали'
    //                     },
    //                     {
    //                         value: 'different',
    //                         name: 'Разное'
    //                     },
    //                     {
    //                         value: 'conditioning-system',
    //                         name: 'Система кондиционирования'
    //                     },
    //                     {
    //                         value: 'engine-system',
    //                         name: 'Система двигателя'
    //                     },
    //                     {
    //                         value: 'transmission',
    //                         name: 'Трансмиссия'
    //                     },
    //                     {
    //                         value: 'chassis',
    //                         name: 'Ходовая часть'
    //                     },
    //                     {
    //                         value: 'electrician',
    //                         name: 'Электрика'
    //                     }
    //                 ]
    //             },
    //         ]
    //     }
    // ],
    products: [
        {
            image: './images/default-icon-product.svg',
            name: 'Петля для капота 1',
            brand: 'Geely Coolray'
        },
        {
            image: './images/default-icon-product.svg',
            name: 'Петля для капота 2',
            brand: 'Geely Coolray'
        },
        {
            image: './images/default-icon-product.svg',
            name: 'Петля для капота 3',
            brand: 'Geely Coolray'
        }
    ],
    popularProducts: [
        {
            image: './images/default-icon-product.svg',
            name: 'Шестерня КПП заднего хода доп.вала (1-й сорт)',
            sku: 'SC1701450',
            quality: 'Оригинальная',
            manuf: 'Great-Wall',
            price: 1452,
            quantity: 1
        },
        {
            image: './images/default-icon-product.svg',
            name: 'Шестерня КПП заднего хода доп.вала (1-й сорт)',
            sku: 'SC1701450',
            quality: 'Оригинальная',
            manuf: 'Great-Wall',
            price: 1452,
            quantity: 1
        },
        {
            image: './images/default-icon-product.svg',
            name: 'Шестерня КПП заднего хода доп.вала (1-й сорт)',
            sku: 'SC1701450',
            quality: 'Оригинальная',
            manuf: 'Great-Wall',
            price: 1452,
            quantity: 1
        },
        {
            image: './images/default-icon-product.svg',
            name: 'Шестерня КПП заднего хода доп.вала (1-й сорт)',
            sku: 'SC1701450',
            quality: 'Оригинальная',
            manuf: 'Great-Wall',
            price: 1452,
            quantity: 1
        },
        {
            image: './images/default-icon-product.svg',
            name: 'Шестерня КПП заднего хода доп.вала (1-й сорт)',
            sku: 'SC1701450',
            quality: 'Оригинальная',
            manuf: 'Great-Wall',
            price: 1452,
            quantity: 1
        },
        {
            image: './images/default-icon-product.svg',
            name: 'Шестерня КПП заднего хода доп.вала (1-й сорт)',
            sku: 'SC1701450',
            quality: 'Оригинальная',
            manuf: 'Great-Wall',
            price: 1452,
            quantity: 1
        },
        {
            image: './images/default-icon-product.svg',
            name: 'Шестерня КПП заднего хода доп.вала (1-й сорт)',
            sku: 'SC1701450',
            quality: 'Оригинальная',
            manuf: 'Great-Wall',
            price: 1452,
            quantity: 1
        },
        {
            image: './images/default-icon-product.svg',
            name: 'Шестерня КПП заднего хода доп.вала (1-й сорт)',
            sku: 'SC1701450',
            quality: 'Оригинальная',
            manuf: 'Great-Wall',
            price: 1452,
            quantity: 1
        },
        {
            image: './images/default-icon-product.svg',
            name: 'Шестерня КПП заднего хода доп.вала (1-й сорт)',
            sku: 'SC1701450',
            quality: 'Оригинальная',
            manuf: 'Great-Wall',
            price: 1452,
            quantity: 1
        }
    ],
    news: [
        {
            path: 'which-oil-better-1',
            logo: '../images/news/news-which-oil-1.png',
            title: 'Какое масло выбрать для двигателя 1',
            date: '30.08.2021',
            article: 'В настоящий момент на рынке существует огромное множество моторных масел, от самых недорогих, до элитных. Каждый производитель нахваливает свой бренд...',
            content: [
                {
                    img: '../images/news/news-which-oil-1.png',
                    title: 'Какое масло выбрать для двигателя 1',
                    date: '30.08.2021',
                    texts: [
                        `В настоящий момент на рынке существует огромное множество моторных масел, от самых недорогих, до элитных. Каждый производитель нахваливает свой бренд как может. Одни говорят, 
                        что их масло, лучше любого другого моет двигатель, другие , что хорошо защищает двигатель, третьи твердят о том что они уникальны, тем, что недавно на рынке и масло еще не подделывают.`,
                        `Если пойти за ответами на просторы интернета, то путаницы становится еще больше, одни убеждены что все масло одинаково, и покупая дорогое масло, покупатель всего лишь переплачивает за 
                        бренд, другие утверждают, что самое дорогое масло-самое хорошее. А если копнуть чуть поглубже и начать разбираться с вязкостью масла и допусками, то тут мнения расходятся кардинально 
                        и рядовой потребитель просто не знает кого слушать.`,
                        `Для того чтобы внести ясность мы постараемся в данной статье по возможности простым языком, и в сжатом формате рассказать о разнообразных 
                        моторных маслах и все тонкостях их использования. Итак начнем.`
                    ]
                },
                {
                    img: '../images/news/news-which-oil-2.png',
                    texts: [
                        `Масло какого производителя выбрать?`,
                        `Ответ простой: из всех разнообразий производителей масел, только очень немногие поставляют масла на конвейер автозаводам. Соответственно, именно у этих производителей масел есть возможность 
                        тестирования своих продуктов на новейших двигателях, а так же доступ к техническим тонкостям тех или иных агрегатов. Именно им доверяют мировые заводы гиганты, создавать масла для новых 
                        двигателей, а уж они в свою очередь знают толк в качестве масел. И сколько бы не хвалили на форумах и в ютубе новейшие масла, которые намного лучше именитых брендов, и дешевле, якобы, эти 
                        новые масла , только потому, что бренд не сильно раскручен. Но стоит задать себе несколько простых вопросов, перед покупкой этих «NEW SUPER масел», назовем их так.`,
                        `1) Где и кем эти масла тестировались? То что на форуме написали : «Классное масло! Я в восторге» вряд ли можно назвать обоснованным тестом, так как у человека который это писал, наверняка нет лаборатории для 
                        того чтобы оценить эту «классность», да и, как правило, вряд ли есть техническое образование. Масла же поставщиков на конвейер тестируются неоднократно в лабораториях высочайшего класса, 
                        а так же на новых двигателях заводов гигантов, и разрабатываются именно под эти требования.`
                    ]
                },
                {
                    img: '../images/news/news-which-oil-3.png',
                    texts: [
                        `2) Почему при всей дешевизне и высочайшем качестве этого масла, его до сих пор не заливают на конвейере ни одного из производителей автомобилей? Ведь заводы заинтересованы удешевить 
                        свою продукцию, и наверняка бы заинтересовались таким брендом который совмещает качество и цену. Иногда на этот вопрос производители «NEW SUPER масел» отвечают примерно следующее: у нас 
                        очень дорогое масло, потому что мы не гонимся за дешевизной, а делаем максимально хорошее масло, из-за этого, заводам гигантом мы не интересны, ведь наше масло очень дорого для них. Но и 
                        тут стоит задуматься. Ведь и автомобили бывают разные, и вряд ли на заводе Ferrari начнут экономить на масле.`,
                        `В конце этого раздела хотелось бы выделить те бренды которые идут на тот или 
                        иной завод первой заливкой. Сразу оговоримся , что данный список не включает все масла, идущие на конвейер, в нем приведены лишь те масла которые наиболее распространены на Российском рынке. `,
                        `Вот они: Castrol, Shell, Mobil, ELF, Total, BP, Eneos, Motul.`,
                        `Конечно список можно и продолжить, но эти 8 брендов лидируют на рынке первичной заливки, и являются наилучшим вариантом для
                        вашего двигателя и коробки передач.`
                    ]
                }
            ]
        },
        {
            path: 'which-oil-better-2',
            logo: '../images/news/news-which-oil-1.png',
            title: 'Какое масло выбрать для двигателя 2',
            date: '30.08.2021',
            article: 'В настоящий момент на рынке существует огромное множество моторных масел, от самых недорогих, до элитных. Каждый производитель нахваливает свой бренд...',
            content: [
                {
                    img: '../images/news/news-which-oil-1.png',
                    title: 'Какое масло выбрать для двигателя 2',
                    date: '30.08.2021',
                    texts: [
                        `В настоящий момент на рынке существует огромное множество моторных масел, от самых недорогих, до элитных. Каждый производитель нахваливает свой бренд как может. Одни говорят, 
                        что их масло, лучше любого другого моет двигатель, другие , что хорошо защищает двигатель, третьи твердят о том что они уникальны, тем, что недавно на рынке и масло еще не подделывают.`,
                        `Если пойти за ответами на просторы интернета, то путаницы становится еще больше, одни убеждены что все масло одинаково, и покупая дорогое масло, покупатель всего лишь переплачивает за 
                        бренд, другие утверждают, что самое дорогое масло-самое хорошее. А если копнуть чуть поглубже и начать разбираться с вязкостью масла и допусками, то тут мнения расходятся кардинально 
                        и рядовой потребитель просто не знает кого слушать.`,
                        `Для того чтобы внести ясность мы постараемся в данной статье по возможности простым языком, и в сжатом формате рассказать о разнообразных 
                        моторных маслах и все тонкостях их использования. Итак начнем.`
                    ]
                },
                {
                    img: '../images/news/news-which-oil-2.png',
                    texts: [
                        `Масло какого производителя выбрать?`,
                        `Ответ простой: из всех разнообразий производителей масел, только очень немногие поставляют масла на конвейер автозаводам. Соответственно, именно у этих производителей масел есть возможность 
                        тестирования своих продуктов на новейших двигателях, а так же доступ к техническим тонкостям тех или иных агрегатов. Именно им доверяют мировые заводы гиганты, создавать масла для новых 
                        двигателей, а уж они в свою очередь знают толк в качестве масел. И сколько бы не хвалили на форумах и в ютубе новейшие масла, которые намного лучше именитых брендов, и дешевле, якобы, эти 
                        новые масла , только потому, что бренд не сильно раскручен. Но стоит задать себе несколько простых вопросов, перед покупкой этих «NEW SUPER масел», назовем их так.`,
                        `1) Где и кем эти масла тестировались? То что на форуме написали : «Классное масло! Я в восторге» вряд ли можно назвать обоснованным тестом, так как у человека который это писал, наверняка нет лаборатории для 
                        того чтобы оценить эту «классность», да и, как правило, вряд ли есть техническое образование. Масла же поставщиков на конвейер тестируются неоднократно в лабораториях высочайшего класса, 
                        а так же на новых двигателях заводов гигантов, и разрабатываются именно под эти требования.`
                    ]
                },
                {
                    img: '../images/news/news-which-oil-3.png',
                    texts: [
                        `2) Почему при всей дешевизне и высочайшем качестве этого масла, его до сих пор не заливают на конвейере ни одного из производителей автомобилей? Ведь заводы заинтересованы удешевить 
                        свою продукцию, и наверняка бы заинтересовались таким брендом который совмещает качество и цену. Иногда на этот вопрос производители «NEW SUPER масел» отвечают примерно следующее: у нас 
                        очень дорогое масло, потому что мы не гонимся за дешевизной, а делаем максимально хорошее масло, из-за этого, заводам гигантом мы не интересны, ведь наше масло очень дорого для них. Но и 
                        тут стоит задуматься. Ведь и автомобили бывают разные, и вряд ли на заводе Ferrari начнут экономить на масле.`,
                        `В конце этого раздела хотелось бы выделить те бренды которые идут на тот или 
                        иной завод первой заливкой. Сразу оговоримся , что данный список не включает все масла, идущие на конвейер, в нем приведены лишь те масла которые наиболее распространены на Российском рынке. `,
                        `Вот они: Castrol, Shell, Mobil, ELF, Total, BP, Eneos, Motul.`,
                        `Конечно список можно и продолжить, но эти 8 брендов лидируют на рынке первичной заливки, и являются наилучшим вариантом для
                        вашего двигателя и коробки передач.`
                    ]
                }
            ]
        },
        {
            path: 'which-oil-better-3',
            logo: '../images/news/news-which-oil-1.png',
            title: 'Какое масло выбрать для двигателя 3',
            date: '30.08.2021',
            article: 'В настоящий момент на рынке существует огромное множество моторных масел, от самых недорогих, до элитных. Каждый производитель нахваливает свой бренд...',
            content: [
                {
                    img: '../images/news/news-which-oil-1.png',
                    title: 'Какое масло выбрать для двигателя 3',
                    date: '30.08.2021',
                    texts: [
                        `В настоящий момент на рынке существует огромное множество моторных масел, от самых недорогих, до элитных. Каждый производитель нахваливает свой бренд как может. Одни говорят, 
                        что их масло, лучше любого другого моет двигатель, другие , что хорошо защищает двигатель, третьи твердят о том что они уникальны, тем, что недавно на рынке и масло еще не подделывают.`,
                        `Если пойти за ответами на просторы интернета, то путаницы становится еще больше, одни убеждены что все масло одинаково, и покупая дорогое масло, покупатель всего лишь переплачивает за 
                        бренд, другие утверждают, что самое дорогое масло-самое хорошее. А если копнуть чуть поглубже и начать разбираться с вязкостью масла и допусками, то тут мнения расходятся кардинально 
                        и рядовой потребитель просто не знает кого слушать.`,
                        `Для того чтобы внести ясность мы постараемся в данной статье по возможности простым языком, и в сжатом формате рассказать о разнообразных 
                        моторных маслах и все тонкостях их использования. Итак начнем.`
                    ]
                },
                {
                    img: '../images/news/news-which-oil-2.png',
                    texts: [
                        `Масло какого производителя выбрать?`,
                        `Ответ простой: из всех разнообразий производителей масел, только очень немногие поставляют масла на конвейер автозаводам. Соответственно, именно у этих производителей масел есть возможность 
                        тестирования своих продуктов на новейших двигателях, а так же доступ к техническим тонкостям тех или иных агрегатов. Именно им доверяют мировые заводы гиганты, создавать масла для новых 
                        двигателей, а уж они в свою очередь знают толк в качестве масел. И сколько бы не хвалили на форумах и в ютубе новейшие масла, которые намного лучше именитых брендов, и дешевле, якобы, эти 
                        новые масла , только потому, что бренд не сильно раскручен. Но стоит задать себе несколько простых вопросов, перед покупкой этих «NEW SUPER масел», назовем их так.`,
                        `1) Где и кем эти масла тестировались? То что на форуме написали : «Классное масло! Я в восторге» вряд ли можно назвать обоснованным тестом, так как у человека который это писал, наверняка нет лаборатории для 
                        того чтобы оценить эту «классность», да и, как правило, вряд ли есть техническое образование. Масла же поставщиков на конвейер тестируются неоднократно в лабораториях высочайшего класса, 
                        а так же на новых двигателях заводов гигантов, и разрабатываются именно под эти требования.`
                    ]
                },
                {
                    img: '../images/news/news-which-oil-3.png',
                    texts: [
                        `2) Почему при всей дешевизне и высочайшем качестве этого масла, его до сих пор не заливают на конвейере ни одного из производителей автомобилей? Ведь заводы заинтересованы удешевить 
                        свою продукцию, и наверняка бы заинтересовались таким брендом который совмещает качество и цену. Иногда на этот вопрос производители «NEW SUPER масел» отвечают примерно следующее: у нас 
                        очень дорогое масло, потому что мы не гонимся за дешевизной, а делаем максимально хорошее масло, из-за этого, заводам гигантом мы не интересны, ведь наше масло очень дорого для них. Но и 
                        тут стоит задуматься. Ведь и автомобили бывают разные, и вряд ли на заводе Ferrari начнут экономить на масле.`,
                        `В конце этого раздела хотелось бы выделить те бренды которые идут на тот или 
                        иной завод первой заливкой. Сразу оговоримся , что данный список не включает все масла, идущие на конвейер, в нем приведены лишь те масла которые наиболее распространены на Российском рынке. `,
                        `Вот они: Castrol, Shell, Mobil, ELF, Total, BP, Eneos, Motul.`,
                        `Конечно список можно и продолжить, но эти 8 брендов лидируют на рынке первичной заливки, и являются наилучшим вариантом для
                        вашего двигателя и коробки передач.`
                    ]
                }
            ]
        },
        {
            path: 'which-oil-better-4',
            logo: '../images/news/news-which-oil-1.png',
            title: 'Какое масло выбрать для двигателя 4',
            date: '30.08.2021',
            article: 'В настоящий момент на рынке существует огромное множество моторных масел, от самых недорогих, до элитных. Каждый производитель нахваливает свой бренд...',
            content: [
                {
                    img: '../images/news/news-which-oil-1.png',
                    title: 'Какое масло выбрать для двигателя 4',
                    date: '30.08.2021',
                    texts: [
                        `В настоящий момент на рынке существует огромное множество моторных масел, от самых недорогих, до элитных. Каждый производитель нахваливает свой бренд как может. Одни говорят, 
                        что их масло, лучше любого другого моет двигатель, другие , что хорошо защищает двигатель, третьи твердят о том что они уникальны, тем, что недавно на рынке и масло еще не подделывают.`,
                        `Если пойти за ответами на просторы интернета, то путаницы становится еще больше, одни убеждены что все масло одинаково, и покупая дорогое масло, покупатель всего лишь переплачивает за 
                        бренд, другие утверждают, что самое дорогое масло-самое хорошее. А если копнуть чуть поглубже и начать разбираться с вязкостью масла и допусками, то тут мнения расходятся кардинально 
                        и рядовой потребитель просто не знает кого слушать.`,
                        `Для того чтобы внести ясность мы постараемся в данной статье по возможности простым языком, и в сжатом формате рассказать о разнообразных 
                        моторных маслах и все тонкостях их использования. Итак начнем.`
                    ]
                },
                {
                    img: '../images/news/news-which-oil-2.png',
                    texts: [
                        `Масло какого производителя выбрать?`,
                        `Ответ простой: из всех разнообразий производителей масел, только очень немногие поставляют масла на конвейер автозаводам. Соответственно, именно у этих производителей масел есть возможность 
                        тестирования своих продуктов на новейших двигателях, а так же доступ к техническим тонкостям тех или иных агрегатов. Именно им доверяют мировые заводы гиганты, создавать масла для новых 
                        двигателей, а уж они в свою очередь знают толк в качестве масел. И сколько бы не хвалили на форумах и в ютубе новейшие масла, которые намного лучше именитых брендов, и дешевле, якобы, эти 
                        новые масла , только потому, что бренд не сильно раскручен. Но стоит задать себе несколько простых вопросов, перед покупкой этих «NEW SUPER масел», назовем их так.`,
                        `1) Где и кем эти масла тестировались? То что на форуме написали : «Классное масло! Я в восторге» вряд ли можно назвать обоснованным тестом, так как у человека который это писал, наверняка нет лаборатории для 
                        того чтобы оценить эту «классность», да и, как правило, вряд ли есть техническое образование. Масла же поставщиков на конвейер тестируются неоднократно в лабораториях высочайшего класса, 
                        а так же на новых двигателях заводов гигантов, и разрабатываются именно под эти требования.`
                    ]
                },
                {
                    img: '../images/news/news-which-oil-3.png',
                    texts: [
                        `2) Почему при всей дешевизне и высочайшем качестве этого масла, его до сих пор не заливают на конвейере ни одного из производителей автомобилей? Ведь заводы заинтересованы удешевить 
                        свою продукцию, и наверняка бы заинтересовались таким брендом который совмещает качество и цену. Иногда на этот вопрос производители «NEW SUPER масел» отвечают примерно следующее: у нас 
                        очень дорогое масло, потому что мы не гонимся за дешевизной, а делаем максимально хорошее масло, из-за этого, заводам гигантом мы не интересны, ведь наше масло очень дорого для них. Но и 
                        тут стоит задуматься. Ведь и автомобили бывают разные, и вряд ли на заводе Ferrari начнут экономить на масле.`,
                        `В конце этого раздела хотелось бы выделить те бренды которые идут на тот или 
                        иной завод первой заливкой. Сразу оговоримся , что данный список не включает все масла, идущие на конвейер, в нем приведены лишь те масла которые наиболее распространены на Российском рынке. `,
                        `Вот они: Castrol, Shell, Mobil, ELF, Total, BP, Eneos, Motul.`,
                        `Конечно список можно и продолжить, но эти 8 брендов лидируют на рынке первичной заливки, и являются наилучшим вариантом для
                        вашего двигателя и коробки передач.`
                    ]
                }
            ]
        },
        {
            path: 'which-oil-better-5',
            logo: '../images/news/news-which-oil-1.png',
            title: 'Какое масло выбрать для двигателя 5',
            date: '30.08.2021',
            article: 'В настоящий момент на рынке существует огромное множество моторных масел, от самых недорогих, до элитных. Каждый производитель нахваливает свой бренд...',
            content: [
                {
                    img: '../images/news/news-which-oil-1.png',
                    title: 'Какое масло выбрать для двигателя 5',
                    date: '30.08.2021',
                    texts: [
                        `В настоящий момент на рынке существует огромное множество моторных масел, от самых недорогих, до элитных. Каждый производитель нахваливает свой бренд как может. Одни говорят, 
                        что их масло, лучше любого другого моет двигатель, другие , что хорошо защищает двигатель, третьи твердят о том что они уникальны, тем, что недавно на рынке и масло еще не подделывают.`,
                        `Если пойти за ответами на просторы интернета, то путаницы становится еще больше, одни убеждены что все масло одинаково, и покупая дорогое масло, покупатель всего лишь переплачивает за 
                        бренд, другие утверждают, что самое дорогое масло-самое хорошее. А если копнуть чуть поглубже и начать разбираться с вязкостью масла и допусками, то тут мнения расходятся кардинально 
                        и рядовой потребитель просто не знает кого слушать.`,
                        `Для того чтобы внести ясность мы постараемся в данной статье по возможности простым языком, и в сжатом формате рассказать о разнообразных 
                        моторных маслах и все тонкостях их использования. Итак начнем.`
                    ]
                },
                {
                    img: '../images/news/news-which-oil-2.png',
                    texts: [
                        `Масло какого производителя выбрать?`,
                        `Ответ простой: из всех разнообразий производителей масел, только очень немногие поставляют масла на конвейер автозаводам. Соответственно, именно у этих производителей масел есть возможность 
                        тестирования своих продуктов на новейших двигателях, а так же доступ к техническим тонкостям тех или иных агрегатов. Именно им доверяют мировые заводы гиганты, создавать масла для новых 
                        двигателей, а уж они в свою очередь знают толк в качестве масел. И сколько бы не хвалили на форумах и в ютубе новейшие масла, которые намного лучше именитых брендов, и дешевле, якобы, эти 
                        новые масла , только потому, что бренд не сильно раскручен. Но стоит задать себе несколько простых вопросов, перед покупкой этих «NEW SUPER масел», назовем их так.`,
                        `1) Где и кем эти масла тестировались? То что на форуме написали : «Классное масло! Я в восторге» вряд ли можно назвать обоснованным тестом, так как у человека который это писал, наверняка нет лаборатории для 
                        того чтобы оценить эту «классность», да и, как правило, вряд ли есть техническое образование. Масла же поставщиков на конвейер тестируются неоднократно в лабораториях высочайшего класса, 
                        а так же на новых двигателях заводов гигантов, и разрабатываются именно под эти требования.`
                    ]
                },
                {
                    img: '../images/news/news-which-oil-3.png',
                    texts: [
                        `2) Почему при всей дешевизне и высочайшем качестве этого масла, его до сих пор не заливают на конвейере ни одного из производителей автомобилей? Ведь заводы заинтересованы удешевить 
                        свою продукцию, и наверняка бы заинтересовались таким брендом который совмещает качество и цену. Иногда на этот вопрос производители «NEW SUPER масел» отвечают примерно следующее: у нас 
                        очень дорогое масло, потому что мы не гонимся за дешевизной, а делаем максимально хорошее масло, из-за этого, заводам гигантом мы не интересны, ведь наше масло очень дорого для них. Но и 
                        тут стоит задуматься. Ведь и автомобили бывают разные, и вряд ли на заводе Ferrari начнут экономить на масле.`,
                        `В конце этого раздела хотелось бы выделить те бренды которые идут на тот или 
                        иной завод первой заливкой. Сразу оговоримся , что данный список не включает все масла, идущие на конвейер, в нем приведены лишь те масла которые наиболее распространены на Российском рынке. `,
                        `Вот они: Castrol, Shell, Mobil, ELF, Total, BP, Eneos, Motul.`,
                        `Конечно список можно и продолжить, но эти 8 брендов лидируют на рынке первичной заливки, и являются наилучшим вариантом для
                        вашего двигателя и коробки передач.`
                    ]
                }
            ]
        },
        {
            path: 'which-oil-better-6',
            logo: '../images/news/news-which-oil-1.png',
            title: 'Какое масло выбрать для двигателя 6',
            date: '30.08.2021',
            article: 'В настоящий момент на рынке существует огромное множество моторных масел, от самых недорогих, до элитных. Каждый производитель нахваливает свой бренд...',
            content: [
                {
                    img: '../images/news/news-which-oil-1.png',
                    title: 'Какое масло выбрать для двигателя 6',
                    date: '30.08.2021',
                    texts: [
                        `В настоящий момент на рынке существует огромное множество моторных масел, от самых недорогих, до элитных. Каждый производитель нахваливает свой бренд как может. Одни говорят, 
                        что их масло, лучше любого другого моет двигатель, другие , что хорошо защищает двигатель, третьи твердят о том что они уникальны, тем, что недавно на рынке и масло еще не подделывают.`,
                        `Если пойти за ответами на просторы интернета, то путаницы становится еще больше, одни убеждены что все масло одинаково, и покупая дорогое масло, покупатель всего лишь переплачивает за 
                        бренд, другие утверждают, что самое дорогое масло-самое хорошее. А если копнуть чуть поглубже и начать разбираться с вязкостью масла и допусками, то тут мнения расходятся кардинально 
                        и рядовой потребитель просто не знает кого слушать.`,
                        `Для того чтобы внести ясность мы постараемся в данной статье по возможности простым языком, и в сжатом формате рассказать о разнообразных 
                        моторных маслах и все тонкостях их использования. Итак начнем.`
                    ]
                },
                {
                    img: '../images/news/news-which-oil-2.png',
                    texts: [
                        `Масло какого производителя выбрать?`,
                        `Ответ простой: из всех разнообразий производителей масел, только очень немногие поставляют масла на конвейер автозаводам. Соответственно, именно у этих производителей масел есть возможность 
                        тестирования своих продуктов на новейших двигателях, а так же доступ к техническим тонкостям тех или иных агрегатов. Именно им доверяют мировые заводы гиганты, создавать масла для новых 
                        двигателей, а уж они в свою очередь знают толк в качестве масел. И сколько бы не хвалили на форумах и в ютубе новейшие масла, которые намного лучше именитых брендов, и дешевле, якобы, эти 
                        новые масла , только потому, что бренд не сильно раскручен. Но стоит задать себе несколько простых вопросов, перед покупкой этих «NEW SUPER масел», назовем их так.`,
                        `1) Где и кем эти масла тестировались? То что на форуме написали : «Классное масло! Я в восторге» вряд ли можно назвать обоснованным тестом, так как у человека который это писал, наверняка нет лаборатории для 
                        того чтобы оценить эту «классность», да и, как правило, вряд ли есть техническое образование. Масла же поставщиков на конвейер тестируются неоднократно в лабораториях высочайшего класса, 
                        а так же на новых двигателях заводов гигантов, и разрабатываются именно под эти требования.`
                    ]
                },
                {
                    img: '../images/news/news-which-oil-3.png',
                    texts: [
                        `2) Почему при всей дешевизне и высочайшем качестве этого масла, его до сих пор не заливают на конвейере ни одного из производителей автомобилей? Ведь заводы заинтересованы удешевить 
                        свою продукцию, и наверняка бы заинтересовались таким брендом который совмещает качество и цену. Иногда на этот вопрос производители «NEW SUPER масел» отвечают примерно следующее: у нас 
                        очень дорогое масло, потому что мы не гонимся за дешевизной, а делаем максимально хорошее масло, из-за этого, заводам гигантом мы не интересны, ведь наше масло очень дорого для них. Но и 
                        тут стоит задуматься. Ведь и автомобили бывают разные, и вряд ли на заводе Ferrari начнут экономить на масле.`,
                        `В конце этого раздела хотелось бы выделить те бренды которые идут на тот или 
                        иной завод первой заливкой. Сразу оговоримся , что данный список не включает все масла, идущие на конвейер, в нем приведены лишь те масла которые наиболее распространены на Российском рынке. `,
                        `Вот они: Castrol, Shell, Mobil, ELF, Total, BP, Eneos, Motul.`,
                        `Конечно список можно и продолжить, но эти 8 брендов лидируют на рынке первичной заливки, и являются наилучшим вариантом для
                        вашего двигателя и коробки передач.`
                    ]
                }
            ]
        }
    ],
    stores: [
        {
            city: 'Волгоград',
            value: 'volgograd',
            mapCenter: [48.661588, 44.433084],
            zoom: 11,
            selected: false,
            shops: [
                {
                    id: 1,
                    title: 'Кировский район: Колосовая д. 12 (за заправкой Газпром)',
                    phone: '+7 903 376 03 16',
                    coords: [48.595728, 44.422176]
                },
                {
                    id: 2,
                    title: 'Дзержинский район: ул. Ангарская, д. 90 (остановка "Школа №82")',
                    phone: '+7 903 478 46 29',
                    coords: [48.720128, 44.476892]
                },
                {
                    id: 3,
                    title: 'Красноармейский район: пр-кт. Героев Сталинграда, д. 21',
                    phone: '+7 937 547 65 22',
                    coords: [48.515132, 44.549791]
                },
                {
                    id: 4,
                    title: 'Дзержинский район: ул. Землячки, д. 39-Г (бывший "Mercedes Center")',
                    phone: '+7 909 386 52 06',
                    coords: [48.763588, 44.512412]
                },
                {
                    id: 5,
                    title: 'Краснооктябрьский район: ул. Еременко, д. 53( остановка "Ватутина")',
                    phone: '+7 906 174 38 13',
                    coords: [48.788869, 44.574512]
                }
            ]
        },
        {
            city: 'Волжский',
            value: 'volojskiy',
            mapCenter: [48.777044, 44.759439],
            zoom: 17,
            selected: false,
            shops: [
                {
                    id: 6,
                    title: 'Микрорайон №14 пр. Ленина, д. 104-а',
                    phone: '+7 962 761 64 94',
                    coords: [48.777044, 44.759439]
                }
            ]
        },
        {
            city: 'Астрахань',
            value: 'astrahan',
            mapCenter: [46.333288, 48.013956],
            zoom: 17,
            selected: false,
            shops: [
                {
                    id: 7,
                    title: 'ул. Б. Хмельницкого, д. 5 / ул.Пороховая, д. 2',
                    phone: '+7 967 827 65 63',
                    coords: [46.333288, 48.013956]
                }
            ]

        },
        {
            city: 'Ростов',
            value: 'rostov',
            mapCenter: [47.282331, 39.684695],
            zoom: 17,
            selected: false,
            shops: [
                {
                    id: 8,
                    title: 'пр. Королева, 1п',
                    phone: '+7 961 426 57 99',
                    coords: [47.282331, 39.684695]
                }
            ]
        }
    ]
};

export default store;