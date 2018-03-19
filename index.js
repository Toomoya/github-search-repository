// // console.log("hello world");
var url = 'https://api.github.com/search/repositories?q=ruby&sort=stars';

fetch(url, {
  method: 'GET'
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => {
  console.log('Success:', response);
  elem = document.getElementById('container');
  elem.innerHTML = response.items[0].full_name;
});

// memo
// debugger
