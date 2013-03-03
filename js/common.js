$(document).ready(function(){

	$('.adapchat').addClass('answerNow');
	$('.adapchat-add').submit(function(e) {
		e.preventDefault();
		$('.adapchat-field').focus();
		var newText = $('.adapchat-field').val();
		if (newText == 0) {
			$('.adapchat-field').addClass('adapchat-error');
		} else {
			var now = new Date();
			var myTime = now.getHours()+':'+now.getMinutes();
			var img1 = ('<img src="images/chater-1.jpg" alt="" class="adapchat-photo">');
			var img2 = ('<img src="images/chater-2.jpg" alt="" class="adapchat-photo">');
			if ($('.adapchat').is('.answerNow')) {
				var imgNow = (img2);
				$('.adapchat').removeClass('answerNow');
			} else {
				var imgNow = (img1);
				$('.adapchat').addClass('answerNow');
			}
			$(this).closest('.adapchat-add').before('<div class="adapchat-item" style="display:none">' +
				'<div class="adapchat-chater">' + imgNow + '</div>' +
				'<div class="adapchat-text">' +
				'<div class="adapchat-date">' + myTime + '</div>' +
				'<div class="adapchat-message">' + newText + '</div>' +
				'</div></div>').prev().fadeIn(300);
			$('.adapchat-field').removeClass('adapchat-error');
			$('.adapchat-field').val("");
		}
		$(window).scrollTop($(document).height());
	});

});