<!DOCTYPE html>
<html>
<head>
    <?php
        $user_ip = get_the_ip();
        $current_url = get_current_url();
    ?>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><? echo $title;?> | The News Beat</title>

    <?php $current_url = "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";?>
    <meta property="og:site_name" content="The News Beat"/>
    <meta property="og:title" content="<? echo $title;?>"/>
    <meta property="og:image" content="<? echo dirname(dirname($current_url)) .'/articles/'. $featured_img;?>"/>
    <meta property="og:url" content="<? echo $current_url;?>"/>
    <meta property="og:description" content="<? echo strip_tags(substr($article,0,240))?>&hellip;" />

    <link rel="stylesheet" href="../dist/css/styles.min.css" />
    <!-- Typekit Fonts -->
    <script src="https://use.typekit.net/rca2zto.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>

    <!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
    <![endif]-->


        <?php
        // only show analytics if not on dev
        if(!strpos($current_url, '://dev') && !strpos($current_url, '://localhost')) :?>
            <script>
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-52471115-3', 'auto');
              ga('send', 'pageview');

            </script>
        <? endif;?>

    </head>

    <body>
        <!-- facebook -->
        <script>
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
      </script>

      <!-- twitter widget -->
      <script>
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
      </script>



  <div id="user-ip" class="hidden" data-ip="<? echo $user_ip;?>"></div>
  <div class="screen-reader-text" style="position: absolute; width: 0; height: 0;">
      <?php include('../dist/svg/svg.svg');?>
  </div>
