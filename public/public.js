let stripe = Stripe('pk_test_51JZwfhIMTHb0TS9a5j5WbnuPHSwsdmvhjvM4FCmlQP9L6dKJhsSekUu99eCFTAy0pqMeHyGAQSejOfPCzlLyd3TL006JYP3wyJ');

let cart = {};
async function checkoutBtn() {
    console.log("Checkout")
    try {

    if (Object.keys(cart).length == 0) {
        throw new Error("You cart is empty!");
    }

    const response = await fetch('api/session', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            line_items: Object.values(cart)
        })
    });

    const { id } = await response.json();
    stripe.redirectToCheckout({ sessionId: id });
    } catch(err) {
        console.log(err)
    }

}

