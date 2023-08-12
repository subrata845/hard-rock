// fetch(`https://api.lyrics.ovh/suggest/sumer`)
// .then(res=>res.json())
// .then(data=>
//     {
//         const detail=document.getElementById('user-detail');
//         // detail.innerHTML=`<h1>${data.name}</h1>
//         // <h4>${data.email}</h4>
//         // <p>${data.phone}</p>`
//         console.log(data);

//     })
document.getElementById('search_btn').addEventListener('click',function()
        {
            const searchText=document.getElementById('search_txt').value;
            fetch('https://api.lyrics.ovh/suggest/sumer')
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
            // data=data.slice(0,userCount);
            // const userContainer=document.getElementById('users');
            // userContainer.innerHTML="";
            // for (let i = 0; i < data.length; i++) {
            //     const user = data[i];
            //     console.log(user);
            //     const p=document.createElement('p');
            //     p.innerHTML=  `
            //     <p class="user"> Name: <strong>${user.name}</strong> <button onclick="getUserDetails(${user.id})"> Details me</button> </p>`;
            //     userContainer.appendChild(p);
                
            //}
        });
        })

//     var request = new XMLHttpRequest();

// request.open('GET', 'https://private-anon-ccec2764c6-lyricsovh.apiary-mock.com/v1/artist/title');

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };

// request.send();