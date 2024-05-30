
let Value = ()=>{
    return document.getElementById("inputBill").value
}
let TipPorcent = ()=>{
    document.querySelectorAll(".c-select__item").forEach((item)=>{
        if(item.classList.contains("c-select__item--active")){
            return item.value
        }
    })
}
let People = ()=>{
    return document.getElementById("people").value
}

document.getElementById("reset").addEventListener("click",()=>{
    let value = Value()
    let tip = TipPorcent()
    let people = People()
    let total = (value / 100)*tip
    let amount = total/people
    document.getElementById("total").innerText("$"+ total)
    document.getElementById("amount").innerText("$"+ amount)
    alert(total,amount)

})


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

