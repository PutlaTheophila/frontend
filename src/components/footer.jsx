import { FaSquareInstagram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { FaRegCopyright } from "react-icons/fa6";


// export default function Footer (){
//     return (
//         <div class='w-[100vw] h-[60vh] bg-black pt-[10px]  bottom-0'>
//             <div class='font-titlefont w-[80vw] h-[18vh] text-white m-auto'>
//                 <div class='font-titlefont font-extrabold ml-auto text-white flex items-center justify-center'>About</div>
//                 <div> this site is maintained by students sports media of iit bhilai , this page provides the sportsmedia content of iit bhilai</div>
//             </div>
//             <hr class='w-[80vw] m-auto'/>
//             <div class='font-titlefont w-[80vw] h-[20vh] text-white m-auto mt-[10px]'>
//                 <div class='font-titlefont font-extrabold ml-auto  flex items-center justify-center'>Contact</div>
//                 <div> this site is maintained by students sports media of iit bhilai , this page provides the sportsmedia content of iit bhilai</div>
//             </div>
//             <hr class='w-[80vw] m-auto'/>
//             <div class='font-titlefont w-[80vw] h-[10vh]  m-auto mt-[10px]'>
//                 <div class='font-titlefont font-extrabold ml-auto  flex items-center justify-center text-white h-[3vh]'>Connect</div>
//                 <div class='flex  h-[7vh] text-white text-xl items-center justify-evenly'>
//                     <FaSquareInstagram/>
//                     <FaPhoneAlt/>
//                     <RiTwitterXFill/>
//                     <BiLogoGmail/>
//                 </div>
//             </div>
//             <hr class='w-[80vw] m-auto'/>
//             <div class='h-[5vh] mt-[20px] text-white flex items-center justify-center font-titlefont'>
//                 <FaRegCopyright/> 
//                 <div class='ml-[10px]'>
//                     sports iit bhilai
//                 </div>
//             </div>            
//         </div>
//     )
// }



// import React from 'react';
// import { FaSquareInstagram, FaRegCopyright } from "react-icons/fa6";
// import { RiTwitterXFill } from "react-icons/ri";
// import { BiLogoGmail } from "react-icons/bi";

// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 text-white mt-auto font-titlefont">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h2 className="text-2xl font-bold mb-4">About</h2>
//             <p className="text-gray-300">
//               This site is maintained by the student sports media of IIT Bhilai. We provide comprehensive sports media content for our institution.
//             </p>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Contact</h2>
//             <p className="text-gray-300">
//               For any inquiries or information, please reach out to the IIT Bhilai sports department. We're here to assist you with all your sports-related questions.
//             </p>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Connect</h2>
//             <div className="flex space-x-4">
//               <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
//                 <FaSquareInstagram size={24} />
//                 <span className="sr-only">Instagram</span>
//               </a>
//               <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
//                 {/* <FaPhoneAlt size={24} /> */}
//                 <span className="sr-only">Phone</span>
//               </a>
//               <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
//                 <RiTwitterXFill size={24} />
//                 <span className="sr-only">Twitter</span>
//               </a>
//               <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
//                 <BiLogoGmail size={24} />
//                 <span className="sr-only">Email</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-slate-800 py-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//           <FaRegCopyright className="mr-2" />
//           <span className="font-medium">Sports IIT Bhilai</span>
//         </div>
//       </div>
//     </footer>
//   );
// }


// import React from 'react';
// import { FaSquareInstagram, FaPhoneAlt, FaRegCopyright } from "react-icons/fa6";
// import { RiTwitterXFill } from "react-icons/ri";
// import { BiLogoGmail } from "react-icons/bi";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white font-titlefont">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-white border-b-2 border-white pb-2 inline-block">About</h2>
            <p className="text-gray-300 leading-relaxed">
              This site is maintained by the student sports media of IIT Bhilai. We provide comprehensive sports media content for our institution, keeping you updated with the latest in campus athletics.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-white border-b-2 border-white pb-2 inline-block">Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              For any inquiries or information, please reach out to the IIT Bhilai sports department. We're here to assist you with all your sports-related questions and ensure you stay connected with our vibrant sports community.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-white border-b-2 border-white pb-2 inline-block">Connect</h2>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-white transition-colors duration-300 transform hover:scale-110">
                <FaSquareInstagram size={28} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-white transition-colors duration-300 transform hover:scale-110">
                <FaPhoneAlt size={28} />
                <span className="sr-only">Phone</span>
              </a>
              <a href="#" className="text-white hover:text-white transition-colors duration-300 transform hover:scale-110">
                <RiTwitterXFill size={28} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-white transition-colors duration-300 transform hover:scale-110">
                <BiLogoGmail size={28} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <FaRegCopyright className="mr-2 text-white" />
          <span className="font-medium text-white">Sports IIT Bhilai</span>
          <span className="ml-2 text-gray-400">| All rights reserved {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}