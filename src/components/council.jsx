// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Button from '@material-ui/core/Button';
// import { FaUserAlt } from "react-icons/fa";

// export function loader (){
//     const data = [
//         {
//             "sport": "Basketball",
//             "players": [
//                 {
//                     "name": "LeBron James",
//                     "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
//                     "team": "Los Angeles Lakers",
//                     "position": "Forward"
//                 },
//                 {
//                     "name": "Stephen Curry",
//                     "image": "https://i.pinimg.com/736x/cd/4f/59/cd4f590f83a5be0270f373ea2f6247cf.jpg",
//                     "team": "Golden State Warriors",
//                     "position": "Guard"
//                 }
//             ]
//         },
//         {
//             "sport": "Soccer",
//             "players": [
//                 {
//                     "name": "Lionel Messi",
//                     "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
//                     "team": "Inter Miami",
//                     "position": "Forward"
//                 },
//                 {
//                     "name": "Cristiano Ronaldo",
//                     "image": "https://i.pinimg.com/736x/cd/4f/59/cd4f590f83a5be0270f373ea2f6247cf.jpg",
//                     "team": "Al Nassr",
//                     "position": "Forward"
//                 }
//             ]
//         },
//         {
//             "sport": "Tennis",
//             "players": [
//                 {
//                     "name": "Serena Williams",
//                     "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
//                     "team": "USA",
//                     "position": "Retired"
//                 },
//                 {
//                     "name": "Roger Federer",
//                     "image": "https://i.pinimg.com/736x/cd/4f/59/cd4f590f83a5be0270f373ea2f6247cf.jpg",
//                     "team": "Switzerland",
//                     "position": "Retired"
//                 }
//             ]
//         },
//         {
//             "sport": "Tennis",
//             "players": [
//                 {
//                     "name": "Serena Williams",
//                     "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
//                     "team": "USA",
//                     "position": "Retired"
//                 },
//                 {
//                     "name": "Roger Federer",
//                     "image": "https://i.pinimg.com/736x/cd/4f/59/cd4f590f83a5be0270f373ea2f6247cf.jpg",
//                     "team": "Switzerland",
//                     "position": "Retired"
//                 }
//             ]
//         },
//         {
//             "sport": "Tennis",
//             "players": [
//                 {
//                     "name": "Serena Williams",
//                     "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
//                     "team": "USA",
//                     "position": "Retired"
//                 },
//                 {
//                     "name": "Roger Federer",
//                     "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
//                     "team": "Switzerland",
//                     "position": "Retired"
//                 }
//             ]
//         },
//         {
//             "sport": "Tennis",
//             "players": [
//                 {
//                     "name": "Serena Williams",
//                     "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
//                     "team": "USA",
//                     "position": "Retired"
//                 },
//                 {
//                     "name": "Roger Federer",
//                     "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
//                     "team": "Switzerland",
//                     "position": "Retired"
//                 }
//             ]
//         },
//         {
//             "sport": "Tennis",
//             "players": [
//                 {
//                     "name": "Serena Williams",
//                     "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
//                     "team": "USA",
//                     "position": "Retired"
//                 },
//                 {
//                     "name": "Roger Federer",
//                     "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
//                     "team": "Switzerland",
//                     "position": "Retired"
//                 }
//             ]
//         },
//         {
//             "sport": "Tennis",
//             "players": [
//                 {
//                     "name": "Serena Williams",
//                     "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
//                     "team": "USA",
//                     "position": "Retired"
//                 },
//                 {
//                     "name": "Roger Federer",
//                     "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
//                     "team": "Switzerland",
//                     "position": "Retired"
//                 }
//             ]
//         }
//     ]
    
//     return(
//         data
//     )
// }

// export default function Council() {
//     const data = useLoaderData();
//     return(
//     <div class=' m-auto flex-col items-stretch mb-[50px]'>
//         {
//             data.map((sport)=>{
//                 return <Card {...sport}/>
//             })
//         }
//     </div>
//     )
// }

