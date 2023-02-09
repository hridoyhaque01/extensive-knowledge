// counter data ==>

import {
  edulivoi,
  lemros,
  mairalon,
  nunito,
  tab1,
  tab2,
  tab3,
  writer1,
  writer2,
} from "../images/about/Image";

const Counterdata = [
  {
    id: 101,
    delay: "",
    count: 2,
    amount: "k",
    title: "Students",
    bgClass: "first",
    decimal: 0,
  },
  {
    id: 102,
    delay: "100",
    count: 3.5,
    amount: "",
    title: "Average CGPA",
    bgClass: "second",
    decimal: 1,
  },
  {
    id: 103,
    delay: "200",
    count: 95,
    amount: "%",
    title: "Graduates",
    bgClass: "third",
    decimal: 0,
  },
];

// tab data ==>

const TabsData = [
  {
    id: "tab1",
    delay: "",
    icon: "bx bx-money",
    title: "History",
    active: "active",
  },
  {
    id: "tab2",
    delay: "100",
    icon: "bx bx-money",
    title: "Mission & Vission",
  },
  {
    id: "tab3",
    delay: "200",
    icon: "bx bx-money",
    title: "Administration",
  },
];

// tab details

const tabDetails = [
  {
    id: "tab1",
    delay: "",
    title: "Educavo History",
    texts:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blan ditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, sim ilique sunt in culpa.",
    image: tab1,
    active: "active show",
  },
  {
    id: "tab2",
    delay: "100",
    title: "Educavo Mission",
    texts:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum doloribus veritatis fugiat illum. Corrupti vero eligendi repellat atque nam architecto consectetur et veritatis dolorem in iure ducimus, nobis, provident nulla!",
    image: tab2,
  },
  {
    id: "tab3",
    delay: "200",
    title: "Educavo Administration",
    texts:
      "obcaecati iste sapiente nesciunt? Velit vero alias illum odio quam, magni est voluptatum voluptate consequuntur esse. Cum aliquid porro maxime cupiditate velit ullam corporis doloremque placeat quidem sunt ex alias adipisci nam ducimus neque, ab facilis quos mollitia?",
    image: tab3,
  },
];

// testimonial data ==>

const TestimonalData = [
  {
    id: 101,
    delay: "",
    image: writer1,
    quote:
      "Education is the passport to the future for tomorrow belongs to those who prepare for it today",
    quoteTopIcon: "bx bxs-quote-left",
    quoteBottomIcon: "bx bxs-quote-right",
    name: "Mahadi mansura",
    state: "Head Teacher",
  },
  {
    id: 102,
    delay: "100",
    image: writer2,
    quote:
      "Education is the passport to the future for tomorrow belongs to those who prepare for it today",
    quoteTopIcon: "bx bxs-quote-left",
    quoteBottomIcon: "bx bxs-quote-right",
    name: "Jonathon Lary",
    state: "Math Teacher",
  },
];

// fonts data ==>

const SliderData = [
  {
    id: 101,
    image: nunito,
    link: "/",
  },
  {
    id: 102,
    image: lemros,
    link: "/",
  },
  {
    id: 103,
    image: edulivoi,
    link: "/",
  },
  {
    id: 104,
    image: mairalon,
    link: "/",
  },
];

export { Counterdata, TabsData, tabDetails, TestimonalData, SliderData };
