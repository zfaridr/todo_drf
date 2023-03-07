"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from todo.views import ToDoModelViewSet, UserModelViewSet, ProjectModelViewSet

router = DefaultRouter()
# filter_router = DefaultRouter()
# filter_router.register('param', UserModelViewSet)
# filter_router.register('param', ProjectModelViewSet)
# filter_router.register('param', ToDoModelViewSet)
router.register('todo', ToDoModelViewSet)
router.register('user', UserModelViewSet)
router.register('project', ProjectModelViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    # path('filters/', include(filter_router.urls)),
]
