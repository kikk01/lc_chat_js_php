function getMessages(){
    const requeteAjax = new XMLHttpRequest();
    requeteAjax.open('GET', 'handler.php')

    requeteAjax.onload = function() {
        const resultat = JSON.parse(requeteAjax.responseText);
        const html = resultat.reverse().map(function(message){
            return `
                <div class="message">
                    <span class="date">${message.created_at.substring(11, 16)}</span>
                    <span class="author">${message.author}</span> : 
                    <span class="content">${message.content}</span>
                </div>
            `
        }).join('');

        const messages = document.querySelector('.messages');
        messages.innerHTML = html;
        messages.scrollTop = messages.scrollHeight;

    }

    requeteAjax.send();
}