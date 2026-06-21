function calculateCost() {

    let total = 0;

    const items = document.querySelectorAll(".item");

    items.forEach(item => {

        if (item.checked) {
            total += Number(item.value);
        }

    });

    document.getElementById("totalCost").innerText =
        "Total Cost: ₹" + total.toLocaleString();

}