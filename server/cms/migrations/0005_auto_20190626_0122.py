# Generated by Django 2.1 on 2019-06-26 01:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0004_auto_20190616_2047'),
    ]

    operations = [
        migrations.RenameField(
            model_name='step',
            old_name='strategy_field_3_cn',
            new_name='strategy_cons_cn',
        ),
        migrations.RenameField(
            model_name='step',
            old_name='strategy_field_3_en',
            new_name='strategy_cons_en',
        ),
        migrations.RenameField(
            model_name='step',
            old_name='strategy_field_3_es',
            new_name='strategy_cons_es',
        ),
        migrations.RenameField(
            model_name='step',
            old_name='strategy_field_1_cn',
            new_name='strategy_description_cn',
        ),
        migrations.RenameField(
            model_name='step',
            old_name='strategy_field_1_en',
            new_name='strategy_description_en',
        ),
        migrations.RenameField(
            model_name='step',
            old_name='strategy_field_1_es',
            new_name='strategy_description_es',
        ),
        migrations.RenameField(
            model_name='step',
            old_name='strategy_field_2_cn',
            new_name='strategy_pros_cn',
        ),
        migrations.RenameField(
            model_name='step',
            old_name='strategy_field_2_en',
            new_name='strategy_pros_en',
        ),
        migrations.RenameField(
            model_name='step',
            old_name='strategy_field_2_es',
            new_name='strategy_pros_es',
        ),
    ]
