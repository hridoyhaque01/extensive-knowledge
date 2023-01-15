// import images

import {
  icon1,
  one,
  quote,
  sideOne,
  testimonial,
} from "../images/exporter/Images";

// navbar data

const Navbar = [
  {
    id: 101,
    name: "home",
    to: "/",
    icon: "bx bx-home",
    class: "active",
  },
  {
    id: 102,
    name: "about",
    to: "/about",
    icon: "bx bx-home",
  },
  {
    id: 103,
    name: "courses",
    to: "/courses",
    icon: "bx bx-home",
  },
  {
    id: 104,
    name: "team",
    to: "/team",
    icon: "bx bx-home",
  },
  {
    id: 105,
    name: "blog",
    to: "/blog",
    icon: "bx bx-home",
  },
  {
    id: 106,
    name: "contact",
    to: "/contact",
    icon: "bx bx-home",
  },
];

// forms data

const Forms = [
  {
    id: 101,
    name: "login",
    to: "/login",
  },
  {
    id: 102,
    name: "register",
    to: "/register",
  },
];

// sidebar galary data ==>

const SidebarGallary = [
  {
    id: 101,
    image: sideOne,
  },
  {
    id: 102,
    image: sideOne,
  },
  {
    id: 103,
    image: sideOne,
  },
  {
    id: 104,
    image: sideOne,
  },
  {
    id: 105,
    image: sideOne,
  },
  {
    id: 106,
    image: sideOne,
  },
];

// sidebar galary data ==>

const Social = [
  {
    id: 101,
    icon: "bx bxl-facebook", // icon or image
    link: "https://web.facebook.com/hridoyhaque01",
  },
  {
    id: 102,
    icon: "bx bxl-facebook", // icon or image
    link: "https://web.facebook.com/hridoyhaque01",
  },
  {
    id: 103,
    icon: "bx bxl-facebook", // icon or image
    link: "https://web.facebook.com/hridoyhaque01",
  },
  {
    id: 104,
    icon: "bx bxl-facebook", // icon or image
    link: "https://web.facebook.com/hridoyhaque01",
  },
];

// notice board data ==>

const NoticeBoard = [
  {
    id: 101,
    date: "20",
    month: "june",
    notice: "Lorem Ipsum is simply dummy text of the printing and setting",
  },
  {
    id: 102,
    date: "22",
    month: "Aug",
    notice: "Lorem Ipsum is simply dummy text of the printing and setting",
  },
  {
    id: 103,
    date: "14",
    month: "May",
    notice: "Lorem Ipsum is simply dummy text of the printing and setting",
  },
  {
    id: 104,
    date: "31",
    month: "Sept",
    notice: "Lorem Ipsum is simply dummy text of the printing and setting",
  },
  {
    id: 105,
    date: "28",
    month: "Oct",
    notice: "Lorem Ipsum is simply dummy text of the printing and setting",
  },
];

// Categories data ==>

const CategoriesData = [
  {
    id: 101,
    image: icon1,
    title: "Genarel Education",
    courses: "05 courses",
  },
  {
    id: 102,
    image: icon1,
    title: "Computer Science",
    courses: "05 courses",
  },
  {
    id: 103,
    image: icon1,
    title: "Civil Engineering",
    courses: "05 courses",
  },
  {
    id: 104,
    image: icon1,
    title: "Artificial Intelligence",
    courses: "05 courses",
  },
  {
    id: 105,
    image: icon1,
    title: "Business Studies",
    courses: "05 courses",
  },
  {
    id: 106,
    image: icon1,
    title: "Web Development",
    courses: "05 courses",
  },
  {
    id: 107,
    image: icon1,
    title: "Life Course",
    courses: "08 courses",
  },
  {
    id: 108,
    image: icon1,
    title: "Lawyer Course",
    courses: "01 courses",
  },
  {
    id: 109,
    image: icon1,
    title: "Recipes",
    courses: "07 courses",
  },
];

// courses data  ==>

