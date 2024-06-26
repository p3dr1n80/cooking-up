import type ICategory from "@/interfaces/ICategory";
import type IRecipe from "@/interfaces/IRecipe";

export async function dataCategories(): Promise<ICategory[]> {
    const promise = await fetch('https://gist.githubusercontent.com/pedro-p-silva/' +
        '2b2d8ff615077dd43c67ee2b558a883a/raw/6b9272f50e43e3c3e03d7f95f4f31d3e0d4bd4ff/categories.json')

    return await promise.json()
}

async function getDataURL<T>(url: string) {
    const promise = await fetch(url);

    return await promise.json()
}

export async function dataRecipes() {
    return getDataURL<IRecipe[]>('https://gist.githubusercontent.com/pedro-p-silva/' +
        'ac308d6eb870edb5197bccd3bcda43b3/raw/b35429a39174f8e7b965111e5026e1bb95223e2d/recipes.json');
}

export function createList(list1: unknown[], list2: unknown[]) {
    return list1.every((itemList1) => list2.includes(itemList1));
}