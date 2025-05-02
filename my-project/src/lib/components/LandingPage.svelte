<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LogisParcel - Responsive Typing Animation</title>
  <style>
    /* Base styles */
    body, html {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      height: 100%;
    }
    
    /* Typing animation styles */
    .typing-container {
      display: inline-block;
      width: fit-content;
      max-width: 100%;
    }
    
    .typing-text {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      margin: 0;
      border-right: 3px solid #93c5fd;
      padding-right: 5px;
      width: 0;
      animation: typing 3.5s steps(30, end) forwards, blink-caret 0.75s step-end infinite;
    }
    
    /* The typing animation */
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
    
    /* The cursor animation */
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #93c5fd }
    }
    
    /* Media queries for responsive typing */
    @media (max-width: 640px) {
      .typing-text {
        animation-duration: 2.5s; /* Faster on small screens */
      }
    }
    
    @media (max-width: 480px) {
      .typing-text {
        white-space: normal; /* Allow text to wrap on very small screens */
        animation: blink-caret 0.75s step-end infinite;
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <section class="relative w-full h-screen overflow-hidden">
    <!-- Background Image -->
    <img src="/bg.jpg" alt="LogisParcel truck on bridge" class="absolute inset-0 w-full h-full object-cover z-0" />
    
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-[linear-gradient(124deg,_rgba(8,33,63,0.90)_0%,_rgba(28,62,107,0.85)_40%,_rgba(45,93,158,0.75)_70%,_rgba(0,212,255,0.4)_100%)] z-10"></div>
    
    <!-- Text -->
    <div class="relative z-20 flex items-center justify-start h-full px-6 md:px-12 text-white text-left">
      <div class="max-w-4xl">
        <!-- Headline with typing effect in a container -->
        <div class="typing-container">
          <h1 class="typing-text text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">
            Welcome to LogisParcel
          </h1><br><br><br>
        </div>
        <br>
        <!-- Subheading -->
        <h3 class="text-2xl font-semibold mb-6">
          Fast, Reliable Logistics Solutions
        </h3>
        <!-- Description Text -->
        <p class="text-lg md:text-xl mb-6">
          Your trusted partner for efficient and secure parcel delivery worldwide. Track, send, and receive with confidence.
        </p>
        <!-- Buttons -->
        <div class="flex justify-start gap-4 flex-wrap">
          <a href="/service" class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
            Our Services
          </a>
          <a href="/tracking" class="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-900 font-semibold py-3 px-6 rounded-full transition duration-300">
            Track your parcel
          </a>
        </div>
      </div>
    </div>
  </section>

  <script>
    // Responsive animation handling
    document.addEventListener('DOMContentLoaded', () => {
      const typingText = document.querySelector('.typing-text');
      
      // Function to reset and restart animation
      function resetAnimation() {
        if (typingText) {
          // Check screen width
          const screenWidth = window.innerWidth;
          
          if (screenWidth <= 480) {
            // Very small screens: just show the text with blinking cursor
            typingText.style.animation = 'blink-caret 0.75s step-end infinite';
            typingText.style.width = '100%';
          } else if (screenWidth <= 640) {
            // Small screens: faster animation
            typingText.style.animation = 'none';
            setTimeout(() => {
              typingText.style.animation = 'typing 2.5s steps(30, end) forwards, blink-caret 0.75s step-end infinite';
              typingText.style.width = '0';
            }, 10);
          } else {
            // Normal animation for larger screens
            typingText.style.animation = 'none';
            setTimeout(() => {
              typingText.style.animation = 'typing 3.5s steps(30, end) forwards, blink-caret 0.75s step-end infinite';
              typingText.style.width = '0';
            }, 10);
          }
        }
      }
      
      // Initial reset
      resetAnimation();
      
      // Reset on window resize
      window.addEventListener('resize', resetAnimation);
    });
  </script>
</body>
</html>