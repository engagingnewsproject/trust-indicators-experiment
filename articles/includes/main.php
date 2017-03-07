<main id="content" class="container" role="main">
    <article class="article">
        <header class="article-header">
            <h2 class="article-title"><? echo $title;?></h2>
            <p class="byline">By <span class="author"><?echo $author;?></span> <time class="pubdate" pubdate="pubdate"><? echo $pubdate;?></time></p>
        </header>

        <?php echo social_share('top');?>

        <img class="article-img article-img--featured" src="<? echo $featured_img;?>" />

        <? echo $article;?>

        <?php include('comments.php');?>

        <?php echo social_share('bottom');?>
        
    </article>
</main>
