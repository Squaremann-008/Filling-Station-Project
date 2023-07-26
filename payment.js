var paymentForm = document.getElementsById("paymentForm");

paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack() {
  var handler = PaystackPop.setup({
    key: "pk_test_b65aff4b34c61637155dbd7f404843601a44d5a6", // Replace with your public key

    email: document.getElementById("email-address").value,

    amount: document.getElementById("amount").value * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit

    currency: "NGN", // Use GHS for Ghana Cedis or USD for US Dollars

    ref: "", // Replace with a reference you generated

    callback: function (response) {
      //this happens after the payment is completed successfully

      var reference = response.reference;

      alert("Payment complete! Reference: " + reference);

      // Make an AJAX call to your server with the reference to verify the transaction
    },

    onClose: function () {
      alert("Transaction was not completed, window closed.");
    },
  });

  handler.openIframe();
}
