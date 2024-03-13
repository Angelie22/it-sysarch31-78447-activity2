import Header from "./Header"
import Card from "./Card"
import Footer from "./Footer"
function App() {
  const cardData = [
    { id: 1, name: "Baek Ha Rin", email: "baekHaRin@gmail.com", image: "https://d2v0j9zp5u17nn.cloudfront.net/wp-content/uploads/2024/02/13140345/daa.jpg" },
    { id: 2, name: "Sung Soo Ji", email: "sungSooJi@gmail.com", image: "https://6.soompi.io/wp-content/uploads/image/20240208122831_pyramid-game-4.jpg?s=900x600&e=t" },
    { id: 3, name: "Myung Ja Eun", email: "myungJaEun@gmail.com", image: "https://photos.hancinema.net/photos/photo1616045.jpg" },
    { id: 4, name: "Im Ye Rim", email: "imYeRim@gmail.com", image: "https://i.mydramalist.com/kAV8pm_7f.jpg" },
    { id: 5, name: "Bang Woo Yi", email: "bangWooYi@gmail.com", image: "https://asianwiki.com/images/8/85/Ha_Yul-Ri-1999-pt1.jpeg" },
    { id: 5, name: "Kim Da Yun", email: "kimDaYun@gmail.com", image: "https://i.mydramalist.com/XdAVkn_5c.jpg" },
  ];

  return (
    <>
      <Header />
      <Card data={cardData} /> {}
      <Footer />
    </>
  );
}

export default App
