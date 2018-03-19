// // console.log("hello world");
var url = 'https://api.github.com/search/repositories?q=ruby&sort=stars';

fetch(url, {
  method: 'GET'
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => {
  console.log('Success:', response);
  elem = document.getElementById('container');
  let tags = '';
  for(var i=0; i< response.items.length; i++){
    tags += '<div>' + response.items[i].full_name + '</div>';
  }
  elem.innerHTML = tags;
});

// memo
// debugger
