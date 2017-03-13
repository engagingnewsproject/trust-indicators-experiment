<? if(!empty($comments)) {?>
    <div class="show-comments-wrap"><button class="btn show-comments">Show Comments</button></div>
    <section class="comments-section">
        <h2 class="comment-section-title">Comments</h2>
        <ul class="comments">
        <? foreach($comments as $comment) {?>
            <li class="comment">
                <h4 class="comment-info">
                    <span class="comment-name"><? echo $comment['name'];?></span>
                    <span class="comment-time"><? echo $comment['time'];?></span>
                </h4>
                <div class="comment-content">
                    <? echo $comment['comment'];?>
                </div>
            </li>
        <? }?>
        </ul>

        <div class="new-comment">
            <h3 class="add-comment-title">Add Comment</h3>
            <form class="add-comment">
                <label for="commenter-name">Name</label>
                <input type="text" class="form-control" name="commenter-name" id="commenter-name" placeholder="Enter Name" value="" >
                <label for="commenter-comment">Comment</label>

                <textarea class="form-control" rows="3" name="commenter-comment" id="commenter-comment" placeholder="Enter Comment"></textarea>

                <input type="hidden" id="comment-identifier" name="comment-identifier" value="<? echo $identifier;?>" />
                <input id="submit-comment" type="button" class="btn btn-submit" value="Submit">
            </form>
        </div>
    </section>
<? } ?>
