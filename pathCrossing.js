var isPathCrossing = function(path) {
    // input is a string
    // output is a boolean true or false
    
    // set origin to 0/x,0/y and add to places visited
    let placesVisited = {'0,0': true};
    let coords = [0,0];
    // iterate through my string and modify my origin coordinates every iteration
    let splitPath = path.split('')
    for (let i=0; i<splitPath.length; i++) {
        if (splitPath[i] === 'N') {
            coords[1] += 1; 
        } else if (splitPath[i] === 'E'){     
                coords[0] += 1;
        } else if (splitPath[i] === 'S') {
            coords[1] -= 1;
        } else {
            coords[0] -= 1;
        }
        if (placesVisited[coords]) return true;
        placesVisited[coords] = true; 
    }
    return false;
        // add each modification to places visited
    // each iteration, check places visited to see if newest coordinate already exists
        // if exists, return true
        // if not, add to places visited and repeat until end of string
    //if end of string, return false
    
    
};
