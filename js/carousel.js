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


function Carousel(config){
    this.container = ( typeof config.container === 'string') ? document.querySelector(config.container) : config.container
    
    this.itens = (typeof config.itens === 'string') ? this.container.querySelectorAll(config.itens) : config.itens
    
    this.btnPrev = (typeof config.btnPrev === 'string') ? this.container.querySelector(config.btnPrev) : config.btnPrev
    
    this.btnNext = (typeof config.btnNext === 'string') ? this.container.querySelector(config.btnNext) : config.btnNext
    
    const _this = this;
    let _currentSlide = 0
    
    init()
    
    function init(){
        const _show = _this.container.querySelectorAll('.show')
        
        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('show')
        })
        _this.itens[0].classList.add('show')
        _this.btnNext.removeAttribute('style')
        _this.btnPrev.removeAttribute('style')
        
        addListeners()        
    }
    
    function addListeners(){
        _this.btnNext.addEventListener('click', showNextSlide)
        _this.btnPrev.addEventListener('click', showPrevSlide)
    }
    
    function showNextSlide(){
        _currentSlide++;
        showSlide()
    }
    
    function showPrevSlide(){
        _currentSlide--;
        showSlide()
    }
    
    function showSlide(){
        const qtd = _this.itens.length;
        let slide = _currentSlide % qtd;
        slide = Math.abs(slide);
        
        _this.container.querySelector('.show').classList.remove('show');
        _this.itens[slide].classList.add('show')
        
    }
    

}
