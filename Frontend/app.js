document.addEventListener("DOMContentLoaded", () => {
    // Get the HTML element where the follower count will be displayed
    const followerCountElement = document.getElementById("follower-count");

    // Function to update the follower count on the page
    function updateFollowerCount(count) {
        // Set the text content of the follower count element with the new count
        followerCountElement.textContent = count;
    }

    // Fetch the initial follower count from the server
    fetch('http://localhost:5500/getFollowerCount')
        .then(response => {
            // Check if the response status is ok (HTTP status code 200-299)
            if (!response.ok) {
                // Handle non-ok responses
                if (response.status === 404) {
                    // Throw an error if the endpoint is not found
                    throw new Error('Endpoint not found');
                } else {
                    // Try to get the response body as text for further examination
                    return response.text();
                }
            }
            // If the response is ok, parse it as JSON
            return response.json();
        })
        .then(data => {
            // Check if the parsed data is a string (error case)
            if (typeof data === 'string') {
                console.log('Response Body (as text):', data);
                // Throw an error for invalid JSON response
                throw new Error('Invalid JSON response');
            }

            // Log the parsed JSON data
            console.log('Parsed JSON Data:', data);

            // Update the follower count on the page with the data received from the server
            updateFollowerCount(data.followerCount);
        })
        .catch(error => console.error(error));
});
