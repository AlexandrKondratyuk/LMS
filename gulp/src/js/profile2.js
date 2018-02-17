if (!localStorage.getItem('lms_img') &&
    !localStorage.getItem('lms_name') &&
    !localStorage.getItem('lms_email')
) {
    //window.location = 'http://localhost:3000/index.html';
}


var img = localStorage.getItem('lms_img');
var name = localStorage.getItem('lms_name');
var lastName = localStorage.getItem('lms_lastName');
var email = localStorage.getItem('lms_email');
var facebook = localStorage.getItem('lms_facebook');
var google = localStorage.getItem('lms_google');
var linkedin = localStorage.getItem('lms_linkedin');
var open = localStorage.getItem('lms_profile');


document.querySelector('#profile_photo').setAttribute('src', 'img/users/' + img);
document.querySelector('#header_photo-profile').setAttribute('src', 'img/users/' + img);
document.querySelector('#user-name').value = name;
document.querySelector('#user-secondname').value = lastName;
document.querySelector('#user-email').value = email;
document.querySelector('#user-facebook').value = facebook;
document.querySelector('#user-google').value = google;
document.querySelector('#user-linkedin').value = linkedin;
document.querySelector('.profile-public-icon').setAttribute('src', open ? 'img/open.svg' : 'img/close.svg')
document.querySelector('.profile-public-message').innerHTML = open ? 'I want my profile to be privat' : 'I want my profile to be public';
document.querySelector('.profile-public-message').style.color = open ? '#00ff00' : '#ff0000';

document.querySelector('#old-pass').addEventListener('change', (e) => {
	let pass = e.target.value;
	let pass2 = localStorage.getItem('lms_pass');

	if (pass != pass2) {
		document.querySelector('.alert').innerHTML = 'Неверный старый пароль';
	}
	else {
		document.querySelector('.alert').innerHTML = '';
	}
})

document.querySelector('#new-pass').addEventListener('change', (e) => {

	let pass = document.querySelector('#new-pass').value;

	if (pass.search(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g)) {
		document.querySelector('.alert').innerHTML = 'Пароль слишком короткий  <br> или недоступный символ';
	}
	else {
		document.querySelector('.alert').innerHTML = '';
	}
});

document.querySelector('#repeat-new-pass').addEventListener('change', function(e) {

	let pass = document.querySelector('#new-pass').value;
	let pass2 = document.querySelector('#repeat-new-pass').value;

	if (pass.search(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g)) {
		document.querySelector('.alert').innerHTML = 'Пароль слишком короткий <br> или недоступный символ';
	}
	else {
		document.querySelector('.alert').innerHTML = '';
	}

	if (pass != pass2) {
		document.querySelector('.alert').innerHTML = 'Пароли не совпадают';
	}
	else {
		document.querySelector('.alert').innerHTML = '';
	}
})

function publicFunction() {
	return function() {
		document.querySelector('.profile-public-icon').setAttribute('src', !open ? 'img/open.svg' : 'img/close.svg')
		document.querySelector('.profile-public-message').innerHTML = !open ? 'I want my profile to be privat' : 'I want my profile to be public';
		document.querySelector('.profile-public-message').style.color = !open ? '#00ff00' : '#ff0000';
		localStorage.setItem('lms_profile', open ? '' : 1);
		open = !open;
	}
}

document.querySelector('.profile-public-icon').addEventListener('click', publicFunction());


