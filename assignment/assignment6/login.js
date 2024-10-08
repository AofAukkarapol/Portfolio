window.onload = loginLoad;
function loginLoad() {
	document.getElementById("myLogin").onsubmit = checkLogin;

	const urlParams = new URLSearchParams(window.location.search);
    document.correctUsername = urlParams.get('username');
    document.correctPassword = urlParams.get('password');
}

function checkLogin() {
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย

	let form = document.forms["myLogin"];
	let username = document.forms["myLogin"]["username"].value;
	let password = document.forms["myLogin"]["password"].value;


	let correctUsername = document.correctUsername;
    let correctPassword = document.correctPassword;

	if (username === correctUsername && password === correctPassword) {
		alert("เข้าสู่ระบบสำเร็จ!");
		return true;
	}
	else {
		alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่");
		return false; // ถ้าข้อมูลไม่ถูกต้อง ไม่ให้ส่งฟอร์ม
	}
}