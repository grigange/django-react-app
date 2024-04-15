
# import serializers from the REST framework
from rest_framework import serializers
 
# import the todo data model
from .models import Stock
 
# create a serializer class
class StockSerializer(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = Stock
        fields = ('id', 'title','short','price','closePrice')