// function Card(props) {
//     console.log(props)
//     console.log();
//     return(
//         <div class=' bg-slate-800 text-white h-[25vh] w-[85vw] pt-[2px] mt-[20px] m-auto rounded-lg shadow-2xl '>
//             <div class ='font-titlefont font-extrabold flex items-center justify-center tracking-wider mt-[10px]'>{props.sport}</div>
//             <div class='flex items-center justify-evenly mt-[5px]  ml-[10px] mr-[10px] rounded-lg pt-[5px] pb-[5px]'>
//                 <div class='w-[32vw] h-[18vh] ml-[5px] bg-slate-700 rounded-lg'>
//                     <div class=' mt-[5px] w-[20vw] h-[10vh] overflow-hidden m-auto rounded-full shadow-2xl bg-red-600 flex items-center justify-center'>
//                         <img src={props.players[0].image} class=''/>
//                     </div>
//                     <div class='w-[25vw] font-titlefont text-xs font-semibold m-auto'>
//                         <div class='flex items-center justify-center'>
//                             {props.players[0].name}
//                         </div>
//                         <div class='bg-amber-300 text-black font-medium font-titlefont  text-[8px] rounded-md'>
//                             <div class='flex items-center justify-center bg-gray-400 pt-[0px]'>{props.players[0].team}</div>
//                             <div class='flex items-center justify-center'>{props.players[0].position}</div>
//                         </div>
//                     </div>

//                 </div>
//                 <div class='w-[32vw] h-[18vh]  rounded-lg bg-slate-700 '>
//                     <div class=' mt-[5px] w-[20vw] h-[10vh] overflow-hidden m-auto rounded-full bg-red-600 flex items-center justify-center shadow-2xl'>
//                         <img src={props.players[1].image} class='' />
//                     </div>
//                     <div class='w-[25vw] font-titlefont text-xs font-semibold m-auto '>
//                         <div class='flex items-center justify-center'>
//                             {props.players[0].name}
//                         </div>
//                         <div class='bg-amber-300 text-black font-titlefont font-normal text-[8px] rounded-lg'>
//                             <div class='flex items-center justify-center bg-gray-400 pt-[0px]'>{props.players[1].team}</div>
//                             <div class='flex items-center justify-center'>{props.players[1].position}</div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )

// }


// // import React from 'react';
// // import { useLoaderData } from 'react-router-dom';

// // export function loader() {
// //   const data = [
// //     {
// //       "sport": "Basketball",
// //       "players": [
// //         {
// //           "name": "LeBron James",
// //           "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
// //           "team": "Los Angeles Lakers",
// //           "position": "Forward"
// //         },
// //         {
// //           "name": "Stephen Curry",
// //           "image": "https://i.pinimg.com/736x/cd/4f/59/cd4f590f83a5be0270f373ea2f6247cf.jpg",
// //           "team": "Golden State Warriors",
// //           "position": "Guard"
// //         }
// //       ]
// //     },
// //     {
// //       "sport": "Soccer",
// //       "players": [
// //         {
// //           "name": "Lionel Messi",
// //           "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
// //           "team": "Inter Miami",
// //           "position": "Forward"
// //         },
// //         {
// //           "name": "Cristiano Ronaldo",
// //           "image": "https://i.pinimg.com/736x/cd/4f/59/cd4f590f83a5be0270f373ea2f6247cf.jpg",
// //           "team": "Al Nassr",
// //           "position": "Forward"
// //         }
// //       ]
// //     },
// //     {
// //       "sport": "Tennis",
// //       "players": [
// //         {
// //           "name": "Serena Williams",
// //           "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
// //           "team": "USA",
// //           "position": "Retired"
// //         },
// //         {
// //           "name": "Roger Federer",
// //           "image": "https://i.pinimg.com/736x/cd/4f/59/cd4f590f83a5be0270f373ea2f6247cf.jpg",
// //           "team": "Switzerland",
// //           "position": "Retired"
// //         }
// //       ]
// //     },
// //     // ... (other sport entries)
// //   ];
  
// //   return data;
// // }

// // export default function Council() {
// //   const data = useLoaderData();
// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <h1 className="text-3xl font-bold text-center mb-8">Sports Council</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {data.map((sport, index) => (
// //           <Card key={index} {...sport} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // function Card(props) {
// //   return (
// //     <div className="bg-slate-800 text-white rounded-lg shadow-2xl overflow-hidden">
// //       <div className="font-titlefont font-extrabold text-xl text-center py-4 bg-slate-700">
// //         {props.sport}
// //       </div>
// //       <div className="grid grid-cols-2 gap-4 p-4">
// //         {props.players.map((player, index) => (
// //           <PlayerCard key={index} {...player} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // function PlayerCard({ name, image, team, position }) {
// //   return (
// //     <div className="bg-slate-700 rounded-lg p-4 flex flex-col items-center">
// //       <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-xl bg-red-600 flex items-center justify-center mb-4">
// //         <img src={image} alt={name} className="w-full h-full object-cover" />
// //       </div>
// //       <div className="text-center">
// //         <h3 className="font-titlefont font-semibold text-lg mb-2">{name}</h3>
// //         <div className="bg-amber-300 text-black font-medium text-xs rounded-md p-1">
// //           <div className="bg-gray-400 mb-1">{team}</div>
// //           <div>{position}</div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



