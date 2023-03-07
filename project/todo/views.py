from rest_framework.viewsets import ModelViewSet
from .models import ToDo, User, Project
from .serializers import ToDoModelSerializer, UserModelSerializer, ProjectModelSerializer
from .filters import UserFilter, ToDoFilter, ProjectFilter
import django_filters.rest_framework
from rest_framework import generics

class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    
    # def get_queryset(self):
    #     name = self.request.query_params.get('name', '')
    #     users = User.objects.all()
    #     if name:
    #         users = users.filter(name__contains=name)
    #     return users

class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]

    # def get_queryset(self):
    #     name = self.request.query_params.get('name', '')
    #     projects = Project.objects.all()
    #     if name:
    #         projects = projects.filter(name__contains=name)
    #     return projects

class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    
    # def get_queryset(self):
    #     name = self.request.query_params.get('name', '')
    #     todos = ToDo.objects.all()
    #     if name:
    #         todos = todos.filter(name__contains=name)
    #     return todos


# Create your views here.
