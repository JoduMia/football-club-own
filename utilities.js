function getValue(elementId) {
    return validation(elementId);
}


// ==================== Validation function ==================//
function validation(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    if(elementValueString == ''){
        alert('InputField shouldn\'t be empty !!!');
        element.value = '';
        return 0;
    } else {
        const elementValue = parseInt(elementValueString);
        if(isNaN(elementValue)){
            alert('Numeric values are allowed. !!!');
            element.value = '';
            return 0;
        } else if(elementValue < 1) {
            alert('Cost mustn\'t be a neagative value !!!');
            element.value = '';
            return 0
        } else {
            return elementValue;
        }
    }
}