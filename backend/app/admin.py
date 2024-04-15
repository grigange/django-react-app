from django.contrib import admin

# Register your models here.
# import the model Todo
from .models import Stock
 
# create a class for the admin-model integration
class StockAdmin(admin.ModelAdmin):
 
    # add the fields of the model here
    list_display = ("title","short","price","closePrice")
 
# we will need to register the
# model class and the Admin model class
# using the register() method
# of admin.site class
admin.site.register(Stock,StockAdmin)