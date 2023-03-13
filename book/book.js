// API : Application Programming Interface
// ㄴ Open API : 다양한 기업에서 공익의 목적 또는 다른 이유로 무료로 인터페이스를 이용할 수 있게 제공
// ㄴ Private API : 유료

// Open API
// ㄴ 공공 데이터 포탈
// ㄴ 카카오 개발자 센터
// ㄴ 네이버 개발자 센터
// ...

// ajax
// ㄴ비동기 방식으로 페이지의 일부 정보를 갱신할 수 있는 기술
// fetch() 로 구현가능 (일부  브라우저 또는 하위 버전의 스크립트에서 호환 X)
// -> jQuery.ajax() 메소드를 활용


const query = document.querySelector(".query");
const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("submit", e => {
  e.preventDefault();
  if (query !== "") {
    searchRequest(query.value);
  }
});

function searchRequest(query) {

  $.ajax({
    url: `https://dapi.kakao.com/v3/search/book?query=${query}&page=1&size=50&target=title`,
    method: "GET",
    timeout: 0,
    headers: {
      Authorization: "KakaoAK c890a90b2d6b9d90b7087aea36fb4639",
    },
  })
    .done((response) => {
      $(".container").empty();
      
      
      for (let i = 0; i < response.documents.length; i++) {
        const container = document.querySelector(".container");
        const div = document.createElement("div");
        div.setAttribute("class", "box");
        const img = document.createElement("img");
        img.setAttribute("class", "book-img");
        const h4 = document.createElement("h4");
        h4.setAttribute("class", "book-title");
        const p1 = document.createElement("p");
        p1.setAttribute("class", "book-price");
        const p2 = document.createElement("p");
        p2.setAttribute("class", "book-info");
        const a = document.createElement("a");
        a.setAttribute("href",`${response.documents[i].url}`)


        img.setAttribute("src", `${response.documents[i].thumbnail}`);
        h4.innerText = `${response.documents[i].title}`;
        p1.innerText = `${response.documents[i].price}원`;
        p2.innerText = `${response.documents[i].authors}|${response.documents[i].publisher}`;
        
        
        if(response.documents[i].thumbnail === ""){
          continue;
        }
        
        a.append(img);
        div.append(a);
        div.append(h4);
        div.append(p1);
        div.append(p2);
        container.append(div);
      }

      // container 안에 
      /*
      <div class="result-card">
          <img class="book-img" src="/book.png">
          <h4 class="book-title">도서제목</h4>
          <p class="book-description">도서상세정보</p>
          <span class="book-price">1000원</span>
          <p class="book-info">
              <span class="author">저자</span>|<span class="publisher">출판사</span>
          </p>
      </div>
      */

      // 구성한 result-card 요소를 추가
      console.log(response);
    });
}