import 'jquery';

$('.form').submit(function(e) {
    let nameLink = $('#name');
    let phoneLink = $('#phone');
    let emailLink = $('#email');

    let name = nameLink.val();
    let phone = phoneLink.val();
    let email = emailLink.val();

    let message = '';
    let send = true;

    if(name == '') {
        nameLink.removeClass('check');
        nameLink.addClass('error');
        send = false;
        message = 'Введите ФИО.'
    } else {
        let regex = /^[А-Яа-яЁё-\s]+$/;
        if(regex.test(name) === false) {
            nameLink.removeClass('check');
            nameLink.addClass('error');
            send = false;
            message = 'ФИО: только русские буквы, пробелы, тире. Цифры, англ. буквы - нельзя.';
        } else {
            nameLink.removeClass('error');
            nameLink.addClass('check');
        }
    }

    if(phone == '') {
        phoneLink.removeClass('check');
        phoneLink.addClass('error');
        send = false;
        message += '\nВведите телефон.'
    } else {
        let regex = /^[0-9-+\s]+$/;
        if(regex.test(phone) === false) {
            phoneLink.removeClass('check');
            phoneLink.addClass('error');
            send = false;
            message = '\nТелефон: только цифры, \"-\", пробелы, \"+\"';
        } else {
            phoneLink.removeClass('error');
            phoneLink.addClass('check');
        }
    }

    if(email != '') {
        let regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if(regex.test(email) === false) {
            emailLink.removeClass('check');
            emailLink.addClass('error');
            send = false;
            message = '\nEmail не соотвествует формату';
        } else {
            emailLink.removeClass('error');
            emailLink.addClass('check');
        }
    }

    if(message != '') {
        alert(message);
    }

    e.preventDefault();

    if(send) {
        $.ajax({
            url: 'https://digital-spectr.com/ac/academy.php',
            type: 'POST',
            cache: false,
            data: {
                'name': name,
                'phone': phone,
                'email': email
            },
            dataType: 'html',
            success: function(data) {
                alert(data);
            }
        })
    }
});