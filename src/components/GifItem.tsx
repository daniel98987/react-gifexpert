export const GifItem= ({title,url}:{id:string,title:string,url:string})=>{
    return  <div className="card">
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
}