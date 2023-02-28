from rest_framework.viewsets import ModelViewSet
from .models import ToDo, User
from .serializers import ToDoModelSerializer, UserModelSerializer

class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer

class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

# Create your views here.
