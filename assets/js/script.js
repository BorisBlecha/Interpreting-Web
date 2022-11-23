$(function () {
  $(".navbar-toggle").click(function () {
    $(this).toggleClass("act");
    if ($(this).hasClass("act")) {
      $(".main-menu").addClass("act");
    } else {
      $(".main-menu").removeClass("act");
    }
  });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(document).on("click", ".page-scroll a", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1000,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $("body").scrollspy({
    target: ".site-header",
    offset: 10,
  });

  /* Progress bar */
  var $section = $(".section-skills");
  function loadDaBars() {
    $(".progress .progress-bar").progressbar({
      transition_delay: 500,
    });
  }

  $(document).bind("scroll", function (ev) {
    var scrollOffset = $(document).scrollTop();
    var containerOffset = $section.offset().top - window.innerHeight;
    if (scrollOffset > containerOffset) {
      loadDaBars();
      // unbind event not to load scrolsl again
      $(document).unbind("scroll");
    }
  });

  /* Slideshow */
  let slideIndex = 1;
  showSlides(slideIndex);

  window.plusSlides = function (n) {
    showSlides((slideIndex += n));
  };

  window.currentSlide = function (n) {
    showSlides((slideIndex = n));
  };

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  window.onload = function () {
    setInterval(function () {
      plusSlides(1);
    }, 6000);
  };

  /* Counters  */
  if ($(".section-counters .start").length > 0) {
    $(".section-counters .start").each(function () {
      var stat_item = $(this),
        offset = stat_item.offset().top;
      $(window).scroll(function () {
        if (
          $(window).scrollTop() > offset - 1000 &&
          !stat_item.hasClass("counting")
        ) {
          stat_item.addClass("counting");
          stat_item.countTo();
        }
      });
    });
  }

  // another custom callback for counting to infinity
  $("#infinity").data("countToOptions", {
    onComplete: function (value) {
      count.call(this, {
        from: value,
        to: value + 1,
      });
    },
  });

  $("#infinity").each(count);

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
    $this.countTo(options);
  }

  // Navigation overlay
  var s = skrollr.init({
    forceHeight: false,
    smoothScrolling: false,
    mobileDeceleration: 0.004,
    mobileCheck: function () {
      //hack - forces mobile version to be off
      return false;
    },
  });
});

// Truncated text
document.querySelectorAll(".truncated").forEach(function (current) {
  current.addEventListener(
    "click",
    function (e) {
      current.classList.remove("truncated");
    },
    false
  );
});

// Language change
// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

// Define the language reload anchors
var language = {
  eng: {
    homeNav: "Home",
    aboutNav: "About",
    serviceNav: "Services",
    feedbackNav: "Testimonials",
    contactNav: "Contact",
    jobTitle: "Therapeutic interpreter",
    contactBtn: "Contact Me",
    feedbackBtn: "Clients' Testimonials",
    aboutHead: "About Me",
    aboutText:
      "I act as an interpreter at courses and workshops by experts in various fields of psychosomatic therapy and self-development through movement, voice and spiritual methods. My expertise, empathy and mental discipline allow me to fully merge with the lecturer, conveying their words with ease, profundity and a sense of humour. The audience thus receives the undiminished message on all levels: content, emotion and the overall intent of the lecturer.",
    aboutClients: "My Interpreting Clients",
    cranio: "Craniosacral Biodynamics",
    cranio2: "Craniosacral Biodynamics",
    cranioT: "Craniosacral Therapy",
    embodied: "Embodied Voice Flow",
    felden: "Feldenkrais Method & Authentic Movement",
    serviceHead: "My Services",
    konsHead: "Consecutive Interpreting",
    konsText:
      "Interpreting of lectures, classes, and workshops for any number of attendees. The lecturer leaves pauses for my translation, we take turns speaking. Owing to my natural ability to empathise, the speaker can remain in their flow and does not feel being interrupted.",
    simHead: "Simultaneous Intepreting",
    simText:
      "If the priority is for the speaker to not be interrupted, interpreting occurs simultaneously in real time. Whispered interpreting without any equipment is viable for one, two listeners at most. In case of more recipients, interpreting is done using a microphone-earphones system.",
    transHead: "Text Translation",
    transText:
      "Translation of additional textual materials is possible. On request also as a separate commission.",
    testHead: "Testimonials",
    bhadrHead:
      "Craniosacral Biodynamics Teacher and Practitioner, Founder of International Institute for Craniosacral Balancing",
    bhadrText:
      "I experienced Boris present as a person, competent as a professional and interested in the subject matter. He understands complex material and his translation/interpretation was coherent and easily graspable for participants. He is supportive of he process and manages to stay alongside the presenter with dedication and steadfastness.",
    bhadrSign: "Love,",
    peirsHead:
      "CranioSacral Therapy Teacher and Practitioner, Founder of Peirsman CranioSacral Academy",
    peirsText1:
      "I have worked with many translators in my travels around the world.",
    peirsText2:
      "Portuguese, Spanisch, German, Cantonese and Czech, it was always a bit a stressful situation to have to adjust my speaking pattern to the pattern of the translator. Most of the time it was an adjustment that always left me feeling a bit uneasy that my message wasn't received 100%. My message depends a lot on the tone and the speaking patterns, the gaps, the emotion and so on.",
    peirsText3:
      "I found in Boris the perfect partner to deliver my message. The strength of his voice equals mine, his ability to deliver emotion in the spoken word equals mine. His ability to be soft and firm is part of my way of speaking.",
    peirsText4:
      "In short, I requested the people that invited him to translate for me to only engage Boris when i come to Prague. I therefore recommend Boris fulheartedly to anyone who needs a translator that can not only deliver the words but also the message that is contained in the words.",
    peirsSign: "With Love and Gratitude,",
    quote1: "Boris´s translation is like poetry.",
    quote2:
      "Impression, spontaneous play with language, brilliant stylistics, communion with the speaker.",
    quote3:
      "Boris is unbelievably empathetic, he delivers the translated sentences with the energy intended by the speaker. I admire his memory, patience and a sense of humour when transmitting the translation. I also highly appreciate his expertise – in this field, he wouldn´t be as good as he is without being well versed in the subject. And he is really good at that!!!",
    quote4:
      "Boris has the gift of empathy towards the translated topic. He captures even very long texts in detail, which allows the lecturers to complete their thoughts. His memory is incredible. He is flexible, brimming with heartiness and a sense of humour so much needed in these times.",
    quote5:
      "The translation was very empathic and precise. Boris 's voice is pleasing to the ear and non-intrusive. His expertise in the field is great. My memory of the whole course is very pleasantly linked to Boris. Perfect connection :-) Thanks a lot.",
    quote6:
      "Everybody has a gift, Boris ' s gift is interpreting. He tunes into the lecturer and the audience and provides a ‘ living transmission ’. Furthermore, his expertise is first-class.",
    quote7:
      "Boris is a translator in the right place. Beautifully connected with the group, empathic, witty, providing a precise translation. I admire how he sails through a highly technical course with patience, enregy, without traces of fatigue. ",
    quote8:
      "Boris has an amazing talent for such a natural way of interpreting, which he intersperses with humorous reactions. His agreeable voice and diction are both an enrichment to the lecture.",
    quote9:
      "Boris is a great translator. I am very satisfied with his ability to tune in to the lecturers. Thank you very much.",
    quote10:
      "It was a beautiful experience to observe and listen to Boris ' s translating and intepreting from English to Czech. He correctly captured not only the content but also the gist of the lecture. Thank you, Boris.",
    quote11:
      "Boris was a very sensitive and connected intepreter at our class of craniosacral therapy. Not only is his interpreting at a high professional level, he also brings joy and a sense of ease to the overal atmosphere. He was always ready to help. Thanks a lot.",
    contactHead: "Contact",
    formName: "Name",
    formText: "Message",
    formBtn: "Get in Touch",
    theEnd: "2022. Love and Understanding to All Beings",
  },
};

