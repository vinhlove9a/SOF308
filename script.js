document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 1, // Hiển thị 1 testimonial mỗi lần
      spaceBetween: 20, // Khoảng cách giữa các testimonial
      loop: true, // Cho phép lặp lại
      autoplay: {
        delay: 3000, // Chuyển slide sau 3 giây
        disableOnInteraction: false, // Không dừng autoplay khi người dùng thao tác
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
  