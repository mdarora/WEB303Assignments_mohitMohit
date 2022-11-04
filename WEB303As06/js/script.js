$(function(){
    $('.accordion').on('click', '.accordion-control', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next('.accordion-panel').not(':animated').slideToggle();

        const listItems = $(this).parent().siblings();
        listItems.each((index, item)=>{
            $(item.children[0]).removeClass('active');
            $(item.children[1]).slideUp();
        });
    });


    $('.tab-list').each(function() { 
        var $this = $(this);
        var $tab = $this.find('li.active');
        var $link = $tab.find('a');
        var $panel = $($link.attr('href')); 

        $this.on('click', '.tab-control', function(e) { 
            e.preventDefault(); 
            var $link = $(this);
            var id = this.hash;
            if (id && !$link.parent().is('.active')) {
                $panel.removeClass('active');
                $tab.removeClass('active');
                $panel = $(id).addClass('active');
                $tab = $link.parent().addClass('active');
            }
        });
    });
    
    $('.tab-list-aw').each(function() { 
        var $this = $(this);
        var $tab = $this.find('li.active');
        var $link = $tab.find('a');
        var $panel = $($link.attr('href')); 

        $this.on('click', '.tab-control-aw', function(e) { 
            e.preventDefault(); 
            var $link = $(this);
            var id = this.hash;
            if (id && !$link.parent().is('.active')) {
                $panel.removeClass('active');
                $tab.removeClass('active');
                $panel = $(id).addClass('active');
                $tab = $link.parent().addClass('active');
            }
        });
    });
});