// Check if a hash value exists in the URL
if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash == "#eng") {
    jobTitle.textContent = language.eng.jobTitle;
    contactBtn.textContent = language.eng.contactBtn;
    feedbackBtn.textContent = language.eng.feedbackBtn;
    homeNav.textContent = language.eng.homeNav;
    aboutNav.textContent = language.eng.aboutNav;
    serviceNav.textContent = language.eng.serviceNav;
    feedbackNav.textContent = language.eng.feedbackNav;
    contactNav.textContent = language.eng.contactNav;
    aboutHead.textContent = language.eng.aboutHead;
    aboutText.textContent = language.eng.aboutText;
    aboutClients.textContent = language.eng.aboutClients;
    cranio.textContent = language.eng.cranio;
    cranio2.textContent = language.eng.cranio2;
    cranioT.textContent = language.eng.cranioT;
    embodied.textContent = language.eng.embodied;
    felden.textContent = language.eng.felden;
    serviceHead.textContent = language.eng.serviceHead;
    konsHead.textContent = language.eng.konsHead;
    konsText.textContent = language.eng.konsText;
    simHead.textContent = language.eng.simHead;
    simText.textContent = language.eng.simText;
    transHead.textContent = language.eng.transHead;
    transText.textContent = language.eng.transText;
    testHead.textContent = language.eng.testHead;
    bhadrHead.textContent = language.eng.bhadrHead;
    bhadrText.textContent = language.eng.bhadrText;
    bhadrSign.textContent = language.eng.bhadrSign;
    peirsText1.textContent = language.eng.peirsText1;
    peirsText2.textContent = language.eng.peirsText2;
    peirsText3.textContent = language.eng.peirsText3;
    peirsText4.textContent = language.eng.peirsText4;
    peirsSign.textContent = language.eng.peirsSign;
    quote1.textContent = language.eng.quote1;
    quote2.textContent = language.eng.quote2;
    quote3.textContent = language.eng.quote3;
    quote4.textContent = language.eng.quote4;
    quote5.textContent = language.eng.quote5;
    quote6.textContent = language.eng.quote6;
    quote7.textContent = language.eng.quote7;
    quote8.textContent = language.eng.quote8;
    quote9.textContent = language.eng.quote9;
    quote10.textContent = language.eng.quote10;
    quote11.textContent = language.eng.quote11;
    contactHead.textContent = language.eng.contactHead;
    formName.placeholder = language.eng.formName;
    formText.placeholder = language.eng.formText;
    formBtn.textContent = language.eng.formBtn;
    theEnd.textContent = language.eng.theEnd;
  }
}

if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash == "#eng") {
    engBtn.ctx.filter = "grayscale()";
  }
}
