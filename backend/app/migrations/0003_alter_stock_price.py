# Generated by Django 4.2.6 on 2023-10-31 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_stock_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stock',
            name='price',
            field=models.FloatField(default=0),
        ),
    ]
