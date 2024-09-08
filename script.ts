// Display the user's submitted information on the page
function displayUserInfo() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
  
    const userInfoDiv = document.getElementById('userInfo');
    if (userInfoDiv) {
      userInfoDiv.innerHTML = `
        <p><strong>First Name:</strong> ${userDetails.firstName || ''}</p>
        <p><strong>Last Name:</strong> ${userDetails.lastName || ''}</p>
        <p><strong>Email:</strong> ${userDetails.email || ''}</p>
        <p><strong>Contact:</strong> ${userDetails.contact || ''}</p>
        <p><strong>Education 1:</strong> ${userDetails.education[0] || ''}</p>
        <p><strong>Education 2:</strong> ${userDetails.education[1] || ''}</p>
        <p><strong>Experience 1:</strong> ${userDetails.experience[0] || ''}</p>
        <p><strong>Experience 2:</strong> ${userDetails.experience[1] || ''}</p>
        <p><strong>Skills:</strong> ${userDetails.skills || ''}</p>
      `;
    }
  }
  
  // Generate a URL containing form data as query parameters
  function generateFormUrl() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
  
    // Construct query string
    const queryParams = new URLSearchParams(userDetails).toString();
    const generatedUrl = `${window.location.origin}/index.html?${queryParams}`;
  
    // Display the generated URL on the page
    const generatedUrlElement = document.getElementById('generatedUrl');
    if (generatedUrlElement) {
      generatedUrlElement.innerHTML = `<a href="${generatedUrl}" target="_blank">${generatedUrl}</a>`;
    }
  }
  
  // Event listeners for the Generate URL button
  document.getElementById('generateUrlBtn')?.addEventListener('click', generateFormUrl);
  
  // Display user info when the page loads
  window.onload = displayUserInfo;
  