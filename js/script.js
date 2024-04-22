function calculateInterest() {
    var principleAmount = parseFloat(document.getElementById("principleAmount").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);
    var startDate = new Date(document.getElementById("startDate").value);
    var endDate = new Date(document.getElementById("endDate").value);

    // Calculate the difference in milliseconds
    var timeDiff = endDate - startDate;

    // Convert milliseconds to years, months, and days
    var years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    timeDiff -= years * (1000 * 60 * 60 * 24 * 365);

    var months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.44));
    timeDiff -= months * (1000 * 60 * 60 * 24 * 30.44);

    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Calculate interest for each year, month, and day
    var totalInterest = 0;
    var result = "";

    // Calculate interest for years
    if (years > 0) {
        var yearInterest = (principleAmount * interestRate * years) / 100;
        result += "Years: " + years + ", Interest = " + yearInterest.toFixed(2) + "<br>";
        totalInterest += yearInterest;
    }

    // Calculate interest for months
    if (months > 0) {
        var startDateCopy = new Date(startDate.getTime());
        var monthInterest = 0;
        for (var i = 0; i < months; i++) {
            var daysInMonth = new Date(startDateCopy.getFullYear(), startDateCopy.getMonth() + 1, 0).getDate();
            monthInterest += (principleAmount * interestRate * daysInMonth) / 100;
            startDateCopy.setMonth(startDateCopy.getMonth() + 1);
        }
        result += "Months: " + months + ", Interest = " + monthInterest.toFixed(2) + "<br>";
        totalInterest += monthInterest;
    }

    // Calculate interest for days
    if (days > 0) {
        var dayInterest = (principleAmount * interestRate * days) / 36500; // Divide by 36500 for daily interest
        result += "Days: " + days + ", Interest = " + dayInterest.toFixed(2) + "<br>";
        totalInterest += dayInterest;
    }

    // Display the result
    document.getElementById("result").innerHTML = result;
    document.getElementById("totalInterest").innerHTML = "Total Interest: " + totalInterest.toFixed(2);
}
