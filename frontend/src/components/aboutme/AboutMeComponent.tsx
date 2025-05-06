import myImage from "../../assets/aboutme/myImage.png";

const AboutMeComponent:React.FC = () => {
  //Design
  return (
    <>
<h3 className="m-2 text-2xl sm:text-4xl font-semibold text-gray-100">Hakkımda</h3>
<article className="">
    <p className=" text-lg sm:text-xl lg:text-3xl px-2">
    <img src={myImage} alt="My Picture" className="float-left w-40 h-52 sm:w-56 sm:h-72 m-3 rounded-lg" />
    Merhaba! Ben Doğuhan Erol. Muğla Sıtkı Koçman Üniversitesi Bilgisayar Programcılığı ve Anadolu Üniversitesi Yönetim Bilişim Sistemleri mezunuyum. Ayrıca Saint Petersburg Elektroteknik Üniversitesi (LETI)’nde Rusça dil eğitimi aldım. Web yazılım geliştirme alanında uzmanlaşmış bir geliştirici olarak, projeleri sıfırdan kodlayarak uçtan uca çözümler üretiyorum.

Tek başıma, modern yazılım geliştirme yöntemleriyle kullanıcı dostu ve performans odaklı web projeleri hayata geçirebiliyorum. İşletmelerin ihtiyaçlarını minimum eforla karşılayacak sade, güvenilir ve sürdürülebilir çözümler sunmayı hedefliyorum. Tasarımdan geliştirmeye kadar tüm süreci üstlenebildiğim için dış kaynak ihtiyacını ortadan kaldırıyor, zaman ve maliyet tasarrufu sağlıyorum.

Sürekli gelişen web teknolojilerini yakından takip ediyor, projelerimde en güncel ve verimli araçları kullanıyorum. Her zaman kaliteyi ön planda tutuyor ve işin her aşamasında detaylara önem veriyorum. Boş zamanlarımda yeni teknolojileri denemek, öğrenmeye devam etmek ve sporla ilgilenmek benim için hem motivasyon hem ilham kaynağı.

Eğer sizi yormadan, işinizi dijitalde güçlü şekilde temsil edecek modern bir çözüm arıyorsanız, birlikte çalışmak için iletişime geçmekten çekinmeyin.
    </p>
</article>



    </>
  )
}

export default AboutMeComponent
