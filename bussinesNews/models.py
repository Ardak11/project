from django.db import models

# Create your models here.
class News(models.Model):
    name=models.CharField(max_length=30)
    price = models.IntegerField()
    description = models.CharField(null=True, default="Добавь описание")
    created = models.DateTimeField(auto_created=True)
