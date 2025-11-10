// Floating hearts background
const heartsContainer = document.getElementById('heartsContainer');
const heartCount = 30; // Reduced from 30 to make it less chaotic
for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position across the page
    heart.style.fontSize = (10 + Math.random() * 20) + 'px';
    heart.style.animationDuration = (8 + Math.random() * 7) + 's'; // Increased min duration to 8s for slower, less spammy movement
    heart.style.animationDelay = (i * 2 + Math.random() * 5) + 's'; // Staggered delays based on index to space them out more evenly
    heart.style.transform = 'translateY(100vh)'; // Start at bottom
    heartsContainer.appendChild(heart);
    // Removed the animationiteration listener to prevent infinite looping, so hearts float up once and disappear
}

// Form & main container references
const giftForm = document.getElementById('giftForm');
const mainContainer = document.getElementById('mainContainer');

// Handle birthdate submission
giftForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputDate = document.getElementById('birthdate').value;
    const correctDate = '2005-11-10'; // change as needed

    if (!inputDate) {
        alert('Please enter your birthdate.');
        return;
    }

    if (inputDate === correctDate) {
        showChoicesPage();
    } else {
        alert('Sorry, that is not the correct date. Please try again.');
    }
});

// Show choices page
function showChoicesPage() {
    mainContainer.innerHTML = '';

    const heartIcon = document.createElement('div');
    heartIcon.className = 'lock-icon';
    heartIcon.textContent = '❤️';
    mainContainer.appendChild(heartIcon);

    const title = document.createElement('h2');
    title.textContent = 'THESE ARE FOR YOU!';
    title.style.color = '#a1394c';
    title.style.margin = '10px 0';
    title.style.fontWeight = '700';
    mainContainer.appendChild(title);

    const subtext = document.createElement('p');
    subtext.className = 'subtext';
    subtext.textContent = 'I hope you like it!';
    mainContainer.appendChild(subtext);

    const grid = document.createElement('div');
    grid.className = 'choices-grid';

    const choices = [
        { emoji: '🎂', label: 'Cake' },
        { emoji: '📸', label: 'Photo' },
        { emoji: '🌸', label: 'Flower' },
        { emoji: '💌', label: 'Letter' },
    ];

    choices.forEach(choice => {
        const btn = document.createElement('div');
        btn.className = 'choice-button';
        btn.textContent = choice.emoji;
        btn.title = choice.label;

        btn.addEventListener('click', () => {
            if (choice.label === 'Cake') {
                showCakePage();
            } else if (choice.label === 'Flower') {
                showFlowerPage();
            } else if (choice.label === 'Letter') {
                showLetterPage();
            } else if (choice.label === 'Photo'){
                showPhotoPage();
            }
        });

        grid.appendChild(btn);
    });

    mainContainer.appendChild(grid);
}

// Show interactive chocolate cake page with breathing candles and buttons
function showCakePage() {
    mainContainer.innerHTML = '';

    const cakeContainer = document.createElement('div');
    cakeContainer.className = 'cake-container';

    const candlesContainer = document.createElement('div');
    candlesContainer.className = 'candles-container breathe';

    // Add 20 candle emojis above cake
    for (let i = 0; i < 20; i++) {
        const candle = document.createElement('span');
        candle.className = 'candle-emoji';
        candle.textContent = '🕯️';
        candlesContainer.appendChild(candle);
    }

    cakeContainer.appendChild(candlesContainer);

    const cakeIcon = document.createElement('div');
    cakeIcon.className = 'cake-icon';
    cakeIcon.textContent = '🎂';  // Chocolate styled by CSS
    cakeContainer.appendChild(cakeIcon);

    const title = document.createElement('h2');
    title.textContent = 'Make a Wish! ✨';
    title.style.color = '#a1394c';
    cakeContainer.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.textContent = 'Blow out the candle and make this year magical!';
    cakeContainer.appendChild(subtitle);

    // Blow Candle button
    const blowBtn = document.createElement('button');
    blowBtn.id = 'blowCandleBtn';
    blowBtn.textContent = 'Blow the Candle';
    cakeContainer.appendChild(blowBtn);

    // Back to Choices button
    const backBtn = document.createElement('button');
    backBtn.id = 'backToChoicesBtn';
    backBtn.textContent = 'Back to Choices';
    cakeContainer.appendChild(backBtn);

    mainContainer.appendChild(cakeContainer);

    // Event listeners
    blowBtn.addEventListener('click', () => {
        candlesContainer.remove();
        blowBtn.disabled = true;
        blowBtn.textContent = 'Candle Blown!';
    });

    backBtn.addEventListener('click', () => {
        showChoicesPage();
    });
}

