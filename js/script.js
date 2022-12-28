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


document.querySelector('.title-search').addEventListener('keyup', (e) => {

    document.querySelectorAll('.db-item').forEach(
        x => {
            x.style.display = "none";
        }
    );

    document.querySelectorAll('.db-item').forEach(c=>{

        if(c.querySelector('h4').innerHTML.toLowerCase().indexOf(document.querySelector('.title-search').value.toLowerCase()) > -1){
            c.style.display="block";
        }

    })

});