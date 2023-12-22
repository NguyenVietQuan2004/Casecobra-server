import { ProductModel } from '../Models/productsModel.js';

const ListProdutCreate = [
    // 5 item isNew: false, sale: true
    {
        MainPhotoURL: 'https://bizweb.dktcdn.net/thumb/large/100/473/812/products/7-2.png?v=1678024979440',
        Sub1PhotoURL: 'https://bizweb.dktcdn.net/thumb/large/100/473/812/products/7-2.png?v=1678024979440',
        Sub2PhotoURL: 'https://bizweb.dktcdn.net/100/473/812/products/8-1-1.png?v=1678024979997',
        name: 'Etoile de I`Ange Nước hoa vùng kín Hương Lovely 7ml (IP02)',
        description:
            'là dòng nước hoa vùng kín được ra mắt dành riêng cho những người phụ nữ có phong cách sống khỏe mạnh đang rất đình đám tại Hàn Quốc. Sản phẩm được nghiên cứu về cơ thể mất cân đối của người phụ nữ do phải chịu nhiều áp lực của xã hội hiện đại, của những bộn bề hằng ngày.',
        salePercent: 30,
        usefor: 'Tool: Vệ sinh phụ nữ',
        sold: 150,
        store: 300,
        branch: 'Chanel',
        isnew: false,
        code: 'BL-00018865',
        price: [{ '7ml': 329000 }, { '10ml': 380000 }, { '15ml': 700000 }],
    },
    // 2
    {
        MainPhotoURL: 'https://bizweb.dktcdn.net/thumb/large/100/473/812/products/10-1.png?v=1678026665577',
        Sub1PhotoURL: 'https://bizweb.dktcdn.net/thumb/large/100/473/812/products/14-1.png?v=1678026666373',
        Sub2PhotoURL: 'https://bizweb.dktcdn.net/100/473/812/products/15-1.png?v=1678026667550',
        name: 'Some By Mi Sữa tắm AHA-BHA-PHA 30 Days Miracle Acne Clear Body Cleanser 400g (IP04)',
        description:
            'chứa thành phần AHA-BHA-PHA giúp làm sạch sâu lỗ chân lông và kiểm soát dầu, cùng với chiết xuất tràm trà, bạch đàn giúp ngăn ngừa và cải thiện tình trạng mụn xuất hiện trên các vùng cơ thể.',
        salePercent: 33,
        usefor: 'Body: Làm sạch cơ thể',
        sold: 247,
        store: 50,
        branch: 'VinFast',
        isnew: false,
        code: 'BL-00010183',
        price: [{ '400g': 395000 }, { '500g': 420000 }, { '600g': 500000 }],
    },
    // 3
    {
        MainPhotoURL:
            'https://bizweb.dktcdn.net/100/473/812/products/3-91d460b7-6a45-41fa-aab6-740c7049fff1.png?v=1678637546397',
        Sub1PhotoURL:
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/473/812/products/2-eb75bb74-bd32-492b-a5a9-bcfefa2defe7.png?v=1678637547587',
        Sub2PhotoURL:
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/473/812/products/1-4e565640-59ce-4a7c-952f-48699fdafc61.png?v=1678637548747',
        name: 'Vacosi Cọ phủ Powder Brush M10 (IP01)',
        description:
            'với thiết kế đầu lông tròn, mềm mịn cùng nắp dễ bảo quản giúp bạn có thể mang theo khi di chuyển.',
        salePercent: 15,
        usefor: 'Tool: Dụng cụ trang điểm',
        sold: 206,
        store: 30,
        branch: 'Gucci',
        isnew: false,
        code: ' BL00033F',
        price: [{ NaN: 76000 }],
    },
    // 4
    {
        MainPhotoURL:
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/473/812/products/6-b5a8292b-ba13-4b6c-83ea-97c5cf8c98de.png?v=1678637731837',
        Sub1PhotoURL:
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/473/812/products/4-0001feea-1a93-41c3-a9c8-51b1e872f0a2.png?v=1678637733037',
        Sub2PhotoURL:
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/473/812/products/5-24d27f2b-b924-428b-90bc-6d99bfb636a7.png?v=1678637734030',
        name: 'Cotoneve Combo 2 Bông tẩy trang may viền dập nổi AQUA LIFE CT002 + BTT CT001 (70m) (IP02)',
        description:
            'với 100% bông cotton tinh khiết, đường kính 60mm. Miếng bông được may viền chắc chắn, không bong xù khi sử dụng. Miếng bông 2 mặt, 1 mặt dập nổi tăng hiệu quả làm sạch hơn 50%.',

        salePercent: 15,
        usefor: 'Tool: Dụng cụ chăm sóc da',
        sold: 154,
        store: 150,
        branch: 'Testla',
        isnew: false,
        code: ' BL00033F',
        price: [{ '70m': 96000 }, { '100m': 100000 }, { '200m': 190000 }],
    },
    // 5
    {
        MainPhotoURL:
            'https://bizweb.dktcdn.net/100/473/812/products/15-1-69d52553-45ec-494d-9640-d29bd9726d28.png?v=1678698084997',
        Sub1PhotoURL:
            'https://bizweb.dktcdn.net/100/473/812/products/12-c3ce6f53-67bc-4a21-ac9b-6e3e5aa72e25.png?v=1678698086610',
        Sub2PhotoURL: 'https://bizweb.dktcdn.net/100/473/812/products/7-1-1.png?v=1678698088110',
        name: 'Halio Máy triệt lông cá nhân IPL Hair Removal Device (IP02)',
        description:
            'với công nghệ xung IPL là giải pháp dành cho bạn. Công nghệ ánh sáng IPL cho phép người dùng triệt lông tại nhà, an toàn không gây kích ứng, thích hợp với nhiều tông da và đồng thời giúp trẻ hoá làn da - xoá mờ nếp nhăn, tăng sản sinh collagen.',
        salePercent: 10,
        usefor: 'Tool: Dụng cụ chăm sóc cơ thể',
        sold: 100,
        store: 98,
        branch: 'SpaceX',
        isnew: false,
        code: 'BL-00019323',
        price: [{ NaN: 3200000 }],
    },

    // sale isnew true
    // 6
    {
        MainPhotoURL:
            'https://bizweb.dktcdn.net/100/473/812/products/13-3618f9fd-4320-403b-842a-328f166812e6.png?v=1678698746817',
        Sub1PhotoURL:
            'https://bizweb.dktcdn.net/100/473/812/products/8-773caf88-f0cb-4eb2-a17d-11a9456e203c.png?v=1678698748897',
        Sub2PhotoURL:
            'https://bizweb.dktcdn.net/100/473/812/products/11-0d911393-6597-4400-a58c-a3222091ffc3.png?v=1678698750370',
        name: 'Bibury máy rửa mặt + Túi giấy',
        description:
            'thế hệ mới sử dụng công nghệ làm sạch siêu sóng âm, chất liệu silicon cấp thực phẩm an toàn, 7 cấp độ rung phù hợp với mọi loại da.',

        salePercent: -1,
        usefor: 'Tool: Dụng cụ chăm sóc da',
        sold: 124,
        store: 15,
        branch: 'DHCT',
        isnew: true,
        code: 'BL-00016295',
        price: [{ Pink: 660000 }, { Green: 630000 }, { Blue: 630000 }],
    },

    // 7
    {
        MainPhotoURL:
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/473/812/products/thiet-ke-chua-co-ten-2.png?v=1677598173910',
        Sub1PhotoURL: 'https://bizweb.dktcdn.net/100/473/812/products/13.png?v=1677598518040',
        Sub2PhotoURL: 'https://bizweb.dktcdn.net/100/473/812/products/12.png?v=1677598527267',
        name: '3CE Phấn mắt Multi Eye Color Palate',
        description:
            'với những tone màu nhẹ nhàng theo hơi hướng vintage rất phù hợp với phong cách make up đơn giản mỗi ngày. Mỗi bảng phấn mắt chứa tới 9 ô màu đa dạng, dễ sử dụng, có thể kết hợp với nhau tùy thích để cho ra đời những màu mắt ấn tượng và độc đáo nhất.',
        salePercent: -1,
        usefor: 'MakeUp: Trang điểm mắt',
        sold: 124,
        store: 15,
        branch: 'DHCT',
        isnew: true,
        code: 'BL-00016295',
        price: [{ 'All Nighter': 780000 }, { 'Dry Bouquet': 720000 }],
    },
    //8
    {
        MainPhotoURL:
            'https://bizweb.dktcdn.net/100/473/812/products/13-79ef94ae-d38d-40f8-9f1a-86a40eb66caf.png?v=1677854002820',
        Sub1PhotoURL:
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/473/812/products/15-c03981d8-c74b-45cd-97ff-ad6f63403314.png?v=1677854005010',
        Sub2PhotoURL:
            'https://bizweb.dktcdn.net/100/473/812/products/14-e6eae106-31e0-410b-a42b-a02401b2f9d5.png?v=1677854003990',
        name: 'Dầu xả Tresemme Salon Detox Gừng và Trà xanh giúp tóc chắc khỏe (620g) (IP01)',
        description:
            'nói không với Parabens và chất tạo màu, thành phần tự nhiên gồm Gừng - giúp làm dịu, kháng khuẩn và Trà Xanh giúp chống oxy hóa, sẽ Detox và nuôi dưỡng để trả lại vẻ đẹp chắc khoẻ tự nhiên cho mái tóc cùng cảm giác thư thái khi gội, mùi hương sang trọng cả ngày dài.',
        salePercent: -1,
        usefor: 'Body: Chăm sóc tóc',
        sold: 13,
        store: 15,
        branch: 'DHCT',
        isnew: true,
        code: 'BL-00016295',
        price: [{ NaN: 220000 }],
    },

    //9
    {
        MainPhotoURL:
            'https://bizweb.dktcdn.net/100/473/812/products/7-57ad750c-f877-4104-969b-0c13af665ab7.png?v=1677853483243',
        Sub1PhotoURL:
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/473/812/products/8-0fc9518e-1ec8-4d9b-a8f0-94988289c678.png?v=1677853484220',
        Sub2PhotoURL:
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/473/812/products/9-c2cf773b-91ef-4cc8-9466-c48441819f9f.png?v=1677853485487',
        name: 'OGX Dầu xả Renewing + Argan Oil Of Morocco 385ml (IP01)',
        description:
            'chiết xuất từ tinh dầu Argan đến từ Morocco để chăm sóc những mái tóc khô xơ, hư tổn và chẻ ngọn. Từ đó mái tóc bạn sẽ trở nên mềm mại, mượt mà và khắc phục được những hư tổn từ gốc đến ngọn.',
        salePercent: -1,
        usefor: 'Body: Chăm sóc tóc',
        sold: 13,
        store: 34,
        branch: 'BKU',
        isnew: true,
        code: 'BL-00016295',
        price: [{ NaN: 295000 }],
    },

    //10
    {
        MainPhotoURL:
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/473/812/products/google-shopping-phan-nuoc-gilaa-kiem-dau-va-duong-da-01-light-beige-13g-img-800x800-eb97c5-fit-center.jpg?v=1677577494603',
        Sub1PhotoURL:
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/473/812/products/phan-nuoc-gilaa-kiem-dau-va-duong-da-01-light-beige-13g-4-img-800x800-eb97c5-fit-center.jpg?v=1677577495120',
        Sub2PhotoURL:
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/473/812/products/phan-nuoc-gilaa-kiem-dau-va-duong-da-01-light-beige-13g-5-img-800x800-eb97c5-fit-center.jpg?v=1677577495740',
        name: 'Phấn Nước Gilaa Kiềm Dầu Và Dưỡng Da',
        description:
            'là dòng phấn nước cushion đến từ thương hiệu mỹ phẩm Gilaa của Hàn Quốc, với khả năng che phủ khuyết điểm lên đến 90% chỉ với 1 lần dặm phấn, sản phẩm tạo lớp nền mịn lì, kiềm dầu và bền màu suốt cả ngày. Đặc biệt, phấn nước kết hợp các thành phần dưỡng da và chỉ số chống nắng SPF 50+ PA+++ giúp nuôi dưỡng và bảo vệ da mạnh mẽ.',
        salePercent: -1,
        usefor: 'Body: Chăm sóc da mặt',
        sold: 70,
        store: 6,
        branch: 'CTU',
        isnew: true,
        code: 'BL-00016295',
        price: [{ NaN: 520000 }],
    },
];
// [GET]
export const getAllProducts = async (req, res) => {
    const limit = +req.query.limit;
    const page = +req.query.page;
    try {
        const data = await ProductModel.find()
            .skip((page - 1) * limit)
            .limit(limit);
        res.status(200).json({ products: data });
    } catch (err) {
        res.status(400).json({ error: err });
    }
};
// [GET] / search
export const searchProducts = async (req, res) => {
    const page = +req.query.page;
    const field = req.query.field;
    const limit = +req.query.limit;
    const value = req.query.value;

    let query = {};
    if (field === 'salePercent') {
        query[[field]] = { $gt: 0 };
    } else if (field === 'isnew') {
        query[[field]] = true;
    } else if (field === 'cart') {
        query = {
            $or: [{ _id: { $in: value } }],
        };
    } else {
        query[[field]] = { $regex: value, $options: 'i' };
    }

    try {
        const data = await ProductModel.find(query)
            .skip((page - 1) * limit)
            .limit(limit);
        const count = await ProductModel.countDocuments(query);
        res.status(200).json({ products: data, total: count, pageCount: Math.ceil(count / limit) });
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

// [GET] search/query field = name
export const searchProductsQuery = async (req, res) => {
    const page = +req.query.page;
    const limit = +req.query.limit;
    const value = req.query.value;
    const sort = +req.query.sort;
    const listBranch = req.query?.listBranch;
    const distancePrice = req.query?.distancePrice;
    const query = {
        name: {
            $regex: value,
            $options: 'i',
        },
    };
    if (listBranch) {
        query.branch = { $in: listBranch };
    }
    if (distancePrice) {
        query.$or = [];
        distancePrice.map((item) => {
            const array = item.split('-');
            query.$or.push({ price: { $gte: +array[0], $lte: +array[1] } });
        });
    } else {
        delete query.$or;
    }

    try {
        const data = await ProductModel.find(query)
            .skip((page - 1) * limit)
            .limit(limit)
            .sort(sort !== 0 ? { price: sort } : undefined);
        const count = await ProductModel.countDocuments(query);

        res.status(200).json({ products: data, total: count, pageCount: Math.ceil(count / limit) });
    } catch (err) {
        res.status(400).json({ error: err });
    }
};
//
export const create = async (req, res) => {
    try {
        const product1 = new ProductModel({
            MainPhotoURL: 'https://cdn.bestme.vn/images/bestme/review-sua-rua-mat-hatomugi-mau-xanh-3.jpg',
            Sub1PhotoURL: 'https://cdn.bestme.vn/images/bestme/review-sua-rua-mat-hatomugi-mau-xanh-1.jpg',
            Sub2PhotoURL: 'https://cdn.bestme.vn/images/bestme/review-sua-rua-mat-hatomugi-mau-xanh-4.jpg',
            name: 'Sữa rửa mặt ý dĩ xanh Hatomugi',
            description:
                'Sữa rửa mặt trị mụn ý dĩ Hatomugi có thiết kế dạng tuýp với phần thân màu xanh đậm và nắp bật màu trắng tiện lợi. Trên vỏ sữa rửa mặt có in tên thương hiệu và sản phẩm bằng cả tiếng Nhật và tiếng Anh kèm hình cây ý dĩ rất rõ nét.',
            salePercent: 5,
            usefor: 'Body: Da mặt',
            sold: 12,
            store: 3,
            branch: 'Leoneo mecsi',
            isnew: true,
            code: 'BL-00018865',
            price: [{ NaN: 1000000 }],
        });
        await product1.save();

        res.json('conchim');
    } catch (error) {
        res.json('loi r ban');
    }
};
