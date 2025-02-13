import { cart } from "../../data/cart.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { getProduct } from "../../data/products.js";

export function renderPaymentSummary(){
    let productPrice = 0;
    let ShippingPrice = 0;

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPrice += product.price * cartItem.quantity;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        ShippingPrice += deliveryOption.price;
    });

    const totalPriceBeforeTax = productPrice + ShippingPrice;
    const taxedPrice = totalPriceBeforeTax * 0.1;
    const totalPrice = totalPriceBeforeTax + taxedPrice;

    const paymentSummaryHTML =
        `<div class="payment-summary-title">
        Order Summary
        </div>

        <div class="payment-summary-row">
        <div>Items (3):</div>
        <div class="payment-summary-money">₹${productPrice}</div>
        </div>

        <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">
        ₹${ShippingPrice}
        </div>
        </div>

        <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">
        ₹${totalPriceBeforeTax}
        </div>
        </div>

        <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">
        ₹${taxedPrice.toFixed(2)}
        </div>
        </div>

        <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">
        ₹${totalPrice.toFixed(2)}
        </div>
        </div>

        <button class="place-order-button button-primary">
        Place your order
        </button>`;
        
        document.querySelector('.payment-summary').innerHTML = paymentSummaryHTML;
}


 
