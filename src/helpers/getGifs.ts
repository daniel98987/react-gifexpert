
export const getGifts = async (category:string)=>{
    const url = `https://api.giphy.com/v1/gifs/search?rating=pg-13&offset=25&limit=15&type=gifs&q=${category}&api_key=pI1L9h9hQ0EIJvkz1SctwmlxQ2tzOyD7`
    const resp = await fetch(url);
    const {data = []}= await resp.json()
    return  data.map((img:any)=>({
        id: img.id,
        title:img.title,
        url: img.images.downsized_medium.url
        
    }))

    
}