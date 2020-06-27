const path = "/users/download/index.html"

let isHtml = function (path){
    let neededEnd = '.html';
    let neededPath = path.slice(-5);

    if (neededPath === neededEnd) {
        return true 
    } else {
        return false;
    }
}
      console.log(isHtml(path))