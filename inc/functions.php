<?php

function get_the_ip() {
	//Just get the headers if we can or else use the SERVER global
	if ( function_exists( 'apache_request_headers' ) ) {
		$headers = apache_request_headers();
	} else {
		$headers = $_SERVER;
	}
	//Get the forwarded IP if it exists
	if ( array_key_exists( 'X-Forwarded-For', $headers ) && filter_var( $headers['X-Forwarded-For'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 ) ) {
		$the_ip = $headers['X-Forwarded-For'];
	} elseif ( array_key_exists( 'HTTP_X_FORWARDED_FOR', $headers ) && filter_var( $headers['HTTP_X_FORWARDED_FOR'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 )) {
		$the_ip = $headers['HTTP_X_FORWARDED_FOR'];
	} else {
		$the_ip = filter_var( $_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 );
	}
	if(!empty($the_ip)){
		return $the_ip;
	} else {
		return false;
	}
}


/**
* Quick use SVG
*/
function svg($name, $options = array('title'=>false,'class'=>false)) {

	return
'<svg class="icon icon--'.$name. ($options['class'] != false ? ' '. $options['class']  : '').'">'.($options['title'] != false ? '<title>'.$options['title'].'</title>' : '').'<use xlink:href="#'.$name.'" /></svg>';
}


function get_current_url() {
	return "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
}

function social_share($id) {
	$current_url = get_current_url();
	$user_ip = get_the_ip();
	return '<ul class="social-share social-share--'.$id.'">
				<li class="social-share__item social-share__item--facebook">
					<a class="social-share__link social-share__link--facebook social-share__link--facebook-'.$id.'" data-position="'.ucwords($id).'" data-label="'.$user_ip.'"
						data-url="'.$current_url.'" href="#">
						<span class="icon-social icon-social--facebook" role="presentation" aria-hidden="true">
							'.svg('facebook').'
						</span>
						 Share on Facebook
					</a>
				</li>

				<li class="social-share__item social-share__item--twitter">
					<a class="social-share__link social-share__link--twitter social-share__link--twitter-'.$id.'" data-action="Twitter Share - '.ucwords($id).'" data-label="'.$user_ip.'" href="http://twitter.com/intent/tweet?text='.urlencode($title).'&url='.urlencode($current_url).'">
						<span class="icon-social icon-social--twitter" role="presentation" aria-hidden="true" >
							'.svg('twitter').'
						</span>
						 Share on Twitter
					</a>
				</li>
			</ul>';
}

/**
* Output HTML needed for a footnote
*/
function footnote($number, $footnotes) {
	return '<button class="footnote__button" data-footnote-id="'.$number.'"><sup>'.$number.'</sup></button>
			<span class="footnote__content">'.$footnotes[$number - 1].'</span>';
}
?>
