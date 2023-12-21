const utils = {}
utils.getRandomNumber = (max) => {
    return Math.floor(Math.random() * max * 10000);
  };

  utils.response = (statusCode,message)=>{
    return {
      body: JSON.stringify ({statusCode}),
      body: JSON.stringify({ message }),
      
    };
  }

  module.exports = utils