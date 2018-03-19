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
      tags += '<div>' + response.items[i].full_name + '</div>';
    }
    elem.innerHTML = tags;
  });
});

// // console.log("hello world");
// memo
// debugger
