button.addEventListener("click", function(e) {
  var textForm = document.getElementById("textForm").value;
  var url = 'https://api.github.com/search/repositories?q=' + textForm + '&sort=stars';
  fetch(url, {
    method: 'GET'
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {
    console.log('Success:', response);
    var button = document.getElementById("button");
    elem = document.getElementById('container');
    let tags = '';
    for(var i=0; i< response.items.length; i++){
      const url = response.items[i].clone_url;
      tags += '<div class="owner_name">' + response.items[i].owner.login + '</div>' + `<a href=${url}>${url}</a>`+ `<div class="star">スター数：${response.items[i].stargazers_count}</div>`;
    }
    elem.innerHTML = tags;
  });
});

// // console.log("hello world");
// memo
// debugger
//
