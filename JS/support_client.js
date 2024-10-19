const questions = document.querySelectorAll('.FAQ_question');

questions.forEach((question) => {
    const caret = question.querySelector('.fa-caret-down');
    const answer = question.querySelector('.answer');

    caret.addEventListener('click', () => {
        const isHidden = answer.classList.contains('hide');
        
        if (isHidden) {
            answer.classList.remove('hide');
            answer.style.height = answer.scrollHeight + "px"; 
            caret.classList.add("rotate"); 
        } else {
            answer.style.height = "0"; 
            caret.classList.remove("rotate"); 
            setTimeout(() => {
                answer.classList.add('hide'); 
            }, 400); 
        }
    });
});


const submit = document.getElementById("sending_button");
window.onload = function() {
    document.getElementById("email_form").reset(); 
};



