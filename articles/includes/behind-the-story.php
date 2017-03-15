<section class="behind-the-story well">
    <h2 class="behind-the-story__title">Behind the Story</h2>

    <h3>Why we wrote it</h3>
    <?php echo $why_wrote;?>

    <h3>Who we spoke to</h3>
    <ul>
        <?php foreach($who_spoke_to as $who) {
            echo "<li>$who</li>";
        }?>
    </ul>

    <h3>Corrections</h3>
    <?php echo $corrections;?>

    <h3>Who we linked to</h3>
    <ul>
        <?php foreach($who_linked_to as $who) {
            echo "<li>$who</li>";
        }?>
    </ul>

</section>
