import React, { useState } from 'react';
import '../styles/LibraryPage.css';

const categories = [
    {
        id: 1,
        name: "VietNam",
        thumbnail: "https://toquoc.mediacdn.vn/Uploaded/gamhh/2017_11_06/10_GGIZ.jpg",
        images: [
            {
                src: "https://img.thuthuatphanmem.vn/uploads/2018/09/26/hinh-anh-du-thuyen-tren-vinh-ha-long_051905398.jpg",
                caption: "Ha Long"
            },
            {
                src: "https://img1.kienthucvui.vn/uploads/2019/08/15/hinh-anh-dep-nhat-ve-da-nang_102908849.jpg",
                caption: "Da Nang"
            },
            {
                src: "https://shipdoandemff.com/wp-content/uploads/2018/11/nhung-dia-diem-check-in-dep-nhat-tai-da-nang-khong-the-bo-lo-co-hoi-4604.jpg",
                caption: "Da Nang"
            },
            {
                src: "https://images.baodantoc.vn/uploads/2021/Th%C3%A1ng%209/Ng%C3%A0y_15/NG%C3%82n/H%C3%A0%20giang/7A982B30-5B78-4A79-9A3D-9F524E96611B.jpg",
                caption: "Ha Giang"
            },
            {
                src: "https://www.vietnamonline.com/media/uploads/froala_editor/images/VNo-vungtau11.jpg",
                caption: "Vung Tau"
            },
            {
                src: "https://ezcloud.vn/wp-content/uploads/2019/08/Gioi-thieu-doi-net-ve-lich-su-chua-mot-cot-ha-noi-01.jpg",
                caption: "Ha Noi"
            },
        ],
        description: "Vietnam is renowned for its breathtaking landscapes, featuring lush rice terraces, majestic mountains, and pristine beaches. The vibrant culture and rich history enhance the beauty of its natural scenery, making it a captivating destination for travelers."

    },
    {
        id: 2,
        name: "North Korea",
        thumbnail: "https://visaf.vn/wp-content/uploads/2019/06/Khu-Hongdae-o-seou-1-1300x700xc.jpg",
        images: [
            {
                src: "https://visaf.vn/wp-content/uploads/2019/06/thoi-tiet-tren-dao-jeju-1300x700xc.jpg",
                caption: "Jeju Island"
            },
            {
                src: "https://visaf.vn/wp-content/uploads/2019/06/img002-1300x700xc.jpg",
                caption: "Gyeongbokgung"
            },
            {
                src: "https://visaf.vn/wp-content/uploads/2019/06/n_seoul_tower_observatory_admission_ticket_master-1300x700xc.jpg",
                caption: "N Seoul Tower"
            },
            {
                src: "https://visaf.vn/wp-content/uploads/2019/06/Myeong-dong-1300x700xc.jpg",
                caption: "Myeong-dong"
            },
            {
                src: "https://visaf.vn/wp-content/uploads/2019/06/cong-vien-everland-han-quoc-dep-1300x700xc.jpg",
                caption: "Everland Park"
            },
            {
                src: "https://visaf.vn/wp-content/uploads/2019/06/15197890758829-1300x700xc.jpg",
                caption: "Haedong Yonggungsa"
            },
        ],
        description: "South Korea boasts a diverse landscape, from the vibrant cityscapes of Seoul to the tranquil beauty of its mountains and coastal regions. Famous for its cherry blossoms, lush forests, and stunning islands like Jeju, it offers a perfect blend of nature and modernity."

    },
    {
        id: 3,
        name: "China",
        thumbnail: "https://trungquocsensetravel.com/view-700/at_nhung-dia-diem-nhat-dinh-ban-phai-ghe-qua-khi-den-trung-quoc_5854e915c3428acb2459101c38dc5218.jpg",
        images: [
            {
                src: "https://trungquocsensetravel.com/view-700/at_nhung-dia-diem-nhat-dinh-ban-phai-ghe-qua-khi-den-trung-quoc_7b6019d9f681e4cf5b2cd04bbed41d8a.png",
                caption: "Lhasa."
            },
            {
                src: "https://www.vietnambooking.com/wp-content/uploads/2017/03/tin-tuc-nhung-diem-den-noi-tieng-nhat-trung-quoc-22-3-2017-3.jpg",
                caption: "The Forbidden City"
            },
            {
                src: "https://www.vietnambooking.com/wp-content/uploads/2018/04/nhung-dia-danh-dep-la-lung-o-trung-quoc-1-27.04.2018-550x362.jpg",
                caption: "Rainbow Mountains"
            },
            {
                src: "https://www.vietnambooking.com/wp-content/uploads/2018/04/nhung-dia-danh-dep-la-lung-o-trung-quoc-3-27.04.2018-550x366.jpg",
                caption: "Hoang Son Range"
            },
            {
                src: "https://www.vietnambooking.com/wp-content/uploads/2018/04/nhung-dia-danh-dep-la-lung-o-trung-quoc-15-27.04.2018-550x413.jpg",
                caption: "Panjin Red Beach"
            },
            {
                src: "https://www.vietnambooking.com/wp-content/uploads/2017/03/5-diem-den-dang-de-kham-pha-o-trung-quoc-5-09-03-2017.jpg",
                caption: "Shanghai"
            },
        ],
        description: "China's landscape is incredibly diverse, featuring vast mountain ranges like the Himalayas, stunning rivers such as the Yangtze, and iconic landmarks like the Great Wall. From bustling cities to serene rural landscapes, China's natural beauty is as rich as its cultural heritage."

    },
    {
        id: 4,
        name: "Thailand",
        thumbnail: "https://cattour.vn/images/upload/images/thai-lan/dia-diem-du-lich-o-thai-lan/dia-diem-du-lich-o-thai-lan-1.jpg",
        images: [
            {
                src: "https://cattour.vn/images/upload/images/thai-lan/dia-diem-du-lich-o-thai-lan/dia-diem-du-lich-o-thai-lan-10.jpg",
                caption: "Pattaya"
            },
            {
                src: "https://cattour.vn/images/upload/images/thai-lan/dia-diem-du-lich-o-thai-lan/dia-diem-du-lich-o-thai-lan-13.jpg",
                caption: "Phuket"
            },
            {
                src: "https://cattour.vn/images/upload/images/thai-lan/dia-diem-du-lich-o-thai-lan/dia-diem-du-lich-o-thai-lan-15.jpg",
                caption: "Chiang Mai"
            },
            {
                src: "Chiang Rai",
                caption: "https://cattour.vn/images/upload/images/thai-lan/dia-diem-du-lich-o-thai-lan/dia-diem-du-lich-o-thai-lan-16.jpg"
            },
            {
                src: "https://cattour.vn/images/upload/images/thai-lan/dia-diem-du-lich-o-thai-lan/dia-diem-du-lich-o-thai-lan-19.jpg",
                caption: "Ayutthaya"
            },
            {
                src: "https://cattour.vn/images/upload/images/thai-lan/dia-diem-du-lich-o-thai-lan/dia-diem-du-lich-o-thai-lan-2.jpg",
                caption: "Sukhothai"
            },
        ],
        description: "Thailand's landscape is a stunning mix of lush jungles, serene beaches, and vibrant cities. From the towering limestone cliffs of Krabi to the tranquil rice fields of Chiang Mai, it offers a diverse and captivating natural beauty."

    },
    {
        id: 5,
        name: "USA",
        thumbnail: "https://intertour.vn/wp-content/uploads/2022/03/f899c4ce-2f10-4fa4-be3a-bcf456692e6c-4.jpg",
        images: [
            {
                src: "https://intertour.vn/wp-content/uploads/2022/03/4197fe64-4953-45d5-8874-e62a3b7b265f.jpg",
                caption: "Florida"
            },
            {
                src: "https://intertour.vn/wp-content/uploads/2022/03/411b2913-72a9-46d1-b818-1b90bc943a15.jpg",
                caption: "Grand Canyon"
            },
            {
                src: "https://intertour.vn/wp-content/uploads/2022/03/910d19a9-971f-49e4-8009-dd2d194540fe.jpg",
                caption: "New York"
            },
            {
                src: "https://intertour.vn/wp-content/uploads/2022/03/21fe20cf-e519-44ef-a02c-9d59661e877f.jpg",
                caption: "Park City, Utah"
            },
            {
                src: "https://intertour.vn/wp-content/uploads/2022/03/bed2434d-0e6a-43e1-83bc-33ad1421f752.jpg",
                caption: "California"
            },
            {
                src: "https://intertour.vn/wp-content/uploads/2022/03/83a80ab9-6bfc-40af-ae1c-1d52c2c40f95.jpg",
                caption: "Washington DC"
            },
        ],
        description: "The United States is home to diverse landscapes, ranging from the rugged Rocky Mountains to the serene beaches of Hawaii. Its vast national parks, like Yellowstone and the Grand Canyon, showcase breathtaking natural beauty."

    },
    {
        id: 6,
        name: "New Zealand",
        thumbnail: "https://fantasea.vn/wp-content/uploads/2017/12/New-Zealand-564x330.jpg",
        images: [
            {
                src: "https://fantasea.vn/wp-content/uploads/2017/12/Kaikoura-1290x860.jpg",
                caption: "Kaikoura"
            },
            {
                src: "https://fantasea.vn/wp-content/uploads/2017/12/S%C3%B4ng-b%C4%83ng-Franz-Josef-1290x860.jpg",
                caption: "Franz Josef"
            },
            {
                src: "https://fantasea.vn/wp-content/uploads/2017/12/Rotorua.jpg",
                caption: "Rotorua"
            },
            {
                src: "https://fantasea.vn/wp-content/uploads/2017/12/V%C6%B0%E1%BB%9Dn-qu%E1%BB%91c-gia-Tongariro.jpg",
                caption: "Tongariro"
            },
            {
                src: "https://fantasea.vn/wp-content/uploads/2017/12/V%E1%BB%8Bnh-Milford-Sound.jpg",
                caption: "Milford Sound"
            },
            {
                src: "https://fantasea.vn/wp-content/uploads/2017/12/H%E1%BB%93-Wakatipu-%E1%BB%9F-Queenstown.jpg",
                caption: "Queenstown"
            },
        ],
        description: "New Zealand boasts stunning landscapes, from snow-capped mountains and lush rainforests to pristine beaches and rolling green hills. Its natural beauty is complemented by serene lakes, dramatic fjords, and vibrant wildlife."

    },
];

