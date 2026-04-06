// دفعة 1: كتب 1-50
const books = [
{ id:1, title:"فن إدارة الوقت", url:"https://example.com/book1" },
{ id:2, title:"التفكير الإيجابي", url:"https://example.com/book2" },
{ id:3, title:"كيف تصبح غنيا", url:"https://example.com/book3" },
{ id:4, title:"علم النفس للسعادة", url:"https://example.com/book4" },
{ id:5, title:"الذكاء العاطفي", url:"https://example.com/book5" },
{ id:6, title:"تطوير الذات 1", url:"https://example.com/book6" },
{ id:7, title:"تطوير الذات 2", url:"https://example.com/book7" },
{ id:8, title:"إدارة الأموال الشخصية", url:"https://example.com/book8" },
{ id:9, title:"النجاح في الحياة", url:"https://example.com/book9" },
{ id:10, title:"عادات يومية للنجاح", url:"https://example.com/book10" },
{ id:11, title:"التركيز العالي", url:"https://example.com/book11" },
{ id:12, title:"تحفيز الذات", url:"https://example.com/book12" },
{ id:13, title:"فن اتخاذ القرار", url:"https://example.com/book13" },
{ id:14, title:"التغلب على القلق", url:"https://example.com/book14" },
{ id:15, title:"الاستثمار الذكي", url:"https://example.com/book15" },
{ id:16, title:"الإبداع والتفكير", url:"https://example.com/book16" },
{ id:17, title:"مهارات التواصل", url:"https://example.com/book17" },
{ id:18, title:"الذكاء المالي", url:"https://example.com/book18" },
{ id:19, title:"التخطيط الشخصي", url:"https://example.com/book19" },
{ id:20, title:"قوة العادات", url:"https://example.com/book20" },
{ id:21, title:"النجاح المالي", url:"https://example.com/book21" },
{ id:22, title:"تحقيق الأحلام", url:"https://example.com/book22" },
{ id:23, title:"فن التفاوض", url:"https://example.com/book23" },
{ id:24, title:"التحفيز اليومي", url:"https://example.com/book24" },
{ id:25, title:"تنمية التفكير الإبداعي", url:"https://example.com/book25" },
{ id:26, title:"القيادة الشخصية", url:"https://example.com/book26" },
{ id:27, title:"إدارة الضغوط", url:"https://example.com/book27" },
{ id:28, title:"النجاح الدراسي", url:"https://example.com/book28" },
{ id:29, title:"حياة أكثر سعادة", url:"https://example.com/book29" },
{ id:30, title:"التفكير النقدي", url:"https://example.com/book30" },
{ id:31, title:"قوة التركيز", url:"https://example.com/book31" },
{ id:32, title:"التحكم في الوقت", url:"https://example.com/book32" },
{ id:33, title:"تطوير العقل", url:"https://example.com/book33" },
{ id:34, title:"إدارة العواطف", url:"https://example.com/book34" },
{ id:35, title:"التفكير الاستراتيجي", url:"https://example.com/book35" },
{ id:36, title:"فن القيادة", url:"https://example.com/book36" },
{ id:37, title:"مهارات النجاح", url:"https://example.com/book37" },
{ id:38, title:"التحفيز الداخلي", url:"https://example.com/book38" },
{ id:39, title:"التخطيط المالي", url:"https://example.com/book39" },
{ id:40, title:"استراتيجيات النجاح", url:"https://example.com/book40" },
{ id:41, title:"الذكاء الشخصي", url:"https://example.com/book41" },
{ id:42, title:"السعادة اليومية", url:"https://example.com/book42" },
{ id:43, title:"الاستثمار للأفراد", url:"https://example.com/book43" },
{ id:44, title:"مهارات عقلية", url:"https://example.com/book44" },
{ id:45, title:"تطوير القدرات", url:"https://example.com/book45" },
{ id:46, title:"فن الإدارة الذاتية", url:"https://example.com/book46" },
{ id:47, title:"تحقيق الذات", url:"https://example.com/book47" },
{ id:48, title:"التحفيز العملي", url:"https://example.com/book48" },
{ id:49, title:"قوة العقل", url:"https://example.com/book49" },
{ id:50, title:"تنمية الشخصية", url:"https://example.com/book50" }
];

