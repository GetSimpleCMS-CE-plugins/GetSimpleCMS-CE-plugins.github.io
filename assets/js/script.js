fetch('https://GetSimpleCMS-CE-plugins.github.io/db.json')
    .then((response) => response.json())
    .then((data) => {

        data.forEach(el => {

            document.querySelector('.db').insertAdjacentHTML('beforeend', `

<div class="db-item" id="${el['name'].replace(/ /g, '-').replace(/[^\w\s]|_/g, '').toLowerCase()}">
	<div class="version">
		<span class="version__content">v. ${el['version']}</span>
	</div>
	<h4>${el['name']}</h4>
	<p class="db-item-info">${el['info']}</p>
	<hr>
	<p class="db-item-author"> ${el['author']} <span class="db-item-update">${el['update']}</span> <a href="${el['repo']}" target="_blank" class="db-item-repo">Repo</a></p>
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


        if(c.querySelector('.db-item-info').innerHTML.toLowerCase().indexOf(document.querySelector('.title-search').value.toLowerCase()) > -1){
            c.style.display="block";
        }

    })

});
