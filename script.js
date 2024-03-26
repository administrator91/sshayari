const shayaris = [
    "আমি সেদিনও ছিলাম, আজও আছি, আর কালকেও থাকবো যত দূরেই থাকি না কেন শুধু তোমাকে মনে রাখব🥰",

    "Every momment of the day & night, I miss your presence🙈 my heart is aching without you by my side🥰. miss you so much Puchu😔",
    
    "তোমার রাগের মাঝেও ভালোবাসা পাই🤗 তাইতো তোমায় এত রাগাই🥺",
    
    "রাতের দেখা স্বপ্ন তুমি🙈, তুমি চাঁদের আলো🙈, আমার সকল কিছু দিয়ে বাসবো তোমায় ভালো💗",
    
    "I wish I could short to let the world, know how much I miss you🥺 my heart cannot bear this distance anymore.😘",
    
    "তোমার হয়ে আছি আমি, তোমার হয়ে থাকবো🤗, সারা জীবন তোমায় আমি ভালোবেসে যাবো💓, পাশে থেকো সারা জীবন দূরে যেও না তোমায় ছাড়া একটুও আমার ভালো লাগেনা🫂",
    
    "তোমায় আমি বলতে চাই😳, তুমি ছাড়া প্রিয় আর কেহ নাই🙈, ভালোবাসি শুধু তোমায় আমি জনম জনম ভালবাসতে চাই😊",
    
    "এমন একটা দিন নেই যে তোকে মনে পড়ে না,😱 এমন একটা রাত নেই যে তোর কথা ভাবি না,💗 এমন একটা মুহূর্ত নেই যে তোকে মিস করি না🥰 I love you Puchu😔",
    
    "তুমি হাতটা শুধু ধরো আমি হবো না আর কারো🧑‍🤝‍🧑",
    
    "বাইরে বৃষ্টি🌧️, ভেতরে বৃষ্টি ভেজা ভেজা মন💏 মনের দুয়ারে চোখের কিনারে তুই সারাক্ষণ🤗",
    
    "তুমুল ঝগড়ার পরেও যে তোমাকে ছাড়া থাকতে পারেনা তার কাছে তুমি অনেক প্রিয়💓",
    
    "তোমায় নিয়ে বাঁধবো সুখের ঘর, চিনেছি আমি এখন কে আপন কে পর😔",
    
    "তোমায় পেয়ে ধন্য প্রিয়😳, আমার এ জীবন তুমি আমার ভালোবাসা তুমি আমার মন🥰",

    "অবসরে নয় অভ্যাসে তুই🫣",
    
    "আমার পুরো জীবন জুড়ে শুধুই তোমার নাম🙈, নিজের থেকেও বেশি ওগো প্রিয় তোমার দাম😍",
    
    "রাখি আগলে অনুরাগে বলো কিভাবে বোঝায় ভালবাসি💓",
    
    "আমি ছিলাম😒, আমি আছি🥰, আমি থাকবো শুধু তোমারই জন্য😍",
    
    "তোমার সাথে হাজার বসন্ত বেঁচে থাকা বাকি😍",
    
    "তোমায় হৃদমাঝারে রাখিব ছেড়ে দেবো না🥰",
    
    "তোমার থেকে আমার বেশি কিছু চাওয়ার নেই🤗, শুধু আমাকে একটু ভালোবাসা আর সময় দিও আমি এতেই খুশি💏 Miss you puchu😔 I love you tuklus🥰",
    
    "আমি তোমার সঙ্গে বেঁধেছি আমার প্রাণ🤗",
    
    "ধরিয়া রাখিও সোহাগে আদরে🫂 I love you Rajarshi💝",

    "এই তিনটা বছর দেখতে দেখতে কেটে গেল তোকে খুব মিস করবো🥺😭",

    "বুঝলে প্রিয় তুমি আমার জীবনের সবচেয়ে বিশেষ ও অপূর্ব ব্যক্তি💓 খুব খুব মিস করবো তোমাকে🫂 I love you puchu🫂😭",
    
    "me- Miss You Priyo😔"
    
    // Add more shayaris here
  ];
  
  let currentIndex = -1;
  let currentWordIndex = 0;
  let interval;
  
  // Function to initialize the page with a default shayari
  function initializePage() {
    currentIndex = Math.floor(Math.random() * shayaris.length);
    showShayari();
  }
  
  // Function to display a shayari
  function showShayari() {
    currentWordIndex = 0;
    clearInterval(interval);
    document.getElementById("shayari").textContent = "";
    interval = setInterval(typeShayari, 200);
  }
  
  // Function to type the shayari
  function typeShayari() {
    const shayari = shayaris[currentIndex];
    if (currentWordIndex < shayari.length) {
      document.getElementById("shayari").textContent += shayari[currentWordIndex];
      currentWordIndex++;
    } else {
      clearInterval(interval);
    }
  }
  
  // Function to show the next shayari
  function showNextShayari() {
    currentIndex = Math.floor(Math.random() * shayaris.length);
    showShayari();
  }
  
  // Initialize the page
  initializePage();
  