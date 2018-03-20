// submitBtn取得する
const submit = document.getElementById('submit');
// クリックリスナーの登録
submit.addEventListener("click", function(e) {
  //textFormのvalueを取得し、githubのAPIサーバーにtextFormを入れて、スターの数順に表示するurlをとる
  const textFormVal = document.getElementById("textForm").value;
  const url = 'https://api.github.com/search/repositories?q=' + textFormVal + '&sort=stars';
  fetch(url, {
    method: 'GET'
    //通信ができたら
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {
    console.log('Success:', response);
    //containerというhtmlの場所を取得
    const container = document.getElementById('container');
    //tagというものを作っておく
    let tags = '';
    //複数表示させる
    for(var i=0; i< response.items.length; i++){
      const reposityUrl = response.items[i].clone_url;
      const userImageUrl = response.items[i].owner.avatar_url;
      const userImage = '<div>'+`<image class="user_image" src = ${userImageUrl}>`+'</div>';
      const userName = '<div class="owner_name">' + response.items[i].owner.login + '</div>';
      const urlLink = `<a href=${reposityUrl}> ${reposityUrl}</a>`;
      const starCount = `<div class="star">★：${response.items[i].stargazers_count}</div>`;
      tags += userImage + userName + urlLink + starCount;
    }
    container.innerHTML = tags;
  });
});

// // console.log("hello world");
// debugger
//
//''で囲むと文字列として認識してしまうからその中に変数を入れると変数も文字列として認識されてしまう
//solution→``で囲み、変数部分を${}で囲む
