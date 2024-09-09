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

  function generateFormUrl() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
  
    const queryParams = new URLSearchParams(userDetails).toString();
    const generatedUrl = `${window.location.origin}/index.html?${queryParams}`;
  

    const generatedUrlElement = document.getElementById('generatedUrl');
    if (generatedUrlElement) {
      generatedUrlElement.innerHTML = `<a href="${generatedUrl}" target="_blank">${generatedUrl}</a>`;
    }
  }
  

  document.getElementById('generateUrlBtn')?.addEventListener('click', generateFormUrl);

  window.onload = displayUserInfo;
  
