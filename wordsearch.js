// worked with reyna roma and seni cole

const wordSearch = (letters, word) => {
    if (!Array.isArray(letters) || letters.length === 0) {
      return "No word matrix";
    }
  
    const horizontalJoin = letters.map((ls) => ls.join(""));
    const verticalTranspose = letters[0].map((_, colIndex) =>
      letters.map((row) => row[colIndex])
    );
    const verticalJoin = verticalTranspose.map((ls) => ls.join(""));
  
    for (const l of verticalJoin) {
      if (l.includes(word)) return true;
    }
  
    for (const l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    return false;
  };
  
  module.exports = wordSearch;
  