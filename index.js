
document.querySelectorAll('.toggle-btn').forEach(i => {
    i.addEventListener('click', (e) => {
        const isExpanded = e.target.dataset['expand'] === '1';
        const content = e.target.nextElementSibling;
        const iconElem = e.target.children[1];

        if(isExpanded){
            //collapse
            iconElem.innerHTML = '&plus;';
            content.style.display = 'none';
        } else {
            //expand
            iconElem.innerHTML = '&minus;';
            content.style.display = 'block';
        }
        e.target.dataset['expand'] = isExpanded ? '0' : '1';
    });
});
