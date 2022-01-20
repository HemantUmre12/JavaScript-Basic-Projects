
// ****** SELECT ITEMS **********

const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// ! flash ALERT message

class FLASHMESSAGE{

    constructor(alert) {
        this.alert = alert;
    }

    valueChanged(){
        this.alert.classList.add("alert-success");
        this.alert.innerHTML = "value changed";
        this.cleanAlert();
    };

    itemAdded(){
        this.alert.classList.add("alert-success");
        this.alert.innerHTML = "Item added to the list";
        this.cleanAlert();
    };

    emptyItem(){
        this.alert.classList.add("alert-danger");
        this.alert.innerHTML = "please enter value";
        this.cleanAlert();
    };

    removedItem(){
        this.alert.classList.add("alert-danger");
        this.alert.innerHTML = "item removed";
        this.cleanAlert();
    };

    clear(){
        this.alert.classList.add("alert-danger");
        this.alert.innerHTML = "empty list";
        this.cleanAlert();
    };

    cleanAlert() {
        setTimeout(() => {
            this.alert.classList.remove("alert-danger");
            this.alert.classList.remove("alert-success");
            this.alert.innerHTML = "";
        }, 1000);
    };
};

// creating flashMessage object

const flashMessage = new FLASHMESSAGE(alert);

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********

// ! Submit Button
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(!value) {
        // Alert Message
        flashMessage.emptyItem();
        return;
    }
    if(!editFlag){
        const element = document.createElement("article");
        element.classList.add("grocery-item");
        // Add item to grocery list
        addItemToTheList(element, value, id);
        // Alert Message
        flashMessage.itemAdded();
        // Set back to Default
        setBackToDefault();
        // Set local storage
        addToLocalStorage(id, value);
        // Adding Event Listeners to EDIT && DELETE
        const editBtn = element.querySelector(".edit-btn");
        const deleteBtn = element.querySelector(".delete-btn");
        editBtnAEL(editBtn);
        deleteBtnAEL(deleteBtn);
        return;
    }
    // Edit
    editElement.innerHTML = value;
    // Flash Message
    flashMessage.valueChanged();
    // Edit in LOCAL Storage
    editLocalStorage(editID, value);
    // Set to DEFAULT
    setBackToDefault();
});

// ! Clear Button

clearBtn.addEventListener("click", clearItems);

// ****** FUNCTIONS **********

// ! Add NEW Item In The List
function addItemToTheList(element, value, id) {
    // Add id in the element
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    // Add template string in element
    element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
            <button class="edit-btn">
            <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn">
            <i class="fas fa-trash"></i>
            </button>
        </div>`
    // Add element in the list
    list.appendChild(element);
    // Make container Visible
    container.classList.add("show-container");
    
};

// ! Adding Event Listner to EDIT btn
function editBtnAEL(editBtn) {
    editBtn.addEventListener("click", (btn) => {
        const element = btn.currentTarget.parentElement.parentElement;
        // set edit item
        editElement = element.querySelector(".title");
        // set form value
        grocery.value = editElement.innerHTML;
        editFlag = true;
        editID = element.dataset.id;
        submitBtn.innerHTML = "Edit";
    });
}

// ! Adding Event Listner to DELETE btn
function deleteBtnAEL(deleteBtn) {
    deleteBtn.addEventListener("click", (btn) => {
        const element = btn.currentTarget.parentElement.parentElement;
        // removing element
        list.removeChild(element);
        if(list.childElementCount === 0) {
            container.classList.remove("show-container");
        }
        // flash Message
        flashMessage.removedItem();
        setBackToDefault();
        // remove form LOCAL Storage
        const id = element.dataset.id;
        removeFromLocalStorage(id);
    });
}

// ! Clear Items
function clearItems() {
    const items = [...document.querySelectorAll(".grocery-item")];
    if(items.length) {
        items.forEach((item) => {
            list.removeChild(item);
        });
    }
    // TODO:list.innerHTML = "";
    // Hide the container
    container.classList.remove("show-container");
    // Flash Message
    flashMessage.clear();
    // Set Back to Default
    setBackToDefault();
    // remove from local storage

}

// ! Set Things To DEFAULT
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value) {}

function removeFromLocalStorage(id) {}

function editLocalStorage(id, value) {}

// ****** SETUP ITEMS **********













