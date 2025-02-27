// import React from 'react';
// import { Box, Stack, Typography } from '@mui/material';

// import HeroBannerImage from '../assets/images/download.jpg';

// const HeroBanner = () => (
//   <Box
//     sx={{ mt: { lg: "85px", xs: "70px" }, ml: { lg:"75px" ,sm: "50px" } }}
//     position="relative"
//     p="20px"
//   >
//     <Typography color="#FF2625" fontWeight="600" fontSize="26px">
//       Fitness Club
//     </Typography>
//     <Typography
//       fontWeight={700}
//       sx={{ fontSize: { lg: "44px", xs: "40px" } }}
//       mb="23px"
//       mt="30px"
//     >
//       Sweat, Smile <br />
//       And Repeat
//     </Typography>
//     <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
//       Check out the most effective exercises personalized to you
//     </Typography>
//     <Stack>
//       <a
//         href="#exercises"
//         style={{
//           marginTop: "45px",
//           textDecoration: "none",
//           width: "200px",
//           textAlign: "center",
//           background: "#FF2625",
//           padding: "14px",
//           fontSize: "22px",
//           textTransform: "none",
//           color: "white",
//           borderRadius: "4px",
//         }}
//       >
//         Explore Exercises
//       </a>
//     </Stack>
//     <Typography
//       fontWeight={600}
//       color="#FF2625"
//       sx={{
//         opacity: "0.1",
//         display: { lg: "block", xs: "none" },
//         fontSize: "200px",
//       }}
//     >
//       Exercise
//     </Typography>
//     <img
//       style={{
//         width: "548px",
//         height: "600px",
//         borderRadius: "25px",
//         marginTop:"0px",
//         border: "2px solid #FF2625",
//         padding: "20px ",
//       }}
//       src={HeroBannerImage}
//       alt="hero-banner"
//       className="hero-banner-img"
//     />
//   </Box>
// );

// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// const FitnessWebsite = () => {
//   return (
//     <div className="font-roboto bg-gray-100">
//       {/* Navbar
//       <nav className="bg-white shadow-md">
//         <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//           <a className="text-2xl font-bold text-gray-800" href="#">
//             Move.IQ
//           </a>
//           <ul className="flex space-x-4">
//             <li>
//               <a className="text-gray-600 hover:text-gray-800" href="#">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a className="text-gray-600 hover:text-gray-800" href="/start">
//                 YogZone
//               </a>
//             </li>
//             <li>
//               <a className="text-gray-600 hover:text-gray-800" href="#">
//                 Nutrition
//               </a>
//             </li>
//             <li>
//               <a className="text-gray-600 hover:text-gray-800" href="#">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a className="text-gray-600 hover:text-gray-800" href="#">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav> */}

