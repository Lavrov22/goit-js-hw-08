import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    input: document.querySelector('input'),
}
let formData = {};
refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
fillForm();
function onFormInput(e){
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
}

function fillForm() {
   const  savedLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedLocalStorage) {
        refs.input.value = savedLocalStorage.email || '';
        refs.textarea.value = savedLocalStorage.message || '';
    }
}


function onFormSubmit(e) {
    e.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    e.target.reset();
    
}