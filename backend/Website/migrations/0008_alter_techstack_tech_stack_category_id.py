# Generated by Django 3.2 on 2024-04-04 09:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Website', '0007_rename_tech_stack_category_techstack_tech_stack_category_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='techstack',
            name='tech_stack_category_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Website.techstackcategory', verbose_name='Kategorisi'),
        ),
    ]
