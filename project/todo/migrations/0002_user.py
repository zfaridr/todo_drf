# Generated by Django 4.1.7 on 2023-02-28 06:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=32)),
                ('firstname', models.CharField(max_length=32)),
                ('lastname', models.CharField(max_length=32)),
                ('email', models.EmailField(max_length=254, unique=True)),
            ],
        ),
    ]
