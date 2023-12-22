const utils = {}
utils.getRandomNumber = (max) => {
    return Math.floor(Math.random() * max * 10000);
  };

  utils.response = (message)=>{
    return ({
     message,
      
    });
  }

  module.exports = utils