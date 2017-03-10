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
    var closedElements = ['footnote', 'byline', 'author'];

    for(var i = 0; i < closedElements.length; i++) {
        console.log(closedElements[i]);
        // hide closedElements on load
        if($('.'+closedElements[i]+'__button').length) {
            $('.'+closedElements[i]+'__button').addClass(closedElements[i]+'--closed');
        }
    }


    // show footnote
    $('.footnote__button').click(function(e) {
        e.preventDefault();
        if($(this).hasClass('footnote--closed')) {
            accordionOpen(this, 'footnote');
            $(this).html(svgClose());
        } else {
            accordionClosed(this, 'footnote');
            var footnoteId = $(this).data('footnote-id');
            $(this).html('<sup>'+footnoteId+'</sup>');
        }
    });

    // show byline
    $('.byline__button').click(function(e) {
        e.preventDefault();
        if($(this).hasClass('byline--closed')) {
            accordionOpen(this, 'byline');
            $(this).html(svgClose());
        } else {
            accordionClosed(this, 'byline');
            $(this).text('Learn More');
        }
    });

    // show author
    $('.author__button').click(function(e) {
        e.preventDefault();
        if($(this).hasClass('author--closed')) {
            accordionOpen(this, 'author');
            $('.author__name', this).append(svgClose());
        } else {
            accordionClosed(this, 'author');
            $('.author__name', this).children().last().remove();
        }
    });


    function svgClose() {
        return '<svg class="icon icon--close"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"></use></svg>';
    }

    function accordionClosed(e, classN) {
        $(e).addClass(classN+'--closed');
        $(e).removeClass(classN+'--open');
    }

    function accordionOpen(e, classN) {
        $(e).removeClass(classN+'--closed');
        $(e).addClass(classN+'--open');
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
