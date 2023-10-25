import React, {useState, useEffect} from 'react'


const GenTransaction = () => {
const [randomCharacters, setRandomCharacters] = useState(' ')

const s1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
"W", "X", "Y", "Z"]

const s2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
"k", "l", "m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w",
"x", "y", "z"]

let x = Math.floor((Math.random() * 1000) + 25);
let y = Math.floor((Math.random() * 100) + 15);

useEffect(() => {
    // Function to generate random characters
    const generateRandomCharacters = () => {
      const getRandomChars = () => {
        const uniqueChars = new Set();
        while (uniqueChars.size < 2) {
          const randomIndex = Math.floor(Math.random() * s1.length);
          uniqueChars.add(s1[randomIndex]);
        }
        return Array.from(uniqueChars).join('');
      };

      const getRandomCs = () => {
        const uniqueChars = new Set();
        while (uniqueChars.size < 4) {
          const randomIndex1 = Math.floor(Math.random() * s2.length);
          uniqueChars.add(s2[randomIndex1]);
        }
        return Array.from(uniqueChars).join('');
      };

      const randomChars = getRandomChars();
      const randomCs = getRandomCs();
      const generatedRandomCharacters = randomChars + x + randomCs + y;
      setRandomCharacters(generatedRandomCharacters);
    };

    generateRandomCharacters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // No dependency array



  return (
    <div>{randomCharacters}</div>
  )
}

export default GenTransaction




