let formAdd = document.querySelector("newProduct__main__form");

const show = (info, error, element) => {
    $(info).hidden = false;
    $(error).hidden = false;
    element.borderColor = 'inherit';
}

formAdd.addEventListener('submit', function (event){
    event.preventDefault();

    const msgErrors = [];

    for(let i = 0; i < this.elements.length -1; i++){
        if(this.elements[i].value.trim() === ''){
            msgErrors.push(this.elements[i].name);
            this.elements[i].style.border = '1px solid red';
        }else{
            this.elements[i].style.borderColor = 'inherit';
        }
    }
    if(!msgErrors.length){
        this.submit()
    }else{

}
})