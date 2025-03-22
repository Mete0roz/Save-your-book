class Library {

    constructor(Name, Author, Pages){
        this.Name = Name;
        this.Author = Author;
        this.Pages = Pages;
        this.bookCount = 0;
    }

    collectBookInfo(){
        let newName = document.querySelector("#bookName").value;
        let newAuthor = document.querySelector("#author").value;
        let newPages = document.querySelector("#pages").value;
        if (newName === "" || newAuthor === "" || newPages === ""){
            alert("Fill all input fields!");
            return false;
        }
        this.Name = newName;
        this.Author = newAuthor;
        this.Pages = newPages;   

        return true;
    }

    displayBook(){
        const bookInfo = document.createElement("div");
        bookInfo.textContent = `Book: ${this.Name} Author: ${this.Author} Pags: ${this.Pages}`;
        const img = document.createElement("img");
        img.src = "/images/icons8-lixo.svg";
        img.width = 40;
        img.style.cursor = 'pointer';

        let myBook = document.querySelector("#savedBook");
        myBook.appendChild(bookInfo);
        bookInfo.appendChild(img);

        document.querySelector("#bookName").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#pages").value = "";

        img.addEventListener("click", () =>{   
            bookInfo.remove();
            this.bookCount--;
        
        });
    }

    buttons(){
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", (e) =>{

        e.preventDefault();
    let maxBooks = 10;
    if (this.bookCount === maxBooks){
        alert("Max books number reached!");
        btn.disabled = true;
        return;
    }

    const sucess = this.collectBookInfo();
    if (sucess){
        this.bookCount++;
        this.displayBook();
    }
    })
    }
};


const run = new Library("","","");

run.buttons();