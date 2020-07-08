function ControlBehavior(name, phone) {
    if(document.getElementById('name').value != name || document.getElementById('phone').value != phone) {
        document.getElementById('delete_button').disabled = 'disabled';
    } else {
        document.getElementById('delete_button').removeAttribute('disabled');
    }
}