document.querySelector('#header_photo-profile').addEventListener('click', e => {
    localStorage.clear();
    //window.location = 'http://localhost:3000/index.html';
})
var profile1_2 = `<div class="profile">
    <div class="profile-wrapper">
        <div class="photo-block">
            <div class="photo-block--icon">
                <div class="profile2__photo-profile">
                    <img src="img/photo.png" alt="" style="width:108%" id="profile_photo">
                </div>

            </div>
            <div class="photo-block--icon-info">
                <p class="block-heading-text">Изменить фото профиля</p>
                <button class="photo-block--icon-info--input shad input-but-st"><svg class="icon-info--input--svg" viewBox="0 0 512 512"><g><path d="M430.4,147h-67.5l-40.4-40.8c0,0-0.2-0.2-0.3-0.2l-0.2-0.2v0c-6-6-14.1-9.8-23.3-9.8h-84c-9.8,0-18.5,4.2-24.6,10.9l0,0.1   l-39.5,40H81.6C63,147,48,161.6,48,180.2v202.1c0,18.6,15,33.7,33.6,33.7h348.8c18.5,0,33.6-15.1,33.6-33.7V180.2   C464,161.6,448.9,147,430.4,147z M256,365.5c-50.9,0-92.4-41.6-92.4-92.6c0-51.1,41.5-92.6,92.4-92.6c51,0,92.4,41.5,92.4,92.6   C348.4,323.9,307,365.5,256,365.5z M424.1,200.5c-7.7,0-14-6.3-14-14.1s6.3-14.1,14-14.1c7.7,0,14,6.3,14,14.1   S431.8,200.5,424.1,200.5z"/><path d="M256,202.9c-38.6,0-69.8,31.3-69.8,70c0,38.6,31.2,70,69.8,70c38.5,0,69.8-31.3,69.8-70C325.8,234.2,294.5,202.9,256,202.9   z"/></g></svg> Сделать фото</button>
                <button class="photo-block--icon-info--input shad input-but-st"><svg class="icon-info--input--svg" viewBox="0 0 512 512"><polygon points="448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288 "/></svg> Загрузить фото</button>
            </div>
        </div>
        <div class="info-block">
            <div class="info-block--main-info">
                <p class="block-heading-text">Основная информация&nbsp;&nbsp;&nbsp;</p>
                <input type="text" class="info-block--input shad input-st" id="user-name" placeholder="Имя">
                <input type="text" class="info-block--input shad input-st" id="user-secondname" placeholder="Фамилия">
                <input type="text" class="info-block--input shad input-st" id="user-email" placeholder="email">
                <div class="profile-public">
                    <img src="img/close.svg" alt="" class="profile-public-icon">
                    <span class="profile-public-message">I want my profile to be public</span>
                </div>
            </div>
            <div class="info-block--pass-info">
                <p class="block-heading-text">Изменить пароль</p>
                <input type="text" class="info-block--input shad input-st" placeholder="Старый пароль" id="old-pass">
                <input type="text" class="info-block--input shad input-st" placeholder="Новый пароль" id="new-pass">
                <input type="text" class="info-block--input shad input-st" placeholder="Повторить новый пароль" id="repeat-new-pass">
                <span class="alert"></span>
            </div>
        </div>

        <div class="social-block">
            <p class="block-heading-text">Социальные сети</p>
            <div class="social-block--inputs">
                <div class="social-block--inputs-block">
                    <div class="social-block--inputs-block--icon icon">
                        <a class="a-social__link" href="#">
                            <svg class="social-block--inputs-block--icon--svg" viewBox="0 0 56.693 56.693"><path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z"/>
                            </svg>
                        </a>
                    </div>
                    <input type="text" id="user-facebook" class="social-block--inputs-block--input input-st shad">
                </div>
                <div class="social-block--inputs-block">
                    <div class="social-block--inputs-block--icon icon">
                        <a class="a-social__link" href="#">
                            <svg class="social-block--inputs-block--icon--svg" viewBox="0 0 56.6934 56.6934"><g><path d="M19.6671,25.7867c-0.0075,1.7935,0,3.5869,0.0076,5.3803c3.0067,0.098,6.0208,0.0527,9.0275,0.098   c-1.3262,6.6689-10.3989,8.8315-15.199,4.4761C8.5674,31.9206,8.801,23.5412,13.9327,19.992   c3.5869-2.8635,8.6884-2.1552,12.2752,0.324c1.4092-1.3036,2.7278-2.6977,4.0013-4.1445   c-2.984-2.3812-6.6462-4.0767-10.5421-3.8958c-8.1307-0.2713-15.6059,6.8497-15.7415,14.9805   c-0.52,6.6462,3.8506,13.1644,10.0222,15.5155c6.1489,2.3661,14.031,0.7535,17.957-4.77c2.5922-3.4889,3.1498-7.98,2.8484-12.1999   C29.7194,25.7641,24.6933,25.7716,19.6671,25.7867z"/><path d="M49.0704,25.7641c-0.0151-1.4996-0.0226-3.0067-0.0301-4.5062c-1.4996,0-2.9916,0-4.4836,0   c-0.0151,1.4996-0.0301,2.9991-0.0377,4.5062c-1.5071,0.0075-3.0067,0.0151-4.5062,0.0302c0,1.4995,0,2.9915,0,4.4836   c1.4995,0.0151,3.0066,0.0302,4.5062,0.0452c0.0151,1.4996,0.0151,2.9991,0.0302,4.4987c1.4996,0,2.9916,0,4.4911,0   c0.0075-1.4996,0.015-2.9991,0.0301-4.5062c1.5071-0.0151,3.0067-0.0226,4.5062-0.0377c0-1.4921,0-2.9916,0-4.4836   C52.0771,25.7792,50.57,25.7792,49.0704,25.7641z"/></g></svg>
                        </a>
                    </div>
                    <input type="text" id="user-google" class="social-block--inputs-block--input input-st shad">
                </div>
                <div class="social-block--inputs-block">
                    <div class="social-block--inputs-block--icon icon">
                        <a class="a-social__link" href="#">
                            <svg class="social-block--inputs-block--icon--svg" viewBox="0 0 100 100"><g><path d="M95,59.727V93H75.71V61.955c0-7.799-2.79-13.121-9.771-13.121   c-5.331,0-8.503,3.587-9.898,7.057c-0.509,1.24-0.64,2.967-0.64,4.703V93H36.104c0,0,0.26-52.58,0-58.028h19.294v8.225   c-0.039,0.062-0.09,0.128-0.127,0.188h0.127v-0.188c2.563-3.948,7.142-9.588,17.389-9.588C85.482,33.609,95,41.903,95,59.727    M15.919,7C9.318,7,5,11.33,5,17.024c0,5.57,4.193,10.031,10.663,10.031h0.129c6.729,0,10.914-4.46,10.914-10.031   C26.579,11.33,22.521,7,15.919,7 M6.146,93h19.289V34.972H6.146V93z"/></g>
                            </svg>
                        </a>
                    </div>
                    <input type="text" id="user-linkedin" class="social-block--inputs-block--input input-st shad">
                </div>
            </div>
        </div>
        <div class="button-block">
            <a href="index.html"><button class="button-big" id="save-button" src="index2.html">сохранить</button></a>
        </div>
    </div>
</div>`
