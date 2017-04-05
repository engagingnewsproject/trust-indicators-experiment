
<footer class="colophon container container--wide">
    <div class="row row--wide">
        <p class="copyright center">This material may not be published, broadcast, rewritten, or redistributed.<br/>&copy; <? echo Date('Y');?> The News Beat, LLC. All Rights Reserved.</p>
    </div>
</footer>

<?php
// only show analytics if not on dev
// if(!strpos($current_url, '://dev') && !strpos($current_url, '://localhost')) :
    include('google-analytics.php');
// endif;?>
<script>
    var userID = '<?php echo uniqid('trust_');?>';
    var pageTitle = '<?php echo str_replace(' ', '-', $title);?>';
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="../../dist/js/scripts.js"></script>
</body>
</html>
