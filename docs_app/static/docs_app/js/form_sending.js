$(document).on('submit', '#fileUploadForm', function(e){
    if (window.FormData === undefined) {
		alert('Your browser is not supported')
	} else {
        e.preventDefault();
        var formData = new FormData(this);
        formData.append('file', $("#pdfFile")[0].files[0]);
        formData.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())

        // Show the spinner and disable the button
        var button = $('#submitBtn');
        var spinner = $('#spinner');
        spinner.show();
        button.prop('disabled', true);

        $.ajax({
            type:'POST',
            url:'/api/convert/',
            cache: false,
			contentType: false,
			processData: false,
            data: formData,
            dataType : 'json',
            success: function(data) {
                console.log('Success:', data);
                
                // Hide the spinner and enable the button
                spinner.hide();
                button.prop('disabled', false);

                window.location.href = data.url
            },
            error: function(error) {
                console.log('Error:', error);

                // Hide the spinner and enable the button
                spinner.hide();
                button.prop('disabled', false);

                alert('File processing failed.');
            }
        });
    }
});
