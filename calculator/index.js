//immediately invoked function
(function(){
  let buttons= document.querySelectorAll(".btn");
  let screen= document.querySelector(".screen");
  let equal= document.querySelector(".equal");
  let clear = document.querySelector(".clear");

  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      let value = e.target.dataset.num;
      screen.value += value;

    })
  });
   equal.addEventListener('click', function(){
    if (screen.value === ''){
     screen.value= 'please enter values';
    }else {
     let answer= eval(screen.value);
     screen.value= answer;
    }
   })
   clear.addEventListener('click',function(){
    screen.value='';
   } )
})();