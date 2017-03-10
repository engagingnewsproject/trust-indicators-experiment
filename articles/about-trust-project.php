<?php
include ('../inc/functions.php');
include('includes/head.php');
include('includes/header.php');
?>

<main id="content" class="container about-trust-project" role="main">
    <article class="article">
        <header class="article__header">
            <?php echo svg('trust-project');?>
            <h4 class="trust-project__title">Trust Project</h4>
            <h1 class="article__title">About the Trust Project</h1>
        </header>

        <p>The Trust Project is a collaboration between academics and journalists. Its goal is to create strategies that fulfill journalism’s basic pledge: <strong>to serve society with a truthful, intelligent and comprehensive account of ideas and events</strong>. To that end, The News Beat adheres to a set of best practices and policies as outlined by the Trust Project.</p>

        <nav class="long-page-nav"><a href="<?php echo get_referral_url();?>">Go Back to the Article</a></nav>

        <nav id="table-of-contents">
            <h3>Table of Contents</h3>
            <ul>
                <li><a href="#ethics">Ethics­</a></li>
                <li><a href="#fact">Fact-checking</a></li>
                <li><a href="#ownership">Ownership structure­</a></li>
                <li><a href="#diversity">Diversity</a></li>
                <li><a href="#corrections">Corrections­</a></li>
                <li><a href="#editorial">Editorial independence­</a></li>
            </ul>
        </nav>

        <h3 id="ethics">Ethics Statement</h3>
        <p>At The News Beat, we believe that public enlightenment is the forerunner of justice and the foundation of democracy. Ethical journalism strives to ensure the free exchange of information that is accurate, fair and thorough. An ethical journalist acts with integrity. We declare the following four principles as the foundation of ethical journalism and encourages their use in its practice by everyone who works for The News Beat:</p>

        <ol>
            <li>Seek truth and report it</li>
            <li>Minimize harm</li>
            <li>Act independently</li>
            <li>Be accountable and transparent</li>
        </ol>

        <?php echo internal_nav();?>

        <h3 id="fact">Fact-Checking Standard</h3>
        <p>The News Beat commits to do its best to publish accurate information across all of its content. We take many steps to ensure accuracy:  We investigate claims with skepticism; question assumptions; challenge conventional wisdom; confirm information with subject-matter experts; and seek to corroborate what sources tell us by talking with other informed people or consulting documents. We verify content, such as technical terms, statistics, and the like, against source documents or make clear who is providing the information. We may share relevant portions of a story with a primary source or an outside expert to verify them. We stand by the information as accurate, and if it’s not, we will change it as quickly as possible and be transparent with our readers about the magnitude of the error.</p>

        <p>We guide our journalists to ask the following questions when double-checking information in a quest for the truth.</p>

        <ul>
            <li>How do you know?</li>
            <li>How can you be sure?</li>
            <li>Where is the evidence?</li>
            <li>Who is the source, and how does the source know?</li>
            <li>What is the supporting documentation?</li>
        </ul>

        <p>We welcome feedback from our readers and sources regarding the information that we publish.</p>

        <?php echo internal_nav();?>

        <h3 id="ownership">Ownership Structure</h3>
        <p>The News Beat is committed to transparency in our ownership structure and funding sources. We cite potential conflicts of interest on the same page as the relevant work. We are part of a publicly traded company and business decisions, but not news decisions, must take shareholder value in mind.</p>

        <?php echo internal_nav();?>

        <h3 id="diversity">Diversity Policy</h3>
        <p>Inclusiveness is at the heart of thinking and acting as journalists. The complex issues we face as a society require respect for different viewpoints. Race, class, generation, gender, and geography all affect one’s point of view. Reflecting these differences in our reporting leads to better, more nuanced stories and a better-informed community.</p>

        <p>We are interested in hearing from different ethnic, civic, and business groups in the communities we serve. Please let us know about stories in your neighborhood. For example, we report openly and honestly about every side of immigration, including any negative effects. Furthermore, we seek diverse voices in our management and reporting staff.</p>

        <?php echo internal_nav();?>

        <h3 id="corrections">Corrections Policy and Practice</h3>
        <p>The News Beat is committed to telling readers when an error has been made, the magnitude of the error, and the correct information, as quickly as possible. This commitment and transparency is applicable to small errors as well as large, to short news summaries as well as large feature pieces. If our audiences cannot trust us to get the small things right, how can they trust us on the big things?</p>

        <?php echo internal_nav();?>

        <h3 id="editorial">Statement on Editorial Independence</h3>
        <p>Our newsgathering is independent of commercial or political interests. We do not accept gifts, including paid travel, in order to avoid any conflict-of-interest or appearance thereof. When we rely on an organization for a product or access to an event, we are transparent about the relationship and note it within the relevant work. The newsroom is insulated from advertisers and underwriters by a firewall.</p>

        <?php echo internal_nav();?>

    </article>
</main>

<?php include('includes/footer.php');?>
