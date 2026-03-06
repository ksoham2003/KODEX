let editingRow = null;

// ADD / UPDATE PRODUCT
function saveProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;

  if (!name || !price || !quantity) {
    alert("Fill all fields");
    return;
  }

  const total = price * quantity;
  const table = document.getElementById("productTable");

  // UPDATE EXISTING ROW
  if (editingRow) {
    editingRow.childNodes[1].innerHTML = name;
    editingRow.childNodes[3].innerHTML = "₹" + price;
    editingRow.childNodes[5].innerHTML = quantity;
    editingRow.childNodes[7].innerHTML = "₹" + total;

    editingRow = null;
  }
  // CREATE NEW ROW
  else {
    table.innerHTML += `
      <tr>
        <td>${name}</td>
        <td>₹${price}</td>
        <td>${quantity}</td>
        <td>₹${total}</td>
        <td>
          <button class="edit" onclick="editProduct(this)">Edit</button>
          <button class="delete" onclick="deleteProduct(this)">Delete</button>
        </td>
      </tr>
    `;
  }

  clearForm();
}

// EDIT PRODUCT
function editProduct(btn) {
  editingRow = btn.parentNode.parentNode;

  document.getElementById("name").value =
    editingRow.childNodes[1].innerHTML;

  document.getElementById("price").value =
    editingRow.childNodes[3].innerHTML.replace("₹", "");

  document.getElementById("quantity").value =
    editingRow.childNodes[5].innerHTML;
}

// DELETE PRODUCT
function deleteProduct(btn) {
  const row = btn.parentNode.parentNode;
  row.remove();
}

// CLEAR FORM
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
}