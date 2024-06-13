// Adicionando animação na página principal
$('document').ready(() => {
    // Animação do Menu Hamburguer
    $('.burguer_menu').on('click', () => {
        $('.nav_menu').slideToggle();
    })

    // Animação dos botões de ver mais dos catalogos
    $('.view_more').on('click', () => {
        $('.hidden_list').slideToggle();

    })
    $('.view_more2').on('click', () => {
        $('.hidden_list2').slideToggle();
    })
})

// Tirando o padrão do formulário
let form = document.querySelector(".login__form");
form.addEventListener('submit',(event)=>{
    event.preventDefault();
})