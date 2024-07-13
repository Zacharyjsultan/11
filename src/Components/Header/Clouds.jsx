// import React from "react";
// import "./Clouds.css";
// import Header from "../Header/Header";

// export default function Clouds() {
//   const numClouds = 50; // Adjust the number of clouds as needed

//   const getRandomPosition = () => {
//     const windowHeight = window.innerHeight;
//     const windowWidth = window.innerWidth;
//     const cloudHeight = 120; // Adjusted height of the cloud
//     const cloudWidth = 240; // Adjusted width of the cloud

//     const randomX = Math.floor(Math.random() * (windowWidth - cloudWidth));
//     const randomY = Math.floor(Math.random() * (windowHeight - cloudHeight));

//     return { x: randomX, y: randomY };
//   };

//   const clouds = Array.from({ length: numClouds }).map((_, index) => {
//     const randomPosition = getRandomPosition();
//     const cloudStyle = {
//       left: randomPosition.x + "px",
//       top: randomPosition.y + "px",
//     };

//     return <div className="giant-cloud" style={cloudStyle} key={index}></div>;
//   });

//   return (
//     <div className="about-background">
//       <Header />
//       <div className="container">{clouds}</div>
//     </div>
//   );
// }
