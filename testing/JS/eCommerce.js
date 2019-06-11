// Functions for Login page

function clickSubmit() {
    var login = document.getElementById("eCommerceLogin").value;
    var password = document.getElementById("eCommercePassword").value;
    if (login === "") {
        document.getElementById("loginErrorMessage").style.display = "inline";
        document.getElementById("loginErrorMessage").innerText = "The login is mandatory";
    } else if (password === "") {
        document.getElementById("loginErrorMessage").style.display = "inline";
        document.getElementById("loginErrorMessage").innerText = "The password is mandatory";
    } else if ((login === "Peter") && (password === "Parker")) {
        document.location.href="../HTML/eCommerceOrders.html"
    } else {
        document.getElementById("loginErrorMessage").style.display = "inline";
        document.getElementById("loginErrorMessage").innerText = "Invalid credentials";
    }
}

// Functions for Orders page

function setInitialQty() {
    document.getElementById("qtySubmersible").innerText = "-1";
    document.getElementById("qtyCar").innerText = "1";
    document.getElementById("qtyIpod").innerText = "7";
    document.getElementById("qtyBasket").innerText = "0";
    document.getElementById("amountBasket").innerText = "0";
}