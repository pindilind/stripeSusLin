//Co-authored-by: Susan Isaksson <SusanIsaksson@users.noreply.github.com> || Co-authored-by: Linda G <Pindilind@users.noreply.github.com>

let stripe = Stripe('pk_test_51JbhAtI15NR3oivl1Rxdgpnad3GN14mR2OTtJbM2e6VNPEa1cYL7PTMdHBlpU2aUGa4ncdbvUyBiUZ16303LmKq100BkngM59V');

const productDB = {
    "TestProduct": {
        description: "produktbeskrivning",
        price_data: {
            currency: "sek",
            product_data: {
                name: "produktnamn"
            },
            unit_amount: 1000
        },
    },
}

let cart = {};



const addProduct = async (productKey) => {

    const product = productDB[productKey];

    cart[productKey] = cart[productKey] || product;
    cart[productKey].quantity = cart[productKey].quantity|| 0;
    cart[productKey].quantity++;
    console.log({ cart, line_items: Object.values(cart) });


}

document.getElementById("addProd").addEventListener("click", () => addProduct ("TestProduct"))

async function checkoutBtn() {
    try {

        if (Object.keys(cart).length == 0) {
            throw new Error("You cart is empty!");
        }

        const response = await fetch('api/session/new', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                line_items: Object.values(cart)
            })
        });
        const { id } = await response.json();
        sessionStorage.setItem("session", id)
       
        stripe.redirectToCheckout({ sessionId: id })

        const stripeSessionId = sessionStorage.getItem("session")
        console.log(stripeSessionId)

    } catch (err) {
        console.log(err)
    }
}

//Co-authored-by: Susan Isaksson <SusanIsaksson@users.noreply.github.com> || Co-authored-by: Linda G <Pindilind@users.noreply.github.com>