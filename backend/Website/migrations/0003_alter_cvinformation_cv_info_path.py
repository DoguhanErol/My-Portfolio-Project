# Generated by Django 3.2 on 2024-06-03 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Website', '0002_cvinformation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cvinformation',
            name='cv_info_path',
            field=models.CharField(max_length=500, verbose_name='Cv Linki'),
        ),
    ]