/**
 * Created by admin on 17.01.2017.
 */
var userName = document.getElementById('inputUserName'),
    userLastName = document.getElementById('inputUserLastName'),
    outputHello = document.getElementById('showUserHello'),
    buttonShow = document.getElementById('submit');

buttonShow.addEventListener('click', function () {
    outputHello.textContent = ('Привіт мій повелителю!!! ' + userName.value + ' ' + userLastName.value);
})

