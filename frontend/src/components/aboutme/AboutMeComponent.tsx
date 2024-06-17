import myImage from "../../assets/aboutme/myImage.png";

const AboutMeComponent:React.FC = () => {
  //Design
  return (
    <>
<h3 className="m-2 text-2xl sm:text-4xl font-semibold text-gray-100">Hakkımda</h3>
<article className="">
    <p className=" text-lg sm:text-xl lg:text-3xl px-2">
    <img src={myImage} alt="My Picture" className="float-left w-40 h-52 sm:w-56 sm:h-72 m-3 rounded-lg" />
    Merhaba! Ben Doğuhan Erol. Muğla Sıtkı Koçman Üniversitesi'nde Bilgisayar Programcılığı ve Anadolu Üniversitesi'nde Yönetim Bilişim Sistemleri bölümlerinden mezun oldum. Ayrıca Web Tasarımı sertifikasına sahibim.

Web üzerinde yazılım geliştirme konusunda uzmanlaşmış biriyim ve projelerimi genellikle sıfırdan kodlayarak geliştiriyorum. Her projeye baştan sona kendim çözüm üretmekten keyif alıyorum ve bu süreçte kaliteyi ön planda tutuyorum.

Teknolojiye olan ilgim ve sürekli olarak gelişen web teknolojilerini takip etme tutkum sayesinde, kendimi sürekli yeniliyorum ve projelerimde en son teknolojileri kullanarak çözümler üretiyorum.
Boş zamanlarımda yeni teknolojileri denemek, yeni şeyler öğrenmek ve spor yapmak gibi aktivitelerle ilgileniyorum. Her zaman yeni projeler ve işbirlikleri için açığım. Daha fazla bilgi veya işbirliği teklifi için benimle iletişime geçmekten çekinmeyin!
    </p>
</article>



    </>
  )
}

export default AboutMeComponent