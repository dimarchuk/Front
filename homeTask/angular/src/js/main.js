var app = angular.module('app', []);

// app.controller('StoreController', function ($scope) {
//     this.product = {
//         name: "Emerald",
//         price: 5.30,
//         description: "Some text goes here"
//     };
//
//     $scope.merchant = {
//         name: "Dealer name"
//     };
// });

app.controller('PageController', function ($scope) {

    this.buttons = ["Цена ↑", "Цена ↓", "Имя ↑","Имя ↓", "Список", "Плитка"];
});


app.controller('ProductsController', function ($scope) {

    this.products = [
        {
            name: "Emerald",
            img: "http://placekitten.com/g/150/150",
            price: 5.30,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam autem blanditiis ex facilis, ipsum iste labore laudantium odit pariatur quidem quisquam ratione reprehenderit! Ad amet asperiores cum deserunt dignissimos dolor doloremque dolores dolorum ducimus eaque eligendi eos error eum, eveniet ex exercitationem hic illum ipsa labore minima minus molestiae mollitia nam natus nisi, officia quam quasi quibusdam quidem ratione reiciendis repellendus sapiente sequi sit suscipit, tempora voluptates. Accusamus atque consequatur perspiciatis quam? A ea esse fuga fugiat iure molestias necessitatibus quam qui quidem reprehenderit! Accusantium ad adipisci alias aliquam, deserunt eos est eum ipsa laudantium maiores perspiciatis quaerat quia.",
            canPurchase: false
        },
        {
            name: "Sapphire",
            img: "http://placekitten.com/160/150",
            price: 12,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam autem blanditiis ex facilis, ipsum iste labore laudantium odit pariatur quidem quisquam ratione reprehenderit! Ad amet asperiores cum deserunt dignissimos dolor doloremque dolores dolorum ducimus eaque eligendi eos error eum, eveniet ex exercitationem hic illum ipsa labore minima minus molestiae mollitia nam natus nisi, officia quam quasi quibusdam quidem ratione reiciendis repellendus sapiente sequi sit suscipit, tempora voluptates. Accusamus atque consequatur perspiciatis quam? A ea esse fuga fugiat iure molestias necessitatibus quam qui quidem reprehenderit! Accusantium ad adipisci alias aliquam, deserunt eos est eum ipsa laudantium maiores perspiciatis quaerat quia.",
            canPurchase: true
        },
        {
            name: "Qweqwe",
            img: "http://placekitten.com/g/150/150",
            price: 7.80,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam autem blanditiis ex facilis, ipsum iste labore laudantium odit pariatur quidem quisquam ratione reprehenderit! Ad amet asperiores cum deserunt dignissimos dolor doloremque dolores dolorum ducimus eaque eligendi eos error eum, eveniet ex exercitationem hic illum ipsa labore minima minus molestiae mollitia nam natus nisi, officia quam quasi quibusdam quidem ratione reiciendis repellendus sapiente sequi sit suscipit, tempora voluptates. Accusamus atque consequatur perspiciatis quam? A ea esse fuga fugiat iure molestias necessitatibus quam qui quidem reprehenderit! Accusantium ad adipisci alias aliquam, deserunt eos est eum ipsa laudantium maiores perspiciatis quaerat quia.",
            canPurchase: true
        },
        {
            name: "Wwwwww",
            img: "http://placekitten.com/160/150",
            price: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam autem blanditiis ex facilis, ipsum iste labore laudantium odit pariatur quidem quisquam ratione reprehenderit! Ad amet asperiores cum deserunt dignissimos dolor doloremque dolores dolorum ducimus eaque eligendi eos error eum, eveniet ex exercitationem hic illum ipsa labore minima minus molestiae mollitia nam natus nisi, officia quam quasi quibusdam quidem ratione reiciendis repellendus sapiente sequi sit suscipit, tempora voluptates. Accusamus atque consequatur perspiciatis quam? A ea esse fuga fugiat iure molestias necessitatibus quam qui quidem reprehenderit! Accusantium ad adipisci alias aliquam, deserunt eos est eum ipsa laudantium maiores perspiciatis quaerat quia.",
            canPurchase: true
        }
    ];
});


//app.controller('StoreController', function () {
//    this.products = [
//        {
//            name: "Emerald",
//            price: 5.30,
//            description: "Some text goes here",
//            canPurchase: true
//        },
//        {
//            name: "Sapphire",
//            price: 12,
//            description: "Some text goes here as well",
//            canPurchase: false
//        }
//    ];
//});

