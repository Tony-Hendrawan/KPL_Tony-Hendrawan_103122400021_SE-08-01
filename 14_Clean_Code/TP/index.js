function fetchOrderDetails(orderId, token) {
    fetch(`https://example.com/api/order/${orderId}`, {
        headers: {
            'Authorization': token
        }
    })
        .then(handleResponse)
        .then(order => {
            showOrderDetails(order, token);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function handleResponse(response) {
    if (!response.ok) {
        throw new Error('Failed to fetch order details');
    }

    return response.json();
}

function showOrderDetails(order, token) {
    const modal = document.getElementById('orderModal');
    const detailsDiv = modal.querySelector('#orderDetails');
    detailsDiv.innerHTML = '';

    const header = document.createElement('h3');
    header.textContent = `Order ID: ${order.id}`;
    detailsDiv.appendChild(header);

    const status = document.createElement('p');
    status.textContent = `Status: ${order.status}`;
    detailsDiv.appendChild(status);

    modal.style.display = 'block';

    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    const confirmBtn = modal.querySelector('#confirmOrderBtn');
    if (order.status === 'Delivered') {
        confirmBtn.style.display = 'none';
        confirmBtn.onclick = null;
    } else {
        confirmBtn.style.display = 'inline-block';
        confirmBtn.onclick = () => {
            confirmOrder(order.id, token);
        };
    }
}