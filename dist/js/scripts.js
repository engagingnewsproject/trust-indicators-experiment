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

    // add in learn more byline button
    $('.byline__category').after('<button id="bylineBtn" id="bylineBtn" class="byline__button">Learn More</button>');
    $('.byline__content').append('<button data-btn-id="bylineBtn" class="accordion__second-close">'+svgClose()+' Close Section</button>');
    $('.author__content').append('<button data-btn-id="authorBtn" class="accordion__second-close">'+svgClose()+' Close Section</button>');

    for(var i = 0; i < closedElements.length; i++) {
        // hide closedElements on load
        if($('.'+closedElements[i]+'__button').length) {
            $('.'+closedElements[i]+'__button').addClass('accordion--closed').addClass('accordion__button');
            $('.'+closedElements[i]+'__content').addClass('accordion__content');
        }
    }

    var authorBtn = {
        'button': $('.author__button'),
        'replaceButton': false,
        'closeLocation': $('.author__name'),
        'content': '',
    };

    var bylineBtn = {
        'button': $('.byline__button'),
        'replaceButton': true,
        'closeLocation': $('.byline__button'),
        'content': 'Learn More',
    };

    var footnoteBtn = {
        'button': '',
        'replaceButton': true,
        'closeLocation': '',
        'content': '',
    };

    // show footnote
    $('.footnote__button').click(function(e) {
        e.preventDefault();

        var footnoteId = $(this).data('footnote-id');

        footnoteBtn = {
            'button': $(this),
            'replaceButton': true,
            'content': '<sup>'+footnoteId+'</sup>',
            'closeLocation': $(this),
        };

        process_accordion(footnoteBtn);
    });

    // show byline
    /*$(document).on('click', '.byline__button', function(e) {
        e.preventDefault();
        process_accordion(bylineBtn);
    });

    // show author
    $('.author__button').click(function(e) {
        e.preventDefault();
        process_accordion(authorBtn);
    });*/

    function process_accordion(btn) {
        if(btn.button.hasClass('accordion--closed')) {
            accordionOpen(btn.button);
            addCloseIcon(btn);
        } else {
            accordionClosed(btn.button);
            removeCloseIcon(btn);
        }
    }

    function addCloseIcon(btn) {
        if(btn.replaceButton === true) {
            btn.button.html(svgClose());
        } else {
            btn.closeLocation.append(svgClose());
        }
    }

    function removeCloseIcon(btn) {
        // remove the SVG Icon
        if(btn.replaceButton === true) {
            btn.button.html(btn.content);
        } else {
            btn.closeLocation.children().remove();
        }
    }

    // second close for long content

    function moveToBtn(btn) {
        var distanceFromTopOfViewport = btn.button[0].getBoundingClientRect().top;
        // document.getElementById(btnId).getBoundingClientRect().top;
        // see if we're within -20px and 100px of the question (negative numbers means we've scrolled PAST (down) the quiz)
        if( -20 < distanceFromTopOfViewport && distanceFromTopOfViewport < 100) {
            // Question likely within viewport. Do not scroll.
        } else {
            // let's scroll them to the top of the next question (some browsers like iPhone Safari jump them way down the page)
            scrollBy(0, (distanceFromTopOfViewport - 10));
        }
    }

    $(document).on('click', '.accordion__button', function(e) {
        e.preventDefault();
        var btnId = $(this).attr('id');
        // get access to the global btn variable
        btn = eval(btnId);
        process_accordion(btn);
    });

    $(document).on('click', '.accordion__second-close', function(e) {
        e.preventDefault();
        var btnId = $(this).data('btn-id');
        // get access to the global btn variable
        btn = eval(btnId);
        process_accordion(btn);
        // move them to the location of the closed section
        moveToBtn(btn);
    });

    function svgClose() {
        return '<svg class="icon icon--close"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"></use></svg>';
    }

    function accordionClosed(e) {
        e.addClass('accordion--closed');
        e.removeClass('accordion--open');
    }

    function accordionOpen(e) {
        e.removeClass('accordion--closed');
        e.addClass('accordion--open');
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
