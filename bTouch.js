/*
    boolean = 0 and 1;
    boolean = true and false;
x = 10;
condition is true then  executing the statement
if(x <10){
executing the statement
}
else{
 exectu   
}
*/
function bTouch(movingRect, fixedRect){
    if(fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2&&
      movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2&&
      fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2&&
      movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
       return true;
    }
  
    else{
      return false;
    }
}