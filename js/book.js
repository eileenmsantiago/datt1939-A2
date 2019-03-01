window.onload = function() {
    var nameEl = document.getElementById('name');

    nameEl.innerText = getCookie('firstname');

    var count = 0;
    
    if(getCookie('card')) {
        count++;
        var cardRedacted = document.getElementById('card-redacted');
        cardRedacted.style.display = 'none';
        
        var cardComplete = document.getElementById('card-complete');
        cardComplete.style.display = 'block';
    }

    if(getCookie('calendar')) {
        count++;
        var calendarRedacted = document.getElementById('calendar-redacted');
        calendarRedacted.style.display = 'none';
        
        var calendarComplete = document.getElementById('calendar-complete');
        calendarComplete.style.display = 'block'; //'block' TO SHOW/ display on page
    }

    if(getCookie('atari')) {
        count++;
        var atariRedacted = document.getElementById('atari-redacted');
        atariRedacted.style.display = 'none';

        var atariComplete = document.getElementById('atari-complete');
        atariComplete.style.display = 'block';
    }

    if(getCookie('tv')) {
        count++;
        var tvRedacted = document.getElementById('tv-redacted');
        tvRedacted.style.display = 'none';

        var tvComplete = document.getElementById('tv-complete');
        tvComplete.style.display = 'block';
    }

    if(getCookie('radio')) {
        count++;
        var radioRedacted = document.getElementById('radio-redacted');
        radioRedacted.style.display = 'none';

        var radioComplete = document.getElementById('radio-complete');
        radioComplete.style.display = 'block';
    }

    var itemCountEl = document.getElementById('item-count');
    itemCountEl.innerText = count;

}