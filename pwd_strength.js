document.addEventListener("input", function(e){
    if(!e.target.classList.contains("pwd-input")) return;

    let pwd = e.target.value;
    let strengthDiv = document.getElementById(e.target.id + "_strength");

    let strength = 0;
    if(pwd.length >= 8) strength++;
    if(/[A-Z]/.test(pwd)) strength++;
    if(/[0-9]/.test(pwd)) strength++;
    if(/[^A-Za-z0-9]/.test(pwd)) strength++;

    if(strength <= 1){
        strengthDiv.innerHTML = "Weak ❌";
        strengthDiv.style.color = "red";
    }
    else if(strength == 2 || strength == 3){
        strengthDiv.innerHTML = "Medium ⚠️";
        strengthDiv.style.color = "orange";
    }
    else{
        strengthDiv.innerHTML = "Strong ✅";
        strengthDiv.style.color = "green";
    }
});
