function clickSubmit() {
    let login = document.getElementById("eCommerceLogin").value;
    let password = document.getElementById("eCommercePassword").value;
    if (login === "") {
        document.getElementById("loginErrorMessage").style.display = "inline";
        document.getElementById("loginErrorMessage").innerText = "The login is mandatory";
    } else if (password === "") {
        document.getElementById("loginErrorMessage").style.display = "inline";
        document.getElementById("loginErrorMessage").innerText = "The password is mandatory";
    } else if ((login === "Peter") && (password === "Parker")) {
        document.location.href="../HTML/eCommerceOrders.html"
    } else {
        document.getElementById("loginErrorMessage").innerText = "";
        document.getElementById("loginErrorMessage").style.display = "none";
    }
}