<main id="content" class="container" role="main">
    <aside class="trust-project">
        <a href="about-trust-project.php?referrer=<?php echo urlencode(get_current_url());?>">
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
                <span class="byline__category"><?php echo $article_category;?></span> <button class="byline__button">Learn More</button>
                <section class="byline__content">
                    <?php include('article-types.php');?>
                </section>
            </div>
            <button class="author author__button">
                <img class="author__image" src="<?php echo $author_image;?>" />
                <p class="author__name">By <?php echo $author;?></p>
            </button>
            <section class="author__content">
                <div class="author__bio">
                    <p>Jim is a graduate of Emerson College’s School of Journalism. He has worked at numerous news outlets, including the Anoka County Union and the Star Tribune. He covered state and national politics for the St. Paul Pioneer Press, and he started his current job with The News Beat in 2015. From 2006-2009, Jim stepped away from the newsroom to work as communications director for the American Academy of Arts &amp; Sciences. Jim is a proud native of Ham Lake, Minnesota, where he likes to spend a few weeks each summer on the old family farm.</p>

                    <h4>Recent stories for The News Beat</h4>
                    <ul>
                        <li>Changes Afoot for Academics Seeking Federal Science Grants</li>
                        <li>Bridging the Political Divide with Art</li>
                        <li>Q &amp; A with Trump’s Science Advisor</li>
                    </ul>

                    <h4>Contact details</h4>
                    <p>jimphipps@thenewsbeat.com</p>
                </div>
                <div class="author__facts">
                    <h4>Location</h4>
                    <p>New York, NY</p>
                    <h4>Languages spoken</h4>
                    <p>English, some Spanish</p>
                    <h4>Areas of expertise</h4>
                    <p>U.S. politics, science, art</p>
                </div>
            </section>
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
