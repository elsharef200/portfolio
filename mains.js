// التمرير السلس للمشاريع
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

// منطق حاسبة القروض
function calculateLoan() {
    const amount = document.getElementById("amount").value;
    const interest = document.getElementById("interest").value;
    const months = document.getElementById("months").value;
    const resultElement = document.getElementById("result");

    // التحقق من صحة البيانات (Validation)
    if (amount === "" || interest === "" || months === "") {
        resultElement.innerText = "Please fill all fields.";
        resultElement.style.color = "red";
        return;
    }

    const monthlyInterest = (interest / 100) / 12;
    const payment = (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -months));

    // عرض النتيجة (DOM Manipulation)
    resultElement.style.color = "#111";
    resultElement.innerText = "Monthly Payment: " + payment.toFixed(2) + " RWF";
}