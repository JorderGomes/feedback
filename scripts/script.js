$('#send').click(sendFeedback);

function sendFeedback(event) {
    event.preventDefault();
    let username = $('#name').val();
    let project = $('#project').val();

    let rate = 0;
    $("input[type='radio']").each(function () {
        if ($(this).is(":checked")) {
            selectedId = $(this).attr("id");
            rate = parseInt(selectedId.charAt(selectedId.length - 1));
        }
    });

    let opinion = $('#opinion').val();

    let email = {
        "subject": project,
        "body": `Olá, meu nome é ${username}. \n Eu avalio seu projeto com: ${rate} \n Minha opinião sobre ele é: ${opinion}`
    }

    clearForm();
    $.ajax({
        url: "https://formsubmit.co/ajax/fdf9e996f6ba19a8f62f7456094c4041",
        method: "POST",
        data: {
            name: email.subject,
            message: email.body
        },
        dataType: "json"
    });
}

function clearForm() {
    $("form input[type=text], form textarea").val("");
    $("form input[type=radio]").prop("checked", false);
}