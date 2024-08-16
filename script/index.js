document.addEventListener('DOMContentLoaded', () => {

    // Get all elements with class 'netflix_email' and 'email_label'
    const emailInputs = document.querySelectorAll('.netflix_email');
    const emailLabels = document.querySelectorAll('.email_label');

    // Iterate through each email input element
    emailInputs.forEach((emailInput, index) => {

        // When an email input gains focus, add the 'email-focused' class to the corresponding label
        emailInput.addEventListener('focus', () => {
            emailLabels[index].classList.add('email_label_focused');
        });

        // When an email input loses focus, remove the 'email-focused' class from the corresponding label
        emailInput.addEventListener('blur', () => {
            if (!emailInput.value) {
                emailLabels[index].classList.remove('email_label_focused');
            }
        });
    });
});


// Function to toggle the answer section based on the provided 'id'
function toggleAnswer(id) {
    const answer = document.getElementById('ans' + id);
    const question = document.querySelector('#que' + id + ' .plus_icon');

    // Collapse all other answers and reset their plus icons
    const allAnswers = document.querySelectorAll('.collapsible_section_ans');
    allAnswers.forEach((ans) => {
        if (ans !== answer && ans.classList.contains('collapsed')) {
            ans.classList.remove('collapsed');
        }
    });

    const allIcons = document.querySelectorAll('.plus_icon');
    allIcons.forEach((ico) => {
        if (ico !== question && ico.classList.contains('cross_icon')) {
            ico.classList.remove('cross_icon');
        }
    });

    // Toggle the selected answer and its plus icon
    answer.classList.toggle('collapsed');
    question.classList.toggle('cross_icon');
}