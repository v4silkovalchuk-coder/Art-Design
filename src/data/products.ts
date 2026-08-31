import { ProductItem } from '../types';

export const STUDIO_LOGO_URL = 'https://i.postimg.cc/9QqbH2nB/Untitled142.png';
export const MANAGER_TELEGRAM_URL = 'https://t.me/mngartd';
export const MANAGER_TELEGRAM_HANDLE = '@mngartd';

export const CATEGORIES = [
  { id: 'all', label: 'Всі послуги', count: 21 },
  { id: 'identity', label: 'Аватарки, Банери & Лого', count: 3 },
  { id: 'art', label: 'Кольорові Арти', count: 3 },
  { id: 'sketch', label: 'Скетчі (Нариси)', count: 3 },
  { id: 'background', label: 'Фони до арту', count: 3 },
  { id: 'character', label: 'Персонажі та Маскоти', count: 2 },
  { id: 'stickers', label: 'Стікери', count: 3 },
  { id: 'animation', label: 'Анімація', count: 4 },
] as const;

export const PRODUCTS: ProductItem[] = [
  {
    id: 'avatar',
    title: 'Мармизка (Аватарка)',
    category: 'identity',
    categoryLabel: 'Оформлення',
    price: 25,
    priceLabel: '25 грн',
    url: 'https://ibanoplata.com/iban-qr/f3cad1283d3b43789a32aadd5798e6c7',
    description: 'Стильна та запам’ятовувана аватарка для Telegram, Discord, соцмереж або стрім-каналів.',
    isPopular: true,
    features: ['Висока роздільна здатність', 'Формат під коло/квадрат', 'Швидка видача']
  },
  {
    id: 'banner',
    title: 'Банер (Роздільник)',
    category: 'identity',
    categoryLabel: 'Оформлення',
    price: 15,
    priceLabel: '15 грн',
    url: 'https://ibanoplata.com/iban-qr/a1004fe905804be0939a53c8dd3606d1',
    description: 'Естетичний роздільник або банер для оформлення постів, каналів, Discord чи профілів.',
    features: ['Індивідуальний розмір', 'Підбір стилю під бренд', 'Готовий до публікації']
  },
  {
    id: 'logo',
    title: 'Логотип',
    category: 'identity',
    categoryLabel: 'Оформлення',
    price: 35,
    priceLabel: '35 грн',
    url: 'https://ibanoplata.com/iban-qr/592d25c91cbe4d3591ee4da01a1f3923',
    description: 'Унікальний логотип для вашого проекту, каналу, магазину чи особистого бренду.',
    isPopular: true,
    features: ['Вектор/висока якість', 'Прозорий фон (PNG)', 'Авторський стиль']
  },
  {
    id: 'art-bust',
    title: 'Арт по плечі',
    category: 'art',
    categoryLabel: 'Повноколірний Арт',
    price: 80,
    priceLabel: '80 грн',
    url: 'https://ibanoplata.com/iban-qr/f8c4ecf191a84c249387480809f32415',
    description: 'Повноколірний деталізований портрет персонажа або реальної людини по плечі.',
    features: ['Повний колір та тіні', 'Опрацювання міміки та очей', 'Базовий фон']
  },
  {
    id: 'art-waist',
    title: 'Арт по талію',
    category: 'art',
    categoryLabel: 'Повноколірний Арт',
    price: 160,
    priceLabel: '160 грн',
    url: 'https://ibanoplata.com/iban-qr/84cf1bd9f4244f71a06d724633ce9067',
    description: 'Якісна ілюстрація по пояс (Half Body) з детальним промальовуванням одягу та пози.',
    isPopular: true,
    features: ['Оригінальна поза', 'Деталізовані текстури та колір', 'Підходить для презентацій']
  },
  {
    id: 'art-fullbody',
    title: 'Арт (Повний зріст)',
    category: 'art',
    categoryLabel: 'Повноколірний Арт',
    price: 210,
    priceLabel: '210 грн',
    url: 'https://ibanoplata.com/iban-qr/1d367631e9cf4823acd45464e78ebe03',
    description: 'Повноформатна детальна художня робота персонажа в повний зріст (Full Body).',
    isPopular: true,
    features: ['Динамічна або статична поза', 'Повний рендер світлотіні', 'Максимальна деталізація']
  },
  {
    id: 'character-create',
    title: 'Створення власного персонажу з нуля',
    category: 'character',
    categoryLabel: 'Концепт-Арт',
    price: 475,
    priceLabel: '475 грн',
    url: 'https://ibanoplata.com/iban-qr/c5bb41b72ff4458a93d4249d1c75727a',
    description: 'Розробка оригінального дизайну персонажа за вашим описом, палітрою кольорів та ідеєю.',
    isPopular: true,
    features: ['Повний концепт з нуля', 'Підбір палітри та деталей', 'Права на використання персонажу']
  },
  {
    id: 'bg-simple',
    title: 'Фон до арту (Монотонний/простий)',
    category: 'background',
    categoryLabel: 'Добавка Фон',
    price: 20,
    priceLabel: '20 грн',
    url: 'https://ibanoplata.com/iban-qr/32e0b741467c481c859f3e876d6ada9d',
    description: 'Лаконічний плоский або градієнтний фон з базовими графічними елементами.',
    features: ['Гармонійний підбір кольорів', 'Геометричні акценти', 'Підкреслює персонажа']
  },
  {
    id: 'bg-medium',
    title: 'Фон до арту (Середня складність)',
    category: 'background',
    categoryLabel: 'Добавка Фон',
    price: 40,
    priceLabel: '40 грн',
    url: 'https://ibanoplata.com/iban-qr/0869b0c6db964799ae657e4ea173de3f',
    description: 'Атмосферний фон з елементами оточення (кімната, небо, природа, міські нариси).',
    features: ['Перспектива та освітлення', 'Елементи оточення', 'Глибина сцени']
  },
  {
    id: 'bg-detailed',
    title: 'Фон до арту (Деталізований)',
    category: 'background',
    categoryLabel: 'Добавка Фон',
    price: 60,
    priceLabel: '60 грн',
    url: 'https://ibanoplata.com/iban-qr/067ec62b2a0943959a404537f82f2a63',
    description: 'Глибоко опрацьоване повноцінне оточення з безліччю деталей, спецефектами та світлом.',
    features: ['Складна перспектива та деталі', 'Кінематографічне світло', 'Повне занурення в атмосферу']
  },
  {
    id: 'mascot',
    title: 'Маскот (персонаж каналу чи бренду)',
    category: 'character',
    categoryLabel: 'Брендинг',
    price: 140,
    priceLabel: '140 грн',
    url: 'https://ibanoplata.com/iban-qr/82b555eb0abc437db327248224ffa409',
    description: 'Впізнаваний фірмовий персонаж для просування Telegram-каналу, YouTube або бізнесу.',
    features: ['Запам’ятовуваний образ', 'Адаптація під аватарки та пости', 'Фірмова колірна гама']
  },
  {
    id: 'stickers-10',
    title: '10 стікерів',
    category: 'stickers',
    categoryLabel: 'Стікерпак',
    price: 65,
    priceLabel: '65 грн',
    url: 'https://ibanoplata.com/iban-qr/8868d6387cd8476c834961e46c385d97',
    description: 'Пак із 10 індивідуальних статичних стікерів з різними емоціями для Telegram.',
    features: ['10 унікальних емоцій', 'Оптимізовано під Telegram', 'Створення офіційного стікерпаку']
  },
  {
    id: 'stickers-20',
    title: '20 стікерів',
    category: 'stickers',
    categoryLabel: 'Стікерпак',
    price: 125,
    priceLabel: '125 грн',
    url: 'https://ibanoplata.com/iban-qr/51903beae82c44c58791af724c447238',
    description: 'Розширений набір із 20 стікерів для активного спілкування та розвитку спільноти.',
    features: ['20 різних сюжетів/емоцій', 'Вигідніша ціна за штуку', 'Повне покриття щоденних реакцій']
  },
  {
    id: 'stickers-30',
    title: '30 стікерів',
    category: 'stickers',
    categoryLabel: 'Стікерпак',
    price: 180,
    priceLabel: '180 грн',
    url: 'https://ibanoplata.com/iban-qr/f37abe3541c0414da3c33d9aa16e7159',
    description: 'Максимальний пак із 30 авторських стікерів для вашого проекту або особистого бренду.',
    isPopular: true,
    features: ['30 унікальних стікерів', 'Максимальна економія', 'Повний набір емоцій та мемів']
  },
  {
    id: 'anim-logo',
    title: 'Анімація логотипу',
    category: 'animation',
    categoryLabel: 'Моушн-Дизайн',
    price: 210,
    priceLabel: '210 грн',
    url: 'https://ibanoplata.com/iban-qr/1853bc96ed38420bba8ccc2b8adcbd78',
    description: 'Плавна динамічна анімація вашого логотипу для інтро відео, історій, стрімів та постів.',
    isPopular: true,
    features: ['Плавні рухи та спецефекти', 'Формати MP4 / GIF / WebM', 'Висока якість відтворення']
  },
  {
    id: 'anim-sticker-1',
    title: '1 анімований стікер',
    category: 'animation',
    categoryLabel: 'Анімація',
    price: 70,
    priceLabel: '70 грн',
    url: 'https://ibanoplata.com/iban-qr/b461a1e14ab142eb9e95fab15a15068b',
    description: 'Один живий анімований стікер (TGS / WebM) для Telegram з циклічною анімацією.',
    features: ['Безшовний зациклений рух', 'Формат для Telegram стікерів', 'Яскравий візуальний ефект']
  },
  {
    id: 'anim-stickers-5',
    title: '5 анімованих стікерів',
    category: 'animation',
    categoryLabel: 'Анімація',
    price: 250,
    priceLabel: '250 грн',
    url: 'https://ibanoplata.com/iban-qr/7f86f711adad427ea6c298fdbfd9900f',
    description: 'Набір із 5 живих динамічних анімованих стікерів для вашого Telegram паку.',
    isPopular: true,
    features: ['5 унікальних анімацій', 'Вигідна комплексна ціна', 'Завантаження в Telegram пак']
  },
  {
    id: 'anim-custom',
    title: 'Анімація іншого (договірна ціна)',
    category: 'animation',
    categoryLabel: 'Індивідуально',
    price: null,
    priceLabel: 'Договірна',
    url: 'https://t.me/mngartd',
    description: 'Складні індивідуальні анімації: банери, інтро, плашки, оверлеї, переходи для стрімів та інше.',
    features: ['Будь-який рівень складності', 'Обговорення сценарію', 'Індивідуальний прорахунок']
  },
  {
    id: 'sketch-bust',
    title: 'Скетч по плечі',
    category: 'sketch',
    categoryLabel: 'Скетч (Нарис)',
    price: 30,
    priceLabel: '30 грн',
    url: 'https://ibanoplata.com/iban-qr/8ca62563975a47638bf561fcee18258f',
    description: 'Швидкий та стильний лінійний нарис по плечі. Чисті лінії та передача характеру.',
    features: ['Експресивний лайн-арт', 'Швидке виконання', 'Ідеально для простих аватарів']
  },
  {
    id: 'sketch-waist',
    title: 'Скетч по талію',
    category: 'sketch',
    categoryLabel: 'Скетч (Нарис)',
    price: 60,
    priceLabel: '60 грн',
    url: 'https://ibanoplata.com/iban-qr/7fd7f9d5e3a140bdafea9d092f5b8310',
    description: 'Графічний скетч персонажа по пояс із виразною позою та чіткими контурами.',
    features: ['Опрацювання пози та жестів', 'Лаконічний стиль', 'Можливість подальшого фарбування']
  },
  {
    id: 'sketch-fullbody',
    title: 'Скетч (Повний зріст)',
    category: 'sketch',
    categoryLabel: 'Скетч (Нарис)',
    price: 90,
    priceLabel: '90 грн',
    url: 'https://ibanoplata.com/iban-qr/f464bf4308214f92bd97f6c14b6c7803',
    description: 'Повнорозмірний контурний скетч персонажа в повний зріст з анатомією та одягом.',
    features: ['Повний силует та ракурс', 'Анатомічна точність', 'Чудова основа для великих проектів']
  }
];

