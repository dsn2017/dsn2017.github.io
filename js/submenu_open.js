$(document).ready(function() {
			var query = decodeURIComponent(window.location.href);
			if (query.indexOf("call_for_contributions") > -1)
			{
				$element = document.getElementById("call_for_contributions");
				$($element).toggleClass('tap');
				setTimeout(function(){$($element).focus();},10);
			}
			
			if (query.indexOf("committees") > -1)
			{
				$element = document.getElementById("committees");
				$($element).toggleClass('tap');
				setTimeout(function(){$($element).focus();},10);
			}
			if (query.indexOf("conference_venue") > -1)
			{
				$element = document.getElementById("conference_venue");
				$($element).toggleClass('tap');
				setTimeout(function(){$($element).focus();},10);
			}
			
			if (query.indexOf("accepted_contributions") > -1)
			{
				$element = document.getElementById("accepted_contributions");
				$($element).toggleClass('tap');
				setTimeout(function(){$($element).focus();},10);
			}
			});