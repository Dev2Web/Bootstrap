$("#main-nav a").on('click', function (event){
    if(this.hash !==""){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().scrollTop
        }, 800, function () {
            window.location.hash = hash;
        });
    }
});