const Course = [
  {
    id: 101,
    image: one,
    price: "$55.00",
    tag: "web development",
    title: "Become a PHP Master and Make Money Fast",
    views: "245",
    rating: "05",
    starIcon: "bx bx-star",
    userIcon: "bx bx-user",
    arrowIcon: "bx bx-arrow-from-right",
  },
  {
    id: 102,
    image: one,
    price: "$55.00",
    tag: "web development",
    title: "Learning jQuery Mobile for Beginners",
    views: "245",
    rating: "05",
    starIcon: "bx bx-star",
    userIcon: "bx bx-user",
    arrowIcon: "bx bx-arrow-from-right",
  },
  {
    id: 103,
    image: one,
    price: "$55.00",
    tag: "web development",
    title: "Become a PHP Master and Make Money Fast",
    views: "245",
    rating: "05",
    starIcon: "bx bx-star",
    userIcon: "bx bx-user",
    arrowIcon: "bx bx-arrow-from-right",
  },
  {
    id: 104,
    image: one,
    price: "$55.00",
    tag: "Photography",
    title: "The Art of Black and White Photography",
    views: "245",
    rating: "05",
    starIcon: "bx bx-star",
    userIcon: "bx bx-user",
    arrowIcon: "bx bx-arrow-from-right",
  },
  {
    id: 105,
    image: one,
    price: "$55.00",
    tag: "web development",
    title: "Learn Python – Interactive Python Tutorial",
    views: "245",
    rating: "05",
    starIcon: "bx bx-star",
    userIcon: "bx bx-user",
    arrowIcon: "bx bx-arrow-from-right",
  },
  {
    id: 106,
    image: one,
    price: "$55.00",
    tag: "web development",
    title: "From Zero to Hero with Advance Nodejs",
    views: "245",
    rating: "05",
    starIcon: "bx bx-star",
    userIcon: "bx bx-user",
    arrowIcon: "bx bx-arrow-from-right",
  },
];

// FAQ data  ==>

