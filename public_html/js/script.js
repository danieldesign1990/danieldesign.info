'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // Links
    document.querySelectorAll('a[href^="#"').forEach(link => {

        link.addEventListener('click', function(e) {
            e.preventDefault();
    
            let href = this.getAttribute('href').substring(1);
    
            const scrollTarget = document.getElementById(href);
    
            const topOffset = 0; 
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
    
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Tabs
    const tabs = document.querySelectorAll('.panel'),
          tabsParent = document.querySelector('.tabs');

    function hideTab() {
        tabs.forEach(item => {
            item.classList.add('panel-default');
        });
    }

    function showTab(i) {
        tabs[i].classList.remove('panel-default');
    }

    hideTab();
    showTab(2);

    tabsParent.addEventListener('click', (event) => {
        const target = event.target.closest('div');

        tabs.forEach((item, i) => {
            if (target == item) {
                hideTab();
                showTab(i);
            }
        });
    });
    
});