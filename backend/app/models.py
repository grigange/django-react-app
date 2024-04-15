from django.db import models

# Create your models here.

class Stock(models.Model):
    title=models.CharField(max_length=25)
    short=models.CharField(max_length=5)
    price=models.FloatField(default=0)
    closePrice=models.FloatField(default=0)

    def __str__(self) -> str:
        return self.title

