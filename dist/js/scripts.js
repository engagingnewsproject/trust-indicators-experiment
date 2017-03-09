window.fbAsyncInit = function() {
  FB.init({
    appId      : '974623229274971',
    xfbml      : false,
    version    : 'v2.5'
  });
};



(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(document).ready(function(){

  $("#submit-comment").click(function(event) {
    var commenter_name = $("#commenter-name").val();
    var new_comment = $("#commenter-comment").val();
    var identifier = $("#comment-identifier").val();
    var label = $('#user-ip').attr('data-ip');

    if (commenter_name.length > 0 && new_comment.length > 0 ) {
      submitComment(commenter_name, new_comment, identifier);
      appendComment(commenter_name, new_comment);
      // send to google
      ga('send','event','Comments', 'Add Comment', label);

    } else {
      submitCommentError();
      // var commenter_position = ".support";
      // send to google
      ga('send','event','Comments', 'Add Comment Error', label);
    }

    // var commenter_position = ".support";
    event.preventDefault();
  });


  function submitComment(name, comment, identifier) {
    var myDate = new Date();
    // TODO format date
    //var displayDate = (myDate.getMonth()+1) + '/' + (myDate.getDate()) + '/' + myDate.getFullYear();

    $(".new-comment").replaceWith('<div class="alert alert-success">Thanks for your comment!</div>');


    //IP|datetime|type|comment|name
    //10.1.1.1|nov 14th 5pm|comment|this is a new comment|john doe
    $.ajax({
			type: "POST",
			url: "../inc/log-comment.php",
			dataType: "json",
			data: { comment : comment,  name : name, identifier : identifier }
		})
  }

  function submitCommentError() {
    $('.alert-error').remove();
    $(".new-comment").append("<div class='alert alert-error'>* Please enter your name and a comment.</div>");
  }

  function appendComment(commenter_name, new_comment) {
    var comment;

    newComment = $('.comment:eq(0)').clone();
    newComment.find('.comment-name').text(commenter_name);
    newComment.find('.comment-time').text('Now');
    new_comment = new_comment.replace(/(?:\r\n|\r|\n)/g, '<br />');
    newComment.find('.comment-content').html(new_comment);

    newComment.hide().appendTo('.comments').fadeIn();
  }
});

$(document).ready(function() {

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



});

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
