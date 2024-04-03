from django.contrib import admin
from .models import *

class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ['image_id', 'image_path', 'image_created_at']

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('project_name', 'project_budget', 'project_type')
    search_fields = ('project_name',)

class ProjectImagesAdmin(admin.ModelAdmin):
    list_display = ('project','image', 'created_at')
    list_filter = ('project', 'created_at')
    search_fields = ('project','image', 'created_at')

class PriceAdmin(admin.ModelAdmin):
    list_display = ('price_title', 'price_type', 'price_price')
    list_filter = ('price_type',)
    search_fields = ('price_title','price_type', 'price_price')

class CertificateAdmin(admin.ModelAdmin):
    list_display = ('certificate_school_name', 'certificate_title', 'certificate_created_at')

class EducationAdmin(admin.ModelAdmin):
    list_display = ('education_school_name', 'education_title', 'education_created_at')

class TableContentAdmin(admin.ModelAdmin):
    list_display = ('content_left_text', 'content_right_text', 'table_content_created_at')

class TableAdmin(admin.ModelAdmin):
    list_display = ('table_title', 'table_created_at')

class TechStackCategoryAdmin(admin.ModelAdmin):
    list_display = ('tech_stack_category_id', 'tech_stack_category_title')

admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectImage,ProjectImagesAdmin)
admin.site.register(Education, EducationAdmin)
admin.site.register(Certificate,CertificateAdmin)
admin.site.register(Table,TableAdmin)
admin.site.register(TableContent,TableContentAdmin)
admin.site.register(GalleryImage, GalleryImageAdmin)
admin.site.register(ElectronicMail)
admin.site.register(Price, PriceAdmin)
admin.site.register(TechStackCategory, TechStackCategoryAdmin)


# Register your models here.