export const ORDER_STEPS = [
  {
    step: 1,
    title: 'Оберіть потрібну послугу',
    desc: 'Перегляньте каталог товарів та послуг і натисніть кнопку «Замовити» біля обраного варіанту.'
  },
  {
    step: 2,
    title: 'Здійсніть оплату',
    desc: 'Перейдіть за посиланням та проведіть безпечну оплату замовлення зручним для вас способом.'
  },
  {
    step: 3,
    title: 'Вкажіть контакти у призначенні',
    desc: 'У полі призначення платежу обов’язково вкажіть ваш Telegram (@username) або контактний номер телефону.'
  },
  {
    step: 4,
    title: 'Очікуйте повідомлення менеджера',
    desc: 'Ми зафіксуємо замовлення, напишемо за вказаними контактами, узгодимо технічне завдання та почнемо створення!'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Як швидко менеджер вийде на зв’язок після оплати?',
    answer: 'Зазвичай ми зв’язуємося протягом 15-60 хвилин у робочий час після фіксації платежу з вашим Telegram-юзернеймом або номером телефону в призначенні.'
  },
  {
    question: 'Де можна переглянути приклади робіт та портфоліо?',
    answer: 'Усі свіжі приклади товарів, процес малювання та додаткові запитання можна отримати напряму в нашого менеджера: @mngartd (https://t.me/mngartd).'
  },
  {
    question: 'Що робити, якщо я забув вказати Telegram у призначенні платежу?',
    answer: 'Не хвилюйтеся! Просто збережіть чек / квитанцію про оплату та надішліть її менеджеру в Telegram @mngartd, вказавши дату і час оплати.'
  },
  {
    question: 'Чи можливі правки в процесі роботи?',
    answer: 'Так! На етапі скетчу або початкового концепту ви можете внести необхідні корективи безкоштовно.'
  }
];
