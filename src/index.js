module.exports = function check(str, bracketsConfig) {
  let a = bracketsConfig[0][0];
  let b = bracketsConfig[0][1];
  let strArr = str.split('');
  let countA = 0;
  let countB = 0;
  for (let item of strArr){
      if (item == a){
        countA++;
      };
      if (item == b){
        countB++;
      }
  }
  if (countA == countB){
      return true;
  }
  else{
      return false;
  }
}
