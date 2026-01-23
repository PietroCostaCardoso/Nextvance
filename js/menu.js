/**
 * NEXTVANCE - Digital Strategy & Creation Agency
 * @author: Pietro Costa Cardoso
 * @link: https://github.com/PietroCostaCardoso
 * Copyright (c) 2026.
 * Protegido sob a Licença MIT.
 */

console.log(
  "%c Nextvance - Desenvolvido por Pietro Costa Cardoso %c https://github.com/PietroCostaCardoso",
  "color: white; background: #007bff; padding: 5px 10px; border-radius: 5px; font-weight: bold;",
  "color: #007bff; font-weight: bold;"
);

function Menu(config){
    this.nav = ( typeof config.container === 'string') ? document.querySelector(config.container) : config.container
    
    this.btn = ( typeof config.toggleBtn === 'string') ? document.querySelector(config.toggleBtn) : config.toggleBtn
    
    this.maxWidth = config.widthEnabled || false;
    
    let _opened = false;
    const _this = this;
    
    this.btn.removeAttribute('style')
    //closeMenu()
    
    if(this.maxWidth){
        window.addEventListener('resize', e => {
            if(window.innerWidth > _this.maxWidth){
                _this.nav.removeAttribute('style')
                _opened = true;
            } else if(!this.nav.getAttribute('style')){
                closeMenu();
            }
        })
        
        if(window.innerWidth <= _this.maxWidth){
            closeMenu();
        }
    }
    
    this.btn.addEventListener('click', openOrClose )
    
    function openOrClose(){
        if(!_opened){
            openMenu()
        } else {
            closeMenu()
        }
    }
    
    function openMenu(){
        const _top = _this.nav.getBoundingClientRect().top + 'px'
        
        const _style = {
            maxHeight: 'calc(100vh - '+ _top +' )',
            overflow: 'hidden'
        }
        
        applyStyleToNav(_style)
        
        _opened = true;
    }
    
    function applyStyleToNav(_style){
        Object.keys(_style).forEach( stl => {
            _this.nav.style[stl] = _style[stl]
        } )
    }
    
    function closeMenu(){
        const _style = {
            maxHeight: '0px',
            overflow: 'hidden'
        }
        
        applyStyleToNav(_style)
        
        _opened = false;
    }
    
}

