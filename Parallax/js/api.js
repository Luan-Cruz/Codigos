async function getData(){
    try{
        const config = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'

        };

       await fetch("https://rickandmortyapi.com/api/character", config)
            .then((data)=> {
                console.log(data)
            })
    
    }catch(error){
        console.log(error)
    }
    
}
getData()