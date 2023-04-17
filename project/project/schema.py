import graphene
from graphene_django import DjangoObjectType
from todo.models import User, Project, ToDo

class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'

class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'

class Query(graphene.ObjectType):
    all_todo = graphene.List(ToDoType)
    all_user = graphene.List(UserType)
        
    def resolve_all_todo(root, info):
        return ToDo.objects.all()


    def resolve_all_user(root, info):
        return User.objects.all()

schema = graphene.Schema(query=Query)



