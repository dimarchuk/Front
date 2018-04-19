let form = document.forms[0];

if (localStorage.getItem(form.name) !== null) {

    let data = JSON.parse(localStorage.getItem(form.name));

    for (let index in data) {
        let value = data[index];
        let options = form.elements[index].options;

        for (i = 0; i < options.length; i++) {
            let option = options[i];
            if (option.value == value) {
                option.selected = true;
                break;
            }
        }

    }
    saveSelect();
} else saveSelect();


function saveSelect() {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let formName = form.name;
        let arr = {};

        for (let i = 0; i < form.elements.length - 1; i++) {
            let item = form.elements[i].name;
            let value = form.elements[i].value;
            arr[item] = value;
        }

        if (!formName) {
            formName = 'form';
        }

        localStorage.setItem(formName, JSON.stringify(arr));
    });
}