import React from 'react';
import { useLoaderData } from 'react-router-dom';

export function loader() {
  const data = [
    {
      "sport": "Basketball",
      "players": [
        {
          "name": "LeBron James",
          "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
          "team": "Los Angeles Lakers",
          "position": "Forward"
        },
        {
          "name": "Stephen Curry",
          "image": "https://i.pinimg.com/736x/cd/4f/59/cd4f590f83a5be0270f373ea2f6247cf.jpg",
          "team": "Golden State Warriors",
          "position": "Guard"
        }
      ]
    },
    {
      "sport": "Soccer",
      "players": [
        {
          "name": "Lionel Messi",
          "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
          "team": "Inter Miami",
          "position": "Forward"
        },
        {
          "name": "Cristiano Ronaldo",
          "image": "https://i.pinimg.com/736x/cd/4f/59/cd4f590f83a5be0270f373ea2f6247cf.jpg",
          "team": "Al Nassr",
          "position": "Forward"
        }
      ]
    },
    {
      "sport": "Tennis",
      "players": [
        {
          "name": "Serena Williams",
          "image": "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
          "team": "USA",
          "position": "Retired"
        },
        {
          "name": "Roger Federer",
          "image": "https://i.pinimg.com/736x/cd/4f/59/cd4f590f83a5be0270f373ea2f6247cf.jpg",
          "team": "Switzerland",
          "position": "Retired"
        }
      ]
    },
    // Additional sports data...
  ];
  
  return data;
}

export default function Council() {
  const data = useLoaderData();
  return (
    <div className="m-auto flex-col items-stretch mb-[50px] sm:container sm:mx-auto sm:px-4 sm:py-8 font-titlefont">
      <h1 className="text-3xl font-bold text-center mb-8 hidden sm:block">Sports Council 2024-35</h1>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
        {data.map((sport, index) => (
          <Card key={index} {...sport} />
        ))}
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="bg-slate-800 text-white h-[25vh] w-[85vw] pt-[2px] mt-[20px] m-auto rounded-lg shadow-2xl sm:h-auto sm:w-auto sm:mt-0">
      <div className="font-titlefont font-extrabold flex items-center justify-center tracking-wider mt-[10px] sm:text-xl sm:py-4 sm:bg-slate-700">
        {props.sport}
      </div>
      <div className="flex items-center justify-evenly mt-[5px] ml-[10px] mr-[10px] rounded-lg pt-[5px] pb-[5px] sm:grid sm:grid-cols-2 sm:gap-4 sm:p-4">
        {props.players.map((player, index) => (
          <PlayerCard key={index} {...player} />
        ))}
      </div>
    </div>
  );
}

function PlayerCard({ name, image, team, position }) {
  return (
    <div className="w-[32vw] h-[18vh] ml-[5px] bg-slate-700 rounded-lg sm:w-auto sm:h-auto sm:ml-0 sm:p-4 sm:flex sm:flex-col sm:items-center">
      <div className="mt-[5px] w-[20vw] h-[10vh] overflow-hidden m-auto rounded-full shadow-2xl bg-red-600 flex items-center justify-center sm:w-24 sm:h-24 md:w-32 md:h-32 sm:mb-4">
        <img src={image} alt={name} className="sm:w-full sm:h-full sm:object-cover" />
      </div>
      <div className="w-[25vw] font-titlefont text-xs font-semibold m-auto sm:w-full sm:text-center">
        <div className="flex items-center justify-center sm:text-base sm:mb-2">{name}</div>
        <div className="bg-amber-300 text-black font-medium font-titlefont text-[8px] rounded-md sm:text-xs sm:p-1">
          <div className="flex items-center justify-center bg-gray-400 pt-[0px] sm:mb-1">{team}</div>
          <div className="flex items-center justify-center">{position}</div>
        </div>
      </div>
    </div>
  );
}