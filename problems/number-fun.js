const returnsThree = () => 3;

const reciprocal = (num) => {
    if(num < 1 || num > 1000000) {
        throw new TypeError("Number must be between 1 and 1000000")
        
    } else{
        
        return 1/num

    }   
   
}


module.exports = { returnsThree, reciprocal };