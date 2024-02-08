function mobileNav() {
	
	const navBtnOpen = document.querySelector('#modalOpen');
    const navBtnClose = document.querySelector('#modalClose');


	const navOverlay = document.querySelector('.mobile-nav-overlay');
    const nav = document.querySelector('.mobile-nav');

    
    navBtnOpen.onclick = toggleMobileNav;
    navBtnClose.onclick = toggleMobileNav;
    navOverlay.onclick = toggleMobileNav;
    
    function toggleMobileNav () {
        navOverlay.classList.toggle('mobile-nav-overlay--open');
        nav.classList.toggle('none');
        document.body.classList.toggle('no-scroll');
        console.log('ok')
        
    }


}

export default mobileNav;