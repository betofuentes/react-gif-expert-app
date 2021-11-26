export const getGifs = async(category) => {
    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=wa4uJPvnBifW8n0qOBtL9pbJ1RJnOQGh`
    const resp = await fetch(url);
    // resp.ok
    const {data} = await resp.json()

    const gifs = data.map(img => {
        return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
    })
    
    // console.log(images);
    return gifs;

}