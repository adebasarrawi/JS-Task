let dataList = JSON.parse(localStorage.getItem('dataList')) || [];

function renderTable() {
  const table = document.getElementById('dataTable');
  table.innerHTML = '';

  dataList.forEach((item, index) => {
    table.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.address}</td>
        <td>${item.email}</td>
        <td>
          <button class="delete-btn" onclick="deleteData(${index})">Delete</button>
          <button class="edit-btn" onclick="editData(${index})">Edit</button>
        </td>
      </tr>
    `;
  });
}

function addData() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const address = document.getElementById('address').value;
  const email = document.getElementById('email').value;

  if (!name || !age || !address || !email) {
    alert('Please fill out all fields.');
    return;
  }

  dataList.push({ name, age, address, email });
  localStorage.setItem('dataList', JSON.stringify(dataList));

  clearFields();
  renderTable();
}

function deleteData(index) {
  dataList.splice(index, 1);
  localStorage.setItem('dataList', JSON.stringify(dataList));
  renderTable();
}

function editData(index) {
  const item = dataList[index];
  document.getElementById('name').value = item.name;
  document.getElementById('age').value = item.age;
  document.getElementById('address').value = item.address;
  document.getElementById('email').value = item.email;

  deleteData(index);
}

function clearFields() {
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('address').value = '';
  document.getElementById('email').value = '';
}

renderTable();

