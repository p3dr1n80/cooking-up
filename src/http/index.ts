import type ICategory from "@/interfaces/ICategory";
import type IRecipe from "@/interfaces/IRecipe";

export async function dataCategories(): Promise<ICategory[]> {
    const promise = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/categorias.json')

    return await promise.json()
}

async function getDataURL<T>(url: string) {
    const promise = await fetch(url);

    return await promise.json()
}

export async function dataRecipes() {
    return getDataURL<IRecipe[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');
}

export function createList(list1: unknown[], list2: unknown[]) {
    return list1.every((itemList1) => list2.includes(itemList1));
}