//       {/* Hero Section */}
//       <section className="relative bg-gray-800 text-white">
//         <img
//           alt="A group of people working out in a modern gym"
//           className="w-full h-full object-cover opacity-50"
//           src="https://storage.googleapis.com/a1aa/image/4q4cJb0mEqbQPBO4Xjow33L970vJwaTFiW595LWKVtrAhceJA.jpg"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
//           <h1 className="text-4xl md:text-6xl font-bold">
//             Transform Your Life
//           </h1>
//           <p className="mt-4 text-lg md:text-2xl">
//             Join the best fitness community and achieve your goals
//           </p>
//           <a
//             className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
//             href="#"
//           >
//             Get Started
//           </a>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="container mx-auto px-4 py-16">
//         <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <Link to={"/start"}>
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <img
//                 alt="Icon representing personal training"
//                 className="mx-auto mb-4"
//                 src="https://img.freepik.com/free-vector/online-yoga-class-concept-design_23-2148554402.jpg?t=st=1734854328~exp=1734857928~hmac=bc5797a902b53e41a0c2310e675ee71c75c73977108ea43903341d961f2881ea&w=1380" //https://storage.googleapis.com/a1aa/image/ISk0J81da47vIx3SxYc8EzIzQImlBNBfmZTcVEJGLVifDy5TA.jpg"
//               />
//               <h3 className="text-xl font-bold mb-2">AI Yoga Zone</h3>
//               <p>
//                 Where advanced AI meets ancient practices. Our platform provides
//                 real-time posture corrections for various Yoga Poses, Embrace a
//                 healthier lifestyle, improve your flexibility, with the perfect
//                 blend of technology and tradition.
//               </p>
//             </div>
//           </Link>
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <img
//               alt="Icon representing group classes"
//               className="mx-auto mb-4"
//               src="https://storage.googleapis.com/a1aa/image/U4SI7jXN22LbIRkFmXbALXX6n86gTDQpuXl40FWbQldAhceJA.jpg"
//             />
//             <h3 className="text-xl font-bold mb-2">Group Classes</h3>
//             <p>
//               Join our group classes and enjoy a variety of workouts with a
//               community feel.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <img
//               alt="Icon representing nutrition plans"
//               className="mx-auto mb-4"
//               src="https://storage.googleapis.com/a1aa/image/8lSV1k1SE7ZiNdFJzlYLeTSMzRkMrqeq8IJ4w8IKfgd3HkznA.jpg"
//             />
//             <h3 className="text-xl font-bold mb-2">Nutrition Plans</h3>
//             <p>
//               Receive personalized nutrition plans to complement your fitness
//               routine.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="bg-gray-200 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             What Our Members Say
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <img
//                 alt="Portrait of a happy member"
//                 className="mx-auto mb-4 rounded-full"
//                 src="https://storage.googleapis.com/a1aa/image/svncWKJZr0JzNVkYxX8K0AM0zimh7mQsBBu83REtYohfB58JA.jpg"
//               />
//               <p className="italic">
//                 "FitnessPro has completely transformed my life. The trainers are
//                 amazing and the community is so supportive!"
//               </p>
//               <h3 className="mt-4 text-xl font-bold">John Doe</h3>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <img
//                 alt="Portrait of a satisfied member"
//                 className="mx-auto mb-4 rounded-full"
//                 src="https://storage.googleapis.com/a1aa/image/1DkQSUta1z50CNQhs21TKP8F4eMWpTssh7eR62fwEfORQInPB.jpg"
//               />
//               <p className="italic">
//                 "I love the variety of classes offered. There's something for
//                 everyone, and the energy is always high!"
//               </p>
//               <h3 className="mt-4 text-xl font-bold">Jane Smith</h3>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <img
//                 alt="Portrait of a fit member"
//                 className="mx-auto mb-4 rounded-full"
//                 src="https://storage.googleapis.com/a1aa/image/A0GqMye686z1CySfh84foOotWz1ZrSkTBNJae7AEYefAfB58JA.jpg"
//               />
//               <p className="italic">
//                 "The nutrition plans have helped me stay on track with my diet.
//                 I feel healthier and more energetic than ever."
//               </p>
//               <h3 className="mt-4 text-xl font-bold">Emily Johnson</h3>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="bg-blue-600 text-white py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
//           <p className="mb-8">
//             Join Move.IQ today and take the first step towards a healthier,
//             happier you.
//           </p>
//           <a
//             className="px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-200"
//             href="#"
//           >
//             Join Now
//           </a>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-center md:text-left">
//               © 2024 Move.IQ All rights reserved.
//             </p>
//             <ul className="flex space-x-4 mt-4 md:mt-0">
//               <li>
//                 <a className="hover:text-gray-400" href="#">
//                   {/* <FontAwesomeIcon icon={faFacebookF} /> */}
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-400" href="#">
//                   {/* <FontAwesomeIcon icon={faTwitter} /> */}
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-400" href="#">
//                   {/* <FontAwesomeIcon icon={faInstagram} /> */}
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-400" href="#">
//                   {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FitnessWebsite;

import React from "react";
import { Link } from "react-router-dom";
import frontImage from "../assets/images/front.jpg";
import secondImg from "../assets/images/exerciselist.jpg";
import thirdImg from "../assets/images/ai.jpg";
import fourImg from "../assets/images/nutri.png";

const FitnessWebsite = () => {
  return (
    <div className="font-roboto bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white">
        <img
          alt="A group of people working out in a modern gym"
          className="w-full h-full object-cover opacity-50"
          src={frontImage}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Transform Your Life
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white">
            Join the best fitness platform and achieve your goals
          </p>
          <a
            className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700"
            href="#"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to={"/ai"}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <img
                alt="Icon representing AI training"
                className="mx-auto mb-4"
                src={thirdImg}
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                AI Yoga Zone
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Where advanced AI meets ancient practices. Our platform provides
                real-time posture corrections for various Yoga Poses. Embrace a
                healthier lifestyle, improve your flexibility, with the perfect
                blend of technology and tradition.
              </p>
            </div>
          </Link>
          <Link to={"/ex"}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <img
                alt="Icon representing exercises group classes"
                className="mx-auto mb-4"
                src={secondImg}
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                Exercise Guide
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A large comprehensive list of all the exercises you'll ever need
                to achieve your goals
              </p>
            </div>
          </Link>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <img
              alt="Icon representing nutrition plans"
              className="mx-auto mb-4"
              src={fourImg}
            />
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
              Nutrition Plans
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Receive personalized nutrition plans to complement your fitness
              routine.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8">
            Join Move.IQ today and take the first step towards a healthier,
            happier you.
          </p>
          <a
            className="px-6 py-3 bg-white text-teal-600 rounded-full hover:bg-gray-200"
            href="#"
          >
            Join Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left">
              © 2024 Move.IQ All rights reserved.
            </p>
            <ul className="flex space-x-4 mt-4 md:mt-0">
              <li>
                <a className="hover:text-gray-400" href="#"></a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#"></a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#"></a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FitnessWebsite;
