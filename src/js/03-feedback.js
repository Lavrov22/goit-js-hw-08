import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const refs = {
    form: document.querySelector('.feedback-form'),
}
let formData = {};
refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
fillForm();
function onFormInput(e){
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
 
}

function fillForm() {
   let  savedLocalStorage = localStorage.getItem(STORAGE_KEY);
    if (savedLocalStorage) {
        savedLocalStorage = JSON.parse(savedLocalStorage);
        console.log(savedLocalStorage);
        Object.entries(savedLocalStorage).forEach(([name, value]) => {
            formData[name] = value;
            refs.form.elements[name].value = value;
        })  
    }
}


function onFormSubmit(e) {
    e.preventDefault();
    formData = {};
    localStorage.removeItem(STORAGE_KEY);
    e.target.reset();
    
}