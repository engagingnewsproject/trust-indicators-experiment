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

    // hide footnotes on load
    if($('.footnote__button').length) {
        $('.footnote__button').addClass('footnote--closed');
    }

    // show footnote
    $('.footnote__button').click(function(e) {
        e.preventDefault();
        if($(this).hasClass('footnote--closed')) {
            footnoteOpen(this);
        } else {
            footnoteClosed(this);
        }
    });

    function svgClose() {
        return '<svg class="icon icon--close"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"></use></svg>';
    }

    function footnoteOpen(e) {
        $(e).removeClass('footnote--closed');
        $(e).addClass('footnote--open');
        $(e).html(svgClose());

    }

    function footnoteClosed(e) {
        $(e).addClass('footnote--closed');
        $(e).removeClass('footnote--open');

        var footnoteId = $(e).data('footnote-id');
        $(e).html('<sup>'+footnoteId+'</sup>');
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






});
