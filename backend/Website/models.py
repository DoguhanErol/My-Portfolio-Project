from django.db import models
from django.utils import timezone


# -Create your models here.


# projects page data models


class Project(models.Model):
    class Meta:
        verbose_name = 'Proje'
        verbose_name_plural = 'Projeler'

    project_id = models.AutoField(primary_key=True, verbose_name='Proje ID')
    project_name = models.CharField(max_length=100, null=False, verbose_name='Proje Adı')
    project_type = models.CharField(max_length=100, null=False, verbose_name='Proje Türü')
    project_budget = models.CharField(max_length=100, null=True, verbose_name='Bütçe')
    project_delivery_date = models.CharField(max_length=20, null=True, verbose_name='Teslim Tarihi')  # 01.01.2001
    project_frontend_tecnologies = models.CharField(max_length=200, null=True, verbose_name='Frontend Teknolojileri')
    project_backend_tecnologies = models.CharField(max_length=200, null=True, verbose_name='Backend Teknolojileri')
    project_live_url = models.CharField(max_length=150, null=True, verbose_name='Canlı URL')
    project_github_url = models.CharField(max_length=150, null=True, verbose_name='GitHub URL')
    project_details = models.TextField(max_length=400, null=True, verbose_name='Detaylar')
    project_image_path = models.ImageField(upload_to='projects/', null=False, verbose_name='Resim Yolu')
    project_created_at = models.DateTimeField(auto_now_add=True, verbose_name='Oluşturulma Tarihi')

    def __str__(self):
        return 'Proje Adı: ' + self.project_name

class ProjectImage(models.Model):
    class Meta:
        verbose_name = 'Proje Resmi'
        verbose_name_plural = 'Proje Resimleri'

    project = models.ForeignKey(Project, related_name='images', null=False, verbose_name='Projeyi Seç', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='projects/', null=False, verbose_name='Resim Yolu')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Oluşturulma Tarihi')

    def __str__(self):
        return 'Ait Olduğu Proje: ' + self.project.project_name + ' --- ' + 'Oluşturulma Tarihi: ' + str(self.created_at)



# about me page data models


class Education(models.Model):
    class Meta:
        verbose_name = 'Eğitim'
        verbose_name_plural = 'Eğitim Bilgileri'

    education_id = models.AutoField(primary_key=True, verbose_name='Eğitim ID')
    education_school_name = models.CharField(max_length=75, null=False, verbose_name='Okul Adı')
    education_date = models.CharField(max_length=20, null=True, verbose_name='Tarih')  # 01.01.2001
    education_title = models.CharField(max_length=50, null=False, verbose_name='Başlık')
    education_created_at = models.DateTimeField(auto_now_add=True, verbose_name='Oluşturulma Tarihi')

    def __str__(self):
        return 'Okul Adı: ' + self.education_school_name



class Certificate(models.Model):
    class Meta:
        verbose_name = 'Sertifika'
        verbose_name_plural = 'Sertifikalar'

    certificate_id = models.AutoField(primary_key=True, verbose_name='Sertifika ID')
    certificate_school_name = models.CharField(max_length=75, null=False, verbose_name='Okul Adı')
    certificate_date = models.CharField(max_length=20, null=True, verbose_name='Tarih')  # 01.01.2001
    certificate_title = models.CharField(max_length=50, null=False, verbose_name='Başlık')
    certificate_created_at = models.DateTimeField(auto_now_add=True, verbose_name='Oluşturulma Tarihi')

    def __str__(self):
        return 'Sertifika Adı: ' + self.certificate_title



# -Primary


class Table(models.Model):
    class Meta:
        verbose_name = 'Tablo'
        verbose_name_plural = 'Tablolar'

    table_id = models.CharField(max_length=40, primary_key=True, verbose_name='Tablo ID')
    table_title = models.CharField(max_length=60, null=False, verbose_name='Başlık')
    table_created_at = models.DateTimeField(auto_now_add=True, verbose_name='Oluşturulma Tarihi')

    def __str__(self):
        return 'Tablo Başlığı: ' + self.table_title


