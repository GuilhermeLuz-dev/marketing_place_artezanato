// Adicionando animação no menu Hamburguer para telas de celulares.
$('document').ready(()=>{
    $('.burguer_menu').on('click', ()=>{
        $('.nav_menu').slideToggle();
    })
})