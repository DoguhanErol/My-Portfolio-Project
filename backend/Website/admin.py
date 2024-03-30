from django.contrib import admin
from .models import *

class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ['image_id', 'image_path', 'image_created_at']


admin.site.register(Contact)
admin.site.register(Project)
admin.site.register(Education)
admin.site.register(Certificate)
admin.site.register(Table)
admin.site.register(TableContent)
admin.site.register(GalleryImage, GalleryImageAdmin)
admin.site.register(ElectronicMail)
admin.site.register(Price)


# Register your models here.
