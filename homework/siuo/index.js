function isPolindrome (str) {
   const someStr = str.toString();
   let i = 0;
   let j = someStr.length - 1;
   let yesOrNo = true;
   for (let l = 0; l <= someStr.length / 2; l++) {
      if (someStr[i] !== someStr[j]) {
         yesOrNo = false;
      }
      i++;
      j--;
   }
   return yesOrNo;
}

console.log(isPolindrome('potop'));