// Show Flower page with gerbera bouquet and phrases on sides
function showFlowerPage() {
    // Make sure the main container fills the screen
    mainContainer.classList.add('flower-mode');
    mainContainer.innerHTML = '';

    const flowerPageHTML = `
    <div class="flower-bouquet-wrapper">

      <div class="flower-texts side left">
        <div class="flower-text-box">You resemble a red gerbera—your presence surrounds others with warmth and devotion.</div>
        <div class="flower-text-box">You resemble a white gerbera—pure, gentle, and calming.</div>
        <div class="flower-text-box">You resemble a yellow gerbera—your energy brings happiness and effortless comfort.</div>
        <div class="flower-text-box">You resemble a pink gerbera—soft, caring, and full of admiration.</div>
        <div class="flower-text-box">You resemble an orange gerbera—you spark motivation and excitement in the people around you.</div>
      </div>

      <div class="flower-image-container">
        <img src="src/GerberaBouquet.jpg" alt="Colorful Gerbera Bouquet" draggable="false" />
      </div>

      <div class="flower-texts side right">
        <div class="flower-text-box">You resemble a peach gerbera—warm, tender, and subtly elegant.</div>
        <div class="flower-text-box">You resemble a purple gerbera—your presence has a depth that draws people in.</div>
        <div class="flower-text-box">You resemble a lavender gerbera—calming, thoughtful, and serene.</div>
        <div class="flower-text-box">You resemble a green gerbera—fresh, balanced, and renewing.</div>
        <div class="flower-text-box">You resemble a blue gerbera—expressive and emotionally deep.</div>
        <div class="flower-text-box">You resemble a cream gerbera—softly comforting.</div>
      </div>

      <button id="backToChoicesFromFlowerBtn" class="back-to-choices-btn">Back to Choices</button>
    </div>`;

    mainContainer.insertAdjacentHTML('beforeend', flowerPageHTML);

    document.getElementById('backToChoicesFromFlowerBtn').addEventListener('click', () => {
        mainContainer.classList.remove('flower-mode');
        showChoicesPage();
    });
}

