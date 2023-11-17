export interface product {
    id: string;
    name: string;
    image: string;
    price: string;
    des: string;
    review: string;
    sold: string;
    star: string;
}

export const products: product[] = [
    {
        id: 'Mouse1',
        name: 'Gaming Mouse',
        image: '',
        price: '300',
        des: 'Gibberish Gibberish Gibberish Gibberish',
        review: '22',
        sold: '40,123',
        star: 'star5'
    },

    {
        id: 'Mouse2',
        name: 'A different Mouse',
        image: '',
        price: '240',
        des: 'Gibberish nana Gibberish jaajajaaa',
        review: '65',
        sold: '3,523',
        star: 'star4'
    },

]
