// DOM Elements
const loginSection = document.getElementById('login-section');
const registerSection = document.getElementById('register-section');
const forgotPasswordSection = document.getElementById('forgot-password-section');

// Login section links
const registerLink = document.getElementById('register-link');
const forgotPasswordLink = document.getElementById('forgot-password-link');

// Register section links
const backToLoginFromRegister = document.getElementById('back-to-login-from-register');

// Forgot Password section links
const backToLoginFromForgot = document.getElementById('back-to-login-from-forgot');
// login functionality
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector(".btn.primary-btn");

    loginButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default form submission
        window.location.href = "home.html"; // Redirect to home page
    }
    );
});



// Show section function
function showSection(sectionToShow) {
    // Hide all sections first
    loginSection.classList.add('hidden');
    registerSection.classList.add('hidden');
    forgotPasswordSection.classList.add('hidden');
    
    // Show the requested section
    sectionToShow.classList.remove('hidden');
    
    // Add animation effect
    sectionToShow.style.opacity = '0';
    setTimeout(() => {
        sectionToShow.style.opacity = '1';
        sectionToShow.style.transition = 'opacity 0.5s ease';
    }, 10);
}

// Event Listeners
registerLink.addEventListener('click', function(e) {
    e.preventDefault();
    showSection(registerSection);
});

forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    showSection(forgotPasswordSection);
});

backToLoginFromRegister.addEventListener('click', function(e) {
    e.preventDefault();
    showSection(loginSection);
});

backToLoginFromForgot.addEventListener('click', function(e) {
    e.preventDefault();
    showSection(loginSection);
});

// Form submission prevention (for demo purposes)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formType = this.closest('.form-container').id;
        
        // Example validation (can be expanded)
        const inputs = this.querySelectorAll('input');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.boxShadow = '0 0 0 2px rgba(255, 0, 0, 0.5)';
                
                // Reset validation styling after 3 seconds
                setTimeout(() => {
                    input.style.boxShadow = '';
                }, 3000);
            }
        });
        
        if (isValid) {
            // Display success message (in a real app, this would handle form submission)
            showFormSuccessMessage(formType);
        }
    });
});

// Function to show success message
function showFormSuccessMessage(formType) {
    let message;
    
    if (formType === 'login-section') {
        message = 'Login successful! Redirecting...';
    } else if (formType === 'register-section') {
        message = 'Registration successful! Please check your email.';
    } else if (formType === 'forgot-password-section') {
        message = 'Password reset link sent to your email!';
    }
    
    const formContainer = document.getElementById(formType);
    const messageElement = document.createElement('div');
    messageElement.className = 'success-message';
    messageElement.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <p>${message}</p>
    `;
    messageElement.style.cssText = `
        background: rgba(76, 175, 80, 0.2);
        color: #fff;
        padding: 15px;
        border-radius: 10px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    `;
    
    // Add the message to the form
    formContainer.appendChild(messageElement);
    
    // Remove the message after 3 seconds
    setTimeout(() => {
        messageElement.remove();
        
        // For demonstration - in a real app, you might redirect or perform other actions
        if (formType === 'login-section') {
            // Simulate redirect after login
            formContainer.innerHTML = '<div class="logo"><i class="fas fa-spinner fa-spin"></i></div><h2>Redirecting...</h2>';
        }
    }, 3000);
}

// Add input focus effects
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', () => {
        input.previousElementSibling.style.color = '#fff';
    });
    
    input.addEventListener('blur', () => {
        input.previousElementSibling.style.color = 'rgba(255, 255, 255, 0.6)';
    });
});