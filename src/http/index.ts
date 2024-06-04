import type ICategoria from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

export async function dataCategories(): Promise<ICategoria[]> {
    const promise = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/categorias.json')

    return await promise.json()
}

async function obterDadosURL<T>(url: string) {
    const promise = await fetch(url);

    return await promise.json()
}

export async function dataReceitas() {
    return obterDadosURL<IReceita[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');
}