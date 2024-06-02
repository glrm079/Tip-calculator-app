



document.getElementById("reset").addEventListener("click", () => {
    let value = parseFloat(document.getElementById("inputBill").value);
    let tip = null;

    document.querySelectorAll(".c-select__item").forEach((item) => {
        if (item.classList.contains("c-select__item--active")) {
            if(item.value != undefined || null){
                tip = parseFloat(item.value);
            }else{
                tip = parseFloat(item.textContent) 
            }
        }
    });

    let people = parseFloat(document.getElementById("people").value);

    if (isNaN(value) || isNaN(tip) || isNaN(people) || people <= 0) {
        alert("Please enter valid inputs.");
        return;
    }

    let total = (value * tip) / 100;
    let amount = total / people;

    if (!isNaN(total) && total !== 0 && !isNaN(amount) && amount !== 0) {
        document.getElementById("total").innerText = "$" + total.toFixed(2);
        document.getElementById("amount").innerText = "$" + amount.toFixed(2);
        alert("Total: $" + total.toFixed(2) + "\nAmount per person: $" + amount.toFixed(2));
    }
});



document.querySelectorAll(".c-select__item").forEach((item) => {
    if(item.classList.contains("unact")){

    }else{
        item.addEventListener("click", () => {
            document.querySelectorAll(".c-select__item").forEach((item) => {
                item.classList.remove("c-select__item--active");
            });
            if (item.classList.contains("custom")) {
                item.addEventListener("click", () => {
                    item.classList.add("custom--unactive");
                    document.getElementById("unactiveInput").classList.add("custom--Active");
                    document.getElementById("unactiveInput").classList.add("c-select__item--active");
                });
            } else {
                item.classList.add("c-select__item--active");
                document.getElementById("custom").classList.remove("custom--unactive");
                document.getElementById("unactiveInput").classList.remove("custom--Active");
                document.getElementById("unactiveInput").classList.add("custom--unactive");
            }
        });
    }
});

