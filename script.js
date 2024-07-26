//
// 배경 이미지 =======================================================

//랜덤하게 출력될 사진이 담긴 배열
const backgroundImages = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
  "img/img6.jpg",
  "img/img7.jpg",
  "img/img8.jpg",
];

//사진을 랜덤으로 출력해주는 함수
function setRandomBackgroundImage() {
  const randomImage =
    backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
  document.body.style.backgroundImage = `url('${randomImage}')`;
}

// 페이지 로드 시 랜덤 배경 이미지 설정
window.onload = function () {
  setRandomBackgroundImage();
};

//
//  현재 시간  =======================================================

let time = document.getElementById("time");

function time0(a) {
  return a < 10 ? "0" + a : a;
  s;
}
const count = setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let Minute = date.getMinutes();
  let second = date.getSeconds();

  time.innerHTML = `${time0(hour)} : ${time0(Minute)} `;
  if (second >= 60) {
    clearInterval(count);
  }
}, 1000);

//
//  인사말  =======================================================

let name_input = document.getElementById("name_input");
let greet = document.getElementById("greet");
let nameInput = ""; // 사용자가 입력한 이름을 담을 변수생성

//  시간에 따른 인사 함수
function setGreeting() {
  date = new Date();
  hour = date.getHours();

  if (hour < 12) {
    return (greet.innerHTML = `Good mornig!, ${nameInput}`);
  } else if (hour >= 12 && hour < 18) {
    return (greet.innerHTML = `Good afternon!, ${nameInput}`);
  } else {
    return (greet.innerHTML = `Good evening!, ${nameInput}`);
  }
}

//이름입력후 화면전환 함수
function switchScreen() {
  document.getElementById("welcome_screen").classList.add("hidden");
  document.getElementById("main_screen").classList.remove("hidden");
}

// 이름 입력후 Enter키 이벤트 추가
name_input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    nameInput = name_input.value.trim(); // trim 앞뒤 공백 제거
    console.log(nameInput);
    if (nameInput === "") {
      alert("이름을 입력해주세요");
    } else {
      setGreeting();
      switchScreen();
    }
  }
});

// 인사말 slice

//
//  명언  =======================================================

let outputText = document.getElementById("text");

const text = [
  "우리가 두려워해야 할 유일한 것은 두려움 그 자체입니다. - 프랭클린 D. 루즈벨트",
  "세 마디로 내가 인생에 대해 배운 모든 것을 요약할 수 있어: 삶은 계속된다. - 로버트 프로스트",
  "진정한 지혜는 네가 아무 것도 모른다는 것을 알 때 나타납니다. - 소크라테스",
  "네 자신이 되어라; 다른 사람들은 이미 누군가입니다. - 오스카 와일드",
  "인생은 네가 다른 계획을 세우는 동안 일어나는 것입니다. - 존 레논",
  "계속해서 너를 다른 무언가로 만들려는 세상에서 자신을 유지하는 것이 가장 큰 성취입니다. - 랄프 월도 에머슨",
  "미래는 자신의 꿈의 아름다움을 믿는 사람들에게 속해있습니다. - 엘리노어 루즈벨트",
  "성공은 최종적이지 않고, 실패는 치명적이지 않습니다: 계속하는 용기가 중요합니다. - 윈스턴 처칠",
  "살아가는 데 있어 가장 큰 영광은 결코 넘어지지 않는 데가 아니라 넘어질 때마다 일어나는 데 있습니다. - 넬슨 만델라",
  "살아가는 것은 세상에서 가장 드문 일입니다. 대부분의 사람들은 존재만 하죠. - 오스카 와일드",
];
const randomText = text[Math.floor(Math.random() * text.length)];
console.log(randomText);
outputText.innerHTML = randomText;

//
//  to do list  =======================================================

function addTodo() {
  let ul = document.getElementById("ul");
  const todoText = todo_input.value.trim(); // trim 앞뒤 공백 제거
  if (todoText) {
    const li = document.createElement("li");
    li.innerText = todoText;
    ul.appendChild(li);
    todo_input.value = ""; // 입력 필드 초기화
  } else {
    alert("할 일을 입력해주세요.");
  }
}

// To-Do 리스트 삭제 함수
function removeTodo(event) {
  event.target.remove();
}

// todo 입력후 Enter키 이벤트 추가
todo_input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

document.getElementById("ul").addEventListener("click", removeTodo);
