import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import UserModelViewSet, ProjectModelViewSet, ToDoModelViewSet
from .models import User, Project, ToDo

class TestUserViewSet(TestCase):
    def test_get_todol_ist(self):
        factory = APIRequestFactory()
        request = factory.get('/api/todo/')
        view = ToDoModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_todo(self):
        factory = APIRequestFactory()
        request = factory.post('/api/user/', {'name': 'samplename',
        'discription': 'sample', 'days': 3, 'todousername': 'samplename', 'todoproject': 'sampleproject'}, format='json')
        view = ToDoModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_detail(self):
        user = User.objects.create(username='Sampleuser', firstname='sample', lastname = 'sample', email='email')
        client = APIClient()
        response = client.get(f'/api/user/{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

