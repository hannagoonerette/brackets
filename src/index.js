module.exports = function check(str, bracketsConfig) {
    let strArr = str.split('');
    let count = 0;
    let countA = 0;
    let countB = 0;
      for (let item of strArr){
          for (let i = 0; i<bracketsConfig.length; i++){
              let a = bracketsConfig[i][0];
              let b = bracketsConfig[i][1];
              if (a == b && item == a){
                  count++;
              }
              else{
                  if (item == a){
                      countA++;
                  }
                  if (item == b){
                      countB++;
                  }
              }
          }
      }
      if (count%2 !=0 || countA%2 != 0 || countB%2 != 0){
          return false;
      }
      else{
          return true;
      }
}
