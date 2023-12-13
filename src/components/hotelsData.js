import h1I1 from "../assets/destinationsImages/hotel1Pic.jpg";
import h1I2 from "../assets/destinationsImages/hotel1Pic2.jpg";
import h1I3 from "../assets/destinationsImages/hotel1Pic3.jpg";
import h1I4 from "../assets/destinationsImages/hotel1Pic4.jpg";
import h2I1 from "../assets/destinationsImages/hotel2Pic1.jpg";
import h2I2 from "../assets/destinationsImages/hotel2Pic2.jpg";
import h2I3 from "../assets/destinationsImages/hotel2Pic3.jpg";
import h2I4 from "../assets/destinationsImages/hotel2Pic4.jpg";
import h3I1 from "../assets/destinationsImages/hotel3Pic1.jpg";
import h3I2 from "../assets/destinationsImages/hotel3Pic2.jpg";
import h3I3 from "../assets/destinationsImages/hotel3Pic3.webp";
import h3I4 from "../assets/destinationsImages/hotel3Pic4.jpg";
import h4I1 from "../assets/destinationsImages/hotel4Pic1.jpg";
import h4I2 from "../assets/destinationsImages/hotel4Pic2.jpg";
import h4I3 from "../assets/destinationsImages/hotel4Pic3.webp";
import h4I4 from "../assets/destinationsImages/hotel4Pic4.jpg";
import h5I1 from "../assets/destinationsImages/hotel5Pic1.jpg";
import h5I2 from "../assets/destinationsImages/hotel5Pic2.jpg";
import h5I3 from "../assets/destinationsImages/hotel5Pic3.jpg";
import h5I4 from "../assets/destinationsImages/hotel5Pic4.jpg";
import h6I1 from "../assets/destinationsImages/hotel6Pic1.avif";
import h6I2 from "../assets/destinationsImages/hotel6Pic2.jpg";
import h6I3 from "../assets/destinationsImages/hotel6Pic3.jpg";
import h6I4 from "../assets/destinationsImages/hotel6Pic4.jpg";
import h7I1 from "../assets/destinationsImages/hotel7Pic1.jpg";
import h7I2 from "../assets/destinationsImages/hotel7Pic2.webp";
import h7I3 from "../assets/destinationsImages/hotel7Pic3.jpg";
import h7I4 from "../assets/destinationsImages/hotel7Pic4.webp";
import h8I1 from "../assets/destinationsImages/hotel8Pic1.jpg";
import h8I2 from "../assets/destinationsImages/hotel8Pic2.jpg";
import h8I3 from "../assets/destinationsImages/hotel8Pic3.jpg";
import h8I4 from "../assets/destinationsImages/hotel8Pic4.jpg";
import h9I1 from "../assets/destinationsImages/hotel9Pic1.webp";
import h9I2 from "../assets/destinationsImages/hotel9Pic2.jpg";
import h9I3 from "../assets/destinationsImages/hotel9Pic3.webp";
import h9I4 from "../assets/destinationsImages/hotel9Pic4.jpg";
import h10I1 from "../assets/destinationsImages/hotel10Pic1.jpg";
import h10I2 from "../assets/destinationsImages/hotel10Pic2.webp";
import h10I3 from "../assets/destinationsImages/hotel10Pic3.webp";
import h10I4 from "../assets/destinationsImages/hotel10Pic4.webp";

