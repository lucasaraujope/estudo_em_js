const ul = document.querySelector("ul");

//adicionando o escutador de eventos na UL para escutar determinado evento nela
ul.addEventListener("scroll", () => {

  //criando uma condição onde, se o tamanho da linha for maior que 300 vai girar uma mensagem no console 
  //e o scroll vai descer mais suave e voltar para o top quando chegar ao final da lista  
  if (ul.scrollTop > 300) {
    console.log("Final do Scroll");

    //criando um objeto para dar funcionalidade a evento, utilizando o scrollto para levar o scroll até o top 0 no inicio da opagina e o behavior para deixar a animção mais suave
    ul.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});
