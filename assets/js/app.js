import 'jquery';

$('.form').submit(function(e) {
    let name = $('#name').val();
    let phone = $('#phone').val();
    let email = $('#email').val();
    console.log(1);
    e.preventDefault();

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
});