// view-room.js

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const roomId = urlParams.get('roomId');

    // Placeholder for room data (in practice, this should come from an API or a database)
    const roomData = {
        '101': {
            image: '../images/room101.jpg',
            floor: 1,
            capacity: 30,
            info: 'Air-conditioned, Projector Available'
        },
        '102': {
            image: '../images/room102.jpg',
            floor: 2,
            capacity: 50,
            info: 'Air-conditioned, Whiteboard Available'
        }
        // Add more room data as needed
    };

    if (roomId && roomData[roomId]) {
        const room = roomData[roomId];
        document.getElementById('room-image').src = room.image;
        document.getElementById('room-number').textContent = `Room ${roomId}`;
        document.getElementById('floor-number').textContent = `Floor: ${room.floor}`;
        document.getElementById('capacity').textContent = `Capacity: ${room.capacity}`;
        document.getElementById('more-info').textContent = `More Info: ${room.info}`;
        document.querySelector('.btn-book-now').setAttribute('href', `room-confirmation.html?roomId=${roomId}`);
    } else {
        // Handle the case where roomId is not valid
        alert('Invalid Room ID');
    }
});
