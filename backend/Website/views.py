from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.filters import SearchFilter
from rest_framework.pagination import PageNumberPagination

from django.shortcuts import get_object_or_404
from .models import *
from .serializers import *


class ProjectInfoList(APIView):
    def get(self, request):
        try:
            projects = Project.objects.all()
            serializer = ProjectInfoSerializer(projects, many=True)
            return Response(serializer.data)
        except Project.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class ProjectById(APIView):
    def get(self, request, pk):
        try:
            project = get_object_or_404(Project, pk=pk)
            project_images = ProjectImage.objects.filter(project_id=pk)
            project_data = {
                'project': ProjectInfoSerializer(project).data,
                'images': ProjectImageSerializer(project_images, many=True).data
            }
            return Response(project_data)
        except Project.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class ProjectImages(APIView):
    def get(self, request, pk):
        try:
            project_images = ProjectImage.objects.filter(project_id=pk)
            serializer = ProjectImageSerializer(project_images, many=True)
            return Response(serializer.data)
        except ProjectImage.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class EducationInfoList(APIView):
    def get(self, request):
        try:
            educations = Education.objects.all()
            serializer = EducationInfoSerializer(educations, many=True)
            return Response(serializer.data)
        except Education.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class CertificateInfoList(APIView):
    def get(self, request):
        try:
            certificates = Certificate.objects.all()
            serializer = CertificateInfoSerializer(certificates, many=True)
            return Response(serializer.data)
        except Certificate.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class TableList(APIView):
    def get(self, request):
        try:
            tables = Table.objects.all()
            serializer = TableSerializer(tables, many=True)
            return Response(serializer.data)
        except Table.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class TableContentList(APIView):
    def get(self, request):
        try:
            table_contents = TableContent.objects.all()
            serializer = TableContentSerializer(table_contents, many=True)
            return Response(serializer.data)
        except TableContent.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class TableContentListId(APIView):
    def get(self, request, table_id):
        try:
            table_contents = TableContent.objects.filter(table_id=table_id)
            serializer = TableContentSerializer(table_contents, many=True)
            return Response(serializer.data)
        except TableContent.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class ImageList(APIView):
    def get(self, request):
        try:
            images = GalleryImage.objects.all()
            paginator = PageNumberPagination()
            paginator.page_size = 9
            result_page = paginator.paginate_queryset(images, request)
            serializer = ImageSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        except GalleryImage.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        



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
        try:
            prices = Price.objects.all()
            serializer = PricesSerializer(prices, many=True)
            return Response(serializer.data)
        except Price.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class TechStackCategories(APIView):
    def get(self, request):
        try:
            techstackcategories = TechStackCategory.objects.all()
            serializer = TechStackCategoriesSerializer(techstackcategories, many=True)
            return Response(serializer.data)
        except TechStackCategory.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class TechStackByCategoryId(APIView):
    def get(self, request, fk):
        try:
            if fk:
                tech_stacks = TechStack.objects.filter(tech_stack_category_id=fk)
                print(tech_stacks)
                serializer = TechStackSerializer(tech_stacks, many=True)
                print(serializer.data)
                return Response(serializer.data)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)  # Eğer kategori ID'si verilmediyse, hata döndür
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)  # Herhangi bir hata durumunda 500 hatası döndür

class CvInformationList(APIView):
    def get(self, request):
        try:
            cv_informations = CvInformation.objects.all()
            serializer = CvInformationSerializer(cv_informations, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except CvInformation.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response(str(e),status=status.HTTP_500_INTERNAL_SERVER_ERROR)
class CvInformationByLangList(APIView):
    def get(self,request,language:str):
        try:
            cv_info_by_lang = CvInformation.objects.filter(cv_info_lang = language)
            serializer = CvInformationSerializer(cv_info_by_lang, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        except CvInformation.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response(str(e),status=status.HTTP_500_INTERNAL_SERVER_ERROR)
