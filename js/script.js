// Function to display the form when the "Petrol" card is clicked
function openForm1() {
  document.getElementById("petrolForm").style.display = "block";
  document.querySelector(".overlay").style.display = "block";
}

// Function to close the form when the "Cancel" button is clicked
function closeForm() {
  document.getElementsById("petrolForm").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
 // document.getElementById("petrolOrderForm").reset();
}

// Function to calculate the amount when the number of litres is entered
document.getElementById("litres").addEventListener("input", function () {
  const litres = parseFloat(this.value);
  if (!isNaN(litres)) {
    const amount = litres * 600;
    document.getElementById("amount").value = amount.toFixed(2);
  } else {
    document.getElementById("amount").value = "";
  }
});
