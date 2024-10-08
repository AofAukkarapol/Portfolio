window.onload = pageLoad;
function pageLoad(){
	document.getElementById("myRegister").onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย

    let errorMsg = document.getElementById("errormsg");
    errorMsg.innerHTML = "";

    let firstname = document.forms["myRegister"]["firstname"].value;
    let lastname = document.forms["myRegister"]["lastname"].value;
    let gender = document.forms["myRegister"]["gender"].value;
    let bday = document.forms["myRegister"]["bday"].value;
    let email = document.forms["myRegister"]["email"].value;
    let username = document.forms["myRegister"]["username"].value;
    let passwords = document.forms["myRegister"]["password"]; // ทั้งสองช่องจะอยู่ในอาเรย์
    let password1 = passwords[0].value;
    let password2 = passwords[1].value;
    

    // ตรวจสอบว่ากรอกข้อมูลครบหรือไม่
    if (firstname.trim() === "" || lastname.trim() === "" || gender.trim() === "" || bday.trim() === "" || email.trim() === "" || username.trim() === "") {
        errorMsg.innerHTML = "Please fill all the required fields.";
        return false;
    }

    // ตรวจสอบว่ารหัสผ่านตรงกันหรือไม่
    if (password1 !== password2) {
        errorMsg.innerHTML = "Passwords do not match!";
        return false;
    }
    return true;
}