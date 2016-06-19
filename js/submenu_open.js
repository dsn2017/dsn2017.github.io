$(document).ready(function() {
			var query = decodeURIComponent(window.location.href);
			if (query.indexOf("call_for_contributions") > -1)
			{
				$element = document.getElementById("call_for_contributions");
				$($element).toggleClass('tap');
				setTimeout(function(){$($element).focus();},10);
			}
			});