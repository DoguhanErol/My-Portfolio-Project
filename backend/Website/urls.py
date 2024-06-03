from django.urls import path
from .views import *

urlpatterns = [
    path('projects/', ProjectInfoList.as_view(), name='project-list'),
    path('projects/<int:pk>/', ProjectById.as_view(), name='project-detail'),
     path('projects/<int:pk>/images/', ProjectImages.as_view(), name='project_images'),


     path('techstackcategories/', TechStackCategories.as_view(), name='tech-stack-categories'),
     path('techstacks/<int:fk>/', TechStackByCategoryId.as_view(), name='tech-stacks'),


    path('educations/', EducationInfoList.as_view(), name='education-list'),
    path('certificates/', CertificateInfoList.as_view(),
         name='certificate-list'),
    path('tables/', TableList.as_view(), name='table-list'),
    path('tablecontents/', TableContentList.as_view(),
         name='tablecontent-list'),
    path('tablecontents/<str:table_id>', TableContentListId.as_view(),
         name='tablecontent-list'),
#     path('mail/', ElectronicMail.as_view(), name='mail_create'),
    path('images/', ImageList.as_view(), name='image-list'),
    path('prices/', PricesList.as_view(), name='prices-list'),
    path('cvinfo/', CvInformationList.as_view(), name='cv-information'),
    # Diğer URL yönlendirmelerinizi buraya ekleyebilirsiniz.
]
