import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  products = [
  {
    id: 1,
    name: 'Handmade Vase',
    category: 'Pottery',
    description: 'Elegant hand-thrown ceramic vase with a matte finish, perfect for dried flowers.',
    price: 899,
    rating: 4.8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvgZnbzRkwq2TgTg9Y-gMjAjpyEQMilCdlu08iGslww&s=10'
  },
  {
    id: 2,
    name: 'Clay Flower Pot',
    category: 'Pottery',
    description: 'Durable clay pot with natural glaze, ideal for indoor plants and succulents.',
    price: 599,
    rating: 4.6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTAbV5piCZrRVK_xnYKWJGK8D5Ld-frtuZw1iYBMhJsQ&s=10'
  },
  {
    id: 3,
    name: 'Ceramic Tea Set',
    category: 'Pottery',
    description: 'Hand-painted ceramic tea set for two, includes teapot and matching cups.',
    price: 1499,
    rating: 4.9,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6g97Fru9kN5K8oTYqZFGgoIP2IVSpuJ9YUo55fQD7A&s=10'
  },
  {
    id: 4,
    name: 'Macrame Wall Hanging',
    category: 'Home Decor',
    description: 'Boho macrame wall hanging made from natural cotton rope — adds warmth to any room.',
    price: 1299,
    rating: 4.7,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_U0jxdd-maOO8G1x9yThBIdV0d5Bud6hL0FU2Yol4Q&s=10'
  },
  {
    id: 5,
    name: 'Wooden Photo Frame',
    category: 'Wood Craft',
    description: 'Hand-carved solid wood photo frame with rustic finish for 4x6 photos.',
    price: 699,
    rating: 4.5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjUMYmUu7XZCAzE4rjxAVCbJr01cFT9Dq2nMCnu9KBw&s=10'
  },
  {
    id: 6,
    name: 'Bamboo Basket',
    category: 'Bamboo Craft',
    description: 'Woven bamboo basket with lid — versatile storage for home or picnics.',
    price: 799,
    rating: 4.6,
    image: 'https://punarnawa.com/cdn/shop/files/punarnawa-soul-of-artistry-basket-default-title-n-bamboo-basket-with-lid-32440751423545.jpg?v=1705103866'
  },
  {
    id: 7,
    name: 'Jute Storage Bag',
    category: 'Jute Craft',
    description: 'Eco-friendly jute bag with reinforced handles — great for groceries and storage.',
    price: 499,
    rating: 4.4,
    image: 'https://i.etsystatic.com/56101748/r/il/0d37f6/6705797215/il_fullxfull.6705797215_39t1.jpg'
  },
  {
    id: 8,
    name: 'Handwoven Rug',
    category: 'Textiles',
    description: 'Soft handwoven rug made from natural fibers, available in multiple sizes.',
    price: 2499,
    rating: 4.8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwvUn8uZh_Ly-y6hQ42Y23LzsJBO1RjDXBolKtcWozA&s=10'
  },
  {
    id: 9,
    name: 'Knitted Wool Scarf',
    category: 'Knitting',
    description: 'Cozy hand-knitted wool scarf with ribbed pattern — warm and stylish.',
    price: 899,
    rating: 4.7,
    image: 'https://images.stockcake.com/public/8/6/d/86d19d0d-7ac0-460c-8da9-f9591b3bd8b6_large/cozy-knitted-scarf-stockcake.jpg'
  },
  {
    id: 10,
    name: 'Crochet Cushion Cover',
    category: 'Crochet',
    description: 'Hand-crocheted cushion cover with textured stitches — fits 18x18 cushions.',
    price: 799,
    rating: 4.6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrdyIOSBMPiGnsj9-kmVekdceOj47PsN4UZxrivTeC_1Sd1g-VxCS9fKx&s=10'
  },
  {
    id: 11,
    name: 'Terracotta Lamp',
    category: 'Pottery',
    description: 'Warm terracotta lamp with hand-etched pattern — perfect for ambient lighting.',
    price: 1199,
    rating: 4.8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgrlAoUHcPTM8Lq9oHukBe_QqEpPTF6RRkTeG00wnyg&s'
  },
  {
    id: 12,
    name: 'Wooden Jewelry Box',
    category: 'Wood Craft',
    description: 'Polished wooden jewelry box with velvet-lined compartments and brass latch.',
    price: 1399,
    rating: 4.9,
    image: 'https://i.etsystatic.com/27416884/r/il/b3fbd8/5523171846/il_1080xN.5523171846_cm26.jpg'
  },
  {
    id: 13,
    name: 'Hand Painted Plate',
    category: 'Paintings',
    description: 'Decorative ceramic plate hand-painted with floral motifs — wall-mountable art piece.',
    price: 999,
    rating: 4.7,
    image: 'https://karukarjo.in/cdn/shop/files/40_f44e6dca-d95b-4af9-bc4f-dacb91a74004.jpg?v=1750923315&width=1946'
  },
  {
    id: 14,
    name: 'Canvas Art Painting',
    category: 'Paintings',
    description: 'Original acrylic canvas painting featuring abstract textures and warm tones.',
    price: 1999,
    rating: 4.9,
    image: 'https://m.media-amazon.com/images/I/81wze1QgD6L.jpg'
  },
  {
    id: 15,
    name: 'Leather Wallet',
    category: 'Leather Craft',
    description: 'Hand-stitched leather wallet with multiple card slots and a slim profile.',
    price: 1099,
    rating: 4.6,
    image: 'https://ajantashoes.com/cdn/shop/files/1_2e8ef8f2-373d-4718-bd2e-359c749624b9.jpg?v=1773734365&width=1024'
  },
  {
    id: 16,
    name: 'Handmade Notebook',
    category: 'Paper Craft',
    description: 'Recycled paper notebook with hand-stitched binding and linen cover.',
    price: 499,
    rating: 4.5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwu8HCfustrRGEijNVz23IKiykUM6BcULVy7LcHg490JQkaoH3rWrk_26&s=10'
  },
  {
    id: 17,
    name: 'Origami Gift Box',
    category: 'Paper Craft',
    description: 'Hand-folded origami gift box — perfect for small presents and keepsakes.',
    price: 399,
    rating: 4.4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBTKf4rxUXPQ1IQBjXATFizb-SxTG6DhdLBAYA5QvyPcvUy-0SHSXM7o-&s=10'
  },
  {
    id: 18,
    name: 'Resin Keychain',
    category: 'Resin Art',
    description: 'Colorful resin keychain with embedded dried flowers — lightweight and durable.',
    price: 299,
    rating: 4.6,
    image: 'https://keychain.co.in/wp-content/uploads/2026/06/image-3.png'
  },
  {
    id: 19,
    name: 'Resin Coaster Set',
    category: 'Resin Art',
    description: 'Set of 4 resin coasters with metallic accents — protects surfaces in style.',
    price: 799,
    rating: 4.8,
    image: 'https://diybaazar.com/publicuploads/seller/products/resin-coasters-set-of-6-coasters-1761-2338-1_diybaazar61fa556d86b0f.jpg'
  },
  {
    id: 20,
    name: 'Beaded Necklace',
    category: 'Jewelry',
    description: 'Hand-strung beaded necklace using semi-precious stones and silk thread.',
    price: 699,
    rating: 4.7,
    image: 'https://images.openai.com/static-rsc-4/e5GeumPsxxxEpadzk50tnPwMmOmLAiq5Klz8ZZoR585zCCBgyExwyibzP17q-BT5wEZVv41O5UEOtNL-1YPnF0ALopYaRW2H7lTDBftcQpQ3lvhp1NDbDPBMVYnEX4pc8bTVONGtV3xSNmFDzJfrA5cYh_HA4W9Spj11Xj4nUTzOhRwmPVJsFynxpZziKG92?purpose=fullsize'
  },
  {
    id: 21,
    name: 'Pearl Bracelet',
    category: 'Jewelry',
    description: 'Delicate pearl bracelet on elastic — elegant for everyday wear.',
    price: 599,
    rating: 4.5,
    image: 'https://m.media-amazon.com/images/I/710RMIOxjaL._AC_UY1100_.jpg'
  },
  {
    id: 22,
    name: 'Dream Catcher',
    category: 'Home Decor',
    description: 'Handmade dream catcher with feathers and beads — bohemian bedroom decor.',
    price: 899,
    rating: 4.8,
    image: 'https://rukminim2.flixcart.com/image/480/640/l0mr7gw0/wind-chime/n/f/w/iludc33-bluelightblue-60-ilu-original-imagcdnmjjzxyux9.jpeg?q=90'
  },
  {
    id: 23,
    name: 'Decorative Candle',
    category: 'Candle Making',
    description: 'Hand-poured decorative candle with subtle floral fragrance.',
    price: 499,
    rating: 4.6,
    image: 'https://modernquests.com/cdn/shop/files/esq-living-halo-faux-flowers-decorative-candle-pink-and-purple-1.jpg?v=1716110896'
  },
  {
    id: 24,
    name: 'Soy Wax Candle Set',
    category: 'Candle Making',
    description: 'Premium soy wax candles set with cotton wicks — clean-burning and long-lasting.',
    price: 999,
    rating: 4.9,
    image: 'https://gulmeher.com/wp-content/uploads/2025/09/Soy-Wax-Candles-Set-of-6-1-scaled-1.webp'
  },
  {
    id: 25,
    name: 'Embroidered Hoop Art',
    category: 'Embroidery',
    description: 'Hand-embroidered hoop art with floral patterns — ready to hang.',
    price: 799,
    rating: 4.7,
    image: 'https://5.imimg.com/data5/ANDROID/Default/2022/3/PV/YH/XF/149977915/product-jpeg.jpg'
  },
  {
    id: 26,
    name: 'Hand Embroidered Pillow',
    category: 'Embroidery',
    description: 'Soft pillow with intricate hand embroidery and removable cover.',
    price: 1199,
    rating: 4.8,
    image: 'https://twosisterscompany.in/cdn/shop/files/BFM6937-Enhanced-NR.jpg?v=1727355398'
  },
  {
    id: 27,
    name: 'Bamboo Wind Chime',
    category: 'Bamboo Craft',
    description: 'Tuned bamboo wind chime producing gentle, natural tones for patios.',
    price: 699,
    rating: 4.6,
    image: 'https://m.media-amazon.com/images/I/61KClCF2x1L._AC_UF894,1000_QL80_.jpg'
  },
  {
    id: 28,
    name: 'Hand Carved Elephant',
    category: 'Wood Craft',
    description: 'Hand-carved wooden elephant figurine with smooth finish and fine details.',
    price: 1599,
    rating: 4.9,
    image: 'https://www.manobhav.in/cdn/shop/files/3_96b80e1c-c6d7-4e4c-b4d1-3aa692a2f56d.jpg?v=1773832388'
  },
  {
    id: 29,
    name: 'Mini Succulent Planter',
    category: 'Pottery',
    description: 'Tiny glazed planter ideal for succulents and small desk plants.',
    price: 549,
    rating: 4.5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvo176JDZckUJB00DmPl8Jfuook68wwmPWcZ_y4IHWaA&s=10'
  },
  {
    id: 30,
    name: 'Woven Picnic Basket',
    category: 'Bamboo Craft',
    description: 'Spacious woven picnic basket with sturdy handles and cloth lining.',
    price: 1799,
    rating: 4.8,
    image: 'https://m.media-amazon.com/images/I/81b79CAft5L._AC_UF894,1000_QL80_.jpg'
  },
  {
    id: 31,
    name: 'Landscape Acrylic Painting',
    category: 'Paintings',
    description: 'Vibrant landscape painting on stretched canvas — ready to hang.',
    price: 2499,
    rating: 4.8,
    image: 'https://images.openai.com/static-rsc-4/bNyr2AFZ8dmdEY3YVYWXRrBipNeqjVoEGMxiBZccPtYQbwj6GTuhb4OILZX85OiNMXYJkF0R3pHu_wY6amFCSw03zq04MOSchRowhUrocoP1Ms49mriP7t4-86EHgwmHfjDOtTPiG1eYs8bUKU3K1V1wLeZNOiOHVIRXUzt2Cr0gxiGXvdPOEdYXNPOGfBuA?purpose=fullsize'
  },
  {
    id: 32,
    name: 'Minimalist Line Art',
    category: 'Paintings',
    description: 'Hand-painted minimalist line art on cotton canvas with neutral tones.',
    price: 1299,
    rating: 4.6,
    image: 'https://images.openai.com/static-rsc-4/kxigQ3XDGKi-MffgTOrjBlDcW3CbebFDQS0su7H8MgCUN-iYJBvTt2QlRRjY_t47S8kQkxATiua2GBNyXr2hH39LQrCPD-B0zs-k2sUHQpFXcVzbJO06cN-PhCNwS0sBqq2rrOgD06OKTJzFoTAgZBqNmeZIuyF7CPmHc5i1bRL8k7yt-m_bl2JCkQIgdFfz?purpose=fullsize'
  },
  {
    id: 33,
    name: 'Abstract Mixed Media',
    category: 'Paintings',
    description: 'Abstract mixed-media piece combining acrylics and textured paste.',
    price: 2999,
    rating: 4.9,
    image: 'https://images.openai.com/static-rsc-4/KhG-QkP8An9rqHqSZYKCa3GXKTPX96cQ3GAJ7X25fIMukQfyhCykUC5VkndEzemtMIrd1MDnOFxxmmuuOH4lIU85R_7EFKjrzNl6HOxToy_s3b8cBqVEingVwOHlY8nGZG4yznEPm2UecPc0n5TT7DAxPxKVjhhsKhfOE0YHwxk9ktwCP-c4pkQSEhxFLYl8?purpose=fullsize'
  },
 
];
getproducts(){
      return of(this.products)
}
getProductsById(pid:any){
      return this.products.find(obj=>obj.id==pid)
}
addProduct(product: any) {
  this.products.push(product);
}

updateProduct(updatedProduct: any) {
  const index = this.products.findIndex(
    p => p.id === updatedProduct.id
  );
  if (index !== -1) {
    this.products[index] = updatedProduct;
  }
}

deleteProduct(id: number) {
  this.products = this.products.filter(
    p => p.id !== id
  );
}
}