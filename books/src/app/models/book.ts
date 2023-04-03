export interface Id{
    "$oid":string
}

export interface Book{

    _id?: Id,
    id:string,
    isbn:string,
    title:string,
    author:string,
    rating: number|string,
    price?:number,
    pages?:number|string,
    votes?:number|string,
    description:string,
    tags?: string[],
    series?:string,
    seriesIndex?:number|string,
    cover:string,
    reviews?:any[],
    releaseDate?:string,

}