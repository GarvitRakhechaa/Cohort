// let carouselTrack = document.getElementById('carouselTrack')
// let imgCaption = document.getElementById('caption')
// let carouselNav = document.getElementById('carouselNav')
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

images.forEach(() =>{
  
})




















// images.forEach((image) => {
//   const slide = document.createElement("div"); // New div banayenge
//   slide.classList.add("carousel-slide"); // Class add karenge
//   slide.style.backgroundImage = `url(${image.src})`; // Background image set karenge
//   carouselTrack.appendChild(slide); // `carouselTrack` ke andar add karenge
// });

images.map((item) => {
  // const slide = document.createElement('div')
  // slide.classList.add(carousel-slide)
  let img = document.createElement('img')
  img.src = item.url 
  img.alt = item.caption
  img.classList('carousel-slide')
  // slide.append(img)
  // slide.style.backgroundImage `url(${item.url})`
  carouselTrack.appendChild(img)
  imgCaption.innerText = item.caption
})



// let carouselTrack = document.getElementById('carouselTrack');
// let imgCaption = document.getElementById('caption');
// let carouselNav = document.getElementById('carouselNav');
// let prevButton = document.getElementById('prevButton');
// let nextButton = document.getElementById('nextButton');
// let autoPlayButton = document.getElementById('autoPlayButton');
// let timerDisplay = document.getElementById('timerDisplay');

// // const images = [
// //   {
// //     url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// //     caption: 'Beautiful Mountain Landscape',
// //   },
// //   {
// //     url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// //     caption: 'Ocean Sunset View',
// //   },
// //   {
// //     url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// //     caption: 'Autumn Forest Path',
// //   },
// //   {
// //     url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// //     caption: 'Urban City Skyline',
// //   },
// // ];

// let currentIndex = 0;
// let autoPlayInterval = null;

// // Function to load slides dynamically
// function loadSlides() {
//   images.map((image, index) => {
//     // Create slide div
//     const slide = document.createElement('div');
//     slide.classList.add('carousel-slide');
//     slide.style.backgroundImage = `url(${image.url})`;

//     // Set first image caption
//     if (index === 0) {
//       imgCaption.textContent = image.caption;
//     }

//     carouselTrack.appendChild(slide);

//     // Create navigation dots
//     const indicator = document.createElement('div');
//     indicator.classList.add('carousel-indicator');
//     if (index === 0) indicator.classList.add('active');
//     indicator.addEventListener('click', () => goToSlide(index));
//     carouselNav.appendChild(indicator);
//   });
// }

// // Function to update carousel position
// function updateCarousel() {
//   const offset = -currentIndex * 100;
//   carouselTrack.style.transform = `translateX(${offset}%)`;
//   imgCaption.textContent = images[currentIndex].caption;

//   // Update active indicator
//   document.querySelectorAll('.carousel-indicator').forEach((dot, index) => {
//     dot.classList.toggle('active', index === currentIndex);
//   });
// }

// // Function to go to a specific slide
// function goToSlide(index) {
//   currentIndex = index;
//   updateCarousel();
// }

// // Next & Previous Button Functionality
// function nextSlide() {
//   currentIndex = (currentIndex + 1) % images.length;
//   updateCarousel();
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   updateCarousel();
// }

// // Auto Play Functionality
// function startAutoPlay() {
//   if (autoPlayInterval) {
//     clearInterval(autoPlayInterval);
//     autoPlayInterval = null;
//     autoPlayButton.textContent = 'Start Auto Play';
//     timerDisplay.textContent = '';
//   } else {
//     let timeLeft = 3; // 3 seconds per slide
//     autoPlayButton.textContent = 'Stop Auto Play';
//     timerDisplay.textContent = `${timeLeft}s`;

//     autoPlayInterval = setInterval(() => {
//       nextSlide();
//       timeLeft = 3;
//       timerDisplay.textContent = `${timeLeft}s`;
//       let countdown = setInterval(() => {
//         timeLeft--;
//         timerDisplay.textContent = `${timeLeft}s`;
//         if (timeLeft === 0) clearInterval(countdown);
//       }, 1000);
//     }, 3000);
//   }
// }

// // Event Listeners
// prevButton.addEventListener('click', prevSlide);
// nextButton.addEventListener('click', nextSlide);
// autoPlayButton.addEventListener('click', startAutoPlay);

// // Initialize Carousel
// loadSlides();
// updateCarousel();
