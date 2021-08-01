// 햄버거 바 아이콘 선택자
const menuOpenEl = document.getElementById('btn--open')
// 닫는 아이콘 선택자
const menuCloseEl = document.getElementById('btn--close')
// 사이드 네비 선택
const sideMenuEl = document.getElementById('side_menu')


// 햄버거 바 아이콘에 클릭 이벤트가 발생하면,
menuOpenEl.addEventListener("click", function() {
    // 햄버거 바 아이콘을 보이지 않게 처리하고,
    menuOpenEl.style.display = 'none'
    // 닫는 아이콘은 보이게 처리합니다
    menuCloseEl.style.display = 'block'
    sideMenuEl.style.transform = 'translateX(0%)'
})

// 닫는 아이콘에 클릭 이벤트가 발생하면,
menuCloseEl.addEventListener("click", function() {
    // 햄버거 바 아이콘을 보이게 처리하고,
    menuOpenEl.style.display = 'block'
    // 닫는 아이콘은 보이지 않게 처리합니다
    menuCloseEl.style.display = 'none'
    sideMenuEl.style.transform = 'translateX(-100%)'
})


// add버튼 누르면 추가
var button = document.getElementById('btnAdd');
var input = document.getElementById('text_basic');
var list = document.getElementById('list');

button.addEventListener('click', clickButton);

function clickButton() {
    var temp = document.createElement('li');
    temp.innerHTML = input.value;
    list.appendChild(temp);
    
};




// li 삭제버튼
var cnt = 1;

function clickButton() {
  var temp = document.createElement('li');
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "li"+cnt);
  temp.innerHTML = input.value;
  temp.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>삭제</button>"; 
  temp.innerHTML += "<button style='float: left;' class='btn btn-outline-first' type = 'button' onclick='click("+cnt+")'>v</button>";
  list.appendChild(temp);
  cnt++;
}


function remove(cnt) {
    var li = document.getElementById('li'+cnt);
    list.removeChild(li);
}

