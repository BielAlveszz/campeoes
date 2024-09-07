function pesquisar() {
    let section = document.getElementById("todas-copas");
    let suaPesquisa = document.getElementById("sua-pesquisa").value;
    suaPesquisa = suaPesquisa.toLowerCase()
    let resultado = "";
    let titulo = "";
    let tags = "";

if(suaPesquisa !=="") {
for (let copa of copas) {
    titulo = copa.titulo.toLowerCase()
    tags = copa.tags.toLowerCase()
    if (titulo.includes(suaPesquisa) || tags.includes(suaPesquisa)){
    resultado += `
    <div class="item-resultado">
                <h2>${copa.titulo}
                </h2>
                <p class="descricao-meta">${copa.descricao}</p>
                 <ul>
                <h4>${copa.jogadoresConvocados.titulo2}</h4>
                <ul>
                    <li>${copa.jogadoresConvocados.titulo3}</li>
                    <ul>
                        <li>${copa.jogadoresConvocados.goleiros[0]}</li>
                        <li>${copa.jogadoresConvocados.goleiros[1]}</li>
                    </ul>
                    <li>${copa.jogadoresConvocados.titulo4}</li>
                    <ul>
                        <li>${copa.jogadoresConvocados.zagueiros[0]}</li>
                        <li>${copa.jogadoresConvocados.zagueiros[1]}</li>
                        <li>${copa.jogadoresConvocados.zagueiros[2]}</li>
                        <li>${copa.jogadoresConvocados.zagueiros[3]}</li>
                    </ul>
                    <li>${copa.jogadoresConvocados.titulo5}</li>
                    <ul>
                        <li>${copa.jogadoresConvocados.laterais[0]}</li>
                        <li>${copa.jogadoresConvocados.laterais[1]}</li>
                        <li>${copa.jogadoresConvocados.laterais[2]}</li>
                        <li>${copa.jogadoresConvocados.laterais[3]}</li>
                    </ul>
                    <li>${copa.jogadoresConvocados.titulo6}</li>
                    <ul>
                        <li>${copa.jogadoresConvocados.meio[0]}</li>
                        <li>${copa.jogadoresConvocados.meio[1]}</li>
                        <li>${copa.jogadoresConvocados.meio[2]}</li>
                        <li>${copa.jogadoresConvocados.meio[3]}</li>
                    </ul>
                    <li>${copa.jogadoresConvocados.titulo7}</li>
                    <ul>
                     <li>${copa.jogadoresConvocados.ataque[0]}</li>
                    <li>${copa.jogadoresConvocados.ataque[1]}</li>
                    <li>${copa.jogadoresConvocados.ataque[2]}</li>
                    <li>${copa.jogadoresConvocados.ataque[3]}</li>
                    <li>${copa.jogadoresConvocados.ataque[4]}</li>
                    <li>${copa.jogadoresConvocados.ataque[5]}</li>
                    <li>${copa.jogadoresConvocados.ataque[6]}</li>
                    <li>${copa.jogadoresConvocados.ataque[7]}</li>
                    </ul>
                </ul>
                <p class="descricao-meta">${copa.adversarios}</p>
                <p class= "descricao-meta">${copa.artilheiroBR}</p>
                <a href=${copa.link} target="_blank">Mais informações</a>
</div>
`
    }
}

for (let copa of copaTRI) {
    titulo = copa.titulo.toLowerCase()
    tags = copa.tags.toLowerCase()
    if (copa.titulo.includes(suaPesquisa) || tags.includes(suaPesquisa)){
    resultado +=
`
<div class="item-resultado">
                <h2>${copa.titulo}
                </h2>
                <p class="descricao-meta">${copa.descricao}</p>
                 <ul>
                <h4>${copa.jogadoresConvocados.titulo2}</h4>
                <ul>
                    <li>${copa.jogadoresConvocados.titulo3}</li>
                    <ul>
                        <li>${copa.jogadoresConvocados.goleiros[0]}</li>
                        <li>${copa.jogadoresConvocados.goleiros[1]}</li>
                        <li>${copa.jogadoresConvocados.goleiros[2]}</li>
                    </ul>
                    <li>${copa.jogadoresConvocados.titulo4}</li>
                    <ul>
                        <li>${copa.jogadoresConvocados.zagueiros[0]}</li>
                        <li>${copa.jogadoresConvocados.zagueiros[1]}</li>
                        <li>${copa.jogadoresConvocados.zagueiros[2]}</li>
                        <li>${copa.jogadoresConvocados.zagueiros[3]}</li>
                    </ul>
                    <li>${copa.jogadoresConvocados.titulo5}</li>
                    <ul>
                        <li>${copa.jogadoresConvocados.laterais[0]}</li>
                        <li>${copa.jogadoresConvocados.laterais[1]}</li>
                        <li>${copa.jogadoresConvocados.laterais[2]}</li>
                        <li>${copa.jogadoresConvocados.laterais[3]}</li>
                    </ul>
                    <li>${copa.jogadoresConvocados.titulo6}</li>
                    <ul>
                        <li>${copa.jogadoresConvocados.meio[0]}</li>
                        <li>${copa.jogadoresConvocados.meio[1]}</li>
                        <li>${copa.jogadoresConvocados.meio[2]}</li>
                        <li>${copa.jogadoresConvocados.meio[3]}</li>
                    </ul>
                    <li>${copa.jogadoresConvocados.titulo7}</li>
                    <ul>
                     <li>${copa.jogadoresConvocados.ataque[0]}</li>
                    <li>${copa.jogadoresConvocados.ataque[1]}</li>
                    <li>${copa.jogadoresConvocados.ataque[2]}</li>
                    <li>${copa.jogadoresConvocados.ataque[3]}</li>
                    <li>${copa.jogadoresConvocados.ataque[4]}</li>
                    <li>${copa.jogadoresConvocados.ataque[5]}</li>
                    </ul>
                </ul>
                <p class="descricao-meta">${copa.adversarios}</p>
                <p class= "descricao-meta">${copa.artilheiroBR}</p>
                <a href=${copa.link} target="_blank">Mais informações</a>
</div>
`
      }
}

for (let copa of copaTetra) {
    titulo = copa.titulo.toLowerCase()
    tags = copa.tags.toLowerCase()
    if (copa.titulo.includes(suaPesquisa) || tags.includes(suaPesquisa)){
    resultado +=
`
<div class="item-resultado">
                <h2>${copa.titulo}
                </h2>
                <p class="descricao-meta">${copa.descricao}</p>
                 <ul>
                <h4>${copa.jogadoresConvocados.titulo2}</h4>
                <ul>
                    <li>${copa.jogadoresConvocados.titulo3}</li>
                    <ul>
                        <li>${copa.jogadoresConvocados.goleiros[0]}</li>
                        <li>${copa.jogadoresConvocados.goleiros[1]}</li>
                        <li>${copa.jogadoresConvocados.goleiros[2]}</li>
                    </ul>
                    <li>${copa.jogadoresConvocados.titulo4}</li>
                    <ul>
                        <li>${copa.jogadoresConvocados.zagueiros[0]}</li>
                        <li>${copa.jogadoresConvocados.zagueiros[1]}</li>
                        <li>${copa.jogadoresConvocados.zagueiros[2]}</li>
                        <li>${copa.jogadoresConvocados.zagueiros[3]}</li>
                    </ul>
                    <li>${copa.jogadoresConvocados.titulo5}</li>
                    <ul>
                        <li>${copa.jogadoresConvocados.laterais[0]}</li>
                        <li>${copa.jogadoresConvocados.laterais[1]}</li>
                        <li>${copa.jogadoresConvocados.laterais[2]}</li>
                        <li>${copa.jogadoresConvocados.laterais[3]}</li>
                    </ul>
                    <li>${copa.jogadoresConvocados.titulo6}</li>
                    <ul>
                        <li>${copa.jogadoresConvocados.meio[0]}</li>
                        <li>${copa.jogadoresConvocados.meio[1]}</li>
                        <li>${copa.jogadoresConvocados.meio[2]}</li>
                        <li>${copa.jogadoresConvocados.meio[3]}</li>
                        <li>${copa.jogadoresConvocados.meio[4]}</li>
                        <li>${copa.jogadoresConvocados.meio[5]}</li>
                    </ul>
                    <li>${copa.jogadoresConvocados.titulo7}</li>
                    <ul>
                     <li>${copa.jogadoresConvocados.ataque[0]}</li>
                    <li>${copa.jogadoresConvocados.ataque[1]}</li>
                    <li>${copa.jogadoresConvocados.ataque[2]}</li>
                    <li>${copa.jogadoresConvocados.ataque[3]}</li>
                    <li>${copa.jogadoresConvocados.ataque[4]}</li>
                    </ul>
                </ul>
                <p class="descricao-meta">${copa.adversarios}</p>
                <p class= "descricao-meta">${copa.artilheiroBR}</p>
                <a href=${copa.link} target="_blank">Mais informações</a>
</div>

`
    }
}

for (let copa of copaPenta) {
    titulo = copa.titulo.toLowerCase()
    tags = copa.tags.toLowerCase()
    if(copa.titulo.includes(suaPesquisa) || tags.includes(suaPesquisa)){
    resultado +=
`
<div class="item-resultado">
                <h2>${copa.titulo}
                </h2>
                <p class="descricao-meta">${copa.descricao}</p>
                 <ul>
                <h4>${copa.jogadoresConvocados.titulo2}</h4>
                <ul>
                    <li>${copa.jogadoresConvocados.titulo3}</li>
                    <ul>
                        <li>${copa.jogadoresConvocados.goleiros[0]}</li>
                        <li>${copa.jogadoresConvocados.goleiros[1]}</li>
                        <li>${copa.jogadoresConvocados.goleiros[2]}</li>
                    </ul>
                    <li>${copa.jogadoresConvocados.titulo4}</li>
                    <ul>
                        <li>${copa.jogadoresConvocados.zagueiros[0]}</li>
                        <li>${copa.jogadoresConvocados.zagueiros[1]}</li>
                        <li>${copa.jogadoresConvocados.zagueiros[2]}</li>
                        <li>${copa.jogadoresConvocados.zagueiros[3]}</li>
                    </ul>
                    <li>${copa.jogadoresConvocados.titulo5}</li>
                    <ul>
                        <li>${copa.jogadoresConvocados.laterais[0]}</li>
                        <li>${copa.jogadoresConvocados.laterais[1]}</li>
                        <li>${copa.jogadoresConvocados.laterais[2]}</li>
                        <li>${copa.jogadoresConvocados.laterais[3]}</li>
                    </ul>
                    <li>${copa.jogadoresConvocados.titulo6}</li>
                    <ul>
                        <li>${copa.jogadoresConvocados.meio[0]}</li>
                        <li>${copa.jogadoresConvocados.meio[1]}</li>
                        <li>${copa.jogadoresConvocados.meio[2]}</li>
                        <li>${copa.jogadoresConvocados.meio[3]}</li>
                        <li>${copa.jogadoresConvocados.meio[4]}</li>
                        <li>${copa.jogadoresConvocados.meio[5]}</li>
                        <li>${copa.jogadoresConvocados.meio[6]}</li>
                        <li>${copa.jogadoresConvocados.meio[7]}</li>
                        <li>${copa.jogadoresConvocados.meio[8]}</li>
                    </ul>
                    <li>${copa.jogadoresConvocados.titulo7}</li>
                    <ul>
                     <li>${copa.jogadoresConvocados.ataque[0]}</li>
                    <li>${copa.jogadoresConvocados.ataque[1]}</li>
                    <li>${copa.jogadoresConvocados.ataque[2]}</li>
                    <li>${copa.jogadoresConvocados.ataque[3]}</li>
                    </ul>
                </ul>
                <p class="descricao-meta">${copa.adversarios}</p>
                <p class= "descricao-meta">${copa.artilheiroBR}</p>
                <a href=${copa.link} target="_blank">Mais informações</a>
</div>

`
    }
}
}
if (resultado !=="") {
    section.innerHTML = resultado
}   else {
    section.innerHTML = "<p>Nenhum resultado encontrado para sua pesquisa.</p>"
}
}
