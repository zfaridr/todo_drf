# Generated by Django 4.1.7 on 2023-03-01 13:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='discription',
            new_name='description',
        ),
    ]
