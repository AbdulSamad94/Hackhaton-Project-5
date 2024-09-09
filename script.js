var _a;
function displayUserInfo() {
    var userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    var userInfoDiv = document.getElementById('userInfo');
    if (userInfoDiv) {
        userInfoDiv.innerHTML = "\n        <p><strong>First Name:</strong> ".concat(userDetails.firstName || '', "</p>\n        <p><strong>Last Name:</strong> ").concat(userDetails.lastName || '', "</p>\n        <p><strong>Email:</strong> ").concat(userDetails.email || '', "</p>\n        <p><strong>Contact:</strong> ").concat(userDetails.contact || '', "</p>\n        <p><strong>Education 1:</strong> ").concat(userDetails.education[0] || '', "</p>\n        <p><strong>Education 2:</strong> ").concat(userDetails.education[1] || '', "</p>\n        <p><strong>Experience 1:</strong> ").concat(userDetails.experience[0] || '', "</p>\n        <p><strong>Experience 2:</strong> ").concat(userDetails.experience[1] || '', "</p>\n        <p><strong>Skills:</strong> ").concat(userDetails.skills || '', "</p>\n      ");
    }
}

function generateFormUrl() {
    var userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');

    var queryParams = new URLSearchParams(userDetails).toString();
    var generatedUrl = "".concat(window.location.origin, "/index.html?").concat(queryParams);

    var generatedUrlElement = document.getElementById('generatedUrl');
    if (generatedUrlElement) {
        generatedUrlElement.innerHTML = "<a href=\"".concat(generatedUrl, "\" target=\"_blank\">").concat(generatedUrl, "</a>");
    }
}
(_a = document.getElementById('generateUrlBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', generateFormUrl);

window.onload = displayUserInfo;
