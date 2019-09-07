// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

$(".register-btn").click(function () {
    $('html,body').animate({
        scrollTop: $("#register").offset().top - 55
    },
        'slow');
});

$("#about-btn").click(function () {
    $('html,body').animate({
        scrollTop: $("#about-bill-section").offset().top
    },
        'slow');
});


var $form = $('form#register-form'),
    url = 'https://script.google.com/macros/s/AKfycbwacUQ5UKYoWp-789IIqSPeMq9Iqr0xwhFAGb_2ovurqBMHa4k/exec'


$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || "");
        } else {
            o[this.name] = this.value || "";
        }
    });
    return o;
};

$('#submit-form').on('click', function (e) {
    e.preventDefault();
    var jqxhr = $.fetch({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
    }).success(
        // do something
    );
})