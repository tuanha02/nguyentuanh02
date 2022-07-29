$('.image-silder').slick({
    // dot có td làm nút bấm chuyển ảnh 12345
    dots: true,
    speed: 500, 
    // fade có tác dụng gom tất cả thành một 
    fade:false ,
    // slide to show có td hiện bao nhiêu ảnh ra 
    slidesToShow: 4,
    // tos scroll là lướt một lần bao nhiêu ảnh 
    slidesToScroll: 2,
    // infinite là chạy vô tận hoặc không chạy
    infinite:false,
    // arrows có td bỏ next và quay lại previous
    arrows:true,
    // autoplay silde tự chạy speeed tốc độ 1k =1s
    autoplay:false,
    autuplaySpeed:500,
    // draggable có td di chuột vào k lướt sang trái phải dc (khi responsive ở điện thoại thì cần bỏ infinite và thêm draggable)
    draggable:true,
    // hai cái nút slick arrow class chung ở đây bị ẩn hay sao ấy , k cần class chung vẫn css dc 
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    cssEase: 'linear'
  });