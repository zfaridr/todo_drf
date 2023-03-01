from django.db import models


class ToDo(models.Model):
    name = models.CharField(max_length=64)
    description = models.CharField(max_length=232)
    days = models.PositiveIntegerField()

class User(models.Model):
    username = models.CharField(max_length=32)
    firstname = models.CharField(max_length=32)
    lastname = models.CharField(max_length=32)
    email = models.EmailField(unique=True)