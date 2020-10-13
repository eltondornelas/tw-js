var myReq = new XMLHttpRequest();
myReq.onload = function(){
    console.log(JSON.parse(this.responseText));
}

myReq.open('get', 'https://api.github.com/search/repositories?q=javascript', true);
myReq.send();

