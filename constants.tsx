
import { Product, Language } from './types';

export const LOCALIZED_DATA: Record<Language, {
  products: Product[];
  faqs: { question: string; answer: string }[];
  cases: { title: string; content: string; source: string }[];
  ui: Record<string, string>;
}> = {
  ru: {
    products: [
      {
        id: 'mobi-kk5',
        name: 'Моби (King Kong 5)',
        description: 'Защищенный смартфон с невероятной автономностью и кемпинговым фонарем.',
        price: 31500,
        currency: 'руб.',
        image: 'https://picsum.photos/seed/kk5/800/1000',
        shortSpecs: {
          display: '6.88" HD+ IPS',
          ram: '6 ГБ',
          storage: '128 ГБ',
          battery: '15300 мАч'
        },
        fullSpecs: {
          dimensions: '182.85 x 83.9 x 24.6 мм',
          weight: '538 грамма',
          storage: '128 ГБ UFS 3.1',
          ram: '6 ГБ 3200 MHz',
          cameraMain: '64Мп',
          cameraFront: '16MP',
          battery: '15300 мАч, зарядное устройство 33W',
          display: '120 Гц, 6.88 дюймов HD+ IPS, 720*1640',
          cpu: 'MediaTek G100 octa core (6nm 2*A76 2.2GHz+6*A55 2.0GHz) с графикой Mali-G57 MP2',
          sim: '2x Nano SIM или 1х SIM + MicroSD',
          comms: 'WiFi 5 2.4G / 5G 802.11abgn/ac, Bluetooth 5.2, GPS/GLONASS/Galileo/Beidou, NFC, USB-C',
          network: 'GSM 850/900/1800/1900MHz WCDMA _ 1/2/4/5/8 FDD：B1/2/3/4/5/7/8/12/17/20/26/28AB/66 TDD_B38/40/41',
          os: 'Android 15 / Lineage 22.2',
          protection: 'IP68 & IP69K',
          extras: 'Сканер отпечатков, 5W динамик, Кемпинговый и двойной дальнобойный фонари'
        },
        features: ['Огромный аккумулятор', 'Защита IP69K', 'Мощный фонарь', 'Android 15']
      },
      {
        id: 'mobi-5',
        name: 'Моби 5 (Max 5)',
        description: 'Флагманская скорость и экран 144 Гц для максимальной производительности.',
        price: 35100,
        currency: 'руб.',
        image: 'https://picsum.photos/seed/max5/800/1000',
        shortSpecs: {
          display: '6.95" FHD+ 144Hz',
          ram: '12 ГБ',
          storage: '256 ГБ',
          battery: '5100 мАч'
        },
        fullSpecs: {
          dimensions: '173.9 x 78.9 x 9.2 мм',
          weight: '223 грамма',
          storage: '256 ГБ UFS 3.1',
          ram: '12 ГБ LPDDR5 3200 MHz',
          cameraMain: '100Мп, Макрообъектив 5MP, Доп. датчик 0.3Мп',
          cameraFront: '32MP',
          battery: '5100 мАч, зарядное устройство 33W',
          display: '144 Гц, 6.95 дюймов FHD+ IPS, 1080×2460',
          cpu: 'MediaTek Dimensity 8200 (MT6896), Octa-Core, 4nm, 4*A78 (1*3.1GHz + 3*3.0GHz) + 4*A55 2.0GHz',
          sim: '2x Nano (без поддержки MicroSD)',
          comms: 'WiFi 6, Bluetooth 5.3, GPS/GLONASS/Galileo/Beidou, NFC, USB-C',
          network: '5G NSA/SA N1/2/3/5/7/8/20/25/28/38/40/41/66/77/78, Full 4G Support',
          os: 'Android 15 / Lineage 22.2',
          extras: 'Сканер отпечатков в кнопке, LED фонарик 1А'
        },
        features: ['Экран 144 Гц', 'Процессор 4нм', 'Поддержка 5G', 'Камера 100Мп']
      },
      {
        id: 'mobi-tablet',
        name: 'Моби Планшет',
        description: 'Большой экран для работы и развлечений на базе новейшей Lineage OS 23.',
        price: 26000,
        currency: 'руб.',
        image: 'https://picsum.photos/seed/tablet/1000/800',
        shortSpecs: {
          display: '10.95" 120Hz',
          ram: 'до 20 ГБ',
          storage: '256 ГБ',
          battery: '8000 мАч'
        },
        fullSpecs: {
          dimensions: '258 × 170 × 8.2 мм',
          weight: '562 грамма',
          storage: '256 ГБ UFS, MicroSD до 1 ТБ',
          ram: 'до 20 ГБ (с расширением)',
          cameraMain: '13 Мп со вспышкой',
          cameraFront: '5 Мп',
          battery: '8000 мАч, зарядка USB-C (5V/2A)',
          display: '60/120 Гц, 10.95 дюймов IPS, 1200 × 1920, 10:16',
          cpu: 'Unisoc T7280 Octa-Core (2× Cortex-A75 @ 2.2GHz + 6× Cortex-A55 @ 1.8GHz)',
          sim: 'Две Nano-SIM + MicroSD (3-в-2)',
          comms: 'Wi-Fi (2.4/5 ГГц), Bluetooth 5.0, GPS/GLONASS/BDS/GALILEO',
          network: 'Full Netcom 4G',
          os: 'Lineage OS 23 Android 16',
          audio: 'Два стереодинамика, разъем 3.5 мм',
          extras: 'Поддержка Google Widevine L1, датчики Холла и освещенности'
        },
        features: ['Android 16', 'Экран 120 Гц', 'Стереозвук', 'Разъем 3.5мм']
      }
    ],
    faqs: [
      {
        question: "Что на самом деле означает «Без Google»?",
        answer: "Это означает, что телефон работает на версии Android с открытым исходным кодом (LineageOS), из которой удалены все мобильные сервисы Google (GMS). Нет входа в аккаунт Google, нет Google Play Store и никакой фоновой телеметрии."
      },
      {
        question: "Смогу ли я использовать свои любимые приложения?",
        answer: "Да. Вы можете использовать альтернативные магазины, такие как F-Droid для приложений с открытым исходным кодом или Aurora Store для доступа к стандартным приложениям без аккаунта Google."
      },
      {
        question: "Как работает децентрализованная связь?",
        answer: "Мы предустанавливаем Bastyon — децентрализованную социальную сеть и мессенджер, который работает без центральных серверов, что делает его устойчивым к цензуре и блокировкам."
      }
    ],
    cases: [
      {
        title: "Ограничение AirDrop и цензура",
        content: "В 2022 году Apple ограничила работу AirDrop в Китае до 10 минут для приема файлов от всех пользователей, что затруднило распространение протестной информации. Это прямой пример того, как производитель железа может управлять вашим поведением по запросу властей.",
        source: "Courthouse News, 2024"
      },
      {
        title: "Сбор данных в фитнес-приложениях",
        content: "Исследование 2021 года показало, что 88% мобильных приложений для здоровья в Google Play передают личные данные пользователей (геолокация, режим дня, показатели здоровья) рекламным сетям и аналитическим компаниям без явного согласия.",
        source: "Healthcare in Europe, 2021"
      },
      {
        title: "Silent Data Collection от Google",
        content: "Смартфоны на базе стандартного Android отправляют данные на серверы Google в среднем каждые 4.5 минуты, даже когда телефон не используется и лежит в кармане. Сбор включает местоположение, IMEI, номер телефона и MAC-адреса ближайших Wi-Fi точек.",
        source: "Trinity College Dublin Study, 2021"
      },
      {
        title: "Рекламный ID и профилирование",
        content: "Уникальный рекламный идентификатор (GAID) позволяет компаниям связывать ваше поведение в разных приложениях в единый профиль. Даже если вы удалите приложение, ваш цифровой след остается связанным с вашим устройством навсегда.",
        source: "Privacy International, 2023"
      }
    ],
    ui: {
      heroTitle: "Ваш Телефон, Ваши Правила",
      heroSubtitle: "Смартфон на базе LineageOS без сервисов Google и трекеров. Стоимость доставки включена в цену.",
      heroCTA: "Защитить свои данные",
      heroSecondary: "Почему это важно",
      navThreat: "Угрозы",
      navSolution: "Решение",
      navStore: "Магазин",
      navEvidence: "Доказательства",
      storeTitle: "Выберите устройство",
      evidenceTitle: "Реальные примеры слежки",
      faqTitle: "Часто задаваемые вопросы",
      footerRights: "© 2025 Bastyon Mobi. Создано для приватности. Доставка включена по всему миру.",
      buyNow: "Купить",
      details: "Подробнее",
      paymentTitle: "Способ оплаты",
      paymentRUB: "Рубли (СБП)",
      paymentCrypto: "Криптовалюта (USDT/BTC)",
      paymentStripe: "Карта (Stripe)",
      total: "Итого",
      checkoutTitle: "Оформление заказа",
      fullNameLabel: "ФИО",
      emailLabel: "Email",
      addressLabel: "Адрес",
      cityLabel: "Город",
      countryLabel: "Страна",
      zipLabel: "Индекс",
      phoneLabel: "Телефон",
      commentsLabel: "Комментарии",
      placeOrder: "Подтвердить заказ",
      orderSuccess: "Заказ принят!",
      orderSuccessText: "Наш менеджер свяжется с вами в ближайшее время для уточнения деталей доставки."
    }
  },
  en: {
    products: [
      {
        id: 'mobi-kk5',
        name: 'Mobi (King Kong 5)',
        description: 'Rugged smartphone with extreme battery and camping lantern.',
        price: 31500,
        currency: 'RUB',
        image: 'https://picsum.photos/seed/kk5/800/1000',
        shortSpecs: {
          display: '6.88" HD+ IPS',
          ram: '6 GB',
          storage: '128 GB',
          battery: '15300 mAh'
        },
        fullSpecs: {
          dimensions: '182.85 x 83.9 x 24.6 mm',
          weight: '538 g',
          storage: '128 GB UFS 3.1',
          ram: '6 GB 3200 MHz',
          cameraMain: '64MP',
          cameraFront: '16MP',
          battery: '15300 mAh, 33W charging',
          display: '120 Hz, 6.88 inch HD+ IPS',
          cpu: 'MediaTek G100 Octa-Core',
          sim: '2x Nano SIM or 1x SIM + MicroSD',
          comms: 'WiFi 5, Bluetooth 5.2, NFC',
          network: 'Global 4G Support',
          os: 'Android 15 / Lineage 22.2',
          protection: 'IP68 & IP69K'
        },
        features: ['Huge Battery', 'IP69K Protection', 'Powerful Lantern']
      },
      {
        id: 'mobi-5',
        name: 'Mobi 5 (Max 5)',
        description: 'Flagship speed with 144Hz screen for maximum performance.',
        price: 35100,
        currency: 'RUB',
        image: 'https://picsum.photos/seed/max5/800/1000',
        shortSpecs: {
          display: '6.95" FHD+ 144Hz',
          ram: '12 GB',
          storage: '256 GB',
          battery: '5100 mAh'
        },
        fullSpecs: {
          dimensions: '173.9 x 78.9 x 9.2 mm',
          weight: '223 g',
          storage: '256 GB UFS 3.1',
          ram: '12 GB LPDDR5',
          cameraMain: '100MP Triple Camera',
          cameraFront: '32MP',
          battery: '5100 mAh, 33W charging',
          display: '144 Hz, 6.95 inch FHD+',
          cpu: 'MediaTek Dimensity 8200 (4nm)',
          sim: '2x Nano',
          comms: 'WiFi 6, Bluetooth 5.3',
          network: '5G NSA/SA Global',
          os: 'Android 15 / Lineage 22.2'
        },
        features: ['144Hz Screen', '4nm Processor', '5G Support']
      },
      {
        id: 'mobi-tablet',
        name: 'Mobi Tablet',
        description: 'Large screen for work and play on the latest Lineage OS 23.',
        price: 26000,
        currency: 'RUB',
        image: 'https://picsum.photos/seed/tablet/1000/800',
        shortSpecs: {
          display: '10.95" 120Hz',
          ram: 'up to 20 GB',
          storage: '256 GB',
          battery: '8000 mAh'
        },
        fullSpecs: {
          dimensions: '258 × 170 × 8.2 mm',
          weight: '562 g',
          storage: '256 GB UFS',
          ram: 'up to 20 GB',
          cameraMain: '13MP',
          cameraFront: '5MP',
          battery: '8000 mAh',
          display: '120 Hz, 10.95 inch IPS',
          cpu: 'Unisoc T7280 Octa-Core',
          sim: 'Dual Nano-SIM + MicroSD',
          comms: 'Dual-band Wi-Fi, Bluetooth 5.0',
          network: 'Global 4G',
          os: 'Lineage OS 23 (Android 16)',
          audio: 'Dual Stereo Speakers, 3.5mm Jack'
        },
        features: ['Android 16', '120Hz Screen', 'Stereo Audio']
      }
    ],
    faqs: [
      {
        question: "What does 'De-Googled' actually mean?",
        answer: "It means the phone runs a custom version of Android (LineageOS) where all Google Mobile Services (GMS) have been removed. No Google login, no Play Store background services, and zero telemetry back to Google servers."
      }
    ],
    cases: [
      {
        title: "AirDrop Limitations",
        content: "Apple restricted AirDrop functionality in China during protests, proving that tech giants can and will disable features to comply with government requests.",
        source: "Courthouse News, 2024"
      }
    ],
    ui: {
      heroTitle: "Your Phone, Your Rules",
      heroSubtitle: "De-Googled LineageOS smartphones with no trackers. Worldwide shipping included.",
      heroCTA: "Protect My Data",
      heroSecondary: "Why Mobi?",
      navThreat: "Threats",
      navSolution: "Solution",
      navStore: "Store",
      navEvidence: "Evidence",
      storeTitle: "Choose Your Device",
      evidenceTitle: "Real Tracking Cases",
      faqTitle: "Frequently Asked Questions",
      footerRights: "© 2025 Bastyon Mobi. Built for Privacy.",
      buyNow: "Buy Now",
      details: "Details",
      paymentTitle: "Payment Method",
      paymentRUB: "RUB (SBP)",
      paymentCrypto: "Crypto (USDT)",
      paymentStripe: "Card (Stripe)",
      total: "Total",
      checkoutTitle: "Order Checkout",
      fullNameLabel: "Full Name",
      emailLabel: "Email",
      addressLabel: "Address",
      cityLabel: "City",
      countryLabel: "Country",
      zipLabel: "Zip",
      phoneLabel: "Phone",
      commentsLabel: "Comments",
      placeOrder: "Confirm Order",
      orderSuccess: "Success!",
      orderSuccessText: "Our manager will contact you shortly."
    }
  },
  de: {
    products: [],
    faqs: [],
    cases: [],
    ui: {}
  }
};
