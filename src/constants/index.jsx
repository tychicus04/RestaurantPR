import { MdOutlineLocationOn, MdOutlinePhone, MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

export const LINKS = [
  { text: "Giới thiệu", targetId: "about" },
  { text: "Món ngon", targetId: "menu" },
  { text: "Không gian nhà hàng", targetId: "restaurantSpace" },
  { text: "Liên hệ", targetId: "contact" },
];

export const ABOUT = {
  header: "NHÀ HÀNG GIANG LAN",
  content:
            "Nằm sát ven sông Hồng, Nhà hàng Giang Lan là một thương hiệu ẩm thực nổi tiếng tại Hà Nội \n" +
            "luôn thu hút thực khách từ Nam ra Bắc. Không gian rộng đẹp, không gian yên tĩnh thư giãn tạo mọi điều \N" +
            "kiện để tổ chức các bữa tiệc hay những buổi họp mặt. Đến hoàn toàn dễ dàng và đậm chất ẩm thực địa \n" +
            "phương, đây là địa điểm lý tưởng để tổ chức những buổi tiệc dành cho người lớn.",
  images: [
    { src: "../src/assets/about.jpg", alt: "Restaurant Exterior" },
    { src: "../src/assets/about.jpg", alt: "River View" },
    { src: "../src/assets/about.jpg", alt: "Dining Area" },
  ],
};

export const MENU = {
  header: "DANH SÁCH MÓN NGON",
  content: "Tổng hợp những món ăn ngon từ nhà hàng",
  viewAll: "Xem tất cả",
  dishes: [
    { name: "GÀ ĐỒI", price: "300,000 đ", image: "../src/assets/dish1.jpg" },
    { name: "CÁ LĂNG", price: "300,000 đ", image: "../src/assets/dish2.jpg" },
    { name: "BÒ TRÂU", price: "300,000 đ", image: "../src/assets/dish3.jpg" },
    { name: "DÊ", price: "300,000 đ", image: "../src/assets/dish4.jpg" },
    { name: "CHIM CÂU", price: "300,000 đ", image: "../src/assets/dish5.jpg" },
    { name: "LỢN MÁN", price: "300,000 đ", image: "../src/assets/dish6.jpg" },
  ]
}

export const RESTAURANTSPACE = {
  header: "KHÔNG GIAN NHÀ HÀNG",
  content: "Tổng hợp những hình ảnh ấn tượng của nhà hàng",
  images: [
    {
      title: "KHÔNG GIAN CỦA NHÀ HÀNG",
      description:
        "Nhà hàng Giang Lang Đền Hùng với không gian sang trọng, sức chứa lên đến 300 khách.",
      image: "../src/assets/space1.jpg",
    },
    {
      title: "THƯỞNG THỨC MÓN NGON",
      description:
        "Nhà hàng Giang Lang Đền Hùng với không gian sang trọng, sức chứa lên đến 300 khách.",
      image: "../src/assets/space2.jpg",
    },
    {
      title: "NÉT ĐẶC SẮC CỦA NHÀ HÀNG",
      description:
        "Nhà hàng Giang Lang Đền Hùng với không gian sang trọng, sức chứa lên đến 300 khách.",
      image: "../src/assets/space3.jpg",
    }
  ]
};

export const FOOTER={
  contact:"Liên hệ",
  brand: "Nhà hàng Giang Lan Đền Hùng",
  contactInfo: [
    { id: 1, icon: <MdOutlineEmail />, value: "abc@gmail.com" },
    { id: 2, icon: <MdOutlinePhone />, value: "123-456-7890" },
    { id: 3, icon: <MdOutlineLocationOn />, value: "123 Main Street, London, UK, 345678" }
  ],
  library: "Thư Viện",
  gallery: [
    {
      src: "../src/assets/gallery1.jpg",
      alt: "Gallery 1",
    },
    {
      src: "../src/assets/gallery2.jpg",
      alt: "Gallery 2",
    },
    {
      src: "../src/assets/gallery3.jpg",
      alt: "Gallery 3",
    },
    {
      src: "../src/assets/gallery1.jpg",
      alt: "Gallery 4",
    },
    {
      src: "../src/assets/gallery2.jpg",
      alt: "Gallery 5",
    },
    {
      src: "../src/assets/gallery3.jpg",
      alt: "Gallery 5",
    }
  ],
  testimonies: "Ý Kiến Khách Hàng",
  testiContent: "Ngọc Lan: Nhà hàng có món ăn tuyệt vời, không gian thoáng đãng và nhân viên phục vụ chuyên nghiệp.",
  socialMedia: [
    { icon: <FaFacebook />, link: "#" },
    { icon: <FaInstagram/>, link: "#" },
    { icon: <FaTelegram/>, link: "#" },
  ],
  chatWithAdmin: "Chat Với Nhà Hàng",
  bookTable: "Đặt Bàn",
  copyRight: "© 2025 Nhà hàng Giang Lan. All rights reserved.",
  
}

export const CONTACT = {
  header: "ĐĂNG KÝ EMAIL",
  content: "Đăng ký email để nhận bản tin của chúng tôi",
  send: "GỬI",
}

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
