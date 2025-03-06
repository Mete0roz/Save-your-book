const library = {
    Name: "",
    Author: "",
    Pages: "",
};

function collectBookInfo() {
    let newName = document.querySelector("#bookName").value;
    let newAuthor = document.querySelector("#author").value;
    let newPages = document.querySelector("#pages").value;

   
    if (newName === "" || newAuthor === "" || newPages === "") {
        alert("Por favor, preencha todos os campos!");
        return false; 
    }
   
    library.Name = newName;
    library.Author = newAuthor;
    library.Pages = newPages;

    let bookInfo = document.createElement("h3");
    bookInfo.textContent = `Book: ${library.Name} Author: ${library.Author} Pages: ${library.Pages}`;

    let img= document.createElement("img");
    img.src = '/images/icons8-lixo.svg';
    img.width = 40;
    img.style.cursor = 'pointer';

    let savedBook = document.querySelector("#savedBook");
    savedBook.appendChild(bookInfo);
    bookInfo.appendChild(img);

    document.querySelector("#bookName").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    
    img.addEventListener('click', function(){
        bookInfo.remove();

        bookCount--;
});

    return true; 
}

let bookCount = 0;

const btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
    let maxBooks = 10;

    if (bookCount >= maxBooks) {
        alert("Você atingiu o número máximo de livros");
        btn.disabled = true;
        return;
    }
    
    
    const success = collectBookInfo();
    if (success) {
        bookCount++;
        
       
        if (bookCount >= maxBooks) {
            alert("Você atingiu o número máximo de livros");
            btn.disabled = true;
        }
    }
});



