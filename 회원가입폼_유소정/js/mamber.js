function joinCheck(){
    const f = document.member;

    const userId = document.getElementById("id");
    const userPw = document.getElementById("pw");
    const userPw2 = document.getElementById("pw2");
    const userName = document.getElementById("name");
    const userAddress = document.getElementById("address");
    const userPhone = document.getElementById("phone");
    const userEmail = document.getElementById("email");

    // 1. 아이디 공백 검사
    if(userId.value.trim() === ""){
        alert("아이디를 입력하세요.");
        userId.focus();
        return false;
    }

    // 2. 아이디 형식 검사
    const idReg = /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{6,10}$/;
    if(!idReg.test(userId.value)){
        alert("아이디는 영문소문자와 숫자를 포함한 4~8자로 입력하세요.");
        userId.focus();
        return false;
    }

    // 3. 비밀번호 공백 검사
    if(userPw.value.trim() === ""){
        alert("비밀번호를 입력하세요.");
        userPw.focus();
        return false;
    }

    // 4. 비밀번호 형식 검사
    const pwReg = /^(?=.{10,16}$)(?:(?=.*[A-Za-z])(?=.*[0-9])|(?=.*[A-Za-z])(?=.*[!@#$%^*+=-])|(?=.*[0-9])(?=.*[!@#$%^*+=-])).*$/;
    if(!pwReg.test(userPw.value)){
        alert("비밀번호는 영문, 숫자, 특수문자 중 2가지 이상 조합하여 10~16자로 입력하세요.");
        userPw.focus();
        return false;
    }

    // 5. 비밀번호 확인 공백 검사
    if(userPw2.value.trim() === ""){
        alert("비밀번호 확인에 비밀번호를 입력하세요.");
        userPw2.focus();
        return false;
    }

    // 6. 비밀번호 일치 검사
    if(userPw.value !== userPw2.value){
        alert("비밀번호가 일치하지 않습니다.");
        userPw2.focus();
        return false;
    }

    // 7. 이름 검사
    if(userName.value.trim() === ""){
        alert("이름을 입력하세요.");
        userName.focus();
        return false;
    }

    // 8. 주소 검사
    if(userAddress.value.trim() === ""){
        alert("주소를 입력하세요.");
        userAddress.focus();
        return false;
    }

    // 9. 전화번호 검사
    if(userPhone.value.trim() === ""){
        alert("전화번호를 입력하세요.");
        userPhone.focus();
        return false;
    }

    const phoneValue = userPhone.value.replace(/-/g, "");
    const phoneReg = /^\d{10,11}$/;
    if(!phoneReg.test(phoneValue)){
        alert("전화번호는 숫자만 10~11자리로 입력하세요.");
        userPhone.focus();
        return false;
    }

    // 10. 이메일 검사
    if(userEmail.value.trim() === ""){
        alert("이메일을 입력하세요.");
        userEmail.focus();
        return false;
    }

    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailReg.test(userEmail.value)){
        alert("올바른 이메일 형식으로 입력하세요.");
        userEmail.focus();
        return false;
    }

    // 11. 필수 약관 검사
    const agree1 = document.getElementById("agree1");
    const agree2 = document.getElementById("agree2");

    if(!agree1.checked){
        alert("(필수) 이용약관 동의에 체크하세요.");
        agree1.focus();
        return false;
    }

    if(!agree2.checked){
        alert("(필수) 개인정보 수집 및 이용 동의에 체크하세요.");
        agree2.focus();
        return false;
    }

    alert("회원가입이 완료되었습니다.");
    return false;
}