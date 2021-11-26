(() => {
    window.onload = () => {
        let perf = performance.getEntriesByType("navigation")[0];
        let nodeItem = document.createElement('p');
        nodeItem.innerHTML = "Время загрузки страницы " + (perf.loadEventStart - perf.loadEventEnd).toFixed(3) + "ms";
        document.querySelector('footer').appendChild(nodeItem);
    };
} )();