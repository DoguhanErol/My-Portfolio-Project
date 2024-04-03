import myImage from "../../assets/aboutme/myImage.png";

const AboutMeComponent:React.FC = () => {
  //Design
  return (
    <>
<h3 className="m-2 text-2xl sm:text-4xl font-semibold text-gray-100">Hakkımda</h3>
<article className="">
    <p className=" text-lg sm:text-xl lg:text-3xl px-2">
    <img src={myImage} alt="My Picture" className="float-left w-40 h-52 sm:w-56 sm:h-72 m-3 rounded-lg" />
      Merhaba, ben Doğuhan. 2019 yılında Milas Anadolu Lisesi'nden mezun olduktan sonra, teknoloji ve bilgisayar tutkunu olarak Bilgisayar Programcılığı bölümüne başladım. Bölüm içerisinde bilgi sistemlerine duyduğum ilgiyi geliştirdim. Geleceğin yazılım alanlarından biri olarak gördüğüm ve bilgi sistemleri için mükemmel olduğunu düşündüğüm web alanında uzmanlaşmaya karar verdim. Bilgisayar Programcılığından mezun olduktan sonra, gözümü web veya yapay zeka alanında şirketleşmeye çevirdim. Bu nedenle Yönetim Bilişim Sistemleri okumaya karar verdim. Uzaktan eğitim alarak, yazılım alanında uzmanlaşırken aynı zamanda yönetim ve girişim konularında dersler alarak hedefime ilerlemeyi planladım. İlk projelerimi yayınlayarak, projenin baştan sona bana ait olması, hem yazılım konusunda hem de projenin yönetimi ve pazarlanması konularında tecrübe kazanmama yardımcı oldu. Şu anda projelerim genellikle 'Front-End' ağırlıklı olduğu için 'Back-End' konusunda deneyim kazanmaya çalışıyorum.
    </p>
</article>



    </>
  )
}

export default AboutMeComponent