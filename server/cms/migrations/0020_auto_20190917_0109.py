# Generated by Django 2.1 on 2019-09-17 01:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0019_auto_20190917_0008'),
    ]

    operations = [
        migrations.AddField(
            model_name='step',
            name='private_field_4',
            field=models.CharField(blank=True, max_length=1024, null=True, verbose_name='Private field 4'),
        ),
        migrations.AddField(
            model_name='step',
            name='private_field_4_meta_description',
            field=models.CharField(blank=True, max_length=128, null=True, verbose_name='Private field 4 Meta Description'),
        ),
    ]
