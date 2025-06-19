async function getDataById(id){
    try{
        const res = await fetch(`https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/country.json/${id}`)
        if(!res.ok){
            throw new Error("sorgu")
        }
        const data = await res.json()
        return data.find(item => item.topLevelDomain = id)
    }catch(error){
        console.log(error);
}
}

export{
    getDataById
}