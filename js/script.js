fetch('https://GetSimpleCMS-CE-plugins.github.io/db.json')
.then((response) => response.json())
.then((data) => {

    data.forEach(el => {


        document.querySelector('.db').insertAdjacentHTML('afterbegin', `

<div class="db-item">
<h4>${el['name']}</h4>
<p class="db-item-info">${el['info']}</p>
<hr>
<p class="db-item-author">Author: ${el['author']}</p>
<a class="db-item-btn" href="${el['url']}">Download</a>
</div>


`)


    });


});