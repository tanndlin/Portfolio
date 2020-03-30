function removeFromArray(arr, elt){
    for (var i = arr.length-1; i >= 0; i--){
      if(arr[i] == elt){
        arr.splice(i,1);
      }
    }
  }
  
  function hueristic(a,b){
    //Euclidian Distance
    // var d = dist(a.i,a.j,b.i,b.j);
  
    //Taxi Cab Distance
    var d = abs(a.i - b.i) + abs(a.j - b.j);
  
    return d;
  }
  
  function solve(){
    // background(51);
  
    while(openSet.length > 0){
        // console.log(openSet);
  
      var winner = 0;
      for(var i = 0; i < openSet.length; i++){
        if(openSet[i].f < openSet[winner].f){
          winner = i;
        }
      }
      current = openSet[winner];
  
      path = [];
      var temp = current;
      path.push(temp);
      while(temp.previous){
        path.push(temp.previous);
        temp = temp.previous;
      }
  
      if(current == end){
  
        // // if(path[0].g <= (cols * rows) / 2){
        // if(path[0].g < 0){
        //   window.location.reload(false);
        // } else {
          console.log(path);
        // }
  
        beginShape();
        noFill();
        stroke(255, 0, 200);
        strokeWeight(size/5);
        for(var i = 0; i < path.length; i++){
          vertex(path[i].i*size + size/2, path[i].j*size + size/2);
        }
        endShape();
  
        return;
      }
  
      removeFromArray(openSet, current);
      closedSet.push(current);
  
      var neighbors = current.routes;
    //   console.log(neighbors);
      for(var i = 0 ; i < neighbors.length; i++){
        var neighbor = neighbors[i];
  
  
        if(!closedSet.includes(neighbor)){
          var tempG = current.g+1;
  
          var newPath = false;
  
          if(openSet.includes(neighbor)) {
            if(tempG < neighbor.g) {
              neighbor.g = tempG;
              newPath = true;
            }
          } else {
            neighbor.g = tempG;
            newPath = true;
            openSet.push(neighbor);
          }
  
          if(newPath){
            neighbor.h = hueristic(neighbor,end);
            neighbor.f = neighbor.g + neighbor.h;
            neighbor.previous = current;
          }
  
        }
      }
  
    }
  
    // solve();
  
  }
  

  