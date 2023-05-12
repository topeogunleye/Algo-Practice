function reverseWords(arr) {
  let n = arr.length;
 let start = 0;
 reverse(arr, 0, n-1);
 for (i=0;i<n;i++) {
   if (arr[i] === " ") {
     reverse(arr,start,i-1);
     start = i+1;
   } else if (i === n-1) {
     reverse(arr,start,n-1);
   }
 }
 return arr;
}

function reverse(arr, start, end) {
 let temp;
 while (end > start) {
   temp = arr[start];
   arr[start] = arr[end];
   arr[end] = temp;
   start++;
   end--;
 };
}

reverseWords([" "," "])