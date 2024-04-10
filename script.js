window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


// Ambil semua link dalam navigasi
const navLinks = document.querySelectorAll('.navbar a');

// Loop melalui setiap link dan tambahkan event listener untuk menangani klik
navLinks.forEach(link => {
link.addEventListener('click', function(event) {
    // Hentikan event default agar link tidak mengarahkan ke halaman lain
    event.preventDefault();

    // Hapus class active dari semua link
    navLinks.forEach(navLink => navLink.classList.remove('active'));

    // Tambahkan class active pada link yang diklik
    this.classList.add('active');

    // Scroll ke bagian yang sesuai dengan id link yang diklik
    const targetId = this.getAttribute('href').substring(1); // Ambil id target tanpa tanda "#"
    const targetElement = document.getElementById(targetId); // Cari elemen dengan id target
    targetElement.scrollIntoView({ behavior: 'smooth' }); // Gulir halaman ke elemen target dengan efek smooth
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
    closeBtn.onclick = function() {
    popupContainer.style.display = 'none';
    };

    popupContainer.appendChild(closeBtn);
    popupContainer.appendChild(popupImage);
    document.body.appendChild(popupContainer);

    popupContainer.style.display = 'block';

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
