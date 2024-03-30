from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.filters import SearchFilter
from django.shortcuts import get_object_or_404
from .models import *
from .serializers import *


class ContactInfoList(APIView):
    def get(self, request):
        contacts = Contact.objects.all()
        serializer = ContactInfoSerializer(contacts, many=True)

        return Response(serializer.data)


class ProjectInfoList(APIView):
    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectInfoSerializer(projects, many=True)
        return Response(serializer.data)


class ProjectInfoDetail(APIView):
    def get(self, request, pk):
        project = get_object_or_404(
            Project, pk=pk)
        serializer = ProjectInfoSerializer(project)
        return Response(serializer.data)


class EducationInfoList(APIView):
    def get(self, request):
        educations = Education.objects.all()
        serializer = EducationInfoSerializer(educations, many=True)
        return Response(serializer.data)


class CertificateInfoList(APIView):
    def get(self, request):
        certificates = Certificate.objects.all()
        serializer = CertificateInfoSerializer(certificates, many=True)
        return Response(serializer.data)


class TableList(APIView):
    def get(self, request):
        tables = Table.objects.all()
        serializer = TableSerializer(tables, many=True)
        return Response(serializer.data)


class TableContentList(APIView):
    def get(self, request):
        table_contents = TableContent.objects.all()
        serializer = TableContentSerializer(table_contents, many=True)
        return Response(serializer.data)


class TableContentListId(APIView):
    def get(self, request, table_id):
        table_contents = TableContent.objects.filter(
            table_id=table_id)
        serializer = TableContentSerializer(table_contents, many=True)
        return Response(serializer.data)


class ImageList(APIView):
    def get(self, request):
        images = GalleryImage.objects.all()
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)


# class ElectronicMail(APIView):
#     def post(self, request):
#         mail_data = request.data
#         serializer = MailSerializer(data=mail_data)

#         if serializer.is_valid():
#             electronic_mail = serializer.save()
#             MailHandler.send_mail_to_client(electronic_mail)
#             return Response({'message': 'E-posta gönderildi.'}, status=status.HTTP_201_CREATED)
#         else:
#             return Response({'error': 'Eksik veya hatalı veri.'}, status=status.HTTP_400_BAD_REQUEST)


class PricesList(APIView):
    def get(self, request):
        price = Price.objects.all()
        serializer = PricesSerializer(price, many=True)
        return Response(serializer.data)
