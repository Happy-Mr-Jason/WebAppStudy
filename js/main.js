//$ jQuery라이브러리를 사용하겠다 하는 표시
//.on event를 연결하겠다.
//문자열을 '' "" 모두 허용한다.
//function 함수명(){명령} 메서드(함수)를 만들겠다. 함수명이 있으면 선언적함수. 함수명이 없으면 익명적함수.
//var 변수선언 형추론(값에 따라 변수의 타입이 바뀐다.)
$(window).on('orientationchange', function () {
	var output = '<h1>폰의 현재 방향</h1>';
	//smartphone vertical = 0 horizental = -90(오른쪽회전후 수평)
	switch(window.orientation){
		case 0:
			output += '<h2>폰을 수직으로 세우셨군요<h2>';
		break;
		case -90:
			output += '<h2>폰을 오른쪽으로 돌려서 수평이 되셨군요</h2>';
		break;
		case 90:
			output += '<h2>폰을 왼쪽으로 돌려서 수평이 되셨군요</h2>';
		break;
	}
//html() 현재 문자열을 html로 인식해서 body에 입력해 주라는 명령
	$('body').html(output);
});
