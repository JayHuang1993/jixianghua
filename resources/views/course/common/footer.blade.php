<?php if(!$is_ios): ?>
<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <a href="/"><img width="90%" src="/assets/logo.png"
                                 alt="吉祥花学习社区，发现学习乐趣"></a>
            </div>
            <div class="col-md-4 about">
                <span><a href="/index/about">关于我们</a></span>|
                <span><a href="/index/app">吉祥花学习社区APP</a></span><br>
            </div>
        </div>
    </div>
</footer>
<?php else: ?>
       <div style="width: 100%;height: 50px;"></div>
<?php endif; ?>

<script async="" src="/assets/index/haozhi_index_files/analytics.js"></script>
<section class="serch-enginne-course visible-lg" 　role="alert">
</section>
<div id="login-modal" class="modal is-login" data-url="/login/ajax"></div>
<div id="modal" class="modal" tabindex="-1"></div>
<div id="upload-image-modal" class="modal" tabindex="-1" aria-hidden="true" style="display: none;"></div>
<script src="/assets/index/haozhi_index_files/translator.min.js"></script>
<script src="/assets/index/haozhi_index_files/js"></script>
<script src="/assets/index/haozhi_index_files/sea.js"></script>
<script src="/assets/index/haozhi_index_files/seajs-style.js"></script>
<script src="/assets/index/haozhi_index_files/seajs-text.min.js"></script>
<script>
    $(function () {
        if($('html').width()<550){
            $('.pic').height('150px')
        }
        $('#loading_box').hide();
    });
</script>
</body>
</html>