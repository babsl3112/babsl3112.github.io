
(function() {
    
    var maxScroll = 522;
    var minScroll = 170;
    var maxRotation = -40;
    var maxTranslation = 400;
    var minOpacity = 0.2;
    
    document.addEventListener('scroll', function(event) {
        var scrollTop = window.visualViewport.pageTop;
        
        var rotation = 0;
        var translation = 0;
        var opacity = 1;
        if (scrollTop > minScroll && scrollTop < maxScroll) {
            var factor = (scrollTop - minScroll) / (maxScroll - minScroll);
            rotation = factor * maxRotation;
            translation = factor * maxTranslation;
            opacity = 1 - factor * (1 - minOpacity);
        } else if (scrollTop > maxScroll) {
            rotation = maxRotation;
            translation = maxTranslation;
            opacity = minOpacity;
        }
        
        var style = document.querySelector('.logo').style;
        style.transform = 'rotateX(' + rotation + 'deg) translate(0, ' + translation + 'px)';
        style.opacity = opacity;
    });
    
})();