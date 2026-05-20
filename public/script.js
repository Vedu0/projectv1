const inventoryData = [
  {
    container: 'Container 1',
    status: 'FULL',
    quantity: 15,
    capacity: 15,
    className: 'full',
    color: '#22c55e'
  },
  {
    container: 'Container 2',
    status: 'LOW STOCK',
    quantity: 4,
    capacity: 15,
    className: 'low',
    color: '#facc15'
  },
  {
    container: 'Container 3',
    status: 'EMPTY',
    quantity: 0,
    capacity: 15,
    className: 'empty',
    color: '#ef4444'
  }
];

const activityData = [
  {
    product: 'Product A',
    action: 'IN'
  },
  {
    product: 'Product B',
    action: 'OUT'
  },
  {
    product: 'Product C',
    action: 'OUT'
  }
];

const containerDiv = document.getElementById('containers');
const activityLogs = document.getElementById('activityLogs');
const totalItemsElement = document.getElementById('totalItems');
const lowStockElement = document.getElementById('lowStock');
const emptyStockElement = document.getElementById('emptyStock');

function renderInventory() {
  containerDiv.innerHTML = '';

  inventoryData.forEach((data) => {
    const percentage = Math.max(
      0,
      Math.min(100, (data.quantity / data.capacity) * 100)
    );

    const box = document.createElement('div');
    box.className = 'box';

    box.innerHTML = `
      <div class="box-top">
        <h2>${data.container}</h2>

        <div class="leds">
          <div class="led red"></div>
          <div class="led yellow"></div>
          <div class="led green"></div>
        </div>
      </div>

      <div class="inventory-box">
        RFID CONTAINER
      </div>

      <div class="status ${data.className}">
        ${data.status}
      </div>

      <p>${data.quantity} / ${data.capacity} Items</p>

      <div class="progress">
        <div
          class="progress-bar"
          style="width:${percentage}%; background:${data.color};"
        ></div>
      </div>
    `;

    containerDiv.appendChild(box);
  });
}

function renderActivity() {
  activityLogs.innerHTML = '';

  activityData.forEach((activity) => {
    const activityItem = document.createElement('div');
    activityItem.className = 'activity-item';

    activityItem.innerHTML = `
      <span>${activity.product}</span>

      <span style="color:${activity.action === 'IN' ? '#22c55e' : '#ef4444'}">
        ${activity.action}
      </span>
    `;

    activityLogs.appendChild(activityItem);
  });
}

function updateStats() {
  const totalItems = inventoryData.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const lowStock = inventoryData.filter(
    (item) => item.status === 'LOW STOCK'
  ).length;

  const emptyStock = inventoryData.filter(
    (item) => item.status === 'EMPTY'
  ).length;

  totalItemsElement.textContent = totalItems;
  lowStockElement.textContent = lowStock;
  emptyStockElement.textContent = emptyStock;
}
async function fetchInventory() {

  const response =
    await fetch('/api/inventory');

  const data =
    await response.json();

  console.log(data);
}

fetchInventory();
renderInventory();
renderActivity();
updateStats();
