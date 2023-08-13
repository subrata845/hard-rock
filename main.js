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

const searchSong=()=>{
  
      const searchText=document.getElementById('search_txt').value;
      console.log(searchText);
      const url = `https://api.lyrics.ovh/suggest/${searchText}`;
  
fetch(url)
.then(res => res.json())
.then(data => displaySongs(data.data));

}


const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
}

// const displaySong = song =>{
//   setInnerText('title', song.data);
    
// }

const displaySongs = songs => {
  const songContainer = document.getElementById('song-container');
  songContainer.innerHTML = '';
  songs.forEach(song => {
      const songDiv = document.createElement('div');
      songDiv.className = 'single-result row align-items-center my-3 p-3';
      songDiv.innerHTML = `
      <div class="col-md-9">
          <h3 class="lyrics-name">${song.title}</h3>
          <p class="author lead">Album by <span>${song.artist.name}</span></p>
          <audio controls>
              <source src="${song.preview}" type="audio/mpeg">
          </audio>
      </div>
      <div class="col-md-3 text-md-right text-center">
          <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
      </div>
      `;
      songContainer.appendChild(songDiv);
  })
}


const getLyric = async (artist, title) => {
  const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
  try {
      const res = await fetch(url);
      const data = await res.json();
      displayLyrics(data.lyrics);
  }
  catch (error) {
      displayError('Sorry! I failed to load lyrics, Please try again later!!!')
  }
}

const displayLyrics = lyrics => {
  const lyricsDiv = document.getElementById('song-lyrics');
  lyricsDiv.innerText = lyrics;
}

const displayError = error => {
  const errorTag = document.getElementById('error-message');
  errorTag.innerText = error;
}
    
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

