from django_filters import rest_framework as filters
from .models import User, Project, ToDo

class UserFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = User
        fields = ['username', 'firstname', 'lastname']

class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']

class ToDoFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = ToDo
        fields = ['todoproject', 'todousername']