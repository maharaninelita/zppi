(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })

    
})(jQuery);

// Menangani pengiriman form testimonial
document.getElementById('testimonialForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form untuk melakukan reload halaman
  
    // Mengambil input pengguna
    const userName = document.getElementById('userName').value;
    const userProfession = document.getElementById('userProfession').value;
    const userTestimonial = document.getElementById('userTestimonial').value;
  
    // Menambahkan testimonial baru ke carousel
    const testimonialCarousel = document.getElementById('testimonialCarousel');
  
    // Membuat elemen testimonial baru
    const newTestimonial = document.createElement('div');
    newTestimonial.classList.add('testimonial-item', 'text-center');
  
    newTestimonial.innerHTML = `
      <img class="img-fluid rounded-circle border border-2 p-2 mx-auto mb-4" src="img/testimonial-default.jpg" style="width: 100px; height: 100px" />
      <div class="testimonial-text rounded text-center p-4">
        <p>${userTestimonial}</p>
        <h5 class="mb-1">${userName}</h5>
        <span class="fst-italic">${userProfession}</span>
      </div>
    `;
  
    // Menambahkan testimonial baru ke dalam carousel
    testimonialCarousel.appendChild(newTestimonial);
  
    // Mengosongkan form setelah submit
    document.getElementById('testimonialForm').reset();
  });

  // Menangani pengiriman form untuk mengedit jadwal
document.getElementById('editScheduleForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form untuk reload halaman
  
    // Mengambil input pengguna
    const day = document.getElementById('daySelect').value;
    const time = document.getElementById('timeInput').value;
  
    // Mencari elemen yang sesuai dengan hari yang dipilih
    const scheduleItems = document.querySelectorAll('#fishingSchedule li');
    scheduleItems.forEach(item => {
      const dayElement = item.querySelector('span:first-child').textContent;
      
      if (dayElement === day) {
        // Mengubah jam untuk hari yang dipilih
        item.querySelector('span:last-child').textContent = time;
      }
    });
  
    // Mengosongkan form setelah submit
    document.getElementById('editScheduleForm').reset();
  });
  
