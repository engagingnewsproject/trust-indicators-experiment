<main id="content" class="container" role="main">
    <aside class="trust-project">
        <a href="../about-the-trust-project/?referrer=<?php echo urlencode(get_current_url());?>">
            <?php echo svg('trust-project');?>
            <h4 class="trust-project__title">Trust Project</h4>
        </a>
    </aside>
    <article class="article">
        <header class="article__header">
            <h2 class="article__title"><?php echo $title;?></h2>
            <div class="byline">
                <time class="byline__pubdate" pubdate="pubdate"><?php echo $pubdate;?></time>
                in
                <span class="byline__category"><?php echo $article_category;?></span>
                <section class="byline__content">
                    <?php include('article-types.php');?>
                </section>
            </div>
            <button id="authorBtn" class="author author__button">
                <img class="author__image" src="<?php echo $author_image;?>" />
                <p class="author__name">By <?php echo $author;?></p>
            </button>
            <?php include('author-bio.php');?>
        </header>

        <img class="article-img article-img--featured" src="<?php echo $featured_img;?>" />

        <? echo $article;?>

        <?php
        if($identifier === 'truth') {
            include('behind-the-story.php');
        }

        include('comments.php');

        ?>

    </article>
</main>
