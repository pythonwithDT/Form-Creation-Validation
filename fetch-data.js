async function fetchUserData() {


    const apiUrl = 'https://jsonplaceholder.typicode.com/users';


    const dataContainer = document.getElementById('api-data');


    // Fetching Data
    try {
        // Displaying a loading message
        dataContainer.textContent = 'Loading user data...';


        // Fetching data from the API
        const response = await fetch(apiUrl);


        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }


        const users = await response.json();


        // removing Loading Message
        dataContainer.innerHTML = '';


        //Creating User List
        const userList = document.createElement('ul');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        dataContainer.appendChild(userList);
    } catch (error) {
        // Error Handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}




document.addEventListener('DOMContentLoaded', () => {
    fetchUserData();
});



