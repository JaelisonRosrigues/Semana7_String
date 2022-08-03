function criar_lista(q, p) {
  var q = document.getElementById("q").value;
  var palavra = document.getElementById("nome").value;
  for (a = 0; a < q; a++) {
    var lis = document.createElement("li");
    var t = document.createTextNode(palavra + " " + (a+1) );
    
    lis.appendChild(t);
    document.getElementById("lista").appendChild(lis);
    if (palavra ==""){
      palavra="Texto"
    }

  }
}

