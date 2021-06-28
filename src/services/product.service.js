
export const productService = {
    findProducts
};

const products = [
    {
        code: 'warehouse-1',
        name: 'Ware House 1'
    },
    {
        code: 'warehouse-2',
        name: 'Ware House 2'
    },
    {
        code: 'warehouse-3',
        name: 'Ware House 3'
    },
    {
        code: 'warehouse-4',
        name: 'Ware House 4'
    },
    {
        code: 'warehouse-5',
        name: 'Ware House 5'
    },
    {
        code: 'warehouse-6',
        name: 'Ware House 6'
    }
]

function findProducts(params) {

    if (params == null) {
        return products;
    }
    if (params.code != null && params.name != null) {
        return products.filter(v => v.code.includes(params.code) && v.name.includes(params.name));
    } else if (params.code != null) {
        return products.filter(v => v.code.includes(params.code));
    } else if (params.name != null) {
        return products.filter(v => v.name.includes(params.name));
    }
    return products;
}
