
let users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
    { username: 'user4', password: 'password4' },
    { username: 'user5', password: 'password5' },
    { username: 'user6', password: 'password6' },
    { username: 'user7', password: 'password7' },
    { username: 'user8', password: 'password8' },
]
localStorage.setItem('users', JSON.stringify(users));

function SignUser() {
    let username = document.getElementById('inputText');
    let password = document.getElementById('inputPass1');
    let local_storage_users = localStorage.getItem('users');
    let u = JSON.parse(local_storage_users);
    console.log(username.value)
    for (let i = 0; i < u.length; i++) {
        if (
            (u[i].username === username.value) &&
            (u[i].password === password.value)&& (u[i].password!=-1)) {
            localStorage.setItem('is_authorized', true);
            localStorage.setItem("username", [username.value]);
            window.location.href = 'project1Accaunt.html';
            console.log(u[i].username);
            return true;
            }
        //  else if(
        //  (u[i].username != username.value) &&
        //  (u[i].password != password.value)) {
        //      alert("Введен неверный пароль Логин или Пароль. Повторите попытку")
        //      return true;}

    }
    let last_username = localStorage.getItem('username');
    let username_tag = document.getElementById("username1") 
    username_tag.innerText += ": " +last_username
}

function loadUser(){
    let last_username1 = localStorage.getItem("username");
    let username_tag = document.getElementById("username_2");
    let username_tag1 = document.getElementById("username_1");
    username_tag.innerText += ": " +last_username1;
    username_tag1.innerText += ": " +last_username1;
    

}
loadUser();


function check_on_load() {
        let is_authorized = localStorage.getItem('is_authorized');
        if (is_authorized === 'true') {
            let last_username = localStorage.getItem('username');
            let change = document.getElementById("change");
            change.innerHTML = "<a style='color:white;'>Привет пользователь: </a>"+  "<a style='color:white' href='project1Accaunt.html'>" + last_username + '</a>' ;

        }
    }
check_on_load();

function register() {
    let username = document.getElementById('inputLogin');
    let password = document.getElementById('inputPass');
    if ((username.value.length >= 5) && (password.value.length >= 5)) {
        console.log('data is ok');
        alert('Поздравляем Вы зарегистрированы, войдите в свой аккаунт через -Войти-');
     
    } else {
        console.log('invalid data');
        alert('Повторите регистрацию. Внимание Логин и Пароль должен состоять из 5 символов! ');
        // localStorage.setItem('is_authorized', false);
    }
     
    let local_storage_users = JSON.parse(localStorage.getItem('users'));
    console.log(local_storage_users);
    

    local_storage_users.push({ 'username': username.value, 'password': password.value })
    local_storage_users_json = JSON.stringify(local_storage_users);
    localStorage.setItem('users', local_storage_users_json);
   
}

function exit(){
    localStorage.setItem('is_authorized', false);
}

function check_on_load2(){
    // localStorage.setItem('is_authorized', false);
}

