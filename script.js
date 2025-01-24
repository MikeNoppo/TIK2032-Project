window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


// Ambil semua link dalam navigasi
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
link.addEventListener('click', function(event) {

    event.preventDefault();


    navLinks.forEach(navLink => navLink.classList.remove('active'));

   
    this.classList.add('active');

    
    const targetId = this.getAttribute('href').substring(1); 
    const targetElement = document.getElementById(targetId); 
    targetElement.scrollIntoView({ behavior: 'smooth' }); 
});
});


document.addEventListener("DOMContentLoaded", () => {
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    sections.forEach((section) => {
        if (
            currentScroll >= section.offsetTop - section.offsetHeight * 0.5 &&
            currentScroll < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.5
        ) {
            const sectionId = section.getAttribute('id');
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
});

function openImage(imageSrc) {
    var popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';

    var popupImage = document.createElement('img');
    popupImage.src = imageSrc;
    popupImage.className = 'popup-image';

    var closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&times;';
    
    function closePopup() {
        popupContainer.classList.remove('active');
        setTimeout(() => {
            popupContainer.style.display = 'none';
            document.body.removeChild(popupContainer);
        }, 300);
    }

    closeBtn.onclick = closePopup;

    // Tambahkan event listener untuk tombol ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closePopup();
        }
    });

    popupContainer.appendChild(closeBtn);
    popupContainer.appendChild(popupImage);
    document.body.appendChild(popupContainer);

    popupContainer.style.display = 'flex';
    void popupContainer.offsetWidth;
    popupContainer.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const filterablePhotos = document.querySelectorAll('.filterable-photo .photo');


    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterId = button.id;

            filterablePhotos.forEach(photo => {
                const photoId = photo.id;

                if (filterId === 'p1' || filterId === photoId) {
                    photo.classList.remove('hide');
                } else {
                    photo.classList.add('hide');
                }
            });

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const certificateBtn = document.getElementById('certificateBtn');

    certificateBtn.addEventListener('click', (event) => {
        event.preventDefault(); 
        const targetId = certificateBtn.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId); 
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelectorAll('.footer-nav a').forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.1)';
    });
  
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1)';
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const animatedTexts = document.querySelectorAll(".animated-text");
  
    animatedTexts.forEach((element, index) => {
      const delay = index * 300; // Penundaan animasi (ms)
      setTimeout(() => {
        element.classList.add("animate");
      }, delay);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const typingText = document.querySelector(".typing-text");
    const words = ["Me", "Mikel"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function typeEffect() {
      const currentWord = words[wordIndex];
      const currentText = typingText.textContent;
  
      if (!isDeleting) {
        // Tambahkan karakter satu per satu
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
  
        // Jika selesai mengetik, tunggu sebentar lalu mulai menghapus
        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(typeEffect, 1000); // Tunggu 1 detik sebelum menghapus
          return;
        }
      } else {
        // Hapus karakter satu per satu
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
  
        // Jika selesai menghapus, pindah ke kata berikutnya
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length; // Loop kembali ke kata pertama
        }
      }
  
      setTimeout(typeEffect, isDeleting ? 100 : 150); // Kecepatan mengetik & menghapus
    }
  
    // Mulai efek pengetikan
    typeEffect();
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const dontClickLink = document.querySelector('a[href="#dontclick"]');
    const jumpscare = document.getElementById('jumpscare');
    
    dontClickLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Tampilkan jumpscare
        jumpscare.style.display = 'flex';
        setTimeout(() => {
            jumpscare.style.display = 'none';
        }, 3000);
    });
});
  