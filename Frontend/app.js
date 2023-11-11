document.addEventListener("DOMContentLoaded", () => {
    const followerCountElement = document.getElementById("follower-count");

    // Function to update the follower count on the page
    function updateFollowerCount(count) {
        followerCountElement.textContent = count;
    }

    // Fetch the initial follower count from the server
    fetch('http://localhost:5500/getFollowerCount')
        .then(response => {
            // Check if the response is in JSON format
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Endpoint not found');
                } else {
                    return response.text(); // Try to get the response body as text
                }
            }
            return response.json();
        })
        .then(data => {
            if (typeof data === 'string') {
                console.log('Response Body (as text):', data);
                throw new Error('Invalid JSON response');
            }

            // Log the parsed JSON data
            console.log('Parsed JSON Data:', data);
            updateFollowerCount(data.followerCount);
        })
        .catch(error => console.error(error));
});
