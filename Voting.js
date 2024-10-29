// import React, { useState } from 'react';

// const VotingSystem = () => {
//   // Initialize vote counts as an array with 0 votes for each option
//   const [votes, setVotes] = useState([0, 0, 0]); // 3 options, initially all with 0 votes

//   // Handle the vote increment for a specific option
//   const handleVote = (index) => {
//     // Copy the current vote counts array
//     const newVotes = [...votes];
//     // Increment the vote count for the selected option
//     newVotes[index]+=1;
//     // Update the votes state with the new array
//     setVotes(newVotes);
//   };

//   return (
//     <div>
//       <h2>Vote for Your Favorite Option:</h2>
//       <div>
//         {['Option 1', 'Option 2', 'Option 3'].map((option, index) => (
//           <div key={index}>
//             <button onClick={() => handleVote(index)}>{option}</button>
//             <p>Votes: {votes[index]}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VotingSystem;

import React, { useState } from 'react';

function Voting() {
  const [vote, setVote] = useState([0, 0, 0]);
  // List of options for the voting system
  // const options = ["Bjp", "Congress", "JDS"];

  // Function to handle voting for a specific option
  const handleVote = (index) => {
    const newVotes = [...vote];
    newVotes[index] += 1;
    setVote(newVotes);
  };

  return (
    <div className='opti'>
      <h1>Vote for your Favorite Option</h1>
      <div className="opt">
      <table  id="tab"style={{ border: "2px solid black", padding: "10px" }}>
          <thead>
            <tr>
              <th>SlNo</th>
              <th>VoterName</th>
              <th>Counting</th>
              <th>Buttons</th>
            </tr>
          </thead>
          {/* <tbody>
            {options.map((option, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{option}</td>
                <td><input value={vote[index]} readOnly /></td>
                <td><button onClick={() => handleVote(index)}>Vote</button></td>
              </tr>
            ))}
          </tbody> */}
          <tbody>
            <tr>
              <td>1</td>
              <td>Bjp</td>
              <td><input id="inp" value={vote[0]} readOnly /></td>
              <td><button id="bt" onClick={() => handleVote(0)}>Vote</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Congress</td>
              <td><input id="inp" value={vote[1]} readOnly /></td>
              <td><button id="bt" onClick={() => handleVote(1)}>Vote</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>JDS</td>
              <td><input id="inp" value={vote[2]} readOnly /></td>
              <td><button id="bt" onClick={() => handleVote(2)}>Vote</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Voting;
