$(document).on('submit', '#fileUploadForm', function(e){
    if (window.FormData === undefined) {
		alert('Your browser is not supported')
	} else {
        e.preventDefault();
        var formData = new FormData(this);
        formData.append('file', $("#pdfFile")[0].files[0]);
        formData.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val())

        // Add table extraction mode to formData
        formData.append('extraction_method', $('#extraction_method').val());

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

                var fileUrl = data.url
                window.location.href = '/result/?file_url=' + encodeURIComponent(fileUrl);
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
