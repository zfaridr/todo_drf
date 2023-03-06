from rest_framework.viewsets import ModelViewSet
from .models import ToDo, User, Project
from .serializers import ToDoModelSerializer, UserModelSerializer, ProjectModelSerializer

class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer

class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer


# Create your views here.
