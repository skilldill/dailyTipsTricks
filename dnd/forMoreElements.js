const allGrabbable = document.querySelectorAll('[grabbable]');

function handleMouseDown(event) {
    const { clientX, clientY } = event;
    
    event.target.classList.add('boxGrabbing');

    const halfWidth = event.target.offsetWidth / 2;
    const halfHeight = event.target.offsetHeight / 2; 

    event.target.style.top = (clientY - halfHeight) + 'px';
    event.target.style.left = (clientX - halfWidth) + 'px';

    event.target.setAttribute('grabbed', 'true');
}

function handleMouseMove(event) {
    if (!event.target.getAttribute('grabbed'))
        return;
    
    const { clientX, clientY } = event;

    const halfWidth = event.target.offsetWidth / 2;
    const halfHeight = event.target.offsetHeight / 2; 

    event.target.style.top = (clientY - halfHeight) + 'px';
    event.target.style.left = (clientX - halfWidth) + 'px';
}

function handleMouseUp(event) {
    const halfWidth = event.target.offsetWidth / 2;
    const halfHeight = event.target.offsetHeight / 2; 
    event.target.removeAttribute('grabbed');
    event.target.classList.remove('boxGrabbing');
    event.target.style.top = 'calc(50% - ' + halfHeight + 'px)';
    event.target.style.left = 'calc(50% - ' + halfWidth + 'px)';
    
}

function addGrabbableForAll() {
    for (let item of allGrabbable) {
        item.addEventListener('mousedown', handleMouseDown);
        item.addEventListener('mousemove', handleMouseMove);
        item.addEventListener('mouseup', handleMouseUp);
    }
}

addGrabbableForAll();
