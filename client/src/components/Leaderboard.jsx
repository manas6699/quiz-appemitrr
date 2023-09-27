import React from 'react';
import { useStateContext } from '../context';
const Leaderboard = () => {
  // Sample leaderboard data
  const { user, getUser } = useStateContext();
  const leaderboardData = [
    { name: "Manas Baroi", score: 100 },
    { name: 'Player 2', score: 90 },
    { name: 'Player 3', score: 80 },
    { name: 'Player 4', score: 70 },
    { name: 'Player 5', score: 60 },
  ];


  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Leaderboard</h1>
      <div className="bg-blue-200 rounded-xl p-4">
        <table className="min-w-full border-collapse table-auto">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-left">Rank</th>
              <th className="py-2 px-4 bg-gray-200 text-left">Name</th>
              <th className="py-2 px-4 bg-gray-200 text-left">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((player, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="py-2 px-4 text-left">{index + 1}</td>
                <td className="py-2 px-4 text-left">{player.name}</td>
                <td className="py-2 px-4 text-left">{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
