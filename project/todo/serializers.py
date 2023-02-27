from rest_framework.serializers import HyperlinkedModelSerializer
from .models import ToDo

class ToDoModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = ToDo
        fields = '__all__'