const FAQ = [
  {
    id: "faqOne",
    bellIcon: "bx bx-bell",
    bellOffIcon: "bx bx-bell-off",
    question: "What are the requirements ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: "faqTwo",
    bellIcon: "bx bx-bell",
    bellOffIcon: "bx bx-bell-off",
    question: "Does Educavo offer free courses?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: "faqThree",
    bellIcon: "bx bx-bell",
    bellOffIcon: "bx bx-bell-off",
    question: "What is the transfer application",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: "faqFour",
    bellIcon: "bx bx-bell",
    bellOffIcon: "bx bx-bell-off",
    question: "What is distance education?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

// testimonial data  ==>

const TestimonialData = [
  {
    id: 101,
    icon: quote,
    quote:
      "I was skeptical of SEO and content marketing at first, but the Lorem Ipsum Company not only proved itself financially speaking, but the response I have received from customers is incredible. The work is top-notch and I consistently outrank all my competitors on Google.",
    image: testimonial,
  },
  {
    id: 102,
    icon: quote,
    quote:
      "After being forced to move twice within five years, our customers had a hard time finding us and our sales plummeted. The Lorem Ipsum Co. not only revitalized our brand, but saved our nearly 100-year-old family business from the brink of ruin by optimizing our website for SEO Our Clients.",
    image: testimonial,
  },
  {
    id: 103,
    icon: quote,
    quote:
      "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company.",
    image: testimonial,
  },
  {
    id: 104,
    icon: quote,
    quote:
      "I was skeptical of SEO and content marketing at first, but the Lorem Ipsum Company not only proved itself financially speaking, but the response I have received from customers is incredible. The work is top-notch and I consistently outrank all my competitors on Google.",
    image: testimonial,
  },
  {
    id: 105,
    icon: quote,
    quote:
      "After being forced to move twice within five years, our customers had a hard time finding us and our sales plummeted. The Lorem Ipsum Co. not only revitalized our brand, but saved our nearly 100-year-old family business from the brink of ruin by optimizing our website for SEO Our Clients.",
    image: testimonial,
  },
  {
    id: 106,
    icon: quote,
    quote:
      "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company.",
    image: testimonial,
  },
];

// news data ==>

const NewsData = [
  {
    id: 101,
    image: one,
    userIcon: "bx bx-user",
    dateIcon: "bx bx-calendar",
    user: "admin",
    date: "june 15,2019",
    title: "University while the lovely valley team work",
    to: "/",
    more: "read more",
    arrowIcon: "bx bx-arrow-from-left",
  },
  {
    id: 102,
    image: one,
    userIcon: "bx bx-user",
    dateIcon: "bx bx-calendar",
    user: "admin",
    date: "june 15,2019",
    title: "While The Lovely Valley Team Work",
    to: "/",
    more: "read more",
    arrowIcon: "bx bx-arrow-from-left",
  },
  {
    id: 103,
    image: one,
    userIcon: "bx bx-user",
    dateIcon: "bx bx-calendar",
    user: "admin",
    date: "june 15,2019",
    title: "Modern School The Lovely Valley Team Work",
    to: "/",
    more: "read more",
    arrowIcon: "bx bx-arrow-from-left",
  },
];

// events data ==>

const Events = [
  {
    id: 101,
    month: "june",
    date: "20",
    subjects: "math & english",
    title: "Educational Technology and Mobile Learning",
    to: "/",
  },
  {
    id: 102,
    month: "june",
    date: "21",
    subjects: "math & english",
    title: "Educational Technology and Mobile Learning",
    to: "/",
  },
  {
    id: 103,
    month: "june",
    date: "22",
    subjects: "math & english",
    title: "Educational Technology and Mobile Learning",
    to: "/",
  },
  {
    id: 104,
    month: "june",
    date: "23",
    subjects: "math & english",
    title: "Educational Technology and Mobile Learning",
    to: "/",
  },
];

// footer data ==>

const FooterData = [
  {
    id: 101,
    title: "explore",
    links: [
      {
        id: "ex1",
        link: "eLearning School",
        to: "/",
      },
      {
        id: "ex2",
        link: "Privacy Policy",
        to: "/",
      },
      {
        id: "ex3",
        link: "Courses",
        to: "/",
      },
      {
        id: "ex4",
        link: "Become A Teacher",
        to: "/",
      },
      {
        id: "ex5",
        link: "Blog",
        to: "/",
      },
    ],
  },
  {
    id: 102,
    title: "categories",
    links: [
      {
        id: "cat1",
        link: "All Courses",
        to: "/",
      },
      {
        id: "cat2",
        link: "Web Development",
        to: "/",
      },
      {
        id: "cat3",
        link: "Genarel Education",
        to: "/",
      },
      {
        id: "cat4",
        link: "Digital Marketing",
        to: "/",
      },
      {
        id: "cat5",
        link: "Web Design",
        to: "/",
      },
    ],
  },
  {
    id: 103,
    title: "RESOURCES",
    links: [
      {
        id: "res1",
        link: "Become A Teacher",
        to: "/",
      },
      {
        id: "res2",
        link: "Instructor/Student Profile",
        to: "/",
      },
      {
        id: "res3",
        link: "Courses",
        to: "/",
      },
      {
        id: "res4",
        link: "Checkout",
        to: "/",
      },
      {
        id: "res5",
        link: "Terms & Conditions",
        to: "/",
      },
    ],
  },
];

// address data ==>

const Address = [
  {
    id: 101,
    icon: "bx bx-map",
    address: "503 Old Buffalo Street Northwest #205 New York-3087",
    link: "",
  },
  {
    id: 102,
    icon: "bx bx-phone-call",
    address: "+880-1986-869823",
    link: "tel:01986869823",
  },
  {
    id: 103,
    icon: "bx bx-envelope",
    address: "infoname@gmail.com",
    link: "mailto:01986869823",
  },
];

export {
  Navbar,
  SidebarGallary,
  Social,
  NoticeBoard,
  CategoriesData,
  Course,
  FAQ,
  TestimonialData,
  Forms,
  NewsData,
  Events,
  FooterData,
  Address,
};
