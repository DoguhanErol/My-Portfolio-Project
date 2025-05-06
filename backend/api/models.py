from django.db import models
from django.utils import timezone


# -Create your models here.


# for all pages, global data models


class Contact(models.Model):
    contact_id = models.CharField(
        primary_key=True, max_length=40, unique=True)  # exm:linkedin
    contact_title = models.CharField(
        max_length=200, null=False)  # exm:Linkedin
    contact_info = models.CharField(
        max_length=300, null=False)  # exm:www.linkedin/de.com
    contact_created_at = models.DateTimeField(auto_now_add=True)


# projects page data models


class Project(models.Model):
    project_id = models.AutoField(primary_key=True)
    project_name = models.CharField(max_length=100, null=False)
    project_type = models.CharField(max_length=100, null=False)
    project_budget = models.CharField(max_length=100, null=True)
    project_delivery_date = models.CharField(
        max_length=20, null=True)  # 01.01.2001
    project_frontend_tecnologies = models.CharField(max_length=200, null=True)
    project_backend_tecnologies = models.CharField(max_length=200, null=True)
    project_live_url = models.CharField(max_length=150, null=True)
    project_github_url = models.CharField(max_length=150, null=True)
    project_details = models.TextField(max_length=400, null=True)
    project_image_path = models.ImageField(
        upload_to='projects/', null=True)
    project_created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Proje Adı:  ' + self.project_name


# about me page data models


class Education(models.Model):
    education_id = models.AutoField(primary_key=True)
    education_school_name = models.CharField(max_length=75, null=False)
    education_date = models.CharField(max_length=20, null=True)  # 01.01.2001
    education_title = models.CharField(max_length=50, null=False)
    education_created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Okul Adı: ' + self.education_school_name


class Certificate(models.Model):
    certificate_id = models.AutoField(primary_key=True)
    certificate_school_name = models.CharField(max_length=75, null=False)
    certificate_date = models.CharField(
        max_length=20, null=True)  # 01.01.2001
    certificate_title = models.CharField(max_length=50, null=False)
    certificate_created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Sertifika Adı: ' + self.certificate_title


# -Primary


class Table(models.Model):
    table_id = models.CharField(max_length=40, primary_key=True)
    table_title = models.CharField(max_length=60, null=False)
    table_created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Tablo Basliğı:' + self.table_title

# -Foreign


class TableContent(models.Model):
    content_id = models.AutoField(primary_key=True)
    table_id = models.ForeignKey(
        Table, on_delete=models.CASCADE, null=False)
    content_left_text = models.TextField(max_length=40, null=False)
    content_right_text = models.TextField(null=True)
    table_content_created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.table_id) + '  -  ' + 'Sütün:' + str(self.content_left_text)

    # Diğer alanları burada tanımlayabilirsiniz


# Gallery Page Data models


class GalleryImage(models.Model):
    image_id = models.AutoField(primary_key=True)
    image_location = models.CharField(max_length=100, null=True)
    image_name = models.CharField(max_length=100, null=False, blank=True)
    image_content = models.TextField(null=True, blank=True, default=None)
    image_path = models.ImageField(upload_to='gallery/', null=False)
    image_created_at = models.DateTimeField(auto_now_add=True)

    # image_data_add_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Resim Başlığı: ' + self.image_name

# Cv- Bu kisimi daha sonra hallet

# Mail Data Model


class ElectronicMail(models.Model):
    mail_id = models.AutoField(primary_key=True)
    mail_first_name = models.CharField(max_length=50, null=False)
    mail_last_name = models.CharField(max_length=50, null=False)
    mail_address = models.CharField(max_length=100, null=False)
    mail_message = models.TextField(max_length=500, null=False)
    mail_created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Gönderen: ' + self.mail_first_name + '  ' + self.mail_last_name

# Prices Data Model


class Price(models.Model):
    PRICE_TYPES = [
        ('ucuz', 'En Ucuz'),
        ('popiler', 'En Popüler'),
        ('normal', 'Normal'),
    ]

    price_id = models.AutoField(primary_key=True)
    price_title = models.CharField(max_length=80, null=False)
    price_type = models.CharField(
        max_length=7, choices=PRICE_TYPES, default='normal')
    price_price = models.IntegerField(null=False)
    price_sub_content_1 = models.TextField(
        max_length=80, null=True, blank=True)
    price_sub_content_2 = models.TextField(
        max_length=80, null=True, blank=True)
    price_sub_content_3 = models.TextField(
        max_length=80, null=True, blank=True)
    price_sub_content_4 = models.TextField(
        max_length=80, null=True, blank=True)
    price_sub_content_5 = models.TextField(
        max_length=80, null=True, blank=True)
    price_created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):

        return 'Fiyat Tablo Adı: ' + self.price_title + ' - Fiyatı: ' + str(self.price_price)

# -Tum tablolari dogru duzgun bir sekilde ORM yapman lazim
