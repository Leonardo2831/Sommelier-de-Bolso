export default function initClickOutside(open, setOpen, menuRef){
    const clickOutside = (event) => {        
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target)
        ) {
            menuRef.current.classList.remove('active');
            setOpen(false);
        }
    }

    if(open){
        menuRef.current.classList.add('active');
    }

    document.addEventListener('click', clickOutside);
    return () => document.removeEventListener('click', clickOutside);
}