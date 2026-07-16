/* =======================================================
   ومن الصداقة... وُلِد الحب
   Script.js
======================================================= */

"use strict";

/* ==========================================
   اختصارات
========================================== */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

/* ==========================================
   انتظار تحميل الصفحة
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    createStars();

    createNebula();

    startIntro();

    observePages();

    startMeteorRain();

    updateLoveTimer();

    saveReadingPosition();

    restoreReadingPosition();
    initializeWishTree();
    initializeLetters();
    initializeAlbum();
    revealMoments();
    initializeMusic();

    animateSky();

    createCursorLight();

});

/* ==========================================
   إنشاء النجوم
========================================== */

function createStars() {

    const container = $("#stars");

    if (!container) return;

    for (let i = 0; i < 250; i++) {

        const star = document.createElement("div");

        star.className = "star";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";

        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "%";

        star.style.top = Math.random() * 100 + "%";

        star.style.animationDuration =
            (2 + Math.random() * 5) + "s";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        container.appendChild(star);

    }

}

/* ==========================================
   السديم
========================================== */

function createNebula() {

    const background = $("#background");

    if (!background) return;

    const nebula = document.createElement("div");

    nebula.id = "nebula";

    background.appendChild(nebula);

}

/* ==========================================
   شاشة البداية
========================================== */

