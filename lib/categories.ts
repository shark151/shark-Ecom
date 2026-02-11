// const reviews = [
//   {
//     rating: 5,
//     title: 'المنتج روعه جدا',
//     comment:
//       'جودة ممتازة جدًا وسعر مناسب. استلمت الطلب في اليوم التالي والتغليف كان محترم جدًا. هكرر التجربة أكيد.',
//   },
//   {
//     rating: 4,
//     title: 'تجربه ممتازه',
//     comment:
//       "المنتج مطابق للوصف بالضبط وخدمة العملاء كانت متعاونة جدًا. تجربة شراء سهلة ومريحة",
//   },
//   {
//     rating: 5,
//     title: 'بجد يعني من افضل المنتجات اللي شوفتها',
//     comment:
//       "أدوات المطبخ عملية جدًا وسهلة الاستخدام. فرق واضح في الجودة مقارنة بمنتجات تانية اشتريتها قبل كده",
//   },
//   {
//     rating: 3,
//     title: 'شكرا جدا لكم',
//     comment:
//       'التوصيل سريع والتعامل محترم جدًا. المنتج وصل سليم ومغلف كويس',
//   },
//   {
//     rating: 5,
//     title: 'Okay, not great',
//     comment:
//       'عجبني التنوع الكبير في المنتجات والأسعار مناسبة. كل حاجة لقيتها في مكان واحد',
//   },
//   {
//     rating: 3,
//     title: 'Good product',
//     comment:
//       'طلبت أكتر من مرة وكل مرة التجربة ممتازة. ثقة وتعامل احترافي',
//   },
//   {
//     rating: 5,
//     title: 'شكرا لحسن تعاملكم',
//     comment:
//       "خدمة ما بعد البيع ممتازة جدًا. كان عندي استفسار واترد عليه بسرعة وبوضوح",
//   },
//   {
//     rating: 4,
//     title: 'انشاء الله مكمله معاكم',
//     comment:
//       'منتجات نظيفة جدًا وخامة محترمة. أنصح أي حد يشتري من هنا',
//   },
//   {
//     rating: 4,
//     title: 'اسرع خدمه اتعملت معاها',
//     comment:
//       'استلمت المنتج قبل المعاد المحدد. حاجة تفرح بجد',
//   },
//   {
//     rating: 4,
//     title: 'بجد تنظيم المنتجات رائع',
//     comment:
//       'الموقع سهل جدًا في الاستخدام، والطلب اتعمل في دقايق ووصل بسرعة',
//   },
//   {
//     rating: 5,
//     title: 'مطابق للوصف تمامًا',
//     comment:
//       "المنتج زي الصور بالظبط ومفيش أي فرق في المواصفات",
//   },
//   {
//     rating: 5,
//     title: 'خامات محترمة جدًا',
//     comment:
//       "لقيت كل اللي محتاجاه في مكان واحد، وده وفر عليا وقت كبير",
//   },
//   {
//     rating: 5,
//     title: 'ثقة وتعامل احترافي',
//     comment:
//       'واضح إنهم بيهتموا بالعميل جدًا. هفضل أتعامل معاهم',
//   },
//   {
//     rating: 5,
//     title: 'أنصح بالتجربة',
//     comment:
//       'عن تجربة شخصية، الموقع ده يستاهل الثقة',
//   },
//   {
//     rating: 5,
//     title: "كل حاجة تمام من غير أي مشاكل",
//     comment:
//       "الطلب وصل مظبوط، والسعر مظبوط، والشحن سريع",
//   },
//   {
//     rating: 5,
//     title: "شحن سريع وتغليف محترم",
//     comment:
//       " التغليف ممتاز والمنتج وصل سليم 100% وفي معاده بالظبط",
//   },
//   {
//     rating: 5,
//     title: "جودة أعلى من السعر",
//     comment:
//       "كنت متوقع حاجة عادية لكن الجودة كانت أعلى من السعر بكتير",
//   },
//   {
//     rating: 5,
//     title: "تجربة تسوق مريحة",
//     comment:
//       "من أول الدخول للموقع لحد استلام الطلب، كله كان مريح",
//   },
// ]

//========================================================

// const reviews = [
//   {
//     rating: 1,
//     title: 'Poor quality',
//     comment:
//       'Very disappointed. The item broke after just a few uses. Not worth the money.',
//   },
//   {
//     rating: 2,
//     title: 'Disappointed',
//     comment:
//       "Not as expected. The material feels cheap, and it didn't fit well. Wouldn't buy again.",
//   },
//   {
//     rating: 2,
//     title: 'Needs improvement',
//     comment:
//       "It looks nice but doesn't perform as expected. Wouldn't recommend without upgrades.",
//   },
//   {
//     rating: 3,
//     title: 'not bad',
//     comment:
//       'This product is decent, the quality is good but it could use some improvements in the details.',
//   },
//   {
//     rating: 3,
//     title: 'Okay, not great',
//     comment:
//       'It works, but not as well as I hoped. Quality is average and lacks some finishing.',
//   },
//   {
//     rating: 3,
//     title: 'Good product',
//     comment:
//       'This product is amazing, I love it! The quality is top notch, the material is comfortable and breathable.',
//   },
//   {
//     rating: 4,
//     title: 'Pretty good',
//     comment:
//       "Solid product! Great value for the price, but there's room for minor improvements.",
//   },
//   {
//     rating: 4,
//     title: 'Very satisfied',
//     comment:
//       'Good product! High quality and worth the price. Would consider buying again.',
//   },
//   {
//     rating: 4,
//     title: 'Absolutely love it!',
//     comment:
//       'Perfect in every way! The quality, design, and comfort exceeded all my expectations.',
//   },
//   {
//     rating: 4,
//     title: 'Exceeded expectations!',
//     comment:
//       'Fantastic product! High quality, feels durable, and performs well. Highly recommend!',
//   },
//   {
//     rating: 5,
//     title: 'Perfect purchase!',
//     comment:
//       "Couldn't be happier with this product. The quality is excellent, and it works flawlessly!",
//   },
//   {
//     rating: 5,
//     title: 'Highly recommend',
//     comment:
//       "Amazing product! Worth every penny, great design, and feels premium. I'm very satisfied.",
//   },
//   {
//     rating: 5,
//     title: 'Just what I needed',
//     comment:
//       'Exactly as described! Quality exceeded my expectations, and it arrived quickly.',
//   },
//   {
//     rating: 5,
//     title: 'Excellent choice!',
//     comment:
//       'This product is outstanding! Everything about it feels top-notch, from material to functionality.',
//   },
//   {
//     rating: 5,
//     title: "Couldn't ask for more!",
//     comment:
//       "Love this product! It's durable, stylish, and works great. Would buy again without hesitation.",
//   },
//   {
//     rating: 5,
//     title: "Couldn't  more!",
//     comment:
//       "Love this product!  without hesitation.",
//   },
//   {
//     rating: 5,
//     title: "Couldn't ask for ",
//     comment:
//       "Love this product! It's durable,  without hesitation.",
//   },
//   {
//     rating: 5,
//     title: " ask for more!",
//     comment:
//       "stylish, and works great. Would buy again without hesitation.",
//   },
// ]