// دفعة 2: كتب 51-100
const moreBooks = [
{ id:51, title:"قوة العادات اليومية", url:"https://example.com/book51" },
{ id:52, title:"التفكير الإيجابي المتقدم", url:"https://example.com/book52" },
{ id:53, title:"فن النجاح الشخصي", url:"https://example.com/book53" },
{ id:54, title:"التخطيط المالي الذكي", url:"https://example.com/book54" },
{ id:55, title:"التحفيز المستمر", url:"https://example.com/book55" },
{ id:56, title:"تطوير العقل الإبداعي", url:"https://example.com/book56" },
{ id:57, title:"الذكاء العاطفي المتقدم", url:"https://example.com/book57" },
{ id:58, title:"التحكم في النفس", url:"https://example.com/book58" },
{ id:59, title:"إدارة الوقت المتقدم", url:"https://example.com/book59" },
{ id:60, title:"استراتيجيات التفوق", url:"https://example.com/book60" },
{ id:61, title:"مهارات التفكير العالي", url:"https://example.com/book61" },
{ id:62, title:"النجاح في الحياة العملية", url:"https://example.com/book62" },
{ id:63, title:"التوازن النفسي", url:"https://example.com/book63" },
{ id:64, title:"إدارة العواطف المتقدمة", url:"https://example.com/book64" },
{ id:65, title:"قوة التركيز العالي", url:"https://example.com/book65" },
{ id:66, title:"التحفيز الذاتي المستمر", url:"https://example.com/book66" },
{ id:67, title:"فن اتخاذ القرار المتقدم", url:"https://example.com/book67" },
{ id:68, title:"التفكير الاستراتيجي الشخصي", url:"https://example.com/book68" },
{ id:69, title:"التفكير النقدي المتقدم", url:"https://example.com/book69" },
{ id:70, title:"مهارات العقل السليم", url:"https://example.com/book70" },
{ id:71, title:"السعادة الحقيقية", url:"https://example.com/book71" },
{ id:72, title:"التحكم في القلق", url:"https://example.com/book72" },
{ id:73, title:"التفوق المالي", url:"https://example.com/book73" },
{ id:74, title:"استراتيجيات النجاح اليومي", url:"https://example.com/book74" },
{ id:75, title:"التحفيز العملي المستمر", url:"https://example.com/book75" },
{ id:76, title:"تنمية القدرات العقلية", url:"https://example.com/book76" },
{ id:77, title:"إدارة الذات بذكاء", url:"https://example.com/book77" },
{ id:78, title:"فن القيادة الشخصية", url:"https://example.com/book78" },
{ id:79, title:"التعلم السريع", url:"https://example.com/book79" },
{ id:80, title:"تحقيق الذات المتقدم", url:"https://example.com/book80" },
{ id:81, title:"مهارات عقلية متقدمة", url:"https://example.com/book81" },
{ id:82, title:"إبداع وحلول مبتكرة", url:"https://example.com/book82" },
{ id:83, title:"التخطيط الشخصي المتقدم", url:"https://example.com/book83" },
{ id:84, title:"تطوير الذات العملي", url:"https://example.com/book84" },
{ id:85, title:"الذكاء المالي المتقدم", url:"https://example.com/book85" },
{ id:86, title:"إدارة العلاقات الاجتماعية", url:"https://example.com/book86" },
{ id:87, title:"النجاح الدراسي المتقدم", url:"https://example.com/book87" },
{ id:88, title:"تحفيز العقل الباطن", url:"https://example.com/book88" },
{ id:89, title:"مهارات التفكير الإبداعي المتقدم", url:"https://example.com/book89" },
{ id:90, title:"فن التعامل مع الناس", url:"https://example.com/book90" },
{ id:91, title:"تحقيق الأهداف المالية", url:"https://example.com/book91" },
{ id:92, title:"تطوير العادات اليومية", url:"https://example.com/book92" },
{ id:93, title:"مهارات القيادة المتقدمة", url:"https://example.com/book93" },
{ id:94, title:"النجاح الشخصي والمهني", url:"https://example.com/book94" },
{ id:95, title:"الذكاء الشخصي المتقدم", url:"https://example.com/book95" },
{ id:96, title:"تنمية التفكير العالي", url:"https://example.com/book96" },
{ id:97, title:"التحفيز الذاتي اليومي", url:"https://example.com/book97" },
{ id:98, title:"فن التخطيط الشخصي", url:"https://example.com/book98" },
{ id:99, title:"إدارة الوقت بذكاء", url:"https://example.com/book99" },
{ id:100, title:"التفوق الشخصي الكامل", url:"https://example.com/book100" }
];

// دمج الدفعتين
books.push(...moreBooks);

// عرض الكتب
function showBooks() {
    const container = document.getElementById('booksContainer');
    container.innerHTML = '';
    books.forEach(b => {
        const btn = document.createElement('button');
        btn.innerText = b.id + ". " + b.title;
        btn.onclick = () => window.open(b.url, "_blank");
        container.appendChild(btn);
    });
}

// AI للاستشارات المالية والدعم النفسي
document.getElementById('askAI').addEventListener('click', () => {
    const question = document.getElementById('aiInput').value.toLowerCase();
    const output = document.getElementById('aiOutput');

    if(question.includes("مال") || question.includes("استثمار") || question.includes("عمل")){
        output.innerHTML = "نصيحة مالية: ركز على تطوير مهاراتك واكتساب خبرات عملية.";
    } else if(question.includes("حزن") || question.includes("ضغط") || question.includes("توتر")){
        output.innerHTML = "دعم نفسي: حاول تدوين أفكارك وأهدافك اليومية، وخذ استراحة قصيرة عند الحاجة.";
    } else if(question.includes("سعادة") || question.includes("فرح") || question.includes("سرور")){
        output.innerHTML = "نصيحة حياتية: مارس نشاطًا تحبه يوميًا وحافظ على علاقات اجتماعية إيجابية.";
    } else {
        output.innerHTML = "آسف، لا أستطيع الإجابة عن هذا السؤال.";
    }
});

// عرض الكتب عند فتح الصفحة
showBooks();