# -Foreign


class TableContent(models.Model):
    class Meta:
        verbose_name = 'Tablo İçeriği'
        verbose_name_plural = 'Tablo İçerikleri'

    content_id = models.AutoField(primary_key=True, verbose_name='İçerik ID')
    table_id = models.ForeignKey(Table, on_delete=models.CASCADE, null=False, verbose_name='Tablo')
    content_left_text = models.TextField(max_length=40, null=False, verbose_name='Sol Metin')
    content_right_text = models.TextField(null=True, verbose_name='Sağ Metin')
    table_content_created_at = models.DateTimeField(auto_now_add=True, verbose_name='Oluşturulma Tarihi')

    def __str__(self):
        return str(self.table_id) + ' - Sütün: ' + str(self.content_left_text)


    # Diğer alanları burada tanımlayabilirsiniz


# Gallery Page Data models


class GalleryImage(models.Model):
    class Meta:
        verbose_name = 'Galeri Resmi'
        verbose_name_plural = 'Galeri Resimleri'

    image_id = models.AutoField(primary_key=True, verbose_name='Resim ID')
    image_path = models.ImageField(upload_to='gallery/', null=False, verbose_name='Resim Yolu')
    image_created_at = models.DateTimeField(auto_now_add=True, verbose_name='Oluşturulma Tarihi')

    def __str__(self):
        return 'Resim ID: ' + str(self.image_id)

# Cv- Bu kisimi daha sonra hallet

# Mail Data Model


class ElectronicMail(models.Model):
    class Meta:
        verbose_name = 'E-posta'
        verbose_name_plural = 'E-postalar'

    mail_id = models.AutoField(primary_key=True, verbose_name='E-posta ID')
    mail_first_name = models.CharField(max_length=50, null=False, verbose_name='Adı')
    mail_last_name = models.CharField(max_length=50, null=False, verbose_name='Soyadı')
    mail_address = models.CharField(max_length=100, null=False, verbose_name='Adres')
    mail_message = models.TextField(max_length=500, null=False, verbose_name='Mesaj')
    mail_created_at = models.DateTimeField(auto_now_add=True, verbose_name='Oluşturulma Tarihi')

    def __str__(self):
        return 'Gönderen: ' + self.mail_first_name + ' ' + self.mail_last_name


# Prices Data Model


class Price(models.Model):
    class Meta:
        verbose_name = 'Fiyat'
        verbose_name_plural = 'Fiyatlar'

    PRICE_TYPES = [
        ('ucuz', 'En Ucuz'),
        ('popiler', 'En Popüler'),
        ('normal', 'Normal'),
    ]

    price_id = models.AutoField(primary_key=True, verbose_name='Fiyat ID')
    price_title = models.CharField(max_length=80, null=False, verbose_name='Başlık')
    price_type = models.CharField(max_length=7, choices=PRICE_TYPES, default='normal', verbose_name='Tür')
    price_price = models.IntegerField(null=False, verbose_name='Fiyat')
    price_sub_content_1 = models.TextField(max_length=80, null=True, blank=True, verbose_name='Alt İçerik 1')
    price_sub_content_2 = models.TextField(max_length=80, null=True, blank=True, verbose_name='Alt İçerik 2')
    price_sub_content_3 = models.TextField(max_length=80, null=True, blank=True, verbose_name='Alt İçerik 3')
    price_sub_content_4 = models.TextField(max_length=80, null=True, blank=True, verbose_name='Alt İçerik 4')
    price_sub_content_5 = models.TextField(max_length=80, null=True, blank=True, verbose_name='Alt İçerik 5')
    price_created_at = models.DateTimeField(auto_now_add=True, verbose_name='Oluşturulma Tarihi')

    def __str__(self):
        return 'Fiyat Tablo Adı: ' + self.price_title + ' - Fiyatı: ' + str(self.price_price)


# -Tum tablolari dogru duzgun bir sekilde ORM yapman lazim
