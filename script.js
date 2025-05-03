// script.js
document.addEventListener('DOMContentLoaded', function() {
    // ===== ENVELOPE INTERACTION =====
    const envelope = document.querySelector('.envelope');
    const letter = document.getElementById('letter');
    
    envelope.addEventListener('click', function() {
      // 1. Animate envelope opening
      envelope.style.transform = 'scale(0.8) rotateY(180deg)';
      envelope.style.opacity = '0';
      
      // 2. Show letter after delay
      setTimeout(() => {
        envelope.style.display = 'none';
        letter.style.display = 'block';
        
        // 3. Typewriter effect for message
        typeWriter(
          document.getElementById('message'),
          "Dear Mom,\n\nYou're the most amazing mother in the world"
        );
        
        // 4. Launch confetti
        launchConfetti();
      }, 800);
    });
  
    // ===== COOL FEATURES =====
    
    // 1. Typewriter Effect
    function typeWriter(element, text, speed) {
      let i = 0;
      element.innerHTML = '';
      function typing() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
          i++;
          setTimeout(typing, speed);
        }
      }
      typing();
    }
    
    // 2. Confetti Explosion
    function launchConfetti() {
      const confettiSettings = {
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#48dbfb', '#1dd1a1', '#feca57', '#ff9ff3']
      };
      
      // Multiple bursts
      confetti(confettiSettings);
      setTimeout(() => confetti(confettiSettings), 300);
      setTimeout(() => confetti(confettiSettings), 600);
    }
    
    // 3. Photo Gallery Hover Effect
    const photos = document.querySelectorAll('.photos img');
    photos.forEach(photo => {
      photo.addEventListener('mouseenter', () => {
        photo.style.transform = 'scale(1.1) rotate(2deg)';
        photo.style.transition = 'all 0.3s ease';
      });
      photo.addEventListener('mouseleave', () => {
        photo.style.transform = 'scale(1) rotate(0)';
      });
    });
    
    // 4. Close Letter Button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = 'Close Letter ❤️';
    closeBtn.className = 'close-btn';
    letter.appendChild(closeBtn);
    
    closeBtn.addEventListener('click', () => {
      letter.style.animation = 'fadeOut 0.5s forwards';
      setTimeout(() => {
        letter.style.display = 'none';
        envelope.style.display = 'block';
        envelope.style.opacity = '1';
        envelope.style.transform = 'scale(1) rotateY(0)';
      }, 500);
    });
  });