let date = new Date();

const renderCalender = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  document.querySelector('.year-month').textContent = `${viewYear}/ ${viewMonth + 1}월`;

  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
                      ? 'this'
                      : 'other';
    dates[i] = `<div class="date"><span class=${condition}>${date}</span></div>`;
  });

  document.querySelector('.dates').innerHTML = dates.join('');

  const today = new Date();
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }
};

renderCalender();

const prevMonth = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalender();
};

const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalender();
};

const goToday = () => {
  date = new Date();
  renderCalender();
};


// 내가한거

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
