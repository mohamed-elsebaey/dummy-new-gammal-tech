// import React from "react";
// import Slider from "react-slick";

// const ProductData = [
//   {
//     id: 1,
//     name: "Chamomile",
//     text: "Metrication chamomile",
//     img: "https://uploads-ssl.webflow.com/6385069873208e17602e89fb/63f4b32c305d32e3a5d64635_Chamomile-min.jpg",
//   },
//   {
//     id: 2,
//     name: "Peppermint",
//     text: "Mentha piperita",
//     img: "https://uploads-ssl.webflow.com/6385069873208e17602e89fb/63f4b734afef3a78e2f0e411_Peppermint-min.jpg",
//   },
//   {
//     id: 3,
//     name: "Rosemary",
//     text: "Rosmarinus officinalis",
//     img: "https://uploads-ssl.webflow.com/6385069873208e17602e89fb/63f4b793cbb1c204aa171751_Rosemary-min.jpg",
//   },
//   {
//     id: 4,
//     name: "Parsley Flat",
//     text: "Petroselinum cirspum",
//     img: "https://uploads-ssl.webflow.com/6385069873208e17602e89fb/63f4b49fca4f789985739b11_Parsley%20Flat-min.jpg",
//   },
//   {
//     id: 5,
//     name: "Spearmint",
//     text: "Mentha spicata",
//     img: "https://uploads-ssl.webflow.com/6385069873208e17602e89fb/63f4b850b1ed28e579797d9f_Spearmint-min.jpg",
//   },
//   {
//     id: 6,
//     name: "Thyme",
//     text: "Thymus Vulgaris",
//     img: "https://uploads-ssl.webflow.com/6385069873208e17602e89fb/63f4b890e4e533c8adab3731_Thyme-min.jpg",
//   },
// ];

// const Product = () => {
//   var settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     responsive: [
//       {
//         breakpoint: 10000,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="py-10 mb-10">
//       <div className="container">
//         {/* header section */}
//         <div className="mb-10">
//           <h1
//             data-aos="fade-up"
//             className="text-center text-4xl font-bold font-cursive"
//           >
//             Our Products
//           </h1>
//         </div>

//         {/* Product cards */}
//         <div data-aos="zoom-in">
//           <Slider {...settings}>
//             {ProductData.map((data) => (
//               <div className="my-6" key={data.id}>
//                 <div
//                   key={data.id}
//                   className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
//                 >
//                   <div className="mb-4">
//                     <img
//                       src={data.img}
//                       alt=""
//                       className="rounded-md w-40 h-40"
//                     />
//                   </div>
//                   {/* content section */}
//                   <div className="flex flex-col items-center gap-4">
//                     <div className="space-y-3">
//                       <h1 className="text-xl font-bold text-black/80  font-cursive2">
//                         {data.name}
//                       </h1>
//                       <p className="text-xs text-gray-500">{data.text}</p>
//                     </div>
//                   </div>
//                   <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
//                     ,,
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