// Show Letter page
function showLetterPage() {
    // Remove 'container' class for full screen if exists
    mainContainer.classList.remove('container');
    mainContainer.classList.add('flower-mode'); // reuse full screen flex mode

    mainContainer.innerHTML = ''; // clear existing content

    // Create scroll container
    const scroll = document.createElement('div');
    scroll.className = 'letter-scroll';

    // Create the letter content container
    const letter = document.createElement('div');
    letter.className = 'letter-in-scroll';

    // Insert your letter HTML text here with justified paragraphs
    letter.innerHTML = `
    <p>Dear Shyr,</p>
    <p style="text-align: justify;">Babi, Babs, Pretty-Cutie, Shairu, Pucca (hehe, you really do look like her!) hi! Today is a very special day for you.</p>
    <p style="text-align: justify;">On November 10, 2005, a baby girl was born, a blessing to her parents and a blessing from God. A healthy baby girl entered the world that day, and her name was Ken Shyr Garcia.</p>
    <p style="text-align: justify;">Since you were little, you have always been surrounded by your parents’ love. They cared for you, provided for you, and raised you to be a kind, respectful, and faithful child.</p>
    <p style="text-align: justify;">You were a cheerful child in CWS, a lively singer, joker, and storyteller. A student at General T. De Leon Elementary School, a devoted member and officer of the Binhi organization, and someone I have been with in performing church duties since childhood. You continued your studies at OLLC, GTDLNHS, NEU-IS, and now, you are a college girl at PUP.</p>
    <p style="text-align: justify;">You have grown through every stage — one, five, ten, eleven, twelve, then your teenage years — thirteen, fourteen, fifteen, up to eighteen and nineteen. And now, you have reached your twenties.</p>
    <p style="text-align: justify;">I know that life becomes tougher as we grow older. You once told me that you have become aware of the realities of life, and sometimes you wish you had not. But that is part of growing up; it is better to understand life than to stay unaware. You have grown into a strong and independent woman, and I am one of the living witnesses to how much you have improved as a person.</p>
    <p style="text-align: justify;">You have shared with me how much you love birthdays and how you have always wanted to be surprised on your special day. I am not sure if this counts as a surprise, hehe, but I truly hope you like it.</p>
    <p style="text-align: justify;">You mentioned feeling a bit down because of your birthday blues, especially since your family is going through some financial struggles right now. Still, I hope this simple gift brings a smile to your face today.</p>
    <p style="text-align: justify;">Babs, you are a wonderful person, a great woman, and I know you will achieve even more in the future. I am your friend, someone who has a crush on you, and now, your suitor. But let us set that aside because today is all about you.</p>
    <p style="text-align: justify;">You have so many beautiful qualities. You bring joy to everyone around you, and you are a brave and intelligent woman. Stay true to who you are, stay humble, and stand firm in your beliefs.</p>
    <p style="text-align: justify;">I wish for all your dreams to come true — for your family, your friends, and especially for yourself. I know how much you care for others, but please do not forget to take care of yourself too. I hope you achieve the success and wealth you dream of, so you can have the things you desire in life. But most importantly, I hope you stay strong in your faith in God, remain prayerful, and continue to be active in fulfilling your church duties.</p>
    <p style="text-align: justify;">I hope this day brings you joy and fulfillment, and that all your wishes come true — today, tomorrow, and in the future.</p>
    <p style="text-align: justify;">Always remember, Babs, I will always be here for you. Someone you can lean on, talk to, and depend on.</p>
    <p style="text-align: justify;">I love you so much, my Shyr.<br/>Once again, happy, happy, happy, and blessed birthday!</p>
    <p style="text-align: justify;">With all my love,<br/>Carl</p>`;

    scroll.appendChild(letter);

    // Back to choices button
    const backBtn = document.createElement('button');
    backBtn.textContent = 'Back to Choices';
    backBtn.className = 'letter-back-button';

    backBtn.addEventListener('click', () => {
        mainContainer.classList.remove('flower-mode');
        mainContainer.classList.add('container');
        showChoicesPage();
    });

    mainContainer.appendChild(scroll);
    mainContainer.appendChild(backBtn);
}

function showPhotoPage() {
    mainContainer.classList.add('flower-mode'); // full screen flex container
    mainContainer.classList.remove('container'); // remove small container

    mainContainer.innerHTML = '';

    // Create gallery container
    const gallery = document.createElement('div');
    gallery.className = 'polaroid-gallery';

    // Array of your photo paths/URLs (replace with actual images)
    const photos = [
        'src/Photo 1.jpg',
        'src/Photo 2.jpg',
        'src/Photo 3.jpg',
        'src/Photo 4.jpg',
        'src/Photo 5.jpg',
        'src/Photo 6.jpg',
        'src/Photo 7.jpg',
        'src/Photo 8.jpg',
        'src/Photo 9.jpg',
        'src/Photo 10.jpg',
        'src/Photo 11.jpg',
        'src/Photo 12.jpg',
        'src/Photo 13.jpg',
        'src/Photo 14.jpg',
        'src/Photo 15.jpg',
        'src/Photo 16.jpg',
        'src/Photo 17.jpg',
        'src/Photo 18.jpg',
        'src/Photo 19.jpg',
        'src/Photo 20.jpg',
    ];

    photos.forEach((src, idx) => {
        const polaroid = document.createElement('div');
        polaroid.className = 'polaroid';

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Photo ${idx + 1}`;

        const caption = document.createElement('div');
        caption.className = 'caption';

        polaroid.appendChild(img);
        polaroid.appendChild(caption);

        gallery.appendChild(polaroid);
    });

    mainContainer.appendChild(gallery);

    // Back to Choices Button
    const backBtn = document.createElement('button');
    backBtn.textContent = 'Back to Choices';
    backBtn.className = 'back-to-choices-btn';

    backBtn.style.marginTop = '30px';
    backBtn.style.width = '220px';

    backBtn.addEventListener('click', () => {
        mainContainer.classList.remove('flower-mode');
        mainContainer.classList.add('container');
        showChoicesPage();
    });

    mainContainer.appendChild(backBtn);
}