export const LibraryPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="library-page">
            <div className='banner-library'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    {/*<div className="carousel-inner">*/}
                        {/*<div className="carousel-item active">*/}
                        {/*    <img src="https://noithaticon.vn/wp-content/uploads/2019/04/thiet-ke-noi-that-nha-hang-han-quoc-20.jpg" className="d-block w-100" alt="..." />*/}
                        {/*</div>*/}
                        <div className="carousel-item">
                            <img src="https://bhn.vn/wp-content/uploads/2020/12/nhung-dia-diem-dep-nhu-mo-ngay-tai-viet-nam-cao-bang.jpg" className="d-block w-100" alt="..." />
                        </div>
                        {/*<div className="carousel-item">*/}
                        {/*    <img src="https://img.homedy.com/store/images/2020/04/15/phong-ngu-khach-san-5-sao-637225597309796831.jpg" className="d-block w-100" alt="..." />*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">*/}
                    {/*    <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                    {/*    <span className="visually-hidden">Previous</span>*/}
                    {/*</button>*/}
                    {/*<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">*/}
                    {/*    <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
                    {/*    <span className="visually-hidden">Next</span>*/}
                    {/*</button>*/}
                </div>
            </div>
            <div className='library-main '>
                <div className="category-list">
                    {categories.map((category) => (
                        <div key={category.id} className="category-item" onClick={() => setSelectedCategory(category)}>
                            <h2>{category.name}</h2>
                            <img src={category.thumbnail} alt={category.name} className="category-thumbnail" />
                            <p>{category.description}</p>
                        </div>
                    ))}
                </div>
                {selectedCategory && (
                    <div className="image-gallery">
                        <h2>{selectedCategory.name}</h2>
                        <div className="images">
                            {selectedCategory.images.map((image, index) => (
                                <div key={index} className="image-item" onClick={() => handleImageClick(image.src)}>
                                    <img src={image.src} alt={image.caption} className="image" />
                                    <p>{image.caption}</p>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => setSelectedCategory(null)}><i class="fa-solid fa-x"></i></button>
                    </div>
                )}
                {selectedImage && (
                    <div className="modal" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close" onClick={closeModal}>&times;</span>
                            <img src={selectedImage} alt="Selected" className="modal-image" />
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};