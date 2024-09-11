document.querySelectorAll('.position-left').forEach(element=>
    {
        const leftValue = element.getAttribute('data-left');
        element.style.left = leftValue;
    })