


var btnClick = document.getElementById("add");


btnClick.addEventListener("click", function (){
    var noteArea = document.getElementById("notesArea");
    var title = document.getElementById("Title");
    var note = document.getElementById("notes");
    if(!((title.value==null || title.value=="")||(note.value==null||note.value==""))){


        var newNote = document.createElement("div");
        newNote.className = "note";
        

        var notetitle = document.createElement("div");
        notetitle.className = "noteTitle";

        var head = document.createElement("h3");
        head.className="titletext";
        head.appendChild(document.createTextNode(title.value));

        var delbut = document.createElement("button");
        delbut.className = "btn";
        delbut.setAttribute("onclick", "delNote(this)");
        var delbutsymbol = document.createElement("i");
        delbutsymbol.className = "fa-solid fa-trash" ;
        
delbut.appendChild(delbutsymbol);

        notetitle.appendChild(head);
        notetitle.appendChild(delbut);

        newNote.appendChild(notetitle);

        var notecont = document.createElement("div");
        notecont.className = "noteCont";
        var content = document.createElement("textarea");
        content.setAttribute("disabled", true);
        content.appendChild(document.createTextNode(note.value));
        notecont.appendChild(content);

        newNote.appendChild(notecont);
        noteArea.appendChild(newNote);
        title.value="";
        note.value="";
    }
}
)

function delNote(ele){

    var delnote = ele.parentNode.parentNode;
    delnote.remove();
}