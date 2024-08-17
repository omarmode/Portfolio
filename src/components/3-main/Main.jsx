import { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";

const myproject = [
  {
    projectTitle: "AGENCY",
    category: "css",
    imgpath:
      "https://res.cloudinary.com/dprfoqe2j/image/upload/v1723807979/1_d7f1950c87.webp",
    http1: "https://omarabdalrahman.github.io/template-1/template1.html",
    des: "The first project I created and designed using...Html && css",
  },
  {
    projectTitle: "Shopping Cart",
    category: "js",
    imgpath:
      "https://res.cloudinary.com/dprfoqe2j/image/upload/v1723807942/4_e51793de4b.jpg",
    http1: "https://omarmode.github.io/shoppingCart--omar/index1.html",
    des: "This site was designed using JavaScript and is a shopping site that displays products",
  },
  {
    projectTitle: "Arabic site",
    category: "bootstrap",
    imgpath:
      "https://res.cloudinary.com/dprfoqe2j/image/upload/v1723807899/5_961a732220.jpg",
    http1: "https://omarmode.github.io/arabic-bootstrap/",
    des: "It is an architectural building site in the Arabic language designed using the Html && css && BootStrab ",
  },
  {
    projectTitle: "old portofolio",
    category: "bootstrap",
    imgpath:
      "https://res.cloudinary.com/dprfoqe2j/image/upload/v1723807857/portofoilo_6ff363d8fa.png",
    http1: "https://omarmode.github.io/portfolio-website/",
    des: "This website was designed using HTML && CSS && BootStrap, and it displays my CV",
  },
  {
    projectTitle: "Movies app",
    category: "react",
    imgpath:
      "https://res.cloudinary.com/dprfoqe2j/image/upload/v1723807810/movie_66dd66b015.jpg",
    http1: "https://movies-project-roan.vercel.app/",
    des: "The website was designed using Html , css,Bootstrap & React,This site displays the API for movies, their details, and ratings",
  },
  {
    projectTitle: "simple-game",
    category: "js",
    imgpath:
      "https://res.cloudinary.com/dprfoqe2j/image/upload/v1723807773/3_c4645d99e0.jpg",
    http1: "https://omarmode.github.io/simple-game/",
    des: "A simple game designed using JavaScript, which involves Naruto beating Sasaki and vice versa",
  },
  {
    projectTitle: "simple-Dates-Reminder",
    category: "react",
    imgpath:
      "https://res.cloudinary.com/dprfoqe2j/image/upload/v1723807713/data_584aa5ba3c.jpg",
    http1: "https://omarmode.github.io/Dates-Reminder/",
    des: "An appointments program that displays someone's appointments. It is a simple design using React",
  },
  {
    projectTitle: "Menu Restaurant",
    category: "react",
    imgpath:
      "https://res.cloudinary.com/dprfoqe2j/image/upload/v1723807643/menu_3e7f908623.jpg",
    http1: "https://omarmode.github.io/MenuProjectByReact/",
    des: "It is a menu in a new restaurant that was designed using React , Html , css , javascript",
  },
  {
    projectTitle: " simple-E-commerce",
    category: "react",
    imgpath:
      "https://res.cloudinary.com/dprfoqe2j/image/upload/v1723807564/e_commerce_f493cf7003.jpg",
    http1: "https://e-commerce-app-virid.vercel.app/",
    des: "It is a simple e-commerce website that exposes the API for different products and is built using React",
  },
  {
    projectTitle: " flexible-freight-services-app",
    category: "react",
    imgpath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTumB4r1jRHbuLsvYMJw-Vdop1f5Mh5K702eBNR7S4&s",
    http1: "https://flexible-freight-services.vercel.app/",
    des: " Built with HTML, CSS,and React Js, our website offers seamlessnavigation and user-friendly interfaces.",
  },
  {
    projectTitle: " Prayers-timing-website",
    category: "react",
    imgpath:
      "https://wepik.com/api/image/ai/9a07bbe3-4dd1-43b4-942e-1b2597d4e1b5",
    http1: "https://prayer-times-website-d75g.vercel.app/",
    des: "  is a user-friendly website designed using React, MUI, and Moment libraries. It provides users with accurate prayer timings and countdowns to the next prayer",
  },
  {
    projectTitle: " E-commerce-Next.js",
    category: "Next.js",
    imgpath:
      "https://res.cloudinary.com/dprfoqe2j/image/upload/v1723928447/e-commerce-3-st58.onrender.com_-_Google_Chrome_5_29_2024_9_27_27_AM_dthlyf.png",
    http1: "https://e-commerce-3-st58.onrender.com/",
    des: "Developed an e-commerce website using Next and HyperUI for a dynamic and responsive front-end,with Strapi powering a robust and scalable back-end. Implemented features for product display, user authentication, and shopping cart functionality.",
  },
  {
    projectTitle: " E-commerce-React.js",
    category: "react",
    imgpath:
      "https://res.cloudinary.com/dprfoqe2j/image/upload/v1723927030/Vite_React_-_Google_Chrome_5_26_2024_8_31_21_AM_zwe1qf.png",
    http1: "https://e-commerce-react-strapi.vercel.app/",
    des: "Created a dynamic e-commerce website with React.js and Material-UI, ensuring a responsive and user-friendly front-end. Integrated Strapi for a robust and scalable back-end solution.",
  },
  {
    projectTitle: "dashboard",
    category: "react",
    imgpath:
      "https://res.cloudinary.com/dprfoqe2j/image/upload/v1723927826/Vite_React_-_Person_2_-_Microsoft_Edge_8_17_2024_11_47_54_PM_jg3eqk.png",
    http1: "https://dashboard-pi-ruddy.vercel.app/",
    des: "Leveraged React and Vite for high performance and seamless user experience. Utilized @mui/material and Nivo for visually appealing data displays, along with FullCalendar for advanced interactions. Integrated react-hook-form for simplified data input and react-router-dom for efficient page routing.",
  },
];

export default function Main() {
  const [buttn, setbuttn] = useState("all");
  const [arr, setarr] = useState(myproject);
  return (
    <main className="flex" id="#project">
      <section className="section-left  flex">
        <button
          onClick={() => {
            setarr(myproject);
            setbuttn("all");
          }}
          className={buttn === "all" ? "active" : null}
        >
          all Projects
        </button>
        <button
          onClick={() => {
            const newarr = myproject.filter((item) => {
              return item.category == "css";
            });
            setarr(newarr);
            setbuttn("css");
          }}
          className={buttn === "css" ? "active" : null}
        >
          html&&css
        </button>
        <button
          onClick={() => {
            const newarr = myproject.filter((item) => {
              return item.category == "js";
            });
            setarr(newarr);
            setbuttn("js");
          }}
          className={buttn === "js" ? "active" : null}
        >
          javaScript
        </button>
        <button
          onClick={() => {
            const newarr = myproject.filter((item) => {
              return item.category == "bootstrap";
            });
            setarr(newarr);
            setbuttn("bootstrap");
          }}
          className={buttn === "bootstrap" ? "active" : null}
        >
          Bootstrap
        </button>
        <button
          onClick={() => {
            const newarr = myproject.filter((item) => {
              return item.category == "react";
            });
            setarr(newarr);
            setbuttn("react");
          }}
          className={buttn === "react" ? "active" : null}
        >
          react
        </button>
        <button
          onClick={() => {
            const newarr = myproject.filter((item) => {
              return item.category == "Next.js";
            });
            setarr(newarr);
            setbuttn("Next.js");
          }}
          className={buttn === "Next.js" ? "active" : null}
        >
          Next.js
        </button>
      </section>
      <section className="section-right  flex ">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 10, stiffness: 150 }}
                key={item.imgpath}
                className="card"
              >
                <img
                  src={item.imgpath}
                  width={240}
                  style={{ borderRadius: "10px", height: "170px" }}
                  alt=""
                />
                <div className="box" style={{ width: "240px" }}>
                  <h2 className="title">{item.projectTitle}</h2>
                  <p className="suptitle">{item.des}</p>
                  <div className="flex">
                    <a className="icon-link" href={item.http1}></a>
                    <a className="link-a " href={item.http1}>
                      more
                      <span
                        className="icon-arrow-right"
                        style={{ alignSelf: "end" }}
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
