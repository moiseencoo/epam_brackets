module.exports = function check(str, bracketsConfig) {
  // your solution 

  let arr = str.split('');
  let checkComplete;
  let arr_index = 0;

  while(checkComplete == undefined) {

    let pair = [
      arr[arr_index],
      arr[arr_index + 1]
    ];
    
    if (pair[1] == undefined) {
      checkComplete = false;
    }


    for (let i = 0; i < bracketsConfig.length; i++) {

      if (bracketsConfig[i][0] == pair[0] && bracketsConfig[i][1] == pair[1]) {

         arr.splice(arr_index, 2);

         if(arr.length == 0) {
           checkComplete = true;
         } 

        if (arr_index >= 1) {
          arr_index = arr_index - 2;
        } else if (arr_index == 0) {
          arr_index = arr_index - 1;
        }   

         break;
      }

    }

    arr_index++;

  }

  return checkComplete;

}

