document.addEventListener('DOMContentLoaded', () => { 
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#callback, #application').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
    ;});