$(document).ready(function() {
	$('a').click(ajaxhighjack)
})

function ajaxhighjack(e) {
	e.preventDefault();
	$.ajax({
		url: $(this).attr('href'),
		dataType: 'html',
		success: function(data) {
			// split data
			var b1 = data.split("<body>")
			var b2 = b1[1].split("</body")
			var body = b2[0]
			
			// replace body data
			$('body').html(body)
			
			// reinitialize links
			$('a').click(ajaxhighjack)
		}
	})
}