function parallaxEffect() {
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        let ceu = document.getElementById('ceu');
        let montanha = document.getElementById('montanha');
        let sol = document.getElementById('sol');
        let nuvem = document.getElementById('nuvem');
        let arvore = document.getElementById('arvore');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');

        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            ceu.style.top = value / 10 + 'px';
            sol.style.top = '-' + value * 0.10 + 'px';
            sol.style.left = '-' + value * 0.25 + 'px';
            nuvem.style.left = value * 0.60 + 'px';
            montanha.style.top = value * 0.40 + 'px';
            arvore.style.left = value * 0.10 + 'px';
            text.style.marginLeft = value * 1 + 'px';
            text.style.marginTop = value * 2 + 'px';
            btn.style.marginTop = value * 2 + 'px';
            btn.style.marginLeft = value * 1 + 'px';
        })
    }
}