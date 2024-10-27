const form = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email");


form.addEventListener("submit",(e) => {
    e.preventDefault();
    const email = emailInput.value;
    sumbitForm(email);
});

async function sumbitForm(email) {
    try {
        const response = await fetch('/subscribers', {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: {
                'Content-Type': "application/json"
            }
        });
        if (!response.ok) {
            // handle error
            const data = await response.json();
            alert(data.message);
        } else {
            // afficehr message wsel haa
            alert("Solana vous remerci pour votre subscription");
            afterSubmit();
        }
    } catch (error) {
        // network error
        console.log(error);
    }
}

function afterSubmit() {
    emailInput.value = "";
}