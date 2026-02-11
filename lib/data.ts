import { Data, IProductInput, IUserInput } from '@/types'
import { toSlug } from './utils'
import bcrypt from 'bcryptjs'
import { i18n } from '@/i18n-config'
// import reviewsAr from  './reviews.ar.json'

const users: IUserInput[] = [
  {
    name: 'John',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'Admin',
    address: {
      fullName: '',
      street: ' ',
      city: ' ',
      province: '',
      postalCode: '',
      country: '',
      phone: '',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Samar Yasser',
    email: 'samar7aser@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Samar Yasser',
      street: '22 Main St',
      city: 'Alex',
      province: 'mosky',
      postalCode: '1002',
      country: 'EGP',
      phone: '01238554553',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'منة الله حسن',
    email: 'mena@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'منة الله حسن',
      street: '333 Main St',
      city: 'الجيزة',
      province: 'NY',
      postalCode: '1003',
      country: 'EGP',
      phone: '0123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Sarah',
    email: 'sarah@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Sarah Smith',
      street: '444 Main St',
      city: 'cairo',
      province: 'eg',
      postalCode: '1005',
      country: 'EGP',
      phone: '0113-356-7850',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'نجلاء سامي',
    email: 'nagal@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'نجلاء سامي',
      street: 'طنطا',
      city: 'طنطا',
      province: 'NY',
      postalCode: '1006',
      country: 'EGP',
      phone: '0123-880-7010',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'هبة أحمد',
    email: 'heba1@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'هبة أحمد',
      street: 'الزقازيق',
      city: 'الزقازيق',
      province: 'NY',
      postalCode: '10001',
      country: 'EGP',
      phone: '0120-660-4580',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'ام ملك الشربيني',
    email: 'malak@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'ام ملك الشربيني',
      street: 'شارع الشرباصي',
      city: ' دمياط',
      province: 'دمياط',
      postalCode: 'دمياط',
      country: 'EGP',
      phone: '0121-199-7740',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'ندي متولي',
    email: 'nadame11@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'ندي متولي',
      street: 'شارع الجمهوريه',
      city: 'Mansoura',
      province: 'Mansoura',
      postalCode: 'Mansoura',
      country: 'EGP',
      phone: '122-033-3405',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'كريم عادل',
    email: 'kareem-ade1@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'كريم عادل',
      street: 'شارع الجيش',
      city: 'أسيوط',
      province: 'أسيوط',
      postalCode: 'أسيوط',
      country: 'EGP',
      phone: '0120-406-9812',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'hana hassan',
    email: 'hana7asn@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'hana hassan',
      street: '101 First',
      city: 'New Damitta',
      province: 'Damitta',
      postalCode: 'Damitta',
      country: 'EGP',
      phone: '0123-401-2003',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Shaimaa mohamed',
    email: 'shosh0@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Shaimaa Mohamed',
      street: '102 First Ave',
      city: 'damitta',
      province: 'Damitta',
      postalCode: 'Damitta',
      country: 'EGP',
      phone: '0121-411-7500',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Eman',
    email: 'eman88@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Eman Gamal',
      street: 'Damitta St',
      city: 'Damitta',
      province: 'Damitta',
      postalCode: 'Damitta',
      country: 'EGP',
      phone: '',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'sandy moamen',
    email: 'sandy72@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Sandy Moamen',
      street: 'Damitta st',
      city: 'Damitta',
      province: 'Damitta',
      postalCode: 'Damitta',
      country: 'EGP',
      phone: '',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Nouran Elnagar',
    email: 'nourann@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Nouran Elnagar',
      street: 'Damitta st',
      city: 'Damitta',
      province: 'Damitta',
      postalCode: 'Damitta',
      country: 'EGP',
      phone: '',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Maha Kamal',
    email: 'Maha42@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Maha Kamal',
      street: 'Damitta St',
      city: 'Damitta',
      province: 'Damitta',
      postalCode: 'Damitta',
      country: 'EGP',
      phone: '',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Reem Saeed',
    email: 'reem13@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Reem Saeed',
      street: 'Damitta St',
      city: 'Damitta',
      province: 'Damitta',
      postalCode: 'Damitta',
      country: 'EGP',
      phone: '',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Amina Youssry',
    email: 'amina42@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Amina Youssry',
      street: 'Damitta st',
      city: 'Damitta',
      province: 'Damitta',
      postalCode: 'Damitta',
      country: 'EGP',
      phone: '',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Yasmin Samir',
    email: 'yasmin002@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Yasmin Samir',
      street: 'Damitta St',
      city: 'Damitta',
      province: 'Damitta',
      postalCode: 'Damitta',
      country: 'EGP',
      phone: '',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
]

const products: IProductInput[] = [
  {
    name: 'طقم قهوة بورسلين الأندلس ملكي 15 قطعة ',
    slug: toSlug('طقم شاى وجاتوة ماليزي 24 ق كريمي'),
    category: 'Coffee - Tea',
    images: ['/images/Coffee&Tea.jpg'],
    tags: ['new-arrival' , 'best-seller'],
    isPublished: true,                              //english image
    price: 1100,
    listPrice: 1700,
    brand: 'شاي وقهوة',
    avgRating: 5,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      '6 فنجان قهوة  + 6 طبق للفنجان + 1 كنكة + غطاء  + 1 استاند ',
    sizes: [],
    colors: [ ],

    reviews: [],
  },
  //================================    أطقم شاي وجاتوة
  {
    name: 'Jerzees Long-Sleeve Heavyweight Blend T-Shirt',
    slug: toSlug('Jerzees Long-Sleeve Heavyweight Blend T-Shirt'),
    category: 'أطقم شاي وجاتوة',
    images: [
      '/images/tea-2.jpg',
      '/images/tea.jpg',     
      '/images/tea-3.jpg',
    ],
    tags: ['featured'],
    isPublished: true,
    price: 3200,
    listPrice: 0,
    brand: 'شاي وجاتوه',
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 29,
    countInStock: 12,
    description:
      'Made with sustainably sourced USA grown cotton; Shoulder-to-shoulder tape; double-needle coverstitched front neck; Set-in sleeves; Rib cuffs with concealed seams; Seamless body for a wide printing area',

    sizes: [],
    colors: ['Yellow', 'Red', 'Black'],

    reviews: [],
  }, 
  //==========================================  أطقم التوزيع
  {
    name: "طقم توزيع سيليكون مقاوم ضد الحرارة",
    slug: toSlug('Cooking Tools'),
    category: 'أطقم التوزيع',
    brand: ' أدوات المطبخ',
    images: ['/images/أطقم-التوزيع.jpg', '/images/أطقم-التوزيع-2.jpg', '/images/c-116.jpg'],
    tags: ['best-seller'],
    isPublished: true,
    price: 550,
    listPrice: 950,
    avgRating: 4,
    numReviews: 96,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 55,
    countInStock: 13,
    description:
      'الطقم مكوّن من ٥ قطع سيليكون نضيف جدًا وطبيعي 100%، آمن على الأكل، ومش بيتفاعل مع الحرارة أو الزيوت',
    sizes: [],
    colors: ['C-114', 'C-115' , 'C-116'],

    reviews: [],
  },
  //===============================
  {
    name: 'Decrum Mens Plain Long Sleeve T-Shirt - Comfortable Soft Fashion V Neck Full Sleeves Jersey Shirts',
    slug: toSlug(
      'Sofra Porcelain'
    ),
    category: 'أطقم سفرة',
    brand: ' أطقم سفرة بورسلين',
    images: ['/images/أطقم-سفرة.jpg'],
    tags: ['todays-deal'],
    isPublished: true,
    price: 6900,
    listPrice: 9700,
    avgRating: 4,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 54,
    countInStock: 14,
    description:
      'Elevate your outfit with this soft long sleeve t shirt men. This full sleeves tee is the ultimate upgrade from your regular cotton t-shirt. ',
    sizes: [],
    colors: ['Yellow', 'White'],

    reviews: [],
  },
  //===============================
  {
    name: "Muscle Cmdr Men's Slim Fit Henley Shirt Long&Short Business Sleeve Casual 3 Metal Buton Placket Casual Stylish T-Shirt",
    slug: toSlug(
      "Muscle Cmdr Men's Slim Fit Henley Shirt Long&Short Business Sleeve Casual 3 Metal Buton Placket Casual Stylish T-Shirt"
    ),
    category: 'NeoFlam',                                 //english image
    brand: ' Fika',
    images: ['/images/NeoFlam.jpg'],
    tags: ['new-arrival', 'featured'],
    isPublished: true,
    price: 8900,
    listPrice: 11700,
    avgRating: 5,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 54,
    countInStock: 15,
    description:
      "Slim Fit Design:Men's Muscle Slim Fit Button Henley Shirts are designed to fit snugly against your body, accentuating your muscles and creating a sleek silhouette that's perfect for any occasion. ",
    sizes: [],
    colors: ['Green', 'Yellow'],

    reviews: [],
  },
  //============================
  {
    name: 'طقم شربات أريزو طويل كريستال بوهيمي بالقاروره مطلي بالذهب ومصنفر – مكون من قارورة بالغطاء و6 أكواب كاسات',
    slug: toSlug('Bohemian Crystal'),
    category: 'أطقم الزجاج والكريستال',
    brand: 'Bohemian Crystal',
    images: ['/images/أطقم-الزجاج-والكريستال.jpg', '/images/طقم-الزجاج-والكريستال.jpg'],
    tags: ['best-seller', 'todays-deal'],
    isPublished: true,
    price: 1450,
    listPrice: 2600,
    avgRating: 5,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    countInStock: 16,
    numSales: 256,
    description:
      'Heavyweight cotton (Heathers are 60% cotton/40% polyester; Pebblestone is 75% cotton/25% polyester)',
    sizes: [],
    colors: ['Grey', 'White'],

    reviews: [],
  },
  //====================================================
  //                    طقم حلل استانليس
  //      أدوات المطبخ ,حلل جرانيت     ,أطقم أوانى الطهى
  {
      name: 'طقم صواني استانلس 2 قطعة بتطريز بارز الشكل وذهبي اللون',
    slug: toSlug(
      'stainless steel tray set'
    ),
    category: 'صواني التقديم',
    brand: 'صواني تقديم',
    images: ['/images/صواني-التقديم.jpg' , '/images/صواني--التقديم.jpg'],
    tags: ['todays-deal'],
    isPublished: true,
    price: 1999,
    listPrice: 2750,
    avgRating: 4,
    numReviews: 45,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 15,
    numSales: 72,
    description:
      'طقم صواني 2 قطعة استانلس ستيل 18/10 عالي الجوده مقاسات كبيرة ومقاوم للصدأ والتاكل وسهل التنظيف ',
    sizes: [],
    colors: ['Blue', 'Grey'],

    reviews: [],
  },
  //================================= أطقم-المجات-والقهوة
  {
    name: 'Essentials Mens Straight-Fit Stretch Jean',
    slug: toSlug('Essentials Mens Straight-Fit Stretch Jean'),
    category: ' seney',
    brand: 'seney',
    images: ['/images/seney.jpg'],
    tags: ['best-seller'],
    isPublished: true,
    price: 7800,
    listPrice: 9600,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 23,
    numSales: 54,
    description:
      'These classic 5-pocket straight-fit jeans are crafted with a bit of stretch for additional comfort and to help maintain their shape',
    sizes: [],
    colors: ['Grey', 'Blue'],

    reviews: [],
  },
  //==============
  {
    name: "Levi's mens 505 Regular Fit Jeans (Also Available in Big & Tall)",
    slug: toSlug(
      "Levi's mens 505 Regular Fit Jeans (Also Available in Big & Tall)"
    ),
    category: 'graned',
    brand: 'جرانيت',
    images: ['/images/graned.jpg'],
    tags: ['featured'],
    isPublished: true,
    price: 7200,
    listPrice: 9100,
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 3 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 22,
    numSales: 54,
    description:
      'A veritable classic, this 505 is made to have a comfortable look and style.',
    sizes: [],
    colors: ['Blue', 'Grey'],

    reviews: [],
  },

  //===================================
  {
    name: "Buffalo David Bitton Mens Men's Driven Relaxed Denim JeansJeans",
    slug: toSlug(
      "Buffalo David Bitton Mens Men's Driven Relaxed Denim JeansJeans"
    ),
    category: 'أطقم أوانى الطهى',
    brand: ' أوانى الطهى',
    images: ['/images/أطقم-أوانى-الطهى.jpg'],
    tags: ['todays-deal'],
    isPublished: true,
    price: 7200,
    listPrice: 9200,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 24,
    numSales: 53,
    description:
      'Stretch recycled denim jeans in an authentic and sanded wash blue. Features a comfortable low-rise waist with a relaxed fit at the leg. The distressed look gives these jeans an effortlessly worn-in feel. The eco-friendly logo patch in tan and red is at the back waistband. The signature maple leaf graphic is debossed at the zip-fly.',
    sizes: [],
    colors: ['Blue', 'Grey'],

    reviews: [],
  },
  ///=========================
  {
    name: 'طقم معالق و شوك و سكاكين 24 قطعة على شكل بيضة ذهبية',
    slug: toSlug('Spoons, forks and knives set'),
    category: 'شوك ومعالق',
    brand: 'شوك ومعالق',
    images: ['/images/شوك-ومعالق.jpg' , '/images/شوك--ومعالق.jpg'],
    tags: ['new-arrival','featured'],
    isPublished: true,
    price: 1150,
    listPrice: 1700,
    avgRating: 5,
    numReviews: 55,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    countInStock: 10,
    numSales: 240,
    description:
      'طقم شوك ومعالق ستانلس ستيل علي شكل بيضة – 24 قطعة هو طقم أنيق وعصري مصنوع من ستانلس ستيل عالي الجودة',
    sizes: [],
    colors: ['Gold', 'Silver'],

    reviews: [],
  },
  //=========================================
  {
    name: 'Wrangler mens Premium Performance Cowboy Cut Slim Fit Jean',
    slug: toSlug('Wrangler mens Premium Performance Cowboy Cut Slim Fit Jean'),
    category: 'أطقم المجات والقهوة',
    brand: 'المجات والقهوة',
    images: ['/images/أطقم-المجات-والقهوة.jpg' ],
    tags: ['best-seller', 'todays-deal'],
    isPublished: true,
    price: 8100,
    listPrice: 10300,
    avgRating: 3.46,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 26,
    numSales: 48,
    description:
      'Designed with a functional fit in mind, these jeans are made to stack over your favorite pair of boots. Constructed with a slim fit in the waist, seat, and thigh, this jean is made for both function and comfort for long days in the saddle.',
    sizes: [],
    colors: [],

    reviews: [],
  },
  //===============================================
  // اطقم اركواركوبال
  {
    name: "Seiko Men's Analogue Watch with Black Dial",
    slug: toSlug("Seiko Men's Analogue Watch with Black Dial"),
    category: 'أطقم أركوأركوبال',
    brand: 'أطقم أركوبال لومينارك',
    images: ['/images/أطقم-أركوأركوبال.jpg' , '/images/أطقمم-أركوأركوبال.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 4700,
    listPrice: 6300,
    avgRating: 4,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 31,
    numSales: 48,
    description:
      'Casing: Case made Glass:  clasp with safety',
    sizes: [],
    colors: [],

    reviews: [],
  },
  //===========================================
  {
    name: 'طقم توابل بورسلين 7 قطعة بتاج استاند',
    slug: toSlug(
      'Kitchen Canister Stand'
    ),
    category: 'أطقم التوابل والشوربة',
    brand: 'أطقم التوابل والشوربة',
    images: ['/images/أطقم-التوابل-والشوربة.jpg'],
    tags: ['featured' , 'best-seller'],
    isPublished: true,
    price: 1650,
    listPrice: 2050,
    avgRating: 5,
    numReviews: 163,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 10,
    numSales: 189,
    description:
      'طقم توابل بورسلين تاج استاند بجودة ممتازة وتصميم يخطف الأنظار في أي مطبخ',
    sizes: [],
    colors: [],

    reviews: [],
  },
  //========================================= طقم ميلامين 38 ق 2 لون   أطقم الميلامين'
  {
    name: "Casio Men's Heavy  ",
    slug: toSlug(
      "Casio Men's Heavy Duty Analog Quartz Stainless Steel Strap, Silver, 42 Casual Watch"
    ),
    category: 'أطقم الميلامين',
    brand: ' طقم ميلامين 38 ق 2 لون',
    images: ['/images/أطقم-الميلامين.jpg'],
    tags: ['best-seller'],
    isPublished: true,
    price: 3200,
    listPrice: 4800,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 33,
    numSales: 48,
    description:
      'The Casio range is growing with this model  MWA-100H-1AVEF. Sporting a stainless steel case with a brushed finish, it will easily withstand all the shocks of everyday life.',
    sizes: [],
    colors: [],

    reviews: [],
  }, 
  //================================================ أطقم الألمنيوم
  {
    name: 'طقم حلل المونيوم الدهان 10 حلة',
    slug: toSlug(
      'Casio Classic Silver-Tone Stainless Steel Band Date Indicator Watch'
    ),
    category: 'أطقم الألمنيوم',
    brand: 'El Dahan Pot',
    images: ['/images/أطقم-الألمنيوم.jpg'],
    tags: ['todays-deal' ,'new-arrival', 'featured'],
    isPublished: true,
    price: 3800,
    listPrice: 5300,
    avgRating: 5,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 34,
    numSales: 48,
    description:
      'The new MTPVD01D-7EV is a classic 50 meter water resistant stainless steel watch now updated with a white dial. This elegant 3 hand, date display timepiece is perfect for any setting.',
    sizes: [],
    colors: [], 
    reviews: [],
  },
  //===============================  أطقم الأركوبيركس
  {
    name: "طقم عشاء اركوبيركس لومينارك ٤٦ قطعة",
    slug: toSlug("Arcopyrex"),
    category: 'أطقم الأركوبيركس',
    brand: 'Luminarc Arcopyrex',
    images: ['/images/أطقم-الأركوبيركس.jpg'],
    tags: ['todays-deal','new-arrival', 'featured'],
    isPublished: true,
    price: 4300,
    listPrice: 6700,
    avgRating: 4,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 35,
    numSales: 48,
    description:
      'آمن للاستخدام في الميكروويف ,آمن للاستخدام في غسالة الأطباق , زجاج صحي للغاية وغير مسامي ولا يحتفظ بالروائح والبقع',
    sizes: ['C-113' , 'C-114'],
    colors: [],

    reviews: [],
  },
  //===================================================  أطقم عشاء
  {
    name: "طقم عشاء بورسلين الاندلس 26 قطعه",
    slug: toSlug("Fossil Men's Machine Stainless Steel Quartz Watch"),
    category: 'أطقم عشاء',
    brand: 'أطقم عشاء بورسلين ',
    images: ['/images/أطقم-عشاء.jpg', '/images/أطقم--عشاء.jpg'],
    tags: ['best-seller', 'todays-deal'],
    isPublished: true,
    price: 3900,
    listPrice: 5200,
    avgRating: 4,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    countInStock: 36,
    numSales: 49,
    description:
      'In masculine black-on-black,  modern touch to your casual look. This Machine watch also features a three hand movement on a stainless steel bracelet.',
    sizes: [],
    colors: ['C-114', 'C-115'],

    reviews: [],
  },
  //=============================================  أطقم التسالي
  {
    name: 'طقم تسالي بورسلين فراشة الاندلس',
    slug: toSlug('Porcelain Tasaly Set'),
    category: 'أطقم التسالي',
    brand: 'أطقم تسالي بورسلين',
    images: ['/images/أطقم-التسالي.jpg', '/images/أطقم--التسالي.jpg'],
    tags: ['new-arrival', 'featured'],
    isPublished: true,
    price: 1350,
    listPrice: 1950,
    avgRating: 4,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 41,
    numSales: 48,
    description:
      'Cloudfoam Comfort sockliner is ultra-soft and plush, with two layers of cushioning topped with soft, breathable mesh',
    sizes: [],
    colors: ['White', 'Black', 'Grey'],

    reviews: [],
  },
//=================================   أطقم المجات والقهوة
  {
    
    name: 'طقم قهوة بورسلين الأندلس ملكي 15 قطعة ',
    slug: toSlug(
      "coffee & tea sets"
    ),
    category: 'ادوات اخرى للمنزل والمطبخ',
    brand: 'ادوات اخرى للمنزل والمطبخ',
    images: ['/images/ادوات-اخرى-للمنزل-والمطبخ.jpg'],           //english image
    tags: ['featured' , 'best-seller'],
    isPublished: true,
    price: 1700,
    listPrice: 2650,
    avgRating: 4,
    numReviews: 113,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 42,
    numSales: 158,
    description:
        '6  غطاء د ',
    sizes: [],
    colors: [],
    reviews: [],
  },
  
//==========================================  شيالات-الكحك-وأطباق-الفاكهة
// مستلزمات السفرة
  {
    name: 'شياله كحك و كاندي ٣ دور',
    slug: toSlug(
      'Cake and Biscuit Stand'
    ),
    category: 'شيالات الكحك وأطباق الفاكهة',
    brand: 'شيالات الكحك وأطباق الفاكهة',
    images: ['/images/شيالات-الكحك-وأطباق-الفاكهة.jpg'],
    tags: ['best-seller' , 'todays-deal'],
    isPublished: true,
    price: 1470,
    listPrice: 1900,
    avgRating: 4,
    numReviews: 92,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 10,
    numSales: 72,
    description:
      'شياله كحك وبسكويت وكاندي ٣ دور شكل الدوب بعمود استانلس ستيل  ',
    sizes: [],
    colors: [],

    reviews: [],
  },
  //==============================================================
  {
    name: 'طقم صواني  وذهبي اللون',
    slug: toSlug(
      'stainless steel set'
    ),
    category: 'اواني الطهي بالقطعة',
    brand: 'اواني الطهي بالقطعة',
    images: ['/images/اواني-الطهي-بالقطعة.jpg' ],
    tags: ['todays-deal'],
    isPublished: true,
    price: 1850,
    listPrice: 2750,
    avgRating: 4,
    numReviews: 45,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 15,
    numSales: 72,
    description:
      'طقم التنظيف ',
    sizes: [],
    colors: [],

    reviews: [], 
  },

   
    //   name: 'طقم صواني استانلس 2 قطعة بتطريز بارز الشكل وذهبي اللون',
    // slug: toSlug(
    //   'stainless steel tray set'
    // ),
    // category: 'صواني التقديم',
    // brand: 'صواني تقديم',
    // images: ['/images/صواني-التقديم.jpg' , '/images/صواني--التقديم.jpg'],
    // tags: ['todays-deal'],
    // isPublished: true,
    // price: 1999,
    // listPrice: 2750,
    // avgRating: 4,
    // numReviews: 45,
    // ratingDistribution: [
    //   { rating: 1, count: 0 },
    //   { rating: 2, count: 2 },
    //   { rating: 3, count: 3 },
    //   { rating: 4, count: 4 },
    //   { rating: 5, count: 5 },
    // ],
    // countInStock: 15,
    // numSales: 72,
    // description:
    //   'طقم صواني 2 قطعة استانلس ستيل 18/10 عالي الجوده مقاسات كبيرة ومقاوم للصدأ والتاكل وسهل التنظيف ',
    // sizes: [],
  //=========================================  شنط معالق وسكاكين 
  {
    name: "ASICS Men's GT-2000 13 Running Shoes",
    slug: toSlug("Bags of spoons and knives"),
    category: 'شنط المعالق والسكاكين',
    brand: 'معالق ارشا',
    images: ['/images/شنط-المعالق-والسكاكين.jpg', '/images/شنط-المعالق-والسكاكيني.jpg' ],
    tags: ['best-seller', 'todays-deal'],
    isPublished: true,
    price: 5700,
    listPrice: 8400,
    avgRating: 5,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 4 },
      { rating: 4, count: 0 },
      { rating: 5, count: 5 },
    ],
    countInStock: 45,
    numSales: 64,
    description:
      " reduce waste and carbon emissions",
    sizes: [],
    colors: [],

    reviews: [],
  },
  {
    name: "Mens Wearbreeze Shoes, Urban - Ultra Comfortable Shoes, Breeze Shoes for Men, Men's Mesh Dress Sneakers Business Shoes",
    slug: toSlug(
      "Mens Wearbreeze Shoes, Urban - Ultra Comfortable Shoes, Breeze Shoes for Men, Men's Mesh Dress Sneakers Business Shoes"
    ),
    category: 'الاجهزة الكهربائية',
    brand: ' الاجهزة الكهربائية',
    images: ['/images/الاجهزة-الكهربائية.jpg'],
    tags: ['best-seller', 'todays-deal'],
    isPublished: true,
    price: 1700,
    listPrice: 2650,
    avgRating: 4,
    numReviews: 113,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    countInStock: 46,
    numSales: 48,
    description:
      'Cloudfoam Comfort sockliner is ultra-soft and plush, with two layers of cushioning topped with soft, breathable mesh',
    sizes: [],
    colors: [],

    reviews: [],
  },

  // {
  //   name: "Mens Wearbreeze Shoes, Urban - Ultra Comfortable Shoes, Breeze Shoes for Men, Men's Mesh Dress Sneakers Business Shoes",
  //   slug: toSlug(
  //     "Mens Wearbreeze Shoes, Urban - Ultra Comfortable Shoes, Breeze Shoes for Men, Men's Mesh Dress Sneakers Business Shoes"
  //   ),
  //   category: 'الاجهزة الكهربائية',
  //   brand: 'الاجهزة الكهربائية',
  //   images: ['/images/الاجهزة-الكهربائية.jpg'],
  //   tags: ['best-seller', 'todays-deal'],
  //   isPublished: true,
  //   price: 1700,
  //   listPrice: 2850,
  //   avgRating: 4,
  //   numReviews: 63,
  //   ratingDistribution: [
  //     { rating: 1, count: 1 },
  //     { rating: 2, count: 2 },
  //     { rating: 3, count: 0 },
  //     { rating: 4, count: 4 },
  //     { rating: 5, count: 3 },
  //   ],
  //   countInStock: 46,
  //   numSales: 48,
  //   description:
  //     'Cloudfoam Comfort sockliner is ultra-soft and plush, with two layers of cushioning topped with soft, breathable mesh',
  //   sizes: [],
  //   colors: [],

  //   reviews: [],
  // },

  // {
  //   name: "Mens Wearbreeze Shoes, Urban - Ultra Comfortable Shoes, Breeze Shoes for Men, Men's Mesh Dress Sneakers Business Shoes",
  //   slug: toSlug(
  //     "Mens Wearbreeze Shoes, Urban - Ultra Comfortable Shoes, Breeze Shoes for Men, Men's Mesh Dress Sneakers Business Shoes"
  //   ),
  //   category: 'tefal',
  //   brand: 'tefal',
  //   images: ['/images/tefal.jpg'],
  //   tags: ['best-seller', 'todays-deal'],
  //   isPublished: true,
  //   price: 5700,
  //   listPrice: 8400,
  //   avgRating: 5,
  //   numReviews: 11,
  //   ratingDistribution: [
  //     { rating: 1, count: 1 },
  //     { rating: 2, count: 2 },
  //     { rating: 3, count: 3 },
  //     { rating: 4, count: 4 },
  //     { rating: 5, count: 0 },
  //   ],
  //   countInStock: 46,
  //   numSales: 48,
  //   description:
  //     'Cloudfoam Comfort sockliner is ultra-soft and plush, with two layers of cushioning topped with soft, breathable mesh',
  //   sizes: [],
  //   colors: [],

  //   reviews: [],
  // },
]

const reviews = [
  {
    rating: 1,
    title: 'Poor quality',
    comment:
      'Very disappointed. The item broke after just a few uses. Not worth the money.',
  },
  {
    rating: 2,
    title: 'Disappointed',
    comment:
      "Not as expected. The material feels cheap, and it didn't fit well. Wouldn't buy again.",
  },
  {
    rating: 2,
    title: 'Needs improvement',
    comment:
      "It looks nice but doesn't perform as expected. Wouldn't recommend without upgrades.",
  },
  {
    rating: 3,
    title: 'not bad',
    comment:
      'This product is decent, the quality is good but it could use some improvements in the details.',
  },
  {
    rating: 3,
    title: 'Okay, not great',
    comment:
      'It works, but not as well as I hoped. Quality is average and lacks some finishing.',
  },
  {
    rating: 3,
    title: 'Good product',
    comment:
      'This product is amazing, I love it! The quality is top notch, the material is comfortable and breathable.',
  },
  {
    rating: 4,
    title: 'Pretty good',
    comment:
      "Solid product! Great value for the price, but there's room for minor improvements.",
  },
  {
    rating: 4,
    title: 'Very satisfied',
    comment:
      'Good product! High quality and worth the price. Would consider buying again.',
  },
  {
    rating: 4,
    title: 'Absolutely love it!',
    comment:
      'Perfect in every way! The quality, design, and comfort exceeded all my expectations.',
  },
  {
    rating: 4,
    title: 'Exceeded expectations!',
    comment:
      'Fantastic product! High quality, feels durable, and performs well. Highly recommend!',
  },
  {
    rating: 5,
    title: 'Perfect purchase!',
    comment:
      "Couldn't be happier with this product. The quality is excellent, and it works flawlessly!",
  },
  {
    rating: 5,
    title: 'Highly recommend',
    comment:
      "Amazing product! Worth every penny, great design, and feels premium. I'm very satisfied.",
  },
  {
    rating: 5,
    title: 'Just what I needed',
    comment:
      'Exactly as described! Quality exceeded my expectations, and it arrived quickly.',
  },
  {
    rating: 5,
    title: 'Excellent choice!',
    comment:
      'This product is outstanding! Everything about it feels top-notch, from material to functionality.',
  },
  {
    rating: 5,
    title: "Couldn't ask for more!",
    comment:
      "Love this product! It's durable, stylish, and works great. Would buy again without hesitation.",
  },
  {
    rating: 5,
    title: "Couldn't  more!",
    comment:
      "Love this product!  without hesitation.",
  },
  {
    rating: 5,
    title: "Couldn't ask for ",
    comment:
      "Love this product! It's durable,  without hesitation.",
  },
  {
    rating: 5,
    title: " ask for more!",
    comment:
      "stylish, and works great. Would buy again without hesitation.",
  },
]

const data: Data = {
  users,
  products,
  reviews,
  webPages: [
    {
      title: 'من نحن',
      slug: 'about-us',
      content: `
مرحبًا بك في — [ Shark ] وجهتك الأولى لشراء الأدوات المنزلية عالية الجودة في مصر.

نعمل على توفير أفضل المنتجات التي تجمع بين الجودة العالية والسعر المناسب،
لنساعدك على تجهيز منزلك بكل ما تحتاجه بسهولة وثقة.


انطلقت [ Shark ] بهدف تقديم تجربة تسوق مختلفة تعتمد على الراحة، السرعة، والمصداقية.
نحرص على اختيار منتجاتنا بعناية لتشمل أحدث وأفضل الأدوات المنزلية،
من أدوات المطبخ والتنظيف إلى مستلزمات التنظيم والديكور، لتجد كل ما تبحث عنه في مكان واحد.


نؤمن أن رضا العميل هو أساس نجاحنا، لذلك نوفر شحنًا سريعًا داخل جميع محافظات مصر،
ووسائل دفع آمنة ومتعددة، بالإضافة إلى فريق خدمة عملاء جاهز دائمًا لمساعدتك قبل وبعد الشراء.


ومع استمرار نمونا، يظل التزامنا بالجودة وخدمة العملاء ثابتًا.
ونسعد بأن نكون جزءًا من كل منزل مصري، ونقدّم لك قيمة حقيقية في كل طلب.

شكرًا لثقتك في — [ Shark ]`,

      isPublished: true,
    },
    {
      title: 'Contact Us',
      slug: 'contact-us',
      content: `نحن هنا لمساعدتك! إذا كان لديك أي أسئلة، استفسارات، أو ملاحظات، لا تتردد في التواصل معنا. فريقنا جاهز لدعمك وضمان حصولك على أفضل تجربة تسوق ممكنة.

طرق التواصل

📧 البريد الإلكتروني: support@yourstore.com

📞 الهاتف / واتساب: 01200000000

💬 الدردشة المباشرة: متاحة عبر الموقع

⏰ مواعيد العمل: يوميًا من 10 صباحًا حتى 10 مساءً (ما عدا العطلات الرسمية)

المقر الإداري

📍 العنوان: [ميت الخولي عبدلله — دمياط، مصر]

📞 هاتف الإدارة: 0120000000

نلتزم بالرد خلال 24 ساعة كحد أقصى، وغالبًا خلال نفس اليوم.

نتطلع لخدمتك دائمًا! رضاك هو أولويتنا الأولى
`,
      isPublished: true,
    },
    {
      title: 'مركز المساعدة',
      slug: 'help',
      content: `مرحبًا بك في مركز المساعدة الخاص بـ [ Shark ]. نحن هنا لمساعدتك في أي استفسار يخص الطلبات، الشحن، الحساب، أو المنتجات لضمان تجربة تسوق سهلة وآمنة داخل مصر.

-الطلبات

لإجراء طلب: تصفّح الأقسام، أضف المنتجات إلى السلة، ثم أكمل الدفع.

لمتابعة الطلب: انتقل إلى صفحة طلباتي داخل حسابك.

لتعديل أو إلغاء الطلب: تواصل معنا في أسرع وقت ممكن قبل شحن الطلب.


-الشحن والاسترجاع

نوفر شحنًا لجميع محافظات مصر بخيارات عادي وسريع.

لمعرفة التكلفة ومدة التوصيل: راجع صفحة سياسة الشحن.

لطلب الاسترجاع أو الاستبدال: راجع صفحة سياسة الاسترجاع وقدم الطلب خلال المدة المحددة.


-الحساب

لتحديث بياناتك أو العناوين: ادخل إلى صفحة حسابي.

لإدارة وسائل الدفع أو تغيير كلمة المرور: من داخل إعدادات الحساب.
`,
      
      isPublished: true,
    },
    {
      title: 'إشعار الخصوصية',
      slug: 'privacy-policy',
      content: `في [ Shark ] نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. يوضح هذا الإشعار كيفية جمع واستخدام وحماية معلوماتك عند استخدامك لموقعنا أو إجراء عمليات الشراء من خلاله.
      
1-المعلومات التي نجمعها

قد نقوم بجمع المعلومات التالية:

الاسم، رقم الهاتف، البريد الإلكتروني، وعنوان التوصيل

بيانات الطلبات وعمليات الشراء

معلومات الدفع (يتم معالجتها عبر مزودي دفع آمنين ولا نقوم بتخزين بيانات البطاقات)

2-كيفية استخدام المعلومات

نستخدم بياناتك من أجل:

معالجة الطلبات وتنفيذ الشحن

التواصل معك بخصوص الطلب أو الدعم الفني

تحسين خدماتنا وتجربة المستخدم

إرسال عروض أو تحديثات في حال موافقتك على ذلك

3-مشاركة المعلومات

لا نقوم ببيع أو مشاركة بياناتك مع أي طرف ثالث إلا في الحالات التالية:

شركات الشحن ومزودي الدفع لتنفيذ الطلب

الجهات القانونية إذا طُلب ذلك بموجب القانون

4-حماية البيانات

نطبق إجراءات تقنية وتنظيمية مناسبة لحماية بياناتك من الوصول غير المصرح به أو الاستخدام غير القانوني.

5-حقوقك

يحق لك:

طلب الاطلاع على بياناتك أو تعديلها

طلب حذف بياناتك في أي وقت (ما لم يتعارض ذلك مع متطلبات قانونية أو محاسبية)

6-ملفات تعريف الارتباط (Cookies)

قد نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح، ويمكنك تعطيلها من إعدادات المتصفح في أي وقت.

7-التعديلات على الإشعار

نحتفظ بالحق في تعديل هذا الإشعار، وسيتم نشر أي تحديث على هذه الصفحة.

8-التواصل معنا

لأي استفسار بخصوص الخصوصية، يرجى التواصل عبر صفحة اتصل بنا أو عبر البريد الإلكتروني:
📧 privacy@yourstore.com

باستخدامك للموقع، فإنك توافق على بنود إشعار الخصوصية هذا.

[ Shark ] — نلتزم بحماية خصوصيتك وبناء ثقتك.`,
      isPublished: true,
    },
    {
      title: 'شروط الاستخدام',
      slug: 'conditions-of-use',
      content: `مرحبًا بك في [ Shark ]. باستخدامك لهذا الموقع أو بإتمام أي عملية شراء من خلاله، فإنك توافق على الالتزام بشروط وأحكام الاستخدام الموضحة أدناه. يرجى قراءتها بعناية.

      
1-استخدام الموقع

يحق لك استخدام الموقع لأغراض شخصية وقانونية فقط.

يُمنع استخدام الموقع في أي نشاط غير قانوني أو يضر بالموقع أو بالغير.

يحتفظ المتجر بالحق في تعليق أو إنهاء أي حساب في حال إساءة الاستخدام.

2-الحساب والمعلومات

يتحمل المستخدم مسؤولية صحة البيانات التي يقوم بإدخالها.

يجب الحفاظ على سرية بيانات الدخول وعدم مشاركتها مع أي طرف آخر.

3-الطلبات والدفع

جميع الطلبات خاضعة للتوافر وتأكيد الدفع.

يحتفظ المتجر بالحق في إلغاء أي طلب في حال وجود خطأ في السعر أو توفر المنتج.

الأسعار المعروضة تشمل الضريبة إن وُجدت ما لم يُذكر خلاف ذلك.

4-الشحن والتوصيل

يتم التوصيل داخل مصر فقط وفقًا لسياسة الشحن الخاصة بالمتجر.

المتجر غير مسؤول عن أي تأخير ناتج عن ظروف خارجة عن الإرادة مثل الطقس أو شركات الشحن.

5-الاستبدال والاسترجاع

تخضع جميع عمليات الاستبدال والاسترجاع لسياسة الاسترجاع المعتمدة في المتجر.

لن يتم قبول أي طلب يخالف شروط سياسة الاسترجاع.

6-الملكية الفكرية

جميع المحتويات المعروضة على الموقع (نصوص، صور، شعارات) هي ملك لـ [ Shark ] ولا يجوز استخدامها دون إذن مسبق.

7-حدود المسؤولية

المتجر غير مسؤول عن أي أضرار غير مباشرة ناتجة عن استخدام الموقع أو المنتجات إلا في حدود ما يسمح به القانون المصري.

8-التعديلات

يحتفظ المتجر بالحق في تعديل هذه الشروط في أي وقت، ويصبح التعديل نافذًا فور نشره على الموقع.

9-القانون المعمول به

تخضع هذه الشروط وتُفسّر وفقًا لقوانين جمهورية مصر العربية.

باستخدامك للموقع، فإنك تقر بموافقتك الكاملة على هذه الشروط.

إذا كان لديك أي استفسار، يُرجى التواصل معنا عبر صفحة اتصل بنا.

[ Shark ] — نلتزم بالشفافية لحماية حقوقك وحقوقنا.`,
      isPublished: true,
    },
//===============================================================    
    {
      title: 'خدمة العملاء',
      slug: 'customer-service',
      content: `في " Shark " نحرص على راحتك وتقديم تجربة تسوق سهلة وآمنة عند شراء المنتجات. فريق خدمة العملاء لدينا جاهز لمساعدتك في أي استفسار يخص الطلبات، التوصيل، أو سياسة الاستبدال والاسترجاع..

  طرق التواصل معنا:

📧 البريد الإلكتروني: support@Shark.com

📞 الهاتف / واتساب: 01200000000

💬الدردشة المباشرة: متاحة يوميًا عبر الموقع

⏰ مواعيد العمل: يوميًا من 10 صباحًا حتى 10 مساءً (ما عدا العطلات الرسمية)

نخدمك في:

الاستفسار عن المنتجات والمواصفات

متابعة حالة الطلب والشحن

طلب الاستبدال أو الاسترجاع

حل أي مشكلة متعلقة بالطلب

نسعى للرد خلال 24 ساعة كحد أقصى، وغالبًا خلال نفس اليوم. رضاك هو أولويتنا، وهدفنا أن تصلك منتجاتك بسرعة وبأعلى جودة ممكنة.

شكرًا لاختيارك [ Shark ]`,
      isPublished: true,
    },
    {
      title: 'سياسة الاستبدال والاسترجاع',
      slug: 'returns-policy',
      content: `  
حرصًا على رضا عملائنا، نوفر سياسة استبدال واسترجاع واضحة وفقًا للشروط التالية:

يحق للعميل طلب الاسترجاع أو الاستبدال خلال 14 يومًا من تاريخ استلام الطلب.

يشترط أن يكون المنتج في حالته الأصلية، غير مستخدم، وبالغلاف الأصلي مع كامل الملحقات.

المنتجات الكهربائية أو القابلة للاستخدام الصحي لا تُسترجع إلا في حالة وجود عيب تصنيع مثبت.

في حالة وصول منتج تالف أو غير مطابق للطلب، يتحمل المتجر كامل تكلفة الاسترجاع أو الاستبدال.

في حالة رغبة العميل في الاسترجاع بدون وجود خطأ من المتجر، يتحمل العميل تكلفة الشحن.

يتم رد المبلغ خلال 5 إلى 10 أيام عمل بعد استلام المنتج المرتجع وفحصه.

لطلب الاسترجاع أو الاستبدال، يُرجى التواصل مع خدمة العملاء علي رقم 01200000000.`,


      isPublished: true,
    },
    {
      title: 'الوظائف',
      slug: 'careers',
      content: `في [ Shark ] نؤمن أن فريق العمل هو أساس نجاحنا. لذلك نبحث دائمًا عن أشخاص متميزين، لديهم شغف بالتطوير وخدمة العملاء، للانضمام إلى فريقنا المتنامي في مجال بيع الأدوات المنزلية داخل مصر.
      
لماذا تنضم إلينا..؟
      
-بيئة عمل احترافية وداعمة

-فرص للتعلّم والتطوّر الوظيفي

-رواتب ومزايا تنافسية

-العمل ضمن فريق متعاون ومتحفّز

الوظائف المتاحة:

-خدمة عملاء

-مبيعات إلكترونية

-إدارة مخزون

-تسويق رقمي

-توصيل وشحن

يتم تحديث الوظائف الشاغرة باستمرار حسب احتياجات العمل.

كيفية التقديم:

يرجى إرسال السيرة الذاتية مع ذكر اسم الوظيفة في عنوان الرسالة إلى:

📧 jobs@yourshark.com

سيتم التواصل مع المرشحين المناسبين فقط.

نرحب بانضمامك إلى فريق [ Shark ] وننتظر أن تكون جزءًا من رحلتنا نحو النجاح.`,
      isPublished: true,
    },
    {
      title: 'المدوّنة',
      slug: 'blog',
      content: `مرحبًا بك في مدوّنة [ Shark ] — دليلك العملي لكل ما يخص الأدوات المنزلية ونصائح الاستخدام داخل البيت المصري. نشاركك هنا أحدث النصائح، الإرشادات، وأفضل الاختيارات التي تساعدك على اتخاذ قرار شراء ذكي وسهل.
      

ماذا ستجد في المدوّنة؟

نصائح لاختيار أفضل الأدوات المنزلية

طرق الاستخدام الصحيحة وإطالة عمر المنتجات

مقارنات بين المنتجات لمساعدتك في الاختيار

أفكار لتنظيم وتنظيف المنزل بسهولة

أحدث العروض والمنتجات الجديدة

نحرص على تقديم محتوى بسيط، مفيد، وموثوق يساعدك على الاستفادة القصوى من مشترياتك.

📌 يتم تحديث المدوّنة بشكل دوري بمقالات جديدة تناسب احتياجاتك اليومية.

تابعنا دائمًا لتبقى على اطلاع بكل ما هو جديد — ونسعد بأن نكون جزءًا من راحتك في منزلك.

[ Shark ] — لأن بيتك يستحق الأفضل.`,
      isPublished: true,
    },
    {
      title: 'بيع منتجاتك معنا',
      slug: 'sell',
      content: ` في [ Shark ] نتيح للمورّدين وأصحاب العلامات التجارية عرض وبيع منتجاتهم من الأدوات المنزلية عبر منصتنا والوصول إلى آلاف العملاء في جميع محافظات مصر.

لماذا تبيع معنا؟

1- الوصول إلى قاعدة عملاء واسعة داخل مصر

2- دعم تسويقي وعرض احترافي للمنتجات

3- نظام طلبات ودفع آمن وسهل

4- خدمة شحن وتوصيل موثوقة

5- تقارير واضحة عن المبيعات والأداء

ما هي المنتجات المقبولة؟

نقبل جميع أنواع الأدوات المنزلية عالية الجودة مثل:

أدوات المطبخ

أدوات التنظيف والتنظيم

مستلزمات التخزين والديكور

الأجهزة المنزلية والكهربائية الصغيرة والكبيرة

يشترط أن تكون المنتجات أصلية، مطابقة للمواصفات، وجاهزة للتوريد داخل مصر.

كيفية البدء:

1- أرسل بياناتك وبيانات المنتجات عبر البريد الإلكتروني.

2- سيقوم فريقنا بمراجعة الطلب خلال 2–3 أيام عمل.

3- بعد الموافقة، نساعدك في إدراج المنتجات وبدء البيع فورًا.

📧 للتسجيل كمورّد: vendors@yourstore.com

📞 للاستفسار: 01200000000

نرحب بانضمامك إلى شركائنا في [ Shark ] ونتطلع لبناء شراكة ناجحة معك 🤝`,
      isPublished: true,
    },
    {
      title: 'انضم كشريك تسويق',
      slug: 'become-affiliate',
      content: `في [ Shark ] نتيح لك فرصة الربح من خلال التسويق لمنتجاتنا داخل مصر عبر برنامج الشراكة التسويقية (Affiliate Program).
      
سواء كنت تمتلك موقعًا إلكترونيًا، صفحة على وسائل التواصل الاجتماعي، قناة يوتيوب، أو قاعدة عملاء خاصة بك — يمكنك البدء في تحقيق دخل مقابل كل عملية بيع تتم من خلالك.
      
لماذا تنضم إلى برنامج الشركاء؟

1- عمولة مجزية على كل عملية بيع ناجحة

2- منتجات مطلوبة وسهلة التسويق

3- روابط تتبع خاصة بكل شريك

4- تقارير واضحة عن الأداء والأرباح

5- سحب الأرباح بسهولة وبشكل منتظم

كيف يعمل البرنامج؟

1- سجّل كشريك تسويق عبر التواصل معنا.

2- تحصل على رابط تتبع خاص بك.

3- قم بالترويج للمنتجات عبر قنواتك.

4- احصل على عمولة عن كل عملية بيع تتم من خلال رابطك.

شروط الانضمام:

1- الالتزام بأساليب تسويق أخلاقية وشفافة

2- عدم استخدام الإعلانات المضللة أو المحتوى المخالف

3- الحفاظ على صورة العلامة التجارية بشكل احترافي

كيفية التسجيل:

للانضمام إلى برنامج الشراكة التسويقية، أرسل بياناتك إلى:

📧 affiliate@yourstore.com

📞 واتساب / هاتف: 01200000000

سيقوم فريقنا بمراجعة طلبك والتواصل معك خلال 48 ساعة.

ابدأ الآن وكن شريكًا في نجاح [ Shark ] 🤝`,
      
      isPublished: true,
    },
    {
      title: ' أعلن عن منتجاتك معنا ',
      slug: 'advertise',
      content: `في [ Shark ] نتيح لأصحاب العلامات التجارية والمورّدين فرصة الإعلان عن منتجاتهم والوصول إلى شريحة واسعة من العملاء في جميع محافظات مصر.
      
إذا كنت ترغب في زيادة مبيعاتك وانتشار علامتك التجارية، منصتنا توفر لك الحل المناسب.
      
لماذا تعلن معنا؟

الوصول إلى آلاف العملاء المهتمين بالأدوات المنزلية

ظهور مميز لمنتجاتك داخل صفحات الموقع

حملات إعلانية موجهة حسب الفئة والاهتمام

تقارير أداء واضحة لقياس النتائج

دعم من فريقنا الإعلاني لتحسين الحملات

أشكال الإعلان المتاحة:

منتجات مميزة في الصفحة الرئيسية

إعلانات داخل صفحات الأقسام

حملات ترويجية موسمية

نشرات بريدية تسويقية

الشروط:

أن تكون المنتجات أصلية ومطابقة للمواصفات

الالتزام بسياسة التسعير والجودة الخاصة بالمتجر

الالتزام بالمحتوى الإعلاني المهني وغير المضلل

كيفية البدء:

تواصل معنا لتحديد نوع الإعلان المناسب لك:

📧 ads@yourstore.com

📞 واتساب / هاتف: 0120000000

فريقنا سيساعدك في اختيار أفضل خطة لتحقيق أعلى عائد على استثمارك الإعلاني.

[ Shark ] — نساعدك على بيع أكثر والوصول لأفضل العملاء.`,
      isPublished: true,
    },
    {
      title: 'Shipping Rates & Policies',
      slug: 'shipping',
      content: 'Shipping Rates & Policies',
      isPublished: true,
    },
  ],
  headerMenus: [
    {
      name: "Today's Deal",
      href: '/search?tag=todays-deal',
    },
    {
      name: 'New Arrivals',
      href: '/search?tag=new-arrival',
    },
    {
      name: 'Featured Products',
      href: '/search?tag=featured',
    },
    {
      name: 'Best Sellers',
      href: '/search?tag=best-seller',
    },
    {
      name: 'Browsing History',
      href: '/#browsing-history',
    },
    {
      name: 'Customer Service',
      href: '/page/customer-service',
    },
    {
      name: 'About Us',
      href: '/page/about-us',
    },
    {
      name: 'Help',
      href: '/page/help',
    },
  ],
  carousels: [
    {
      title: 'Most Popular Shoes For Sale',
      buttonCaption: 'Shop Now',
      image: '/images/seramek.jpg',
      url: '/search?category=حلل جرانيت',
      isPublished: true,
    },
    {
      title: 'Best Sellers in T-Shirts',
      buttonCaption: 'Shop Now',
      image: '/images/tea-2.jpg',
      url: '/search?category=اطقم شاي',
      isPublished: true,
    },
    {
      title: 'Best Deals on Wrist Watches',
      buttonCaption: 'See More',
      image: '/images/tea.jpg',
      url: '/search?category=اطقم شاي',
      isPublished: true,
    },
  ],
  settings: [
    {
      common: {
        freeShippingMinPrice: 35,
        isMaintenanceMode: false,
        defaultTheme: 'Light',
        defaultColor: 'Gold',
        pageSize: 9,
      },
      site: {
        name: 'shark',
        description:
          'NxtAmzn is a sample Ecommerce website built with Next.js, Tailwind CSS, and MongoDB.',
        keywords: 'Next Ecommerce, Next.js, Tailwind CSS, MongoDB',
        url: 'https://next-mongo-ecommerce-final.vercel.app',
        logo: '/icons/img-1.png',
        slogan: 'Spend less, enjoy more.',
        author: 'Next Ecommerce',
        copyright: '2000-2024, Next-Ecommerce.com, Inc. or its affiliates',
        email: 'admin@example.com',
        address: '123, Main Street, Anytown, CA, Zip 12345',
        phone: '+1 (123) 456-7890',
      },
      carousels: [
    {
      title: 'Most Popular Shoes For Sale',
      buttonCaption: 'Shop Now',
      image: '/images/seramek.jpg',
      url: '/search?category=حلل جرانيت',
      
    },
    {
      title: 'Best Sellers in T-Shirts',
      buttonCaption: 'Shop Now',
      image: '/images/tea-2.jpg',
      url: '/search?category=اطقم شاي',
      
    },
    {
      title: 'Best Deals on Wrist Watches',
      buttonCaption: 'See More',
      image: '/images/tea.jpg',
      url: '/search?category=اطقم شاي',
     
    },
  ],
      availableLanguages: i18n.locales.map((locale) => ({
        code: locale.code,
        name: locale.name,
      })),
      defaultLanguage: 'en-US',
      availableCurrencies: [
      { name: 'Egypt', code: 'EGP', symbol: 'جنية', convertRate: 1 },
        // {
        //   name: 'United States Dollar',
        //   code: 'USD',
        //   symbol: '$',
        //   convertRate: 49.50,
        // },
        // { name: 'Euro', code: 'EUR', symbol: '€', convertRate: 55.50 },
        // { name: 'UAE Dirham', code: 'AED', symbol: 'AED', convertRate: 12.90 },
      ],
      defaultCurrency: 'EGP',
      availablePaymentMethods: [
        { name: 'PayPal', commission: 0 },
        { name: 'Mobile Wallets', commission: 0 },
        { name: 'Cash On Delivery', commission: 0 },
      ],
      defaultPaymentMethod: 'Cash On Delivery',
      availableDeliveryDates: [
        {
          name: 'Next 3 Days',
          daysToDeliver: 3,
          shippingPrice: 120,
          freeShippingMinPrice: 35,
        },
        {
          name: 'Next 5 Days',
          daysToDeliver: 5,
          shippingPrice: 100,
          freeShippingMinPrice: 25,
        },
        {
          name: 'Next 7 Days',
          daysToDeliver: 7,
          shippingPrice: 80,
          freeShippingMinPrice: 15,
        },
      ],
      defaultDeliveryDate: 'Next 5 Days',
    },
  ],
}

export default data