function startIntro() {

    const button = $("#startButton");

    if (!button) return;

    button.addEventListener("click", () => {

        const welcome = $("#welcome");

        if (welcome) {

            welcome.style.display = "none";

        }

        document.body.style.overflowY = "auto";

        startBookTexts();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
/* ==========================================
   محرك الكتابة التدريجية
========================================== */

function typeWriter(id, text, speed = 40) {

    const element = document.getElementById(id);

    if (!element) return;

    element.innerHTML = "";

    let index = 0;

    function write() {

        if (index >= text.length) return;

        const character = text[index];

        if (character === "\n") {

            element.innerHTML += "<br>";

        } else {

            element.innerHTML += character;

        }

        index++;

        setTimeout(write, speed);

    }

    write();

}

/* ==========================================
   بداية الكتاب
========================================== */

function startBookTexts() {

    typeWriter(

        "chapter1",

        `في ليلةٍ هادئة...

      رفعتُ رأسي إلى السماء...

     ولم أكن أبحث عن نجمة...

        بل كنتُ أبحث عنكِ.`,

        45

    );

    setTimeout(() => {

        typeWriter(

            "chapter2",

            `منذ عرفتكِ...

            صار الليل أكثر دفئًا...

          وصارت النجوم...

          تشبه ابتسامتكِ.`,

            40

        );

    }, 7000);

    setTimeout(() => {

        typeWriter(

            "chapter3",

            `كل يوم...

          أكتشف أن قلبي...

         كان ينتظركِ...

          قبل أن يعرف اسمكِ.`,

            40

        );

    }, 14000);

    setTimeout(() => {

        typeWriter(

            "chapter4",

            `ولهذا...

            قررت أن أكتب هذا الكتاب...

            حتى يبقى شاهدًا...

            على أجمل صدفةٍ حدثت لي.`,

            40

        );

    }, 21000);
        setTimeout(() => {

        typeWriter(

            "chapter5",
            `
           أدركتُ...

         أن بعض الأشخاص
         لا يطرقون الباب...

         بل يصبحون
           البيت.`,

            40

        );

    }, 21000);
        setTimeout(() => {

        typeWriter(

            "chapter6",
            `
          لأن قلبي...

         لم يشعر بالسكينة    
         إلا حين عرف اسمكِ.
         `,

            40

        );

    }, 21000);
        setTimeout(() => {

        typeWriter(

            "chapter7",
            `
            لأنكِ كنتِ الوحيدة

         التي شعر قلبي معها 
         أنه في وطنه.
         `,

            40

        );
    }, 21000);
        setTimeout(() => {

        typeWriter(

            "chapter8",
            `
           وصار الحديث معكِ...

          يشبه نجمةً 
          تؤخر نوم السماء.
         `,

            40

        );
    }, 21000);
       setTimeout(() => {

        typeWriter(

            "poem1",
            `
            ما بين حرفٍ وحرف...
            كبر الدعاء...
            حتى صار
            اسمكِ
            أجمل قصائدي.
         `,
            40
        );
    }, 21000);
        setTimeout(() => {

        typeWriter(

            "chapter9",
            `
           أنني كلما رأيتُ شيئًا جميلًا...
           تمنيتُ
           لو كنتِ
           ترينه معي.
         `,

            40
        );
    }, 21000);
        setTimeout(() => {

        typeWriter(

            "chapter11",
            `
          أبحث عن رسالتكِ...
          وكأن اليوم
          لا يبدأ
          إلا بها.
         `,

            40
        );
    }, 21000);
        setTimeout(() => {

        typeWriter(

            "chapter12",
            `
         أحمد الله...
         أن يومًا آخر
         مرّ...
         وأنتِ فيه.
         `,

            40
        );
    }, 21000);
        setTimeout(() => {

        typeWriter(

            "chapter12",
            `
         أحمد الله...
         أن يومًا آخر
         مرّ...
         وأنتِ فيه.
         `,

            40
        );
    }, 21000);
        setTimeout(() => {

        typeWriter(

            "poem2",
            `
            أصبحتِ
            بين نبضةٍ وأخرى...
            البيت
            الذي يعود إليه
            قلبي.

         `,

            40
        );
    }, 21000);
        setTimeout(() => {

        typeWriter(

            "chapter13",
            `
          أكتشف شيئًا جديدًا...
          يجعلني
          أحب وجودكِ
         أكثر.

         `,

            40
        );
    }, 21000);
        setTimeout(() => {

        typeWriter(

            "chapter14",
            `
            أن السعادة...
            ليست مكانًا...
            بل شخصًا
            أفكر فيه
            كل يوم.
 
         `,

            40
        );
    }, 21000);
        setTimeout(() => {
        typeWriter(

            "chapter15",
            `
            أعدكِ...
            أن يبقى احترامي لكِ...
            أكبر من كل اختلاف.
         `,
            40
        );
    }, 21000);
        setTimeout(() => {

        typeWriter(

            "poem3",
            `
            إن ضاعت الكلمات...
            سيبقى الدعاء...
            يتحدث عني.
         `,
            40
        );
    }, 21000);
        setTimeout(() => {
        typeWriter(

            "chapter16",
            `
            أدركتُ...
            أن أجمل الصدف...
            قد تغيّر العمر كله.
         `,
            40
        );
    }, 21000);
            setTimeout(() => {
        typeWriter(

            "chapter17",
            `
            لم يكن الزمن...
            هو ما قرّبنا...
            بل الصدق.
         `,
            40
        );
    }, 21000);
        setTimeout(() => {
        typeWriter(

            "poem4",
            `
            كل نجمةٍ...
            تذكرني...
            أن هناك أمنيةً...
            اسمها أنتِ.
         `,
            40
        );
    }, 21000);
      setTimeout(() => {
        typeWriter(

            "chapter18",
            `
            لم يقل اهتمامي...
            بل أصبح
            أهدأ...
            وأصدق.

         `,
            40
        );
    }, 21000);
      setTimeout(() => {
        typeWriter(

            "chapter20",
            `
            أظن أن السعادة...
            تُبحث عنها...
            حتى وجدتكِ.
         `,
            40
        );
    }, 21000);
          setTimeout(() => {
        typeWriter(

            "chapter19",
            `
            دون أن تشعري...
            سببًا في
            طمأنينةٍ
            لم أعرفها من قبل.
         `,
            40
        );
    }, 21000);
        setTimeout(() => {
        typeWriter(

            "chapter21",
            `
            كلما أنام
            أحلم بك
            وأتمنا أن أشيخ معك


         `,
            40
        );
    }, 21000);
        setTimeout(() => {
        typeWriter(

            "poem5",
            `
            وما زلتُ...
           كلما دعوتُ...
            ذكرتُ اسمكِ
            قبل أمنياتي.
         `,
            40
        );
    }, 21000);
        setTimeout(() => {
        typeWriter(

            "poem6",
            `
            كل أمنيةٍ...
            كانت تنتهي...
            بدعاءٍ لكِ.
         `,
            40
        );
    }, 21000);
     setTimeout(() => {
        typeWriter(

            "chapter22",
            `
            لاخترتُ...
            أن تبقي
            دائمًا.
         `,
            40
        );
    }, 21000);
         setTimeout(() => {
        typeWriter(

            "chapter23",
            `
            اللهم احفظها...
            وارزقها...
            من الفرح
            أكثر مما تتمنى.
         `,
            40
        );
    }, 21000);
        setTimeout(() => {
        typeWriter(

            "chapter24",
            `
            لأن بعض النهايات...
            ليست نهاية...
            بل بداية أمل.
         `,
            40
        );
    }, 21000);
        setTimeout(() => {
        typeWriter(

            "chapter25",
            `
            بل سأعيشها...
            سأكون...
            كما وعدتُ قلبي.
         `,
            40
        );
    }, 21000);
        setTimeout(() => {
        typeWriter(

            "poem7",
            `
            إن طال الطريق...
            فسأحمل الدعاء...
            حتى آخره.
         `,
            40
        );
    }, 21000);
        setTimeout(() => {
        typeWriter(

            "chapter26",
            `
            رحمة...
            اخترتُ...
            أن أحبكِ
            بدعاءٍ صادق.
         `,
            40
        );
    }, 21000);
        setTimeout(() => {
        typeWriter(

            "poem9",
            `
            ستبقى الأيام...
            تتغير...
            أما الذكريات...
            فلا تشيخ.
         `,
            40
        );
    }, 21000);
        setTimeout(() => {
        typeWriter(

            "chapter27",
            `
            أن أجمل ما حدث لي...
            لم يكن يومًا...
            بل وجودكِ.
         `,
            40
        );
    }, 21000);
        setTimeout(() => {
        typeWriter(

            "poem8",
            `
            كل رسالةٍ...
            كانت تحمل...
            جزءًا من قلبي.
         `,
            40
        );
    }, 21000);
        setTimeout(() => {
        typeWriter(

            "timeLetter",
            `
            إن مررتَ بنا...
            فارفق بقلوبنا...
            فنحن نحب بصدق.
         `,
            40
        );
    }, 21000);
        setTimeout(() => {
        typeWriter(

            "futureLetter",
            `
            سأكون...
            كما وعدتُ قلبي.
            أحبك أكثر من أي شيء

         `,
            40
        );
    }, 21000);


    









}

/* ==========================================
   ظهور الفصول عند التمرير
========================================== */

function observePages() {

    const sections = document.querySelectorAll(
        ".page, .chapterCover"
    );

    if (!sections.length) return;

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.2
        }

    );

    sections.forEach((section) => {

        observer.observe(section);

    });

}

/* ==========================================
   عداد العلاقة
========================================== */

function updateLoveTimer() {

    const monthsCounter =
        document.getElementById("monthsCounter");

    const daysCounter =
        document.getElementById("daysCounter");

    if (!monthsCounter || !daysCounter) return;

    const startDate = new Date(2026, 4, 15);
    const today = new Date();

    let months =

        (today.getFullYear() - startDate.getFullYear()) * 12 +

        (today.getMonth() - startDate.getMonth());

    let compareDate = new Date(

        startDate.getFullYear(),

        startDate.getMonth() + months,

        startDate.getDate()

    );

    if (compareDate > today) {

        months--;

        compareDate = new Date(

            startDate.getFullYear(),

            startDate.getMonth() + months,

            startDate.getDate()

        );

    }

    const diffDays = Math.floor(

        (today - compareDate) /

        (1000 * 60 * 60 * 24)

    );

    monthsCounter.textContent =

        months + " شهر";

    daysCounter.textContent =

        diffDays + " يوم";

}

/* ==========================================
   حفظ مكان القراءة
========================================== */

function saveReadingPosition() {

    window.addEventListener("scroll", () => {

        localStorage.setItem(

            "book-scroll",

            window.scrollY

        );

    });

}

/* ==========================================
   استعادة مكان القراءة
========================================== */

function restoreReadingPosition() {

    const savedPosition =

        localStorage.getItem("book-scroll");

    if (!savedPosition) return;

    setTimeout(() => {

        window.scrollTo(

            0,

            Number(savedPosition)

        );

    }, 300);

}
/* ==========================================
   شجرة الأمنيات
========================================== */

const wishes = {

    leaf1: `أتمنى أن تبقى ابتسامتكِ
 كما هي...
 فهي أجمل مكان
 وجدت فيه الطمأنينة.`,

    leaf2: `أتمنى أن يكون قلبكِ
 مطمئنًا دائمًا...
 حتى في الأيام الصعبة.`,

    leaf3: `أتمنى أن أكون
 أول شخص
 تفكرين بالحديث معه
 عندما يسعدكِ شيء.`,

    leaf4: `أتمنى أن تمتلئ
 حياتكِ بالنجاحات...
 كما ملأتِ حياتي
 بالنور.`,

    leaf5: `أتمنى أن أرافقكِ
 في كل مراحل العمر...
 لا في اللحظات الجميلة فقط.`,

    leaf6: `أتمنى أن يبقى
 الاحترام بيننا...
 قبل الحب...
 وأثناء الحب...
 وبعد مرور السنوات.`,

    leaf7: `أتمنى أن أكون
  سببًا في راحتكِ...
 لا سببًا في حزنكِ.`,

    leaf8: `أتمنى أن يرزقنا الله
 أيامًا جميلة...
 أكثر مما نحلم.`,

    leaf9: `أتمنى أن نعود
 لهذا المشروع بعد سنوات...
 ونبتسم لأننا
 عشنا كل كلمة فيه.`,

    leaf10: `أتمنى أن يبقى
 قلبكِ قريبًا من قلبي...
 مهما فرقت بيننا
 المسافات.`,

    leaf11: `أتمنى أن يحفظكِ الله
 في كل خطوة...
 وفي كل طريق.`,

    leaf12: `وأمنيتي الأخيرة...

 أن أظل أراكِ
 سعيدة...

 دائمًا. 🤍`

};

/* ==========================================
   تشغيل أوراق الشجرة
========================================== */

function initializeWishTree() {

    const wishWindow =
        document.getElementById("wishWindow");

    const wishMessage =
        document.getElementById("wishMessage");

    const closeWish =
        document.getElementById("closeWish");

    if (!wishWindow) return;

    Object.keys(wishes).forEach((leafId) => {

        const leaf =
            document.getElementById(leafId);

        if (!leaf) return;

        leaf.addEventListener("click", () => {

            wishWindow.style.display = "flex";

            typeWriter(

                "wishMessage",

                wishes[leafId],

                30

            );

        });

    });

    if (closeWish) {

        closeWish.addEventListener("click", () => {

            wishWindow.style.display = "none";

        });

    }

}
/* ==========================================
   صندوق الرسائل
========================================== */

const letters = {

    mail1: `إذا اشتقتِ إليّ...

  ارفعي رأسكِ إلى السماء...   

 فنحن ننظر إلى القمر نفسه...

 وذلك يكفي ليجعل المسافة أقل.`,

    mail2: `إذا ضحكتِ اليوم...

 فتذكري أن هناك شخصًا...

 تسعده ابتسامتكِ...

 وكأنها هديةٌ له.`,

    mail3: `إذا شعرتِ بالحزن...

 فلا تحاربي وحدكِ...

 أنا هنا...

 وسأبقى هنا.`,

    mail4: `إذا نظرتِ إلى النجوم...

 فتذكري...

 أن هناك نجمةً...

 أطلقتُ عليها اسمكِ داخل قلبي.`,

    mail5: `أتمنى أن يكون صباحكِ...

 خفيفًا...

 ومليئًا بالطمأنينة.`,

    mail6: `قبل أن تنامي...

 ادعي الله...

 ثم نامي مطمئنة...

 فأنا أدعو لكِ أيضًا.`,

    mail7: `إن شعرتِ بالتعب...

 فاستندي إليّ...

 حتى وإن كنتُ بعيدًا.`,

    mail8: `أفتخر بكِ...

 وبكل خطوةٍ تخطينها...

 مهما كانت صغيرة.`,

    mail9: `إن اختلفنا يومًا...

 فلن يكون الهدف أن ينتصر أحدنا...

 بل أن يبقى قلبانا معًا.`,

    mail10: `إذا أثقلتكِ الحياة...

 فتذكري...

 أنكِ لستِ وحدكِ.`,

    mail11: `إذا ابتسمتِ فجأة...

 فأتمنى أن أكون...

 أحد أسباب تلك الابتسامة.`,

    mail12: `لا تحتاج هذه الرسالة...

 إلى مناسبة...

 فوجودكِ في حياتي...

 هو أجمل مناسبة.`

};

/* ==========================================
   تشغيل الرسائل
========================================== */

function initializeLetters() {

    const windowBox =
        document.getElementById("mailWindow");

    const message =
        document.getElementById("mailMessage");

    const close =
        document.getElementById("closeMail");

    if (!windowBox) return;

    Object.keys(letters).forEach((mailId) => {

        const letter =
            document.getElementById(mailId);

        if (!letter) return;

        letter.addEventListener("click", () => {

            windowBox.style.display = "flex";

            typeWriter(

                "mailMessage",

                letters[mailId],

                28

            );

        });

    });

    if (close) {

        close.addEventListener("click", () => {

            windowBox.style.display = "none";

        });

    }

}
/* ==========================================
   ألبوم الذكريات
========================================== */

function initializeAlbum() {

    const cards = document.querySelectorAll(".memoryCard");

    if (!cards.length) return;

    cards.forEach((card) => {

        card.addEventListener("click", () => {

            card.classList.toggle("flip");

        });

    });

}

/* ==========================================
   إظهار البطاقات تدريجياً
========================================== */

function revealMoments() {

    const moments = document.querySelectorAll(".moment");

    moments.forEach((moment, index) => {

        moment.style.opacity = "0";
        moment.style.transform = "translateY(40px)";

        setTimeout(() => {

            moment.style.transition =
                "all .8s ease";

            moment.style.opacity = "1";

            moment.style.transform =
                "translateY(0)";

        }, index * 250);

    });

}
/* ==========================================
   سقوط الشهب
========================================== */

function startMeteorRain() {

    const container =
        document.getElementById("shooting-stars");

    if (!container) return;

    setInterval(() => {

        const meteor =
            document.createElement("div");

        meteor.className = "meteor";

        meteor.style.left =
            Math.random() * 100 + "%";

        meteor.style.top =
            Math.random() * 35 + "%";

        meteor.style.animationDuration =
            (1 + Math.random()) + "s";

        container.appendChild(meteor);

        setTimeout(() => {

            meteor.remove();

        }, 2000);

    }, 2500);

}
/* ==========================================
   تشغيل الموسيقى
========================================== */

function initializeMusic() {

    const audio = document.getElementById("bgMusic");

    const startButton = document.getElementById("startButton");

    if (!audio || !startButton) return;

    startButton.addEventListener("click", () => {

        audio.volume = 0.35;

        audio.play().catch(() => { });

    });

}

/* ==========================================
   تغيير لون السماء أثناء القراءة
========================================== */

function animateSky() {

    const background = document.getElementById("background");

    if (!background) return;

    window.addEventListener("scroll", () => {

        const progress =

            window.scrollY /

            (document.body.scrollHeight - window.innerHeight);

        const opacity =

            Math.min(progress * 0.4, 0.4);

        background.style.background =

            `linear-gradient(to bottom,
            rgba(5,5,20,1),
            rgba(0,0,0,${0.85 + opacity}))`;

    });

}

/* ==========================================
   وهج يتبع مؤشر الفأرة
========================================== */

function createCursorLight() {

    const light = document.createElement("div");

    light.id = "cursorLight";

    document.body.appendChild(light);

    document.addEventListener("mousemove", (e) => {

        light.style.left = e.clientX + "px";

        light.style.top = e.clientY + "px";

    });

}
