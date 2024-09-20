// room-confirmation.js

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const roomId = urlParams.get('roomId');

    // Placeholder for room data (in practice, this should come from an API or a database)
    const roomData = {
        '101': {
            number: '101',
            floor: 1,
            capacity: 30,
            info: 'Air-conditioned, Projector Available',
            date: '2024-09-16', // Example booking date
            time: '10:00 - 11:00'
        },
        '102': {
            number: '102',
            floor: 2,
            capacity: 50,
            info: 'Air-conditioned, Whiteboard Available',
            date: '2024-09-16', // Example booking date
            time: '11:00 - 12:00'
        }
        // Add more room data as needed
    };

    if (roomId && roomData[roomId]) {
        const room = roomData[roomId];
        document.getElementById('confirmation-details').textContent = `Room ${room.number} is booked for ${room.date} from ${room.time}.`;
    } else {
        // Handle the case where roomId is not valid
        alert('Invalid Room ID');
    }
});

function shareBooking() {
    const urlParams = new URLSearchParams(window.location.search);
    const roomId = urlParams.get('roomId');
    const room = roomData[roomId];
    
    if (room) {
        const message = `Room ${room.number} is booked for ${room.date} from ${room.time}. More info: ${room.info}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        const emailUrl = `mailto:?subject=Room Booking Confirmation&body=${encodeURIComponent(message)}`;

        if (confirm("Do you want to share the booking details via WhatsApp or email?")) {
            if (confirm("Share via WhatsApp?")) {
                window.open(whatsappUrl, '_blank');
            } else {
                window.open(emailUrl, '_blank');
            }
        }
    }
}
