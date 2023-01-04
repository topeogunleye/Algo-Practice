function meetingPlanner(slotsA, slotsB, dur) {
 
  // [[10, 50], [60, 120], [140, 210]]
  let result = []
  for(let i = 0; i < slotsA.length; i++){
    for( let j = 0; j <slotsB.length; j++ ){
      const min = Math.max(slotsA[i][0],slotsB[j][0] );
      console.log(min)
      const max = Math.min(slotsA[i][1],slotsB[j][1] );
      console.log(max)

     if(dur  <= (max - min)){
       result = [min , (min+dur)]
     } 
      
    }
  }
  
  return result 
}

meetingPlanner([[6,12]], [[2,11]], 5)
