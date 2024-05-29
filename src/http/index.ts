import type ICategoria from "@/interfaces/ICategoria";

export async function dataCategories() {
    const promise = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/categorias.json')

    if (promise.status == 200){
        const categorias: ICategoria = await promise.json()
        return categorias
    }
}