# Generated by Django 3.2 on 2024-03-30 12:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Website', '0002_auto_20240309_2019'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(null=True, upload_to='projects/', verbose_name='Resim Yolu')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Oluşturulma Tarihi')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='Website.project')),
            ],
            options={
                'verbose_name': 'Proje Resmi',
                'verbose_name_plural': 'Proje Resimleri',
            },
        ),
    ]
