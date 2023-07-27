const generateRandomInt = () => {
    return Math.random().toString(16).substring(2, 12);
  };
  
  module.exports = {
    generateRandomInt,
  };