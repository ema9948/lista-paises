
// app de lista de paises

    const cardLista = document.getElementById("card-paises");
    const cardTemplate = document.getElementById("template-card").content;
    const loading = document.getElementById("loading");
    const paises = [];
    console.log(loading)

    const pais = async()=>{
        try{
            const post = await fetch("https://restcountries.com/v3.1/all");
            const data =  await post.json();
            paises.push(...data)
            crearCard()
            ordenarAlf()
        }
        catch(error){
                console.log(error)
        }
        finally{
            console.log("todo ok")
            loading.classList.add("d-none")
        }
        
    }
    pais()
    
    const crearCard = ()=>{
        cardLista.textContent = "";
        const fragment = document.createDocumentFragment();
        paises.forEach(element => {
            const clone = cardTemplate.cloneNode(true);
            idoma = "";
            for(let i in element.languages){
                console.log(i)
                idoma = i;
            }

            clone.querySelector(".card-title").textContent = element.name.common;
            clone.querySelector(".card-text").textContent = `"${element.name.official}"`
            clone.querySelector(".card-img-top").setAttribute("src", element.flags.svg);
            clone.querySelector(".fw-bold").textContent = idoma;
            clone.querySelector(".btn-primary").setAttribute("href", element.maps.googleMaps)
            console.log(element.maps.googleMaps)
            fragment.appendChild(clone)
        });
        cardLista.appendChild(fragment)
    }
