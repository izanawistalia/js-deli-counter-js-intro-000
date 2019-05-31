function takeANumber( arr, name){

  for(let i=0; i<arr.length ; ++i ){
      if(name === arr[i]){
         var sent = `"Welcome, ${name}. You are number ${i+1} in line."`;
         return sent;
  }
  else{
    continue;
  }
  console.log("doesnot exist");
}

}
