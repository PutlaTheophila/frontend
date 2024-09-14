import react from "react";
import { useLoaderData } from "react-router-dom";

import React from 'react'

const sportsData = [
  {
    sport: "Football",
    team: "Red Dragons FC",
    player: "Alex Johnson",
    stat: "25 goals this season"
  },
  {
    sport: "Basketball",
    team: "Blue Hawks",
    player: "Sarah Williams",
    stat: "10.5 assists per game"
  },
  {
    sport: "Tennis",
    team: "Green Valley Tennis Club",
    player: "Michael Chang",
    stat: "World Rank #5"
  },
  {
    sport: "Swimming",
    team: "Aqua Dolphins",
    player: "Emily Waters",
    stat: "3 Olympic gold medals"
  }
]

export default function Nso() {
  return (
    <div className="w-full sm:w-[50vw] mx-auto mt-4 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sportsData.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-slate-900 text-white p-4">
              <h2 className="text-xl font-bold">{item.sport}</h2>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.team}</h3>
              <p className="text-gray-600 mb-2">Star Player: {item.player}</p>
              <p className="text-sm text-gray-500">Key Stat: {item.stat}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}