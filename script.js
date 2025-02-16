let subtotal = 1000.00;
let discount = 0;
let total = subtotal;
let isPromoApplied = false;

const applyPromoCode = () => {
    const promoCode = document.getElementById("promoCode").value.toLowerCase();
    const message = document.getElementById("message");

    if (isPromoApplied) {
        message.textContent = "Promo code already applied!";
        message.style.color = "red";
        return;
    }

    if (promoCode === "ostad10") {
        discount = subtotal * 0.10;
        message.textContent = "10% discount applied!";
        message.style.color = "green";
        isPromoApplied = true;
    } else if (promoCode === "ostad5") {
        discount = subtotal * 0.05;
        message.textContent = "5% discount applied!";
        message.style.color = "green";
        isPromoApplied = true;
    } else {
        message.textContent = "Invalid promo code!";
        message.style.color = "red";
        return;
    }

    total = subtotal - discount;
    document.getElementById("discount").textContent = discount.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);
};
