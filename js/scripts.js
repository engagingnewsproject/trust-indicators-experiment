$(document).ready(function() {

    /*
    twttr.ready(function (twttr) {
        // bind events here
        twttr.events.bind('tweet', tweetIntentToAnalytics);
      }
    );

    function tweetIntentToAnalytics (intentEvent) {
      if (!intentEvent) return;

        var action = $(intentEvent.target).attr('data-action');
        var label = $(intentEvent.target).attr('data-label');

        ga('send','event', 'Social', action+' - Clicked', label);
    }

    $('.social-share__link--facebook').click(function(e){
        e.preventDefault();

        var label = $('#user-ip').attr('data-ip');
        var position = $(this).attr('data-position');
        var url = $(this).attr('data-url');

        // send the click event
        ga('send','event', 'Social', 'Facebook Share - '+position+' - Clicked', label);
        // open the dialog hopefully...
        FB.ui({
          method: 'share',
          href: url,
        }, function(response){
            if(response === undefined) {
                ga('send','event','Social', 'Facebook Share - '+position+' - Closed', label);
            } else {
                // success?
                ga('send','event','Social', 'Facebook Share - '+position+' - Shared', label);
                ga('send', 'social', 'Facebook', 'Share', url);

            }
        });
    });
    */

    // hide comments on page load
    if($('.comments-section').length) {
        $('.comments-section').hide();
    }

    $('.show-comments').click(function(e){
        e.preventDefault();
        $('.show-comments-wrap').remove();
        $('.comments-section').fadeIn();
        var label = $('#user-ip').attr('data-ip');
        // send to google
        ga('send','event','Comments', 'Show Comments', label);
    });





});
