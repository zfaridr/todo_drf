from django.db import models


class ToDo(models.Model):
    name = models.CharField(max_length=64)
    discription = models.CharField(max_length=232)
    days = models.PositiveIntegerField()