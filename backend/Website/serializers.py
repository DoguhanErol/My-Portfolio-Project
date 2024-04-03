from rest_framework import serializers, viewsets
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.core.mail import send_mail
from django.conf import settings
from .models import *



# Projects
class ProjectInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class ProjectInfoViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectInfoSerializer
    ordering = [Project.project_created_at]

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = '__all__'

# Educations
class EducationInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'


class EducationInfoViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationInfoSerializer
    ordering = [Education.education_created_at]


# Certifications
class CertificateInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields = '__all__'


class CertificateInfoViewSet(viewsets.ModelViewSet):
    queryset = Certificate.objects.all()
    serializer_class = CertificateInfoSerializer
    ordering = [Certificate.certificate_date]


# Tables
class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = '__all__'


class TableViewSet(viewsets.ModelViewSet):
    queryset = Table.objects.all()
    serializer_class = TableSerializer
    ordering = [Table.table_created_at]


# Table Content
class TableContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = TableContent
        fields = '__all__'


class TableContentViewSet(viewsets.ModelViewSet):
    queryset = TableContent.objects.all()
    serializer_class = TableContentSerializer
    ordering = [TableContent.table_content_created_at]


# Article
class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = TableContent
        fields = '__all__'


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = TableContent.objects.all()
    serializer_class = ArticleSerializer
    ordering = [TableContent.table_content_created_at]


# Gallery images
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = '__all__'


class ImageViewSet(viewsets.ModelViewSet):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImage
    ordering = [GalleryImage.image_created_at]


# Mail
class MailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElectronicMail
        fields = '__all__'


class MailViewSet(viewsets.ModelViewSet):
    queryset = ElectronicMail.objects.all()
    serializer_class = MailSerializer
    ordering = [ElectronicMail.mail_created_at]


# Prices
class PricesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = '__all__'


class PricesViewSet(viewsets.ModelViewSet):
    queryset = Price.objects.all()
    serializer_class = PricesSerializer
    ordering = [Price.price_created_at]



#Tech Stack
class TechStackCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechStackCategory
        fields = '__all__'
