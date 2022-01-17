import { GiSheep, GiCow, GiChicken } from 'react-icons/gi'

export const staticConst = {
  categoriesOptions: [
    {
      _id: 1,
      name: 'Unggas',
      icon: GiChicken,
    },
    {
      _id: 2,
      name: 'Sapi',
      icon: GiCow,
    },
    {
      _id: 3,
      name: 'Kambing',
      icon: GiSheep,
    },
  ],
  sortOptions: [
    {
      _id: 1,
      name: 'Latest',
    },
    {
      _id: 2,
      name: 'Lower Price',
    },
    {
      _id: 3,
      name: 'Highest Price',
    },
    {
      _id: 3,
      name: 'Best Seller',
    },
  ],
  ongkirOpt: [
    {
      _id: 1,
      name: 'JNE',
    },
    {
      _id: 2,
      name: 'JNT',
    },
    {
      _id: 3,
      name: 'Farm Send',
    },
    {
      _id: 3,
      name: 'Lion Air',
    },
  ],
  profile_menu: {
    seller: {
      name: 'GENTON SHOP',
      role_name: 'Pengguna',
      seller_menu: [
        {
          menu: {
            title: 'Transaksi',
            subMenu: [
              { name: 'Pengiriman', path: '/user-profile/dashboard_seller' },
              { name: 'Pesanan', path: '/user-profile/pesanan' },
            ],
          },
        },
        {
          menu: {
            title: 'Produk',
            subMenu: [
              { name: 'Produk Saya', path: '/user-profile/my-product' },
              { name: 'Tambah Produk', path: '/user-profile/add-product' },
            ],
          },
        },
        {
          menu: {
            title: 'Promo Saya',
            subMenu: [
              { name: 'Promo Saya', path: '/user-profile/my-promo' },
              { name: 'Buat Promo', path: '/user-profile/create-promo' },
            ],
          },
        },
        {
          menu: {
            title: 'Keuangan',
            subMenu: [
              { name: 'Penghasilan Saya', path: '/user-profile/my-income' },
              { name: 'Saldo Saya', path: '/user-profile/my-belance' },
              { name: 'Rekening Bank', path: '/user-profile/bank-account' },
              { name: 'Pengaturan Pembayaran', path: '/user-profile/payment-settings' },
            ],
          },
        },
        {
          menu: {
            title: 'Toko',
            subMenu: [
              { name: 'Profile Toko', path: '/user-profile/bio' },
              { name: 'Kategori Toko', path: '/user-profile/store-category' },
              { name: 'Penilaian Toko', path: '/user-profile/store-rating' },
              { name: 'Laporan Saya', path: '/user-profile/my-reports' },
            ],
          },
        },
      ]
    },
    user: {
      name: 'James Adam',
      role_name: 'Pengguna',
      user_menu: [
        {
          menu: {
            title: 'Menu',
            subMenu: [
              { name: 'Profile', path: '/user-profile/bio' },
              { name: 'Alamat', path: '/user-profile/address' },
            ],
          },
        },
        {
          menu: {
            title: 'Pesanan',
            subMenu: [
              { name: 'Semua', path: '/user-profile/all' },
              { name: 'Belum Bayar', path: '/user-profile/not-yet-paid' },
              { name: 'Dikemas', path: '/user-profile/packed' },
              { name: 'Dikirim', path: '/user-profile/send' },
              { name: 'Selesai', path: '/user-profile/finished' },
              { name: 'Batal', path: '/user-profile/canceled' },
              { name: 'Pesanan', path: '/user-profile/pesanan' },
            ],
          },
        },
      ]
    },
  },
  userStaticData: {
    seller: {
      _id: 12,
      name: 'peternakan pria topi kuning',
      profile_image: '/seller/image.png',
      user_desc: 'Selamat Datang di peternakan pria bertopi kuning.',
      no_tlpn: 81222313244,
      status: 1,
      birth_date: '16 Juni 1996',
    },
  },
  stasticCardData: [
    {
      _id: 1,
      product_name: 'Sapi Lokal Grade A+',
      product_desc: 'Ternak kualitas terbaik yang dirawat seperti anak sendiri',
      price: 1000000,
      discount_price: 600000,
      product_image: '/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg',
      quantity: 12,
    },
    {
      _id: 2,
      product_name: 'Sapi Lokal Grade A+',
      product_desc: 'Ternak kualitas terbaik yang dirawat seperti anak sendiri',
      price: 1000000,
      discount_price: 600000,
      product_image: '/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg',
      quantity: 12,
    },
    {
      _id: 3,
      product_name: 'Sapi Lokal Grade A+',
      product_desc: 'Ternak kualitas terbaik yang dirawat seperti anak sendiri',
      price: 1000000,
      discount_price: 600000,
      product_image: '/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg',
      quantity: 12,
    },
    {
      _id: 4,
      product_name: 'Sapi Lokal Grade A+',
      product_desc: 'Ternak kualitas terbaik yang dirawat seperti anak sendiri',
      price: 1000000,
      discount_price: 600000,
      product_image: '/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg',
      quantity: 12,
    },
    {
      _id: 5,
      product_name: 'Sapi Lokal Grade A+',
      product_desc: 'Ternak kualitas terbaik yang dirawat seperti anak sendiri',
      quantity: 12,
      price: 1000000,
      discount_price: 600000,
      product_image: '/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg',
    },
    {
      _id: 6,
      product_name: 'Sapi Lokal Grade A+',
      product_desc: 'Ternak kualitas terbaik yang dirawat seperti anak sendiri',
      price: 1000000,
      quantity: 12,
      discount_price: 600000,
      product_image: '/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg',
    },
    {
      _id: 7,
      product_name: 'Sapi Lokal Grade A+',
      product_desc: 'Ternak kualitas terbaik yang dirawat seperti anak sendiri',
      price: 1000000,
      quantity: 12,
      discount_price: 600000,
      product_image: '/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg',
    },
    {
      _id: 8,
      product_name: 'Sapi Lokal Grade A+',
      product_desc: 'Ternak kualitas terbaik yang dirawat seperti anak sendiri',
      quantity: 12,
      price: 1000000,
      discount_price: 600000,
      product_image: '/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg',
    },
    {
      _id: 9,
      product_name: 'Sapi Lokal Grade A+',
      product_desc: 'Ternak kualitas terbaik yang dirawat seperti anak sendiri',
      price: 1000000,
      discount_price: 600000,
      quantity: 12,
      product_image: '/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg',
    },
    {
      _id: 10,
      product_name: 'Sapi Lokal Grade A+',
      product_desc: 'Ternak kualitas terbaik yang dirawat seperti anak sendiri',
      price: 1000000,
      discount_price: 600000,
      product_image: '/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg',
      quantity: 12,
    },
    {
      _id: 11,
      product_name: 'Sapi Lokal Grade A+',
      product_desc: 'Ternak kualitas terbaik yang dirawat seperti anak sendiri',
      price: 1000000,
      discount_price: 600000,
      quantity: 12,
      product_image: '/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg',
    },
    {
      _id: 12,
      product_name:
        'Sapi Lokal Grade A+ | Sapi Brahman Premium - Kondisi Sehat',
      product_desc:
        "Ternak kualitas terbaik yang dirawat seperti anak sendiri, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      price: 1000000,
      discount_price: 600000,
      product_image: '/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg',
      quantity: 12,
      seller: {
        _id: 12,
        name: 'peternakan pria topi kuning',
        seller_image: '/seller/image.png',
        seller_desc: 'Selamat Datang di peternakan pria bertopi kuning.',
        no_tlpn: 81222313244,
      },
    },
    {
      _id: 13,
      product_name: 'Sapi Lokal Grade A+',
      product_desc: 'Ternak kualitas terbaik yang dirawat seperti anak sendiri',
      price: 1000000,
      discount_price: 600000,
      quantity: 12,
      product_image: '/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg',
    },
    {
      _id: 14,
      product_name: 'Sapi Lokal Grade A+',
      product_desc: 'Ternak kualitas terbaik yang dirawat seperti anak sendiri',
      price: 1000000,
      discount_price: 600000,
      quantity: 12,
      product_image: '/assets/luke-stackpoole-RxHhxWnXmNs-unsplash.jpg',
    },
  ],
}