const hotelsData = {
  santoriniHotels: [
    {
      hotelName: "Filotera Suites",
      rate: 9.6,
      rooms: 8,
      description:
        "Offering an outdoor pool and a hot tub, the traditionally built Filotera Suites are in Oia Village. Fitted with arches and whitewashed walls, all air-conditioned suites of Filotera come with 1 or 2 separate bedrooms and open to a balcony.",
      mainImg: h1I1,
      colImg1: h1I2,
      colImg2: h1I3,
      colImg3: h1I4,
    },
    {
      hotelName: "Katikies Chromata",
      rate: 9.1,
      rooms: 29,
      description:
        "This exclusive hotel in Imerovigli, in Santorini, is set on the rim of the Caldera facing the sea and the volcano. It offers an infinity pool and rooms with private verandas with wonderful views of the sea.",
      mainImg: h3I1,
      colImg1: h3I2,
      colImg2: h3I3,
      colImg3: h3I4,
    },
    {
      hotelName: "Neptune Luxury Suites",
      rate: 9.6,
      rooms: 5,
      description:
        "Boasting unobstructed views of the Caldera, volcano and the Aegean Sea, the 5-star Neptune Luxury Suites consists of elegant suites with a pool or plunge pool. Featuring restful interior décor and built-in beds, all suites open to a private terrace with sun loungers.",
      mainImg: h2I2,
      colImg1: h2I1,
      colImg2: h2I3,
      colImg3: h2I4,
    },
    {
      hotelName: "Athina Luxury Suites",
      rate: 9.3,
      rooms: 21,
      description:
        "The Cycladic-style Athina Luxury Suites feature a swimming pool and a sun terrace with panoramic views of the Caldera and more. All units are comfortable and spacious, carved inside the volcanic earth according to the unique traditional style of the island’s architecture. ",
      mainImg: h4I4,
      colImg1: h4I2,
      colImg2: h4I3,
      colImg3: h4I1,
    },
    {
      hotelName: "Anteliz Suites",
      rate: 9.7,
      rooms: 13,
      link: "/anteliz-suites",
      description:
        "Lying at the edge of the hillside of Fira, Anteliz Suites features an outdoor swimming pool with an open-air hydromassage tub. Anteliz rooms are tastefully decorated in accordance with the Santorinian architecture. ",
      mainImg: h6I1,
      colImg1: h6I2,
      colImg2: h6I3,
      colImg3: h6I4,
    },
    {
      hotelName: "Skyfall Suites",
      rate: 9.3,
      rooms: 18,
      description:
        "Suites at Skyfall are minimally decorated with simple lines and colourful accents. They are all air conditioned and have a kitchenette with dining area. ",
      mainImg: h5I1,
      colImg1: h5I2,
      colImg2: h5I3,
      colImg3: h5I4,
    },

    {
      hotelName: "Andronis Boutique Hotel",
      rate: 9.7,
      rooms: 24,
      description:
        "Andronis Boutique Hotel is set in the quiet town of Oia, 4 km from Paradisos Beach. The spectacular views over the Caldera are coupled with facilities such as the hotel spa, swimming pool, organic restaurant and personalized services.",
      mainImg: h7I1,
      colImg1: h7I2,
      colImg2: h7I3,
      colImg3: h7I4,
    },
    {
      hotelName: "On The Rocks",
      rate: 9.1,
      rooms: 27,
      description:
        "On The Rocks is ideally situated in the famous village of Imerovigli. All the residences have breathtaking views and verandas overlooking the Caldera and the sea.",
      mainImg: h8I1,
      colImg1: h8I2,
      colImg2: h8I3,
      colImg3: h8I4,
    },
    {
      hotelName: "Porto Fira Suites",
      rate: 9.1,
      rooms: 13,
      description:
        "These traditional suites sitting on the edge of the cliff offer panoramic views of Fira Bay and the volcano. Each unit offers a furnished balcony or terrace overlooking Santorini’s world-famous sunsets.",
      mainImg: h9I1,
      colImg1: h9I2,
      colImg2: h9I3,
      colImg3: h9I4,
    },
    {
      hotelName: "Perivolas Hotel",
      rate: 9.7,
      rooms: 22,
      description:
        "This 5-star hotel, offering an infinity pool with magnificent sea view, is situated on the cliffs high above the Aegean Sea. The hotel boasts 22 private houses in restored 300 year-old caves.",
      mainImg: h10I1,
      colImg1: h10I2,
      colImg2: h10I3,
      colImg3: h10I4,
    },
  ],
  santoriniImages: [
    {
      img: h1I1,
    },
    {
      img: h1I4,
    },
    {
      img: h3I1,
    },
    {
      img: h2I3,
    },
    {
      img: h3I1,
    },
    {
      img: h4I2,
    },
    {
      img: h5I2,
    },
    {
      img: h6I2,
    },
    {
      img: h6I3,
    },
    {
      img: h7I1,
    },
    {
      img: h7I2,
    },
    {
      img: h7I3,
    },
    {
      img: h8I1,
    },
    {
      img: h9I1,
    },
    {
      img: h10I2,
    },
  ],
  dubaiHotels: [
    {
      hotelName: "Mandarin Oriental Jumeira",
      rate: 9.7,
      description:
        "Located in the low-rise, high-end Jumeirah neighbourhood, the Mandarin Oriental has a beach-side location that benefits from two incredible views — one out over the Arabian Gulf, and the other back over Dubai’s dramatic skyline, with the Burj Khalifa at its centre.",
      mainImg:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/70/48/6e/mandarin-sea-front-suite.jpg?w=700&h=-1&s=1",
      colImg1:
        "https://www.kayak.com/rimg/himg/f6/9c/9f/leonardo-207085234-MODUB_Two_Bedroom_Sea_View_Suite_Twin_O-611147.jpg?width=1366&height=768&crop=true",
      colImg2:
        "https://media.cntraveler.com/photos/5cacabcb4c47554ce9bb89a8/16:9/w_2560,c_limit/Mandarin-Oriental-Jumeira-Dubai_2019dubai-fine-dining-tasca-terrace.jpg",
      colImg3:
        "https://leonardo.sk/wp-content/uploads/2021/04/MANDARIN-DUBAI-JUM-5-1100x825.jpg",
    },
    {
      hotelName: "SLS, Dubai Design District",
      rate: 9.9,
      rooms: 22,
      description:
        "Topped by twin infinity pools and the Privilege bar and nightclub, the SLS doesn’t shy away from its party-hard credentials, although soothing pinks and rose gold are the tones of choice in guestrooms, perhaps in anticipation of the morning after.",
      mainImg: "https://whatson.ae/wp-content/uploads/2021/06/SLS_049.jpg",
      colImg1:
        "https://www.sleepermagazine.com/wp-content/uploads/2021/01/SLS-Dubai.jpg",
      colImg2:
        "https://stupiddope.com/wp-content/uploads/2021/04/https-blogs-images.forbes.com-taylorboozan-files-2019-03-SLS-Dubai_Rooftop-Pool-1200x814-1.jpg",
      colImg3: "https://images2.bovpg.net/r/media/1/3/5/8/6/358635.jpg",
    },
    {
      hotelName: "Atlantis The Palm",
      rate: 9.4,
      description:
        "Crowning the top of the Palm Jumeirah, it’s difficult to grasp the scale of the 1,500-room Atlantis at first, sprawling as it does over an expanse of beach and palm-filled gardens. ",
      mainImg:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/420453792.jpg?k=551f9eecb9af37e026f60117ec27c87188919e09c4c26a313eb1fda9050c4f1e&o=&hp=1",
      colImg1:
        "https://www.momondo.com/himg/0b/12/28/ice-302708-92948952-597238.jpg",
      colImg2:
        "https://media.cntraveler.com/photos/63471f3c81e54d27f1e8cb10/16:9/w_2560,c_limit/Atlantis%20the%20Palm,%20Underwater%20Suite%205.jpg",
      colImg3:
        "https://blog.skyloov.com/wp-content/uploads/2022/10/Hotel-Atlantis-The-Palm-1140x692.jpeg",
    },
    {
      hotelName: "Caesars Palace Dubai",
      rate: 9.7,
      description:
        "It may share a name with the Las Vegas casino hotel but that’s pretty much where the similarities end. Located on Bluewaters Island, adjacent to the Ain Dubai ferris wheel, it has a proper holiday feel",
      mainImg:
        "https://www.caesars.com/content/dam/empire/dbw/hotel/rooms/1920x1080/palace-family-two-bedroom-2-1920x1080.jpg.transform/slider-img/image.jpg",
      colImg1:
        "https://www.visitdubai.com/-/media/gathercontent/poi/c/caesars-palace-bluewaters-dubai/fallback-image/ceasarspalace1ceasarspalacejpg.jpg",
      colImg2:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/421356403.jpg?k=217e168f399a22d4271690d9497ee76c16924b4a02318a069d23c80d34bd9668&o=&hp=1",
      colImg3:
        "https://bynder.onthebeach.co.uk/m/361cd4c7c3c8f3/original/Caesars-Palace-Bluewaters-Dubai.jpg",
    },
    {
      hotelName: "Four Seasons Hotel",
      rate: 9.7,
      rooms: 22,
      description:
        "While a 106-room hotel might sound large in some places, in Dubai it’s practically boutique. It’s sleek and sexy throughout, from its glass-sided aquarium-like swimming pool to the Luna rooftop bar with views straight onto the Burj Khalifa.",
      mainImg:
        "https://m.fourseasons.com/alt/img-opt/~70.1530/publish/content/dam/fourseasons/images/web/DJB/DJB_164_3060x1722.jpg",
      colImg1:
        "https://www.mspirit.co.il/wp-content/uploads/2020/10/DJB_144_3060x1722.jpg",
      colImg2: "https://photos.prnewswire.com/prnfull/20151130/291917",
      colImg3:
        "https://press.fourseasons.com/content/dam/fourseasons/images/web/DIF/DIF_028_aspect16x9.jpg/jcr:content/renditions/cq5dam.web.press.722.keepaspectratio.jpeg",
    },
    {
      hotelName: "25hours One Central Dubai",
      rate: 927,
      description:
        "The 25hours brand philosophy of “come as you are” is alive and kicking in Dubai, where a lobby full of quirky art, antiques, and a café that’s equal parts coffee shop and co-working space welcome a crowd of residents and tourists alike.",
      mainImg:
        "https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2022/02/USE_ADBCH-Pool-79.jpg?resize=1536,1024",
      colImg1:
        "https://q-xx.bstatic.com/xdata/images/hotel/max750/464506950.jpg?k=0a04beb94e04a0df1a145e9e8ef697e9f8599cea8cf827cbd2a0a21efaf21896&o=",
      colImg2:
        "https://www.hoteliermiddleeast.com/cloud/2021/08/04/25hours-one-central-dubai-1024x671-1.jpg",
      colImg3:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/464507054.jpg?k=ade20abdf71f4541e3caa6271f8f95527c39d4cc8c5d8d80448846a0983e4789&o=&hp=1",
    },
    {
      hotelName: "One & Only The Palm",
      rate: 9.7,
      rooms: 22,
      description:
        "An opulent hotel at the end of the Palm Jumeirah’s west crescent, the One&Only’s long private beach, palm-filled gardens and what may be Dubai’s best swimming pool welcome guests into a world where breezy cabanas.",
      mainImg:
        "https://www.oneandonlyresorts.com/-/media/oneandonly/the-palm/homepage/ootp-hero-image.jpg",
      colImg1:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447701859.jpg?k=f938b911ea5e63bdabb1734344150824645e1de84ade9821da75220b3fce6bb8&o=&hp=1",
      colImg2:
        "https://static-new.lhw.com/HotelImages/Final/LW6211/lw6211_123757984_790x490.jpg",
      colImg3:
        "https://travellermade.com/wp-content/uploads/2012/07/OOTP-7.png",
    },
  ],
};

export